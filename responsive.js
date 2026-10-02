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
let sectionList = document.querySelectorAll("#webDesign, #JS");
let explanationSection = document.querySelector("#explanationSect");
let moreInfo = document.querySelector("#moreInfo");
for (let i = 0; i < sectionList.length; i++) {
    sectionList[i].addEventListener("mouseover", function () { 
        sectionList[i].style.backgroundColor = "rgb(0,92,142)";
        sectionList[i].style.color = "rgb(149, 216, 255)";   
    })
    sectionList[i].addEventListener("mouseout", function () { 
        sectionList[i].style.backgroundColor = "rgb(96, 197, 255)";
        sectionList[i].style.color = "rgb(0,92,142)";  
    })
    //fetches info from related txt file that has an explanation through a response from a php file. csunix hosted. 
    sectionList[i].addEventListener("click", function () { 
        let params = "choice=" + sectionList[i].textContent;
        fetch("https://csunix.mohawkcollege.ca/~sa000969276/portfolio/explanations.php?"+params)
            .then(resp => resp.text())
            .then(txt => moreInfo.innerHTML = txt>
    })
}
