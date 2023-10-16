// 1 to 4 

// import './App.css';

// function App() {

//   const title = 'Welcome to the new blog';
//   const likes = 50
//   // const person = { name:'yoshi', age:30 }
//   const link = "http://www.google.com"

//   return (
//     <div className="App">
//       <div className="content">
//         <h1>{ title }</h1>
//         <p>Liked {likes} times</p>
//         {/* <p> {person} </p> */}
//         <p>{10} </p>
//         <p>{"hello ninjas"} </p>
//         <p>{[1,2,3,4,5]} </p>
//         <p>{ Math.random() * 10 }</p>
//         <a href={link}>Google Site</a>
//       </div>
//     </div>
//   );
// }

// export default App;

// // 5 to 20
// import Navbar from './Navbar'
// import Home from './Home'

// function App() {
//   return (
//     <div className="App">
//       <Navbar />
//       <div className="content">
//         <Home />
//       </div>
//     </div>
//   );
// }

// export default App;



//  21 to
import Navbar from './Navbar'
import Home from './Home'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';
import Cards from './Cards';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/blogs/:id">
              <BlogDetails />
            </Route>
            <Route path="/cards">
              <Cards />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
