const toggle = document.getElementById('anim-toggle')
const nav = document.getElementById('nav-anim')

toggle.addEventListener('click', () => {
    nav.classList.toggle('active')
})