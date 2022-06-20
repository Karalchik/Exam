const dragstart=function(event){
    event.dataTransfer.setData("text",event.target.id);
};
const dragover=function(event){
    if(event.target.nodeName.toLowerCase() === "to_color"){
        return true;
    }
    event.preventDefault();
}
const drop=function(event){
    event.preventDefault();
    let imageId =event.dataTransfer.getData("text");
    event.target.appendChild(document.getElementById(imageId));
};
const for_color_div =document.querySelectorAll('.for_color');
Array.from(for_color_div).forEach((element)=>{
    element.addEventListener('dragover',dragover);
    element.addEventListener('drop',drop);
});
const to_color_div =document.querySelectorAll('.to_color');
Array.from(to_color_div).forEach((element)=>{
    element.addEventListener('dragstart',dragstart);
});