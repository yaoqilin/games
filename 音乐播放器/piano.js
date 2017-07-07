// document.querySelector() 获取满足条件的一个标签 且是重名的第一个
// document.getElementById() id一般不会重复 通过这个方法找标签非常精准
// document.querySelectorAll() 获取到满足条件的所有标签
var allAudio = document.querySelectorAll('audio');
var alldiv = document.querySelectorAll('div');
// 用来记录当前是哪个键正在播放声音的  current当前的
var currentIndex = -1;
// var section = document.querySelector('q');
// 方法是用来播放声音的 参数代表需要播放第几个声音
// index 0~8
function playSound(index) {
    // 取出对应的audio标签
    var audio = allAudio[index];
    // 重新加载当前的音频标签
    // audio.load();
    audio.play();
}

window.onkeydown = function (event) {
   
    //上面数字键 数字键1~9 ascll值 49~57
    // 右侧小键盘数字键    ascii值 97~105
    var key = event.keyCode;

    console.log(key);
    // 转化成0~8
    // var index = key - 49;
    // if (key >= 97) {
    //     index = key - 97;
    // }
    // else {
    //     index = key - 49;
    // }
    var index = key - (key >= 97 ? 97 : 49);
    // 判断属否重复
    if(index == currentIndex){
        // 这是一个长按
        return;
    }
   
    // 记录当前正在播放的索引
    currentIndex = index;
     
    playSound(index);
    

    // 找到对应的需要加阴影的div
    var div = alldiv[index];
    div.classList.add('down');
}
// 松开键盘上某个间的时候调用
window.onkeyup = function (event) {
    // 抬手的时候 说明按键结束了 把索引记录清零
    currentIndex = -1;
    var key = event.keyCode;
    var index = key - (key >= 97 ? 97 : 49);
    // 找到对应的需要去除阴影的div
    var div = alldiv[index];
    div.classList.remove('down');

}