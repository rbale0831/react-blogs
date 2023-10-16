// 7
// const Home = () => {

//     const handleClick = (e) => {
//         console.log('hello, devlopers', e);
//     };

//     const handleClickAgain= (name, e) => {
//         console.log('hello' + name, e.target);
//     }

//     return ( 
//         <div className="home">
//             <h2>Home Page</h2>
//             <button onClick={handleClick}>Click me</button>
//             <button onClick={(e) => handleClickAgain('mario', e)}>Click me again</button>
//         </div>
//      );
// }
 
// export default Home;

//8
// import { useState } from 'react';

// const Home = () => {

//     // let name =  'mario';
//     const [name, setName] =useState('mario');
//     const [age, setAge] = useState(25);

//     const handleClick = () => {
//         // name='luigi';
//         // console.log(name);
//         setName('luigi');
//         setAge(21);
//     };

//     return ( 
//         <div className="home">
//             <h2>Home Page</h2>
//             <p>{name} is { age } years old</p>
//             <button onClick={handleClick}>Click me</button>
//         </div>
//      );
// };
 
// export default Home;

// 10
// import { useState } from 'react';

// const Home = () => {

//     const [blogs, setBlogs] = useState([
//         { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
//         { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
//         { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
//     ]);

//     return ( 
//         <div className="home">
//           {blogs.map((blog)=> (
//               <div className="blog-preview" key={blog.id}>
//                   <h2>{blog.title}</h2>
//                   <p> Written by { blog.author } </p>
//               </div>
//           ))}
//         </div>
//      );
// };
 
// export default Home;

// 11
// import { useState } from 'react';
// import BlogList from './BlogList';

// const Home = () => {

//     const [blogs, setBlogs] = useState([
//         { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
//         { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
//         { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
//     ]);

//     return ( 
//         <div className="home">
//           <BlogList blogs={blogs} title="All Blogs!" />
//         </div>
//      );
// };
 
// export default Home;

// 12
// import { useState } from 'react';
// import BlogList from './BlogList';

// const Home = () => {

//     const [blogs, setBlogs] = useState([
//         { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
//         { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
//         { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
//     ]);

//     return ( 
//         <div className="home">
//           <BlogList blogs={blogs} title="All Blogs!" />
//           <BlogList blogs={blogs.filter((blog) => blog.author == 'mario')} title="Mario's blogs" />
//         </div>
//      );
// };
 
// export default Home;

// 13
// import { useState } from 'react';
// import BlogList from './BlogList';

// const Home = () => {

//     const [blogs, setBlogs] = useState([
//         { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
//         { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
//         { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
//     ]);

//     const handleDelete = (id) => {
//         const newblogs = blogs.filter(blog => blog.id != id);
//         setBlogs(newblogs);
//     }

//     return ( 
//         <div className="home">
//           <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete} />
//         </div>
//      );
// };

// export default Home;

// 14
// import { useState, useEffect } from 'react';
// import BlogList from './BlogList';

// const Home = () => {

//     const [blogs, setBlogs] = useState([
//         { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
//         { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
//         { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
//     ]);

//     const handleDelete = (id) => {
//         const newblogs = blogs.filter(blog => blog.id != id);
//         setBlogs(newblogs);
//     };

//     useEffect(() => {
//         console.log('use effect ran');
//         console.log(blogs);
//     });

//     return ( 
//         <div className="home">
//           <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete} />
//         </div>
//      );
// };

// export default Home;

// // 15
// import { useState, useEffect } from 'react';
// import BlogList from './BlogList';

// const Home = () => {

//     const [blogs, setBlogs] = useState([
//         { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
//         { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
//         { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
//     ]);

//     const [name, setName] = useState('kane');

//     const handleDelete = (id) => {
//         const newblogs = blogs.filter(blog => blog.id != id);
//         setBlogs(newblogs);
//     };

//     useEffect(() => {
//         console.log('use effect ran');
//         console.log(name);
//     },[name]);

//     return ( 
//         <div className="home">
//           <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete} />
//           <button onClick={() => setName('john')}>change name</button>
//           <p>{name}</p>
//         </div>
//      );
// };

// export default Home;


// 16
// import { useState, useEffect } from 'react';
// import BlogList from './BlogList';

// const Home = () => {

//     const [blogs, setBlogs] = useState([
//         { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
//         { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
//         { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
//     ]);

//     const [name, setName] = useState('kane');

//     const handleDelete = (id) => {
//         const newblogs = blogs.filter(blog => blog.id != id);
//         setBlogs(newblogs);
//     };

//     useEffect(() => {
//         console.log('use effect ran');
//         console.log(name);
//     },[name]);

//     return ( 
//         <div className="home">
//           <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete} />
//           <button onClick={() => setName('john')}>change name</button>
//           <p>{name}</p>
//         </div>
//      );
// };

// export default Home;

// 17_1
// import { useState, useEffect } from 'react';
// import BlogList from './BlogList';

// const Home = () => {

//     const [blogs, setBlogs] = useState(null);

//     const handleDelete = (id) => {
//         const newblogs = blogs.filter(blog => blog.id != id);
//         setBlogs(newblogs);
//     };

//     useEffect(() => {
//         fetch('http://localhost:8000/blogs')
//             .then(res => {
//                 return res.json();
//             })
//             .then(data => {
//                 setBlogs(data)
//             });
//     },[]);

//     return ( 
//         <div className="home">
//           {blogs && <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete} />}
//         </div>
//      );
// };

// export default Home;

// 17_2
// import { useState, useEffect } from 'react';
// import BlogList from './BlogList';

// const Home = () => {

//     const [blogs, setBlogs] = useState(null);


//     useEffect(() => {
//         fetch('http://localhost:8000/blogs')
//             .then(res => {
//                 return res.json();
//             })
//             .then(data => {
//                 setBlogs(data)
//             });
//     },[]);

//     return ( 
//         <div className="home">
//           {blogs && <BlogList blogs={blogs} title="All Blogs!" />}
//         </div>
//      );
// };

// export default Home;

// 18
// import { useState, useEffect } from 'react';
// import BlogList from './BlogList';

// const Home = () => {
//     const [blogs, setBlogs] = useState(null);
//     const [isPending , setIsPending] = useState(true);
//     const [error, setError]  = useState(null);


//     useEffect(() => {
//         setTimeout(() => {
//             fetch('http://localhost:8000/blogs')
//                 .then(res => {
//                     // console.log(res);
//                     if(!res.ok){
//                         throw Error('Data Not Found');
//                     };
//                     return res.json();
//                 })
//                 .then(data => {
//                     setBlogs(data);
//                     setIsPending(false);
//                     setError(null);
//                 })
//                 .catch(err => {
//                     // console.log(err.message);
//                     setIsPending(false);
//                     setError(err.message);
//                 });
//         }, 1000);
//     },[]);

//     return ( 
//         <div className="home">
//             {error && <div>{error}</div>}
//             {isPending && <div>Loading...</div> }
//           {blogs && <BlogList blogs={blogs} title="All Blogs!" />}
//         </div>
//      );
// };

// export default Home;

// // 19
// import { useState, useEffect } from 'react';
// import BlogList from './BlogList';

// const Home = () => {
//     const [blogs, setBlogs] = useState(null);
//     const [isPending , setIsPending] = useState(true);
//     const [error, setError]  = useState(null);


//     useEffect(() => {
//         setTimeout(() => {
//             fetch('http://localhost:8000/blogs')
//                 .then(res => {
//                     // console.log(res);
//                     if(!res.ok){
//                         throw Error('Data Not Found');
//                     };
//                     return res.json();
//                 })
//                 .then(data => {
//                     setBlogs(data);
//                     setIsPending(false);
//                     setError(null);
//                 })
//                 .catch(err => {
//                     // console.log(err.message);
//                     setIsPending(false);
//                     setError(err.message);
//                 });
//         }, 1000);
//     },[]);

//     return ( 
//         <div className="home">
//             {error && <div>{error}</div>}
//             {isPending && <div>Loading...</div> }
//           {blogs && <BlogList blogs={blogs} title="All Blogs!" />}
//         </div>
//      );
// };

// export default Home;

// 20
import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {
    const {data: blogs, isPending, error} = useFetch('http://localhost:8000/blogs')

    return ( 
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div> }
          {blogs && <BlogList blogs={blogs} title="All Blogs!" />}
          
        </div>
     );
};

export default Home;