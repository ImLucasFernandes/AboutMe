/**
 * Responsive portion of the website depending on user input and events. 
 */
let title = document.querySelector("#titleSect");
title.addEventListener("mouseover", function(){
    title.style.backgroundColor = "rgb(96, 197, 255)";
    title.style.color = "rgb(0,92,142)";
    });
title.addEventListener("mouseout", function(){
    title.style.backgroundColor = "rgb(0,92,142)";
    title.style.color = "rgb(149, 216, 255)";
    });
    
