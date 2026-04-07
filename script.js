let btns1=document.querySelectorAll(".btns");
console.dir(btns1.length);
let btn1=document.querySelector("#btn1");
let box=document.querySelector("#mainbox");
let reset=document.querySelector("#reset");
let newG=document.querySelector("#newGame");
let winner1=document.querySelector(".winner");
winner1.style.visibility="hidden";
let userTurn=true;
btns1.forEach((btns)=>{
btns.addEventListener("click",()=>{
    btns.disabled=true;
    if(userTurn===true){
        btns.innerText="O";
        userTurn=false;
    }
    else{
        btns.innerText="X";
        userTurn=true;
    }
    win();
});
});

let gameArry=[
[0,1,2], 
[0,3,6],
[0,4,8], 
[1,4,7],
[2,5,8],
[2,4,6], 
[3,4,5], 
[6,7,8]];

const win=()=>{for (pattrn of gameArry){
 let win1= btns1[pattrn[0]].innerText;
  let win2=btns1[pattrn[1]].innerText;
  let win3=btns1[pattrn[2]].innerText;
  if(win1!=="" && win2!=="" && win3!==""){
if(win1===win2 && win2===win3){
winner1.innerText=`congratulation ${win1} is winner`;
winner1.classList.add("winerr");
winner1.style.visibility="visible";
winner1.style.display="flex"
box.style.display="none";
reset.style.visibility="hidden";
};
  }
  
}};
reset.addEventListener("click",()=>{
    btns1.forEach((btns)=>{
    btns.innerText="";
    btns.disabled=false;
    winner1.style.visibility="hidden";
    winner1.style.display="none"
})
box.style.display="flex";
});

newG.addEventListener("click",()=>{
    btns1.forEach((btns)=>{
    btns.innerText="";
    btns.disabled=false;
    winner1.style.visibility="hidden";
    winner1.style.display="none";
    reset.style.visibility="visible";
})
box.style.display="flex";
});
