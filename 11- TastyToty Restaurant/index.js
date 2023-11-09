//More Menu
let morebtn = document.getElementById("morelinks");
let moremenue = document.getElementById("more");
let header = document.querySelector(".header")
let counterOpened = 0;

// moremenue.onmouseover = function()
// {
//      moremenue.style.cssText = " visibility: visible;";      
//      moremenue.style.cssText = "opacity: 100;";    
//      console.log("don")  
// }
moremenue.onmouseover = function()
{
    if(counterOpened%2 == 0)
    {
        moremenue.style.cssText = " visibility: hidden;";
        
        console.log("don")      
    }
    
}
morebtn.onclick = function()
{
    if(counterOpened%2 == 0)
    {
        openmore()
    }    

    if(counterOpened%2 != 0)
    {
        closemore()
    }    

    counterOpened++;    
};

let  openmore = function()
{
    // moremenue.style.cssText = " visibility: visible;";      
    moremenue.style.cssText = "opacity: 100;";      
}

let  closemore = function()
{
    // moremenue.style.cssText = " visibility: hidden;";      
    moremenue.style.cssText = "opacity: 0;";   
}

document.onkeyup = function (e) 
{
  // console.log(e);
  if (e.key === "Escape")
  {
    // moremenue.style.cssText = " visibility: hidden;";     
    moremenue.style.cssText = "opacity: 0";  
    counterOpened++;
  }
};


/////////////////
// hover spicial heading 
// ////////////
// let special_h2 = document.querySelectorAll("#special-h2");
// let special_p = document.querySelectorAll("#special-p");


// for(let i = 0 ; i < special_p.length ; i++)
// {
//     special_h2[i].onmouseover = function()
//     {
//         special_p[i].style.cssText = "visibility:visible;";      
//     }

//     special_h2[i].onmouseleave = function()
//     {
//         special_p[i].style.cssText = "visibility:hidden;"  
//     }
    
// }    

