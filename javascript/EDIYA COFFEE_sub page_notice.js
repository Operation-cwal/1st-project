
$("document").ready(function(){
    $(".banner_menu li").click(function(){
        let i = $(this).index();
        $(".banner_menu li").removeClass("on");
        $(this).addClass("on");
    });
});