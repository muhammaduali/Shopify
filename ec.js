var ham=document.querySelector(".toggle")
var side= document.querySelector(".side-nav")
var xmark= document.querySelector(".xmark")

ham.addEventListener("click",function(){
    side.style.left="0%";
})
xmark.addEventListener("click",function(){
    side.style.left="-300px";
})

// search

var pro_con=document.querySelector(".products")
var element = pro_con.querySelectorAll("div")

var inp=document.getElementById("se")
// nores
var nores=document.querySelector(".no-res")

// function search 
inp.addEventListener("keyup",function(event){
    var enter= event.target.value.toUpperCase()
    for (var i=0;i<element.length;i++){
        var pro_name = element[i].querySelector("p").textContent
        if (pro_name.toUpperCase().indexOf(enter)< 0)
        {
            element[i].style.display ="none"
            nores.style.display="none"

        }
        if(pro_name.toUpperCase().indexOf(enter)> 0){
            element[i].style.display ="block"
            nores.style.display="none"
        }
        else{
               nores.style.display="block"
        }
 

    }
})
// logout button
