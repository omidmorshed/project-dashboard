const listItemsSidebarMenu = document.querySelectorAll('.first-item-list-link')
const btnOpenSidebar = document.querySelector('.btn-open-sidebar')
const sidebar = document.querySelector('.sidebar')
const header = document.querySelector('.header')
const btnCloseSidebar = document.getElementById('close')



// script sidebar***********

listItemsSidebarMenu.forEach(element => {
    element.addEventListener('click', (e) => {
        e.target.nextElementSibling.classList.toggle('active')
        const arrow = element.childNodes[2];
        arrow.classList.toggle('arrow-active')
    })
});


btnOpenSidebar.addEventListener('click', () => {
    sidebar.classList.toggle('open-sidebar')
    header.classList.toggle('header-toggle')
})

btnCloseSidebar.addEventListener('click', () => {
    sidebar.classList.remove('open-sidebar')
})

// if(topSidebar.style.height < '800px'){
//     sidebar
// }


// listItems.forEach(element => {
//     element.addEventListener('click', (e)=>{
//         e.target.nextElementSibling.classList.toggle('active')
//         // arrowMenuSidebar.classList.toggle('arrow-active')
//         const arrow = element.childNodes.classList = ('arrow')
//         console.log(arrow);
//         // element.childNodes['.arrow'].classList.toggle('arrow-active')
//     })
// });

//*************submenu in sidebar */
// listItems.forEach(element => {
//     element.addEventListener('click', ()=>{
//         element.nextElementSibling.classList.toggle('active')
//     })
// });

// function toggleArrow(){
//     if(arrowMenuSidebar.forEach(element, ()=> element.classList = ('arrow-active'))){
//         element.classList.remove('arrow-active')
//     }else{
//         element.classList.add('arrow-active')
//     }
// }
// function removeClass(){
//     listSubmenus.forEach(element => {
//         element.classList.remove('active')
//     });
// }
// //************btn open sidebar */



// btnToggle.addEventListener('click', ()=>{
//     sidebar.classList.toggle('show')
// })









// const isOpen = e.target.nextElementSibling.classList.contains('active')
//         console.log(isOpen);