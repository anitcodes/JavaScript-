function friendRequest(){
    var update = document.querySelector('h3')
    var btn = document.querySelector('#btn')
    var love = document.querySelector('i')
    var check = 0
    
    btn.addEventListener('click',function(){
        if(check == 0){
        update.innerHTML = 'Request Sent'
        update.style.color = 'green'
        btn.innerText = 'Remove'
        btn.style.borderColor = 'rgb(201, 73, 14)'
        love.style.opacity = '1'
        love.style.color = 'green'
        setTimeout(function(){
            love.style.opacity = '0'
        },1500)
        check = 1  
    }
    else{
        update.innerHTML = 'Not Friend'
        update.style.color = 'red'
        btn.innerText = 'Add Friend'
        btn.style.borderColor = '#00b4d8'
        love.style.opacity = '1'
        love.style.color = 'red'
        setTimeout(function(){
            love.style.opacity = '0'
        },1500)
        check = 0
    }
    })
}

friendRequest()


