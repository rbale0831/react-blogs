pipeline {
    agent any

    environment{
        SCANNER_HOME= tool 'sonarqubescanner'
    }

    parameters {
        choice(
            name:"BRANCHES", 
            choices: ['main'], 
            description: "Do a Git Checkout to this Branches Name"
        )
	}

    tools {
        nodejs "node"
    }

    stages {
        stage('Clean Workspace') {
            steps {
                cleanWs()
            }
        }

        stage('Checkout from SCM') {
            steps {
                git branch: 'main', credentialsId: 'github', url: 'https://github.com/rbale3108/blog_website.git'
            }
        }

        stage('Bulid') {
            steps {
                script {
                    sh "npm cache clean --force"
                    sh "npm install --force"
                    sh "npm install serve --force --save-dev"
                    sh "npm install sonarqube-scanner --force --save-dev"
                    sh "npm run build --force"
                }
            }
        }

        stage("SonarQube Test"){
            steps{
                script {
                    withSonarQubeEnv('sonarqubeserver'){
                        sh "sonar-scanner -Dsonar.host.url=${SONAR_HOST_URL} -Dsonar.login=${SONAR_AUTH_TOKEN} -Dsonar.projectName=React-blogs -Dsonar.ProjectVersion=1.0 -Dsonar.projectKey=React-blogs -Dsonar.java.binaries=/usr/lib/jvm/java-11-openjdk/libs -Dsonar.exclusions=build/** -Dsonar.sources=."
                    }
                }
            }
        }

        stage('Deployment') {
			steps {
				script {
					sh "npx json-server -p 8000 --watch .\data\db.json > data.log 2>&1 & "
					sleep(time: 10, unit: 'SECONDS')
					sh "(PORT=3002 nohup npx serve -s build > serve.log 2>&1 &) > react.log 2>&1 & "
					sleep(time: 10, unit: 'SECONDS')
				}
			}
		}
    }
    post {
        always {
            script {
                def username = currentBuild.rawBuild.getCauses()[0]?.getUserName() ?: "DefaultUsername"
                def buildStartTime = currentBuild.rawBuild.getTime()
                def status = currentBuild.currentResult ?:'UNKNOWN'
				def color
				
				switch (status) {
					case 'SUCCESS':
						color = 'good'
						break
					case 'FAILURE':
						color = 'danger'
						break
					default:
						color = 'warning'
				}

                slackSend(
					channel: 'jenkins-deployments',
					color: color,
					message: "Update Deployment for \n JOB Name: ${env.JOB_NAME} \n Build start by: ${username} \n Status: ${status.toLowerCase()} \n Build No: ${env.BUILD_NUMBER} \n Git Branch: ${BRANCHES} \n Time: ${buildStartTime.format('dd-MM-yyyy HH:mm:ss')} \n More info at: ${env.BUILD_URL}",
					iconEmoji: ":jenkins:",
					username: username,
					timestamp: buildStartTime.format('dd-MM-yyyy HH:mm:ss')
				)                
            }
        }
    }
}