const firstAnimation = document.getElementsByClassName("animation");
const button = document.getElementsByClassName("contentBx");

for (i = 0; i < firstAnimation.length; i++){
    firstAnimation[i].addEventListener("click", function(){
        this.classList.toggle("clicked")
        })
    }

for (i = 0; i < button.length; i++){
    button[i].addEventListener("click", function(){
        this.classList.toggle("active")
        })
    }

