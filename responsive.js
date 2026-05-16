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
        moreInfo.innerHTML = "More info on: " + sectionList[i].textContent + explanations[sectionList[i].id];
    })
}
//prebuilt list of longer explanations before php/data base implementation
let explanations = {
    webDesign : " This website is an exmaple of the experience " +
    "i've gained in web development which includes html structures, vanilla css and bootstrap, " +
    "DOM manipulation, AJAX, svg graphics and animations, responsive design and dynamic elements", 
    
    OOP : " Object Oriented Programming was taught with the use of JAVA and covered" +
        "Encapsulation, AssociaHTML & CSStion, Inheritance, Polymorphism and Memory Leaks. ", 
    
    cSharp : " I gained experience with C sharp in highschool which covered everything from" + 
            " sorting + searching methods, in depth GUI manipulation, program logic (games + calculator) and culminated in a " + 
            "top down doom inspired platformer. ", 
    
    python : " I learned Python in highschool and first simester fundamentals which covered basic canvas manipulation and animations. basic syntax and logic and culminated in"
    + "a 2d sidescroller project, during fundamentals theres also the project gutenberg terminal search program homebrew within the portfolio list. "
}
