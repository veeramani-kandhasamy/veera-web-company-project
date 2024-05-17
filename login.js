
const form = document.querySelector("#main");
const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const input3 = document.getElementById("input3");
const input4 = document.getElementById("input4");

form.addEventListener("submit", (event) => {
  if (!validation()) {
    event.preventDefault();
  }
});

function validation() {
  const name = input1.value.trim();
  const email = input2.value.trim();
  const password = input3.value.trim();
  const confirmPassword = input4.value.trim(); 
  let y=true;
 

 if (name=== "") {
    y= false;
    seterror(input1, "plz enter your sweet name");
   
    

  } else {
    setsuccess(input1);
  }
if (email === "") {
    y= false;
    seterror(input2, "plz fill the email");
} else if (!validateEmail(email)) {
    y= false;
    seterror(input2, "invalid email format");
   
  } else {
    setsuccess(input2);
  }

  if (password === "") {
    y= false;
    seterror(input3, "plz fill the password");
  } 
 else if(password.length<8){
     y= false;
    seterror(input3, "password must be 8 character");
 }

  else {
    setsuccess(input3);
  }

  if (confirmPassword === "") {
    y= false;
    seterror(input4, "plz fill this conform password");}

 else if(password !==confirmPassword){
  y= false;
    seterror(input4, "password not match");
 }
    
  else {
    setsuccess(input4);
  }

  return y;
}

function seterror(element, msg) {
  const parent = element.parentElement;
  const messageelement = parent.querySelector(".error");
  messageelement.innerText = msg;
  parent.classList.add("red");
  parent.classList.remove("green");
  const stem=document.querySelector('.container');
  stem.style. border= " 1px solid red ";
 
  
  
  
}

function setsuccess(element) {
  let parent = element.parentElement;
  let messageelement = parent.querySelector(".error");
  messageelement.innerText = " ";
  parent.classList.add("green");
  parent.classList.remove("red");
  const stem=document.querySelector('.container');
  stem.style. border= " 1px solid green ";
}

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};
