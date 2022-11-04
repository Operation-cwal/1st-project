
$(".latte").hide();

$(".bean_tab li").on("click",function(){
    event.preventDefault();
    let idx = $(this).index()
    if(!idx){
        $(".americano").show();
        $(".latte").hide();
    }else{
        $(".latte").show();
        $(".americano").hide();
    }
});

$("document").ready(function(){
    $(".bean_tab li").click(function(){
        let i = $(this).index();
        $(".bean_tab li").removeClass("on");
        $(this).addClass("on");
    });
});

$("document").ready(function(){
    $(".prod_sort li").click(function(){
        let j = $(this).index();
        $(".prod_sort li").removeClass("on");
        $(this).addClass("on");
    });
});
