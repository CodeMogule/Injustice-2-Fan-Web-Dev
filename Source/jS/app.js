const nav = document.querySelector('.main-nav')
const ham = document.querySelector('.ham')
const navLink = document.querySelectorAll('.main-nav li')
const x = document.querySelector('.x')

function animation(){

    ham.addEventListener('click',function(){
        x.style.setProperty("display", "block", "important")
        navLink.forEach((link,index)=>{
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.0}s`
        })
        nav.style.display = "block"
        ham.style.setProperty("display", "none", "important")
    })

    x.addEventListener('click', function(){
        ham.style.setProperty("display", "block")
        x.style.setProperty("display", "none")
        nav.style.display = "none"
    })

}

animation()


