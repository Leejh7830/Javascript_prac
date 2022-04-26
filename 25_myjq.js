// js의 window.onload와 같음
// $(function() {}) 으로 줄일수있음
$().ready(function() {
    $("#aaa").css('color','red')
    let bbb = $("#bbb")
    bbb.on("click",function(){alert("하이~")})
})