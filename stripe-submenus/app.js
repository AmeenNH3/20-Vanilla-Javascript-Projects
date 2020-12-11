import sublinks from './data.js';

const toggleBtn = document.querySelector('.toggle-btn');
const closeBtn = document.querySelector('.close-btn');
const sidebarWrapper = document.querySelector('.sidebar-wrapper');
const sidebar = document.querySelector('.sidebar-links');
const links = [...document.querySelectorAll('.link-btn')];
const submenu = document.querySelector('.submenu');
const nav = document.querySelector('.nav');
const hero = document.querySelector('.hero');


toggleBtn.addEventListener('click',()=>{
    sidebarWrapper.classList.add('show');
})
closeBtn.addEventListener('click',()=>{
    sidebarWrapper.classList.remove('show');
})