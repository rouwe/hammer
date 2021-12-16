// Collapsible Nav Bar
const burger = document.getElementsByClassName('burger')[0];

burger.addEventListener("click", () => {
    // toggle navigation on & off
    const topNav = document.getElementsByClassName('top-nav')[0];
    const isNone = window.getComputedStyle(topNav, null).display;
    if (isNone == 'none') {
        topNav.style.display = 'block';
    } else {
        topNav.style.display = 'none';
    }
});
