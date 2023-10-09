// var a={
//     name:"John",
//     surname:"Adam",
//     age:67
// }
// console.log(a);

// var first=new Object();
// first.name="John";
// first.surname="Adam";
// first.age=98;
// console.log(first);


// var a={
//     firstname:"John",
//     lastname:"Adam",
//     age:34
// }
// for(var key in a){
//     document.write(a[key]+"<hr>")
// }



var a="JavaScript is great language tool <br>";
// var b=a.match(/t/g);
// var b=a.indexOf("i");
// var b=a.trim();
// var b=a.charAt(20);
// var b=a.charCodeAt(20);
// var b=a.split("a");
// var b=a.repeat(4);
// var b=a.slice(2);
// var b=a.endsWith(">");   


// var a="20202";
// var b=Number(a);
// var b=parseInt(a);
// var b=parseFloat(b);
// var b=isFinite(a);
// document.write(b);


// ========================Math Methods ======

// var a=Math.ceil(4.1777);
// var a=Math.floor(6.99);
// var a=Math.round(6.5);
// var a=Math.trunc(6.29);
// var a=Math.max(12,3,4,56,9);
// var a=Math.min(12,3,4,56,9);
// var a=Math.sqrt(81);
// var a=Math.cbrt(25);
// var a=Math.pow(2,5);
// var a=Math.ceil(Math.random()*10);
// var a=Math.PI;
// console.log(a);


// ============================Date methods===============
//  var a=new Date();
//  var b=a.getDate(); //day
//  var b=a.getFullYear(); //year
//  var b=a.getUTCHours(); //hour
//  var b=a.getMonth(); //moth
//  console.log(b);



// =====================DOM Methods ====================

var news;
// document.getElementById("header").addEventListener('click',fun);

// function fan(params){
//     document.getElementById("header").style.background="red";
// }

// document.getElementById("header").addEventListener("click",function(params){
//     document.getElementById("header").style.color="pink";
// })


// document.getElementById("header").addEventListener('click', function(){
//    var b= document.getElementById("header").classList.length("Hi","Hello");

// })
// var again=document.getElementById("header").classList.length;
// console.log(again);


// var element =document.createElement("h1");
// var element1 =document.createTextNode("Hola guys");

// var element2 =document.createComment("This is bad news!");
// element.appendChild(element1);
// document.getElementById("news").appendChild(element);
// var target=document.getElementById("news");
// target.insertBefore(element,target.childNodes[2]);
// console.log(element);
// console.log(target);
// console.log(element1);
// console.log(element2);

var element=document.createElement("h1");
var text=document.createTextNode("Meta Brains!");
element.appendChild(text);
