$(function(){
    init()
    window.addEventListener('scroll',init)
});
function init() {
    const oCon=document.querySelector('.seccontent'),oimg=$('.content .lrght img')
    const ch=oCon.getBoundingClientRect().top,clih=document.documentElement.clientHeight || document.body.clientHeight;
    const cliw=document.documentElement.clientWidth || document.body.clientWidth;
    const anch=cliw<768 ? clih/7 : clih/2;
    if(cliw<768){
        $('.content .lrght .left p').animate({opacity:1,top:0},600)
    }
    if(ch<anch){
        $('.content .lrght .left p').animate({opacity:1,top:0},600)
        for(let i=0;i<oimg.length;i++){
            oimg.eq(i).addClass('active')
        }
    }
    $('.banner .poss').css({top: 0,opacity:1})
}
(function (doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function () {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            if (clientWidth <=768) {
                docEl.style.fontSize = 100 * (clientWidth / 750) + 'px';
            }
        };
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);
