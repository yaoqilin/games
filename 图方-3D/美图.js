var all = document.querySelectorAll('div');
function show() {

  
     $(all).addClass('activeup').removeClass('activedown');
    // 延迟两秒执行下去的动画   
    setTimeout(function () {
        // 做下去的动画     removeClass('mouseup）移除上去的动画
        $(all).addClass('activedown').removeClass('activeup');
    }, 1000);
}

setInterval(show,2000);