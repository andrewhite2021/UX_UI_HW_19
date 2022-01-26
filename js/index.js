/*preloader*/
function fade() {
    $('.pageLoader').fadeOut("slow", "linear");
}
setTimeout(fade, 2900);
/*responsive nav drop down slide toggle*/
console.log("your indexe.js file is loaded correctly!");

$("#hamburger").on("click", function(){
    $("#dropdown").slideToggle();
})

