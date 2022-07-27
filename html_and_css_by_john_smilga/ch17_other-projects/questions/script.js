const getElement = (selector) =>{
    const el = document.querySelectorAll(selector)
    if(el) return el
    throw new Error('please check your classes: $ {selector} does not exist')
}
const navToggle =getElement('.plus-icon')
const links = getElement('.question')
const closeBtn = getElement('.minus-icon')

navToggle.forEach((obj)=>{
    obj.addEventListener('click', function() {     
        obj.parentElement.parentElement.parentElement.classList.toggle('show-answer')
    })
})

closeBtn.forEach((obj)=>{
    obj.addEventListener('click', () => {
        obj.parentElement.parentElement.parentElement.classList.remove('show-answer')
    })
})
// const target =document.getElementsByClassName("nav-toggle");
// const link = document.getElementsByClassName("links");

// target.addEventListener('click', function(){
//     link.classList.toggle('show-links')
// })