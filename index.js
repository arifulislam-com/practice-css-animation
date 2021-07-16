const navBar= document.getElementById('nav-icon');
const navItems= document.getElementById('#nav-items');
navBar.addEventListener('click', function() {
    const navItem= document.querySelectorAll('li');
    for (let i = 0; i < navItem.length; i++) {
        const element = navItem[i];
        console.log(element)
        element.style.display = "block";
        element.style.backgroundColor = "navy";
        element.style.padding = "0 40px";
    }
    navBar.style.display = 'none'
})