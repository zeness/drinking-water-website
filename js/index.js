$(function() {
    init()
    window.addEventListener('scroll', init)
});

function init() {
    const oCon = document.querySelector('.seccontent h4'),
        oPro = document.querySelector('.procu h4'),
        oimg = $('.content .lrght img'),
        oDiv = $('.pright > div');
    const ch = oCon.getBoundingClientRect().top,
        oh = oPro.getBoundingClientRect().top,
        clih = document.documentElement.clientHeight || document.body.clientHeight;
    const cliw = document.documentElement.clientWidth || document.body.clientWidth;
    const anch = cliw < 768 ? clih / 5 : clih / 2;
    if (cliw < 768) {
        $('.content .lrght .left p').animate({ opacity: 1, top: 0 }, 600)
            // $('.content .lrght .left p').css({opacity:1})
    }
    if (ch < anch) {
        $('.content .lrght .left p').animate({ opacity: 1, top: 0 }, 600)
        for (let i = 0; i < oimg.length; i++) {
            oimg.eq(i).addClass('active')
        }
    }
    if (oh < clih / 2) {
        for (let i = 0; i < oDiv.length; i++) {
            oDiv.eq(i).css({ right: 0, top: 0 })
        }
    }
    $('.banner .poss').css({ top: 0, opacity: 1 })
}
(function(doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function() {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            if (clientWidth <= 768) {
                docEl.style.fontSize = 100 * (clientWidth / 750) + 'px';
            }
        };
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);