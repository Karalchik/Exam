const dragstart=function(event){
    event.dataTransfer.setData("text",event.target.id);
};
const dragover=function(event){
    if(event.target.nodeName.toLowerCase() === "to_color"){
        return true;
    }
    event.preventDefault();
}
const drop1=function(event){
    event.preventDefault();
    let imageId =event.dataTransfer.getData("text");
    let color =  document.getElementById(imageId);
    event.target.appendChild(color);
    localStorage.setItem("Color_for_desk", color.style.backgroundColor);
    document.querySelector(".desk").style.color=color.style.backgroundColor;
};
const drop2=function(event){
    event.preventDefault();
    let imageId =event.dataTransfer.getData("text");
    let color =  document.getElementById(imageId);
    event.target.appendChild(color);
    localStorage.setItem("Background_Color_for_body", color.style.backgroundColor);
    document.querySelector("body").style.backgroundColor=color.style.backgroundColor;
};
const drop3=function(event){
    event.preventDefault();
    let imageId =event.dataTransfer.getData("text");
    let color =  document.getElementById(imageId);
    event.target.appendChild(color);
    localStorage.setItem("Background_Color_for_desk2", color.style.backgroundColor);
    document.querySelector(".desk2").style.backgroundColor=color.style.backgroundColor;
};
const drop4=function(event){
    event.preventDefault();
    let imageId =event.dataTransfer.getData("text");
    let color =  document.getElementById(imageId);
    event.target.appendChild(color);
    localStorage.setItem("Color_for_borders", color.style.backgroundColor);
    document.querySelector(".desk2").style.borderColor=color.style.backgroundColor;
    document.querySelector(".desk").style.borderColor=color.style.backgroundColor;
    document.querySelector(".main").style.borderColor=color.style.backgroundColor;
    document.querySelector(".pravila").style.borderColor=color.style.backgroundColor;
    document.querySelector(".for_tetr").style.borderColor=color.style.backgroundColor;
};
const drop5=function(event){
    event.preventDefault();
    let imageId =event.dataTransfer.getData("text");
    let color =  document.getElementById(imageId);
    event.target.appendChild(color);
    localStorage.setItem("Color_for_borders_in_cells", color.style.backgroundColor);
    const border_2 =document.querySelectorAll('#canva');
Array.from(border_2).forEach((element)=>{
    element.style.borderColor=color.style.backgroundColor;
});
    const border_3 =document.querySelectorAll('.input');
Array.from(border_3).forEach((element)=>{
    element.style.borderColor=color.style.backgroundColor;
});
    const border_4 =document.querySelectorAll('.to_color');
Array.from(border_4).forEach((element)=>{
    element.style.borderColor=color.style.backgroundColor;
});
    const border_5 =document.querySelectorAll('.for_color');
Array.from(border_5).forEach((element)=>{
    element.style.borderColor=color.style.backgroundColor;
});

};

let element1 =document.querySelector('#f_c1');
let element2 =document.querySelector('#f_c2');
let element3 =document.querySelector('#f_c3');
let element4 =document.querySelector('#f_c4');
let element5 =document.querySelector('#f_c5');
    element1.addEventListener('dragover',dragover);
    element1.addEventListener('drop',drop1);
    element2.addEventListener('dragover',dragover);
    element2.addEventListener('drop',drop2);
    element3.addEventListener('dragover',dragover);
    element3.addEventListener('drop',drop3);
    element4.addEventListener('dragover',dragover);
    element4.addEventListener('drop',drop4);
    element5.addEventListener('dragover',dragover);
    element5.addEventListener('drop',drop5);

const to_color_div =document.querySelectorAll('.to_color');
Array.from(to_color_div).forEach((element)=>{
    element.addEventListener('dragstart',dragstart);
});