let all_buttons = document.getElementsByClassName("btn");
let originalMatrix = window.getComputedStyle(all_buttons[0]).transform;
let clicked = false;

let hover_rule = ".hovered_btn:hover {transform: rotate(-30deg) skew(25deg) translate(20px,-15px); box-shadow: -50px 50px 50px rgba(0,0,0,.5);}"
for(let i=0; i<=all_buttons.length; i++){
    all_buttons[i].addEventListener("click", function(event){
            console.log(clicked);
            if(clicked){
                all_buttons[i].style.setProperty('transform', originalMatrix);
                clicked = false;
            }
            else{
                all_buttons[i].style.transform = "";
                all_buttons[i].style.transform += "scale(10, 10)";
                clicked = true;
            }
    });
    all_buttons[i].addEventListener("mouseover", function(){
        if(!clicked){
          all_buttons[i].style.transform = "rotate(-30deg) skew(25deg) translate(20px,-15px)";
        }
    })
    all_buttons[i].addEventListener("mouseout", function(){
        if(!clicked){
            all_buttons[i].style.transform = "rotate(-30deg) skew(25deg) translate(0,0)";
        }
    })
};