// till 23

// import { useState, useEffect } from 'react';

// const useFetch = (url) => {
//     const [data, setData] = useState(null);
//     const [isPending , setIsPending] = useState(true);
//     const [error, setError]  = useState(null);

//     useEffect(() => {
//         setTimeout(() => {
//             fetch(url)
//                 .then(res => {
//                     // console.log(res);
//                     if(!res.ok){
//                         throw Error('Data Not Found');
//                     };
//                     return res.json();
//                 })
//                 .then(data => {
//                     setData(data);
//                     setIsPending(false);
//                     setError(null);
//                 })
//                 .catch(err => {
//                     // console.log(err.message);
//                     setIsPending(false);
//                     setError(err.message);
//                 });
//         }, 1000);
//     },[url]);

//     return {data, isPending, error};
// }

// export default useFetch;

// from 24
import { useState, useEffect } from 'react';

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending , setIsPending] = useState(true);
    const [error, setError]  = useState(null);

    useEffect(() => {
        const abortCont = new AbortController();

        setTimeout(() => {
            fetch(url, { signal: abortCont.signal })
                .then(res => {
                    if(!res.ok){
                        throw Error('Data Not Found');
                    };
                    return res.json();
                })
                .then(data => {
                    setData(data);
                    setIsPending(false);
                    setError(null);
                })
                .catch(err => {
                    if (err.name === 'AbortError'){
                        console.log('Fetch Aborted');
                    } else{
                        setIsPending(false);
                        setError(err.message);
                    }
                });
        },);

        return () => abortCont.abort();
    },[url]);

    return {data, isPending, error};
};

export default useFetch;