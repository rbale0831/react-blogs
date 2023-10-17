pipeline {
    agent any
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
                bat "npm install"
                bat "npm start"
            }
        }
        
    }
}