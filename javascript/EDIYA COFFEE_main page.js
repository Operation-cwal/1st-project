
$(".close_btn").on("click",function(){
    $(".banner_slide").hide();
});

$(".banner_btn li").on("click",function(){
    
    let num = $(this).index()
   
    $(".banner_slide").css({
        transform:`translateX(${-num * 100}%)`,
        transition:`0.5s`
    });
});

$("document").ready(function(){
    $(".banner_btn li label").click(function(){
        let j = $(this).index();
        $(".banner_btn li label").removeClass("on");
        $(this).addClass("on");
    });
});

/* ---------------------------------메인배너------------------------------------*/

const slide = document.querySelector(".slider");
const pic = document.querySelectorAll(".slider a img");
const btn = document.querySelector(".page_a_btn");

let num = 0;

let Firstpage = pic[0].cloneNode(true);
let Lastpage = pic[3].cloneNode(true);

slide.append(Firstpage);
slide.prepend(Lastpage);

slide.style = `transform:translateX(${-num * 101}%)`;

btn.addEventListener("click",()=>{
    let btnName = event.target.dataset.btn;
    sliding(btnName);
});

function sliding(w){
    if(w == "next"){
        if(num < 5) num++;
    }else{
        if(num > 0) num--;
    }

    slide.style = `transition:0.5s; transform:translateX(${-num*101}%)`;

    setTimeout(function(){
        if(num == 5){
            num = 1;
            slide.style = `transition:0s;transform:translateX(${-num*101}%)`;
        }
    },500)
};

$(".page_c_btn li").on("click",function(){
    
    let num = $(this).index()
   
    $(".slider").css({
        transform:`translateX(${-num * 101}%)`,
        transition:`0.5s`
    });
});

$("document").ready(function(){
    $(".page_c_btn li label").click(function(){
        $(".page_c_btn li label").removeClass("on");
        $(this).addClass("on");
    });
});

/* ---------------------------------비니스트------------------------------------*/

$("document").ready(function(){
    $(".beanist_btn li label").click(function(){
        let o = $(this).index();
        $(".beanist_btn li label").removeClass("on");
        $(this).addClass("on");
    })
})

$(".beanist_btn li").on("click",function(){
    
    let idx = $(this).index()
   
    $(".beanist_pic ul").css({
        transform:`translateX(${-idx * 101}%)`,
        transition:`0.5s`
    });
});