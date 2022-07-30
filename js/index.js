/*preloader*/
function fade() {
    $('.pageLoader').fadeOut("slow", "linear");
}
setTimeout(fade, 2900);
/*responsive nav drop down slide toggle*/
/*console.log("your indexe.js file is loaded correctly!");*/

/*$("#hamburger").on("click", function(){
    $("#dropdown").slideToggle();
})
*/

//responsive navbar toggle//

const navBar = document.querySelector(".navBar");
const navToggle = document.querySelector(".mobile-Toggle-Hamburger");

navToggle.addEventListener('click', () => {
    const visibility = navBar.getAttribute("data-visible");

    if (visibility === "false") {
        navBar.setAttribute("data-visible", true);
        navToggle.setAttribute("data-visible", true);
        navToggle.setAttribute("aria-expanded", true);
    } else if (visibility === "true") {
        navBar.setAttribute("data-visible", false);
        navToggle.setAttribute("data-visible", false);
        navToggle.setAttribute("aria-expanded", false);
    }
})
