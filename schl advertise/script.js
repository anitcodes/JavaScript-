var circle = document.querySelector("#circle1")
var button = document.querySelector("#btn")
var check = 0
var check = 1


button.addEventListener("click",function(){
    if(check == 0){
        circle.style.background = 'black'
        check = 1
    }

    else if(check == 1){
        circle.style.background = 'grey'
        check = 2
    }

    else if(check == 2){
        circle.style.background = 'red'
        check = 5
    }

    else{
        circle.style.background = 'purple'
        check = 0
    }
})