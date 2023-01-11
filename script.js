'use strict';

let is_visible = false;
let iconEye = document.getElementById("see");
let input = document.querySelector(".input");
let check1 = document.querySelector(".check0");
let check2 = document.querySelector(".check1");
let check3 = document.querySelector(".check2");
let check4 = document.querySelector(".check3");
let check5 = document.querySelector(".check4");

let dot1 = document.querySelector(".check00");
let dot2 = document.querySelector(".check01");
let dot3 = document.querySelector(".check02");
let dot4 = document.querySelector(".check03");
let dot5 = document.querySelector(".check04");


function see(){
    if(is_visible){
        input.type = 'password';
        is_visible = false;
        iconEye.classList.add("fa-eye-slash");
        iconEye.classList.remove("fa-eye");
    }
    else{
        input.type = 'text';
        is_visible = true;
        iconEye.classList.remove("fa-eye-slash");
        iconEye.classList.add("fa-eye");
    }
}

input.addEventListener("input", () =>{
    if(input.value.length >= 8){
        check5.style.color = "green";
        dot5.classList.remove("fa-circle-dot");
        dot5.classList.add("fa-circle-check");
    }
    else{
        check5.style.color = "red";
        dot5.classList.add("fa-circle-dot");
        dot5.classList.remove("fa-circle-check");
    }
    if(input.value.match(/[0-9]/)){
        check3.style.color = "green";
        dot3.classList.remove("fa-circle-dot");
        dot3.classList.add("fa-circle-check");
    }
    else{
        check3.style.color = "red";
        dot3.classList.add("fa-circle-dot");
        dot3.classList.remove("fa-circle-check");
    }
    if(input.value.match(/[A-Z]/)){
        check2.style.color = "green";
        dot2.classList.remove("fa-circle-dot");
        dot2.classList.add("fa-circle-check");
    }
    else{
        check2.style.color = "red";
        dot2.classList.add("fa-circle-dot");
        dot2.classList.remove("fa-circle-check");
    }
    if(input.value.match(/[a-z]/)){
        check1.style.color = "green";
        dot1.classList.remove("fa-circle-dot");
        dot1.classList.add("fa-circle-check");
    }
    else{
        check1.style.color = "red";
        dot1.classList.add("fa-circle-dot");
        dot1.classList.remove("fa-circle-check");
    }
    if(input.value.match(/[!\@\#\$\%\^\&\*\(\)\_\-\+\=\?\>\<\,\.]/)){
        check4.style.color = "green";
        dot4.classList.remove("fa-circle-dot");
        dot4.classList.add("fa-circle-check");
    }
    else{
        check4.style.color = "red";
        dot4.classList.add("fa-circle-dot");
        dot4.classList.remove("fa-circle-check");
    }
})