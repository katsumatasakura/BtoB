$(document).ready(function() {
    $(".hamburger_button").on("click", function() {
        $(this).toggleClass('active')
        $(".sp_menu").toggleClass('panelactive');
    });
});

$(".sp_menu a").on("click",function(){
    $(".hamburger_button").removeClass('active')
    $(".sp_menu").removeClass('panelactive');
});  