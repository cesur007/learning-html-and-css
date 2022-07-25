const getElement = (selector) =>{
    const el = document.querySelector(selector)
    if(el) return el
    throw new Error('please check your classes: $ {selector} does not exist')
}
const navToggle =getElement('.modal-btn')
const links = getElement('.modal-overlay')
const closeBtn = getElement('.close-btn')

navToggle.addEventListener('click', function() {
    links.classList.toggle('open-modal')
})
closeBtn.addEventListener('click', () => {
    links.classList.remove('open-modal')
})
// const target =document.getElementsByClassName("nav-toggle");
// const link = document.getElementsByClassName("links");

// target.addEventListener('click', function(){
//     link.classList.toggle('show-links')
// })