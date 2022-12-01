let icon = document.querySelector(".titel  i")
let ul= document.querySelector(" .titel ul")
icon.style.color="#ffff"
icon.onclick =function(){
ul.style.display ="inline-block"
}
let arrow = document.querySelector('.on ')
window.onscroll = function(){
 this.scrollY >= 1000 ?   arrow.classList.add("show") : arrow.classList.remove("show")
  
}
arrow.onclick = function(){
    window.scrollTo({
        top :0,
        behavior :"smooth" 
    })
}
let login = document.querySelector(".user .zn")

let form = document.querySelector(".loging")
console.log(form)
login.onclick = function(){
    form.style.display="block";
}
let close2 = document.querySelector(".loging .form span")
 
close2.onclick= function(){
    form.style.display="none"
}
let  userpassword = document.querySelector(".form .password")
console.log(typeof userpassword)
let useremail = document.querySelector(".form .Phone")

console.log(useremail)
document.forms[0].onsubmit = function(e){
    let pas = false
    let ph = false
    if(typeof userpassword ==="String"|| useremail.value.length == "11"){
        pas = true
        ph = true
    }
    if(pas == false || ph ==false){
        e.preventDefault()
    }

}
let h2 = document.querySelector(".first-ciass .container .fremwork  .active h2")
let h2img = document.querySelectorAll(".my_watch div h2") 

let close3 = document.querySelector(".first-ciass .container .fremwork  .input")
let spanShow =document.querySelector(".first-ciass .container .fremwork ")
let ShowImg =document.querySelector(".first-ciass .container .fremwork  .active div img   ")
let Showp =document.querySelector(".first-ciass .container .fremwork  .active div p strong ")
let ShowEGD =document.querySelector(".first-ciass .container .fremwork  .active div p span ")
// let namber = Math.round(parseFloat(clickp[i].innerHTML.slice(1,9)).toFixed(2) * 24 )

let ShowEm =document.querySelector(".first-ciass .container .fremwork  .active div p em")
console.log( ShowEGD.innerHTML)
let clickp = document.querySelectorAll(".my_watch div .star strong")

let click = document.querySelectorAll(".my_watch div img")

let click2 = document.querySelector(".my_watch  div")

//SLECT ELMENT::before
let click3 = document.querySelector(".first-ciass")

for(let i = 0 ; i <=click.length;i++ ){
    click[i].addEventListener("click", ()=>{
//show Elmantes form
spanShow.style.display = "block"
 //show Elmantes img
 ShowImg.src = click[i].src
// show Elmantes Quality
 ShowEm.innerHTML=click[i].alt

 ShowEGD.innerHTML= Math.round(parseFloat(clickp[i].innerHTML.slice(1,9)).toFixed(2) * 24 )
  //show Elmantes strong prince
 Showp.innerHTML=clickp[i].innerHTML
 //show Elmantes h2 function
 myfunctionh2(i)
 window.getComputedStyle(click3,'::before')
 click3.style.setProperty('--before','block')
    })
    close3.onclick = function () {
        spanShow.style.display="none"
       click3.style.setProperty('--before','none')
      }
}  
    


//show Elmantes h2 function
function myfunctionh2(i){
h2.innerHTML=h2img[i].innerHTML
}



///
