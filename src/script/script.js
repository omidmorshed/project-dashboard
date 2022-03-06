const list_items = document.querySelectorAll('.first-item-list-link')
const list_submenus = document.querySelectorAll('.submenu-list')
const btn_open_sidebar = document.querySelector('.btn-open-sidebar')
const sidebar = document.querySelector('.sidebar')
const btn_up_down = document.querySelector('.btn-up-down')



// script sidebar***********

//*************submenu in sidebar */
list_items.forEach(element => {
    element.addEventListener('click', ()=>{
        removeClass()
        element.nextElementSibling.classList.toggle('active')
    })
});


function removeClass(){
    list_submenus.forEach(element => {
        element.classList.remove('active')
    });
}
//************btn open sidebar */

btn_open_sidebar.addEventListener('click', ()=>{
    sidebar.classList.toggle('open-sidebar')
})

btn_up_down.addEventListener('click', ()=>{
    sidebar.classList.toggle('show')
})