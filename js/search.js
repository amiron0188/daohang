const sInfor = document.getElementById("search");
const sBaidu = document.getElementById("baidu");
const sGoogle = document.getElementById("google");
const sBing = document.getElementById("bing");
const sGitHub = document.getElementById("github");
const sGitee = document.getElementById("gitee");
const sZhihu = document.getElementById('zhihu');
const sJd = document.getElementById('jd');
const sTaoBao = document.getElementById('taobao');
const sYouTube = document.getElementById('youtube')
const sBilibili = document.getElementById("bilibili");
const sYingshi = document.getElementById("yingshi");
const sWangpan = document.getElementById("wangpan");

//doAction 搜索跳转方法
let doAction= (p,n)=>{
    window.open(p+sInfor.value+n);
}
//拼接网址
let p='';
let n='';
//Google
sGoogle.onclick=()=>{
    p="https://www.google.com/search?q=";
    n="&gws_rd=cr&nfpr=1&newwindow=1&num=30";
   doAction(p,n);

}

//BaiDu
sBaidu.onclick= () => {
    p="https://www.baidu.com/s?wd=";
    doAction(p,n);
};

//Bing
sBing.onclick= () =>{
    p='https://cn.bing.com/search?q=';
    n='&ensearch=1&FORM=BESBTB'
    doAction(p,n);
}

//GitHub
sGitHub.onclick= () =>{
    p='https://github.com/search?q=';
    doAction(p,n);
}

//Gitee
sGitee.onclick = () =>{
    p='https://gitee.com/search?utf8=✓&search=';
    doAction(p,n);
}

//Zhihu
sZhihu.onclick= () =>{
    p='https://www.zhihu.com/search?q=';
    n='&type=content&utm_content=search_hot';
    doAction(p,n);
}
//jd
sJd.onclick = () =>{
    p='http://search.jd.com/Search?enc=utf-8&keyword=';
    doAction(p,n);
}
//TaoBao
sTaoBao.onclick =()=>{
    p='https://s.taobao.com/search?q=';
    n='&taoke_type=1';
    doAction(p,n);
}

//YouTube
sYouTube.onclick = () =>{
    p='https://www.youtube.com/results?search_query=';
    doAction(p,n);
}

//Bilibili
sBilibili.onclick = () =>{
    p='https://search.bilibili.com/all?keyword=';
    doAction(p,n);
}

//YingShi
sYingshi.onclick = () =>{
    p='http://ifkdy.com/?q=';
    n='&p=1';
    doAction(p,n);
}

//Wangpan
sWangpan.onclick = () =>{
    p='http://www.panc.cc/s/';
    n='/td_0';
    doAction(p,n);
}
console.log("                                  ");
console.log("   - 欢迎来到Morey的个人导航 -     ");
console.log("===============================");
console.log("                          ");
console.log("       老哥，你好啊~      ");
console.log("                          ");
console.log("===============================")

