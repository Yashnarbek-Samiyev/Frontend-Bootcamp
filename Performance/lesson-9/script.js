// console.time("Test");
// console.log("Hello!");
// console.error("Error!");
// console.warn("Warning!");
// console.info("Information!");
// console.table(["Ali","Vali","Jamila"]);
// console.timeEnd("Test");

// var x=200;
// var y;
// x==100 ?(y="Yes"):(y="No");
// document.write(y);


// var day=1;
// switch (day) {
//        case 1:
//         document.write("Today is Monday!")
        
//         break;
//         case 2: document.write("Today is Tuesday!");
        
//         break;
//         case 3: document.write("Today is Wednesday");
        
//         break;
//         case 4: document.write("Today is Thursday! ");
        
//         break;
//         case 5: document.write("Today is Friday!");
        
//         break;
//         case 6: document.write("Today is Friday!");
//         break;
//         case 7: document.write("Sunday");
//     default:
//         break;
// }

//  for(var i=0;i<=10;i++){
//     if(i==7){
//         document.write(i);
//         // continue;
//         break;

//     }
//     document.write(i);
//  }

// var hello="Hello!";
// document.write(typeof hello);



// var a=confirm("May I help you? Do you want to close the window!");
// if(a){
//  var b=  prompt("Let's see!");
//  document.write(b);

// }else{
//     alert("Bad");
// }

// function fun() {
//     alert("Hello!");
    
// }
// fun();


// var a=1;
// while(a<=10){
//     document.write("Hello man! <br>");
//     a++;

// }
// var a=1;
// do {
//     document.write("Hello World! <hr>");
//     a++;

// } while (a<=10);


// for(var i=1; i<=100; i=i+10){
//     for(var j=i; j<=i+10; j++){
//         document.write(j+" <br>");
//     }
//     document.write("<br>");
// }

    // var a=["Hi","Hello"];
    // var b=[1,2];
    // var c=a.concat(b);
    // document.write(c);
    // var d=Array.isArray(b);
    // document.write(d);
    // var b=a.indexOf("Hello");
    // alert(b)





    // var a=["A","B","C","D","G"];
    // var b=[1,23,4,5,6,67];

    // a.forEach(loop);
    // function loop(value,index) {
    //     document.write(index+") "+value+"<br>")
    //   }


    //   b.toString();
    //   document.write((b))
//    var c= a.fill("Hi");
//    alert(c);
// var d=a.includes("A");
// alert(d);

    
var a=[12,3,"Hello",89];
document.write(a+"<br>");
// var b=a.some(fun);
// var b=a.every(fun);
// var b=a.find(fun);
// var b=a.findIndex(fun);
var b=a.filter(fun);



document.write(b)
function fun(age){
    return age>=10;

}

