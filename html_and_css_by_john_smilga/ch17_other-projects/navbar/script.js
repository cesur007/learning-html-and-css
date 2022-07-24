const getElement = (selector) =>{
    const el = document.querySelector(selector)
    if(el) return el
    throw new Error('please check your classes: $ {selector} does not exist')
}
const navToggle =getElement('.nav-toggle')
const links = getElement('.links')

navToggle.addEventListener('click', function() {
    links.classList.toggle('show-links')
})
// const target =document.getElementsByClassName("nav-toggle");
// const link = document.getElementsByClassName("links");

// target.addEventListener('click', function(){
//     link.classList.toggle('show-links')
// })