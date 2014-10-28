$(document).ready(function(){
    $(function(){
        $(window).scroll(function(){
            if ($(window).scrollTop() > 100){
                $("#gotop").css("visibility","visible");
            } else {
                $("#gotop").css("visibility","hidden");
            }
        });
        //当点击跳转链接后，回到页面顶部位置
        $("#gotop").click(function(){
            $('body,html').animate({scrollTop:0},500);
            return false;
        });
    });    
})
