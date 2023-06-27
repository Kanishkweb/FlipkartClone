const slides  =  document.querySelectorAll('.slide')
console.log(slides)
var counter = 0;

Array.from(slides).forEach((slide,index) => {
    slide.style.left = `${index * 100}%`
})

const slideImage =() => {
    slides.forEach((slide)=>{
        slide.style.transform = `translateX(-${counter*100}%)`
    })
}

const goNext =()=>{
    counter++
    slideImage();
}
const goPrev =()=>{
    counter--
    slideImage();
}



//   Chipkane Vali JavaScript  // 

let poster = document.getElementsByClassName('poster-img')[0]
console.log(poster)

let right = document.getElementById("card-btn-left")
let left = document.getElementById("card-btn-right")
console.log(left)
left.style.display = "none"

right.addEventListener("click",function(){
    poster.style.transform = 'translateX(-30%)'
    right.style.display = "none"
    left.style.display = "block"
})
left.addEventListener("click",function(){
    poster.style.transform = 'translateX(-30%)'
    left.style.display = "none"
    right.style.display = "block"
})
