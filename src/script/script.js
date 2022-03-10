const listItems = document.querySelectorAll('.first-item-list-link')
const listSubmenus = document.querySelectorAll('.submenu-list')
const btnOpenSidebar = document.querySelector('.btn-open-sidebar')
const sidebar = document.querySelector('.sidebar')
const btnToggle = document.querySelector('.btn-up-down')
const arrowMenuSidebar = document.querySelectorAll('.arrow')



// script sidebar***********

//*************submenu in sidebar */
listItems.forEach(element => {
    element.addEventListener('click', ()=>{
        removeClass()
        element.nextElementSibling.classList.toggle('active')
        toggleArrow()
    })
});

function toggleArrow(){
    if(arrowMenuSidebar.forEach(element, ()=> element.classList = ('arrow-active'))){
        element.classList.remove('arrow-active')
    }else{
        element.classList.add('arrow-active')
    }
}
function removeClass(){
    listSubmenus.forEach(element => {
        element.classList.remove('active')
    });
}
//************btn open sidebar */

btnOpenSidebar.addEventListener('click', ()=>{
    sidebar.classList.toggle('open-sidebar')
})

btnToggle.addEventListener('click', ()=>{
    sidebar.classList.toggle('show')
})