/*
*
* 代码来自博客园 https://www.cnblogs.com/XCWebLTE/archive/2017/06/15/7017338.html
*
* 返回值：
*   值    类型   说明
*   -1   Number  不是IE
*   6    Number  IE<=6
*   7    Number  IE7
*   8    Number  IE8
*   9    Number  IE9
*   10   Number  IE10
*   11   Number  IE11
*   12   Number  edge
*
* */
let  IEVersion = function () {
    let userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
    let isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1; //判断是否IE<11浏览器
    let isEdge = userAgent.indexOf("Edge") > -1 && !isIE; //判断是否IE的Edge浏览器
    let isIE11 = userAgent.indexOf('Trident') > -1 && userAgent.indexOf("rv:11.0") > -1;
    if(isIE) {
        let reIE = new RegExp("MSIE (\\d+\\.\\d+);");
        reIE.test(userAgent);
        let fIEVersion = parseFloat(RegExp["$1"]);
        if(fIEVersion == 7) {
            return 7;
        } else if(fIEVersion == 8) {
            return 8;
        } else if(fIEVersion == 9) {
            return 9;
        } else if(fIEVersion == 10) {
            return 10;
        } else {
            return 6;//IE版本<=7
        }
    } else if(isEdge) {
        return 12;//edge
    } else if(isIE11) {
        return 11; //IE11
    }else{
        return -1;//不是ie浏览器
    }
}
let ie=IEVersion();
if (ie>-1){
    //如果为ie或者edge替换部分html标签
    document.getElementById("killie").innerHTML="<div class=\"ui text container\" style='padding-top: 10em;text-align: center'><b>对不起，暂不支持IE浏览器，请您使用<a href='https://www.mozilla.org/en-US/' > 火狐</a>或者其他浏览器。</b> </div>";
}