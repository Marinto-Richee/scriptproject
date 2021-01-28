
b1= document.querySelector("#button_add");
b1.addEventListener('click',function re(){
    radius=document.querySelector("#radius");
    result=document.querySelector("#result");
    let r;
    r=3.14*radius.value*radius.value;
    result.value = r;
});
