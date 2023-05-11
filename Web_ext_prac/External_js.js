/* var v=1990
to initiate variable we use var or let keyword. var is global scope and let is local scope
console.log(v);

v="IARe"

console.log(v);


*/
// js conditional statements
/*
if (condition){
    true block;
} else{
    false block;
} */


/*
var day=1;
switch(day){
    case 1: console.log("Monday"); break;
    case 2: console.log("Tuesday"); break;
    case 3: console.log("Wednesday"); break;
    case 4: console.log("Thursday"); break;
    case 5: console.log("Friday"); break;
}
 */

//object is a data type
//objects are 2 types. one is class obj and other is regular obj which is created by {}
/*
var student={
    name:"Joh",
    age:29,
    address:"Delhi",
    phone:"5458754",
    subjects:["eng","maths","social"]
}
console.log(student.subjects[2]);
console.log(student.name) */

//Looping statements:For loop, While loop, Do-while loop, For-of loop, For-in loop
/*
for (var i=0; i<10; i++){
    console.log(i)
}
console.log("Finished",i)

for (let i=0; i<10; i++){
    console.log(i)
}
console.log("Finished",i) */

//for-of. can only be used on arrays

//var a=[10,45,"khbdf","bhdv"]
/* for (var i=0; i<a.length; i++){
    console.log(a[i])
}
 */

/* for (var value of a){
    console.log(value)
} */

//for-in

//BOM (Browser Object Model)

// window.navigator
// window.document
// window.location
// window.screen
// //storage
// window.localStorage
// window.sessionStorage

//Js creations
// var myform- document.getElementById("CustomForm")
// var input= document.createElement("input")
// input.type="email"
// input.className="form-control"
// input.placeholder="Enter email...."
// input.id="user_email"
//
// myform.appendChild(input)


var myForm = document.getElementById("customform");

var input = document.createElement("input");
input.type = "text";
input.className="form-control mt-2";
input.style="";
input.placeholder="enter name";
input.id="username";
myForm.appendChild(input);

var input2 = document.createElement("input");
input2.type = "email";
input2.className="form-control mt-2";
input2.placeholder="Enter email";
input2.id="email";
myForm.appendChild(input2);

var input3 = document.createElement("input");
input3.type="password";
input3.className="form-control mt-2";
input3.placeholder="enter password";
input3.id="password";
myForm.appendChild(input3);

var input4=document.createElement("input");
input4.type="date";
input4.className="form-control mt-2";
input4.placeholder="Enter date";
input4.id="DOB";
myForm.appendChild(input4);

var input5 = document.createElement("button")
input5.type="submit";
input5.placeholder="Submit"
input5.className="form-control mt-2";
input5.className="btn btn-primary mt-3";
input5.id="submit";
input5.innerText="Submit";
myForm.appendChild(input5);


input2.addEventListener("click",myfunc)

function validation{
  if(documnet.CustomForm.input.value==""){
    alert("please provide your name!");
    document.CustomForm.input.focus();
    return false;
  }
}

/* console.log(1);
console.log(2);
console.log(3);
console.log(4);

setTimeout(() {}, timeout);
 */

// const prm=new Promise(function(resolve, reject){
//     console.log("fetching data from datbase");
//     setTimeout(()=>{
//         resolve("got data from datbase");
//         reject("failed to fetch data from datbase");
//     } ,3000)
// })
// console.log(prm);
//
// prm.then(function(result){
//     console.log("in then method");
//     console.log(result)
// })
//
// prm.catch(function(error){
//     console.log("in catch method")
//     console.log(error)
// })

// function getUserData(){
//   const data = fetch('https://randomuser.me/api/');
//   data.then(function(res){
//     var.result = res.json()
//   result.then(function(userDetails){
//     console.log(userrDeatails);
//   })  })
//   data.catch(function(err){
//     console.log(err);
//   })
// }
// getUserData();

async function getUserData_V2(){
  const data = await fetch("");
  var result = await data.json('https://randomuser.me/api/')
  console.log(result);
}
getUserData_V2();
