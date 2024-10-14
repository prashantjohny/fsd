function validate(){
    let un=document.getElementById('un').value;
    let pass=document.getElementById('pass').value;
    // alert(un);
    if(un=="admin" && pass=="admin"){
        document.getElementById("res").innerHTML="Login Success";
    }
    else{
        document.getElementById("res").innerHTML="Login Failed";

    }
    // let x=Number("12");
    // let str=Number("123");
    // let b=boolean(12);

    // document.write('12'+'3');
}
// let a=12;
// let b='12';
// console.log(a==b);
// console.log(a===b);

let a=(x,y)=>{
    console.log(x+y);
}
a(12,23);

let b=(x,y)=>{
    return(x+y);
}
let x=b(12,23);
console.log(x);

let say=()=>console.log("Hello");
say();
function display(){
let p1=document.querySelector("p");
p1.innerHTML="Result";
p1.style.backgroundColor="red";
}