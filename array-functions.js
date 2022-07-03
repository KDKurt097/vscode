

const users = [{
    name: "eray",
    age: 20
},
{
name: "mehmet",
age: 15
},
{
    name: "mehmet",
    age: 13
}

];


//push
// users.push("ayşe");
// users.push("fatma");

// console.log(users);


//map
// users.map((item)=> {
//     console.log(item);
// })

//find
// const result = users.find((item)=> item.name == 'mehmet' && item.age > 14);
// console.log(result);

//filter
// const filtered = users.filter((item)=> item.name == 'mehmet');
// console.log(filtered);


//some
//  const some = users.some((item)=> item.age == 11);
//  console.log(some);

//every
// const every = users.every((item) => item.age > 10);
// console.log(every);


//include
const meyveler= ['elma','armut','muz'];
const isInclude= meyveler.includes('muz');
console.log(isInclude);
