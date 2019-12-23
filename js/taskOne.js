let bannerList = document.querySelector(".banner-list")
let dot = document.querySelector(".dot")
let left = document.querySelector(".left")
let right  = document.querySelector(".right")
let lastIndex = 0  //上一位置
let index = 0    //当前位置
let imageList = [
    "image/banner/1.png",
    "image/banner/2.png",
    "image/banner/3.png"
]
let length = imageList.length

function change(option){
    aBanner[lastIndex].className = ''
    aDot[lastIndex].className = ''
    if(option == "left"){
        index--
        if(index < 0){
            index = length - 1
        }
    }
    else if(option == "right"){
        index++
        if(index >= length){
            index = 0
        }
    }
    else{
        index = option
    }
    //设置当前样式
    aBanner[index].className = 'on'
    aDot[index].className = 'on'
    lastIndex = index   //保存上一次位置
}


//初始化DOM结构
function init(){
    let str1 = ""
    for(let i = 0;i < length;i++){
        let li = `<li style="background:url('${imageList[i]}') center/cover;"></li>`
        str1 += li
    }
    bannerList.innerHTML = str1
    let str2 = ""
    for(let i = 0;i < length;i++){
        let li = "<li></li>"
        str2 += li
    }
    dot.innerHTML = str2
}
init()

//获取初始化后的DOM节点
let aBanner = document.querySelectorAll(".banner-list li")
let aDot = document.querySelectorAll(".dot li")
//将页面定位到第一张图
aBanner[0].className = 'on'
aDot[0].className = 'on'

//绑定点击事件
left.onclick = function(){
    change("left")
}
right.onclick = function(){
    change("right")
}
for(let i = 0;i < length;i++){
    aDot[i].onclick = function(){
        change(i)
    }
}

//自动轮播
let auto = setInterval("change('right')",3000)
//鼠标移上去停止轮播
bannerList.onmouseover = function(){
    clearInterval(auto)
}
//鼠标移开继续轮播
bannerList.onmouseout = function(){
    auto = setInterval("change('right')",3000)
}