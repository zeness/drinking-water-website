$(function(){
    init()
    window.addEventListener('scroll',init)
});
function init(){
    const oPro=document.querySelector('.procu'),oDiv=$('.pright > div');
    const oh=oPro.getBoundingClientRect().top,clih=document.documentElement.clientHeight || document.body.clientHeight;
    const cliw=document.documentElement.clientWidth || document.body.clientWidth;
    const anch=cliw<768 ? clih/3 : clih/2;
    if(oh<anch){
        for(let i=0;i<oDiv.length;i++){
            oDiv.eq(i).css({right:0,top:0})
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
