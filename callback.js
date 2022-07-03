// setTimeout(() => {
//     console.log("merhaba");
// }, 5000);

// setInterval(() => {
//  console.log("merhaba ben her saniye çalışıyorum..")   
// },1000);

// const sayHi = (cb) => {
//     cb();
// };

// sayHi(() => {
//     console.log("Hello");
// });

import fetch  from "node-fetch";
import axios from "axios";


// fetch('https://jsonplaceholder.typicode.com/users')
// .then((data) => data.json())
// .then((users) => {
//     console.log("USERS YUKLENDI")
//     fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(data => data.json()).then(posts => console.log(posts,"POSTLAR YUKENLDI"));
// });


// async function getData(){
// const {data:users} = await  axios('https://jsonplaceholder.typicode.com/users');

// const {data:post1}  = await axios('https://jsonplaceholder.typicode.com/posts/1');

// console.log("users",users);
// console.log("post1",post1);

// }
// getData()



const getUsers = (number) => {
    return new Promise(async (resolve,reject) =>{
        const {data} = await  axios('https://jsonplaceholder.typicode.com/users');
       resolve(data); 
   // reject("bir sorun oluştu");
    });
};

const getPosts = (post_id) => {
    return new Promise(async (resolve,reject) =>{
        const {data} = await  axios('https://jsonplaceholder.typicode.com/posts/' + post_id );
       resolve(data);
      // reject("bir sorun daha oluştu"); 
    });
};

// (async() => {
// try{
// const users = await getUsers();
// const post = await getPosts(1);

// console.log(users);
// console.log(post , "oldu");
// }
// catch(e){
// console.log(e);
// }

// })();

Promise.all([getUsers(),getPosts(1)])
.then(console.log)
.catch(console.log);


