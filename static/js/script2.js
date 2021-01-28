
b2= document.querySelector("#button_vol");
b2.addEventListener('click',function re2(){
    radius2=document.querySelector("#radiusc");
    height=document.querySelector("#height");
    resultvol=document.querySelector("#resultvol");
    let r2;
    r2=3.14*parseFloat(radius2.value)*parseFloat(radius2.value)*parseFloat(height.value);
    resultvol.value = r2;
});
