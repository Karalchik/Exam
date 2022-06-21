function autoSetColorInStart(){

    let getedColor5=localStorage.getItem("Color_for_desk");
    document.querySelector(".desk").style.color=getedColor5;

    let getedColor4=localStorage.getItem("Background_Color_for_body");
    document.querySelector("body").style.backgroundColor=getedColor4;

    let getedColor3=localStorage.getItem("Background_Color_for_desk2");
    document.querySelector(".desk2").style.backgroundColor=getedColor3;

    let getedColor2=localStorage.getItem("Color_for_borders");
        document.querySelector(".desk2").style.borderColor=getedColor2;
        document.querySelector(".desk").style.borderColor=getedColor2;
        document.querySelector(".main").style.borderColor=getedColor2;
        document.querySelector(".pravila").style.borderColor=getedColor2;
        document.querySelector(".for_tetr").style.borderColor=getedColor2;

    let getedColor1=localStorage.getItem("Color_for_borders_in_cells");
    const border_2 =document.querySelectorAll('#canva');
        Array.from(border_2).forEach((element)=>{
            element.style.borderColor=getedColor1;
        });
    const border_3 =document.querySelectorAll('.input');
        Array.from(border_3).forEach((element)=>{
            element.style.borderColor=getedColor1;
        });
    const border_4 =document.querySelectorAll('.to_color');
        Array.from(border_4).forEach((element)=>{
            element.style.borderColor=getedColor1;
        });
    const border_5 =document.querySelectorAll('.for_color');
        Array.from(border_5).forEach((element)=>{
            element.style.borderColor=getedColor1;
        });

}

autoSetColorInStart()

function rebuild(){
    
    let getedColor5="rgb(59, 167, 131)";
    localStorage.setItem("Color_for_desk", getedColor5);
    document.querySelector(".desk").style.color=getedColor5;
    
    let getedColor4="darkgrey";
    localStorage.setItem("Background_Color_for_body", getedColor4);
    document.querySelector("body").style.backgroundColor=getedColor4;
    
    let getedColor3="rgb(227, 201, 201)";
    localStorage.setItem("Background_Color_for_desk2", getedColor3);
    document.querySelector(".desk2").style.backgroundColor=getedColor3;
    
    let getedColor2="white";
    localStorage.setItem("Color_for_borders", getedColor2);
        document.querySelector(".desk2").style.borderColor=getedColor2;
        document.querySelector(".desk").style.borderColor=getedColor2;
        document.querySelector(".main").style.borderColor=getedColor2;
        document.querySelector(".pravila").style.borderColor=getedColor2;
        document.querySelector(".for_tetr").style.borderColor=getedColor2;
    
    let getedColor1="rgb(197, 139, 255)";
    localStorage.setItem("Color_for_borders_in_cells", getedColor1);
    const border_2 =document.querySelectorAll('#canva');
        Array.from(border_2).forEach((element)=>{
            element.style.borderColor=getedColor1;
        });
    const border_3 =document.querySelectorAll('.input');
        Array.from(border_3).forEach((element)=>{
            element.style.borderColor=getedColor1;
        });
    const border_4 =document.querySelectorAll('.to_color');
        Array.from(border_4).forEach((element)=>{
            element.style.borderColor=getedColor1;
        });
    const border_5 =document.querySelectorAll('.for_color');
        Array.from(border_5).forEach((element)=>{
            element.style.borderColor=getedColor1;
        });
}