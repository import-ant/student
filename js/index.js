var init = function() {
    bindEvent();
}

function bindEvent() {
    // 隐藏区域按钮点击事件，下拉菜单显示和收起动画
    $('.btn').click(function() {
        // :animated 伪元素选择器，选择到目前正在执行动画得元素;
        // （1）选择到没有执行动画得drop-nav，执行动画，若正在执行slide动画，则没有被选择到
        // $('.drop-nav').not(':animated').slideToggle();
        // console.log($(':animated').length)
        // （2）.stop()停止正在做得动画，然后再做新的动画
        $('.drop-nav').stop().slideToggle();
    })

    $('.slider li').click(function() {
        liClick(this);
    })
    $('.drop-nav li').click(function() {
        liClick(this);
    })

}

function liClick(dom) {

    $(dom).addClass('active').siblings().removeClass('active');
    var hashName = $(dom).attr('data-hash');
    $(`#${hashName}`).css('display', 'block').siblings().css('display', 'none');
    window.location.hash = hashName;

}
init();