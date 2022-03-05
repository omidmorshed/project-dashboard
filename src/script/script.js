const list_items = document.querySelectorAll('.first-item-list-link')
const list_submenus = document.querySelectorAll('.submenu-list')

// script header **********



// script common header & sidebar




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

