const getElement = (selector) =>{
    const el = document.querySelector(selector)
    if(el) return el
    throw new Error('please check your classes: $ {selector} does not exist')
}
const navToggle =getElement('.sidebar-toggle')
const links = getElement('.sidebar')
const closeBtn = getElement('.close-btn')

navToggle.addEventListener('click', function() {
    links.classList.toggle('show-sidebar')
})
closeBtn.addEventListener('click', () => {
    links.classList.remove('show-sidebar')
})
// const target =document.getElementsByClassName("nav-toggle");
// const link = document.getElementsByClassName("links");

// target.addEventListener('click', function(){
//     link.classList.toggle('show-links')
// })