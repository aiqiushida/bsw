const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* 遍历图片并添加至缩略图区 */
for(let i=1;i<=5;i++){
const newImage = document.createElement('img');
newImage.setAttribute('src', "images/pic"+i+".jpg");
thumbBar.appendChild(newImage);
newImage.onclick=e=>{
    displayedImage.src=e.target.getAttribute('src');
}
}
/* 编写 变亮/变暗 按钮 */
btn.onclick=function(e){
    if(e.target.textContent==="变暗"){
        overlay.style.backgroundColor="black";
        overlay.style.opacity=0.5;
        e.target.textContent="变亮";
    }
    else{
        overlay.style.backgroundColor="white";
        overlay.style.opacity=0;
        e.target.textContent="变暗";
    }

}
//利用事件的委托，个人感觉不太好，如果thumb-bar中还有其他的元素，它们也会获得这个效果。还是直接添加到图片上比较好
// thumbBar.addEventListener('click',changepthoto);
// function changepthoto(e){
//     displayedImage.src=e.target.getAttribute('src');
// }
