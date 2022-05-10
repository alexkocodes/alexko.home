let all_buttons = document.getElementsByClassName("btn");
let originalMatrix = window.getComputedStyle(all_buttons[0]).transform;
let clicked = false;

for(let i=0; i<=all_buttons.length; i++){
    all_buttons[i].addEventListener("click", function(e){
        e.stopPropagation();
        console.log(clicked);
        if(clicked){
            all_buttons[i].style.setProperty('transform', originalMatrix);
            all_buttons[i].style.zIndex = "1";
            clicked = false;

            all_buttons[i].querySelector("span").style.display = "block";
            all_buttons[i].querySelector("span").style.opacity = "100%";
            hideContent(all_buttons[i]);
        }
        else{

            all_buttons[i].style.transform = "";
            all_buttons[i].style.transform += "scale(10, 10)";
            all_buttons[i].style.zIndex = "4";
            clicked = true;

            all_buttons[i].querySelector("span").style.display = "none";
            all_buttons[i].querySelector("span").style.opacity = "0%";
            //setTimeout(function(){all_buttons[i].querySelector("span").style.display = "none";}, 1500);
            
            setTimeout(showContent(all_buttons[i]), 4000);
        }
    });
    all_buttons[i].addEventListener("mouseover", function(){
        if(!clicked){
          all_buttons[i].style.transform = "rotate(-30deg) skew(25deg) translate(20px,-15px)";
          all_buttons[i].style.boxShadow = "-50px 50px 50px rgba(0,0,0,.5)"
        }
    })
    all_buttons[i].addEventListener("mouseout", function(){
        if(!clicked){
            all_buttons[i].style.transform = "rotate(-30deg) skew(25deg) translate(0,0)";
            all_buttons[i].style.boxShadow = "-20px 20px 10px rgba(0,0,0,.5)";
        }
    })
};

function showContent(button){
    button.querySelector(".content").style.visibility = "visible";
}

function hideContent(button){
    button.querySelector(".content").style.visibility = "hidden";
}

let container_right = document.getElementById("container_right");
document.getElementById("container_right").addEventListener("click", function(e){
    if (!e) var e = window.event;
	e.cancelBubble = true;
	if (e.stopPropagation) e.stopPropagation();
    console.log("clicked inside");
    window.open("https://fyk211.github.io/30MFF/");
})


