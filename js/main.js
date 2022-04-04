let nav = document.querySelector(".nav");
let toggle = document.getElementById("nav");
let indecator = 0;
toggle.addEventListener("click",function(){
    if(indecator == 0){
        nav.style.display = "flex";
        indecator += 1;
    }else{
        nav.style.display = "none";
        indecator -= 1;
    }
})