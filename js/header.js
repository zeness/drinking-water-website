$('.mune').on('click',function(){
    console.log($('.menu').css('right'))
    if($('.menu').css('right')!=='0px')$('.menu').css({right:0})
    else $('.menu').css({right:'-100%'})
})
