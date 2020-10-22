var img=document.getElementById("img");
document.onmousemove = function(event){
  //解决兼容问题
    event = event||window.event;
    //获取鼠标的坐标
    //client可见窗口坐标
    // var X=event.clientX;
    // var Y=event.clientY;
    //div的偏移量是相对于整个页面的
    // var X=event.pageX;//IE8不适用
    // var Y=event.pageY;

    //火狐等浏览器认为浏览器的滚动条是html的
     var st=document.body.scrollTop||document.documentElement.scrollTop;
    var sl=document.body.scrollLeft||document.documentElement.scrollLeft;

    var X=event.clientX;
    var Y=event.clientY;
    //设置图片坐标
    img.style.left=X+sl+"px";
    img.style.top=Y+st+"px";
}