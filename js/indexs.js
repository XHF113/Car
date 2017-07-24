var mySwiper = new Swiper ('.swiper-container', {
    direction: 'vertical',
    initialSlide:0,
    autoplayDisableOnInteraction:false,
    grabCursor : true,
    onInit: function(swiper){ 
            swiperAnimateCache(swiper);  
            swiperAnimate(swiper);
        }, 
        onSlideChangeEnd: function(swiper){ 
            swiperAnimate(swiper);
        }
  })
var flag1=true;
$(".frontface").click(function(){
    if (flag1) {
        $(".bigcar").animate({
            "left":"0.60rem",
            "top": "1.40rem"
        },100);
        flag1=false;
    }else{
        $(".bigcar").animate({
            "left":"-2.65rem",
            "top": "3.40rem"
        },100);
        flag1=true;
    }
})
//////////////////////////////////////////
var flag2=true;
$(".light").click(function(){
    if (flag2) {
        $(".biglight").css({
        display:'block'
    });
        flag2=false;
    } else{
        $(".biglight").css({
        display:'none'
    });
        flag2=true;
    }
});
///////////////////////////////////////////
var flag3=true;
$(".wheel").click(function(){
    if (flag3) {
        $(".bigcar").animate({
            "left":"-4rem",
            "top": "1rem"
        },100);
        flag3=false;
    }else{
        $(".bigcar").animate({
            "left":"-2.65rem",
            "top": "3.40rem"
        },100);
        flag3=true;
    }
})
//////////////////////////////////////////////
            var x=0,y=0,x1=0,y1=0;          
            var divs = document.getElementById("box");          
                //divs.createEvent("TouchEvent")//固定写法。先创建触摸事件          
            divs.addEventListener("touchstart",touchStartFunc1,false);      
            divs.addEventListener("touchmove",touchStartFunc2,false);           
            divs.addEventListener("touchend",touchStartFunc3,false);
            
            //  需要写三个对应的函数
            
            function touchStartFunc1(event){        
                    var touch = event.changedTouches[0];                
                    x = Number(touch.pageX);                
                    y =  Number(touch.pageY);               
                    startX = x;                 
                    startY = y;         
            }
            var a=0,b=0,c=0;
            function touchStartFunc2(event){            
                    var touch = event.changedTouches[0];                                    
                    x1 = Number(touch.pageX);                   
                    y1=  Number(touch.pageY);                   
                                        
                    if(x1-x<0){         
                        a = Math.floor((x-x1)/10);
                    }else{
                        a = Math.floor((x-x1)/10);
                    }
                                
                            if(a>b){
                                c++;
                                if(c==70){c=0;}
                            }else if(a==b){
                                c=c;
                            }else if(a<b){
                                c--;
                                if(c==-1){c=70;}
                            }
                        b=a;    
                                
                    $("#box img").css("display","none");
                        $("#box img").eq(c).css("display","block");     
            }
            
            function touchStartFunc3(event){
                
            };
var scale=1;
var timer=null;
var flagx=true;
var time=50;
$(".rotates").click(function(){
    divs.removeEventListener("touchstart",touchStartFunc1,false);       
    divs.removeEventListener("touchmove",touchStartFunc2,false);            
    divs.removeEventListener("touchend",touchStartFunc3,false);
    if (flagx) {
        clearInterval(timer);
        var d=0;    
        function Amintate(){
            $("#box img").css("display","none");
            $("#box img").eq(d).css("display","block");
            if (d>=71) {
                d=0;
            }
            d++;
        }
        timer=setInterval(Amintate,time);
        flagx=false;
    }
    else{
        clearInterval(timer);
        flagx=true;
        divs.addEventListener("touchstart",touchStartFunc1,false);      
        divs.addEventListener("touchmove",touchStartFunc2,false);           
        divs.addEventListener("touchend",touchStartFunc3,false);
    }
});
$(".enlarge").click(function(){
    scale+=0.5;
    if(scale>=2){scale=2}
    $("#box").css("transform","scale("+scale+")")
});

$(".narrow").click(function(){
    scale-=0.5;
    if(scale<=0.5){scale=0.5}
    $("#box").css("transform","scale("+scale+")")
});
$("#box").click(function(){
    clearInterval(timer);
    divs.addEventListener("touchstart",touchStartFunc1,false);      
    divs.addEventListener("touchmove",touchStartFunc2,false);           
    divs.addEventListener("touchend",touchStartFunc3,false);
});
/////////////////////////////////////////////////////////////////////
$(".asq").click(function(){
    $(".hand2").css({
        display:"none"
    })
    $(".asq").fadeOut(100);
    $(".asq1").fadeOut(100,function(){
        $(".suna").fadeIn(1000);
        $(".sunb").fadeIn(1000,function(){
            $(".suna").fadeOut(1000);
            $(".sunb").fadeOut(1000,function(){
                $(".sunc").fadeIn(1000);
                $(".sund").fadeIn(1000,function(){
                    $(".sunc").fadeOut(1000);
                    $(".sund").fadeOut(1000,function(){
                        $(".asq").css({
                            display:'block'
                        })
                        $(".asq1").css({
                            display:'block'
                        })
                    });
                });
            });
        });
    })
})
/////////////////////////////////////////////////////
$(".clicK").click(function(){
    $(".back").css({
        display:'none'
    })
    $(".Rotate").css({
        display:'none'
    })
    $(".clicK").css({
        display:'none'
    })
})
// /////////////////////////////////////////////////
