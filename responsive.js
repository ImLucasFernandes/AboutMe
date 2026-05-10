/**
 * Responsive portion of the website depending on user input and events. 
 */
//responsive title with mouse events
let title = document.querySelector("#titleSect");
title.addEventListener("mouseover", function () {
    title.style.backgroundColor = "rgb(96, 197, 255)";
    title.style.color = "rgb(0,92,142)";
});
title.addEventListener("mouseout", function () {
    title.style.backgroundColor = "rgb(0,92,142)";
    title.style.color = "rgb(149, 216, 255)";
});

//creates a list of key terms and adds a click event to each one
let sectionList = document.querySelectorAll("#webDesign, #OOP, #cSharp, #python");
let explanationSection = document.querySelector("#explanationSect");
let moreInfo = document.querySelector("#moreInfo");
for (let i = 0; i < sectionList.length; i++) {
    sectionList[i].addEventListener("mouseover", function () { 
        sectionList[i].style.textDecoration = "underline";      
    })
    sectionList[i].addEventListener("mouseout", function () { 
        sectionList[i].style.textDecoration = "none";      
    })
    //currently have no experience with database development but convert to get/pull request after
    sectionList[i].addEventListener("click", function () { 
        moreInfo.innerHTML = "More info on: " + sectionList[i].textContent;
    })
}