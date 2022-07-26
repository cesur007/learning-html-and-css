const getElement = (selector) =>{
    const el = document.querySelector(selector)
    if(el) return el
    throw new Error('please check your classes: $ {selector} does not exist')
}
const navToggle =getElement('.plus-icon')
const links = getElement('.question')
const closeBtn = getElement('.minus-icon')

navToggle.addEventListener('click', function() {
    links.classList.toggle('show-answer')
})
closeBtn.addEventListener('click', () => {
    links.classList.remove('show-answer')
})
// const target =document.getElementsByClassName("nav-toggle");
// const link = document.getElementsByClassName("links");

// target.addEventListener('click', function(){
//     link.classList.toggle('show-links')
// })