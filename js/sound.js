$(function () {
    /** 音效*/
    $("#hintButton").click(function () {
        showSound("../audio/menu.mp3");
    });

    $("#bell2").click(function () {
        showSound("../audio/bell2.mp3");
    });

    $("#bell").click(function () {
        showSound("../audio/bell.mp3");
    });
});
/**
 * 产生音效
 * @param audioSrc ：音频路径
 */
function showSound(audioSrc) {
    $("#hint").remove();/**因为音效元素是追加的，所以每次生成之前，将原来的删除掉*/
    var audioJQ = $("<audio src='" + audioSrc + "' autoplay id='hint'/>");
    audioJQ.appendTo("body");/**创建 audio 标签的 Jquery 对象，然后追加到 body 进行播放*/
}