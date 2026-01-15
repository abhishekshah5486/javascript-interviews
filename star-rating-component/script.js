// var starElement = document.querySelector(".star");
// starElement.addEventListener("click", function(e){
//     console.log(e);
//     starElement.classList.add("gold");
//     e.target.classList.add("gold");
// })
var allStarElements = document.querySelectorAll(".star");
var pElement = document.querySelector("p");
let currentStarClickedIndex = -1;

for (var j=0; j<allStarElements.length; j++) {
    allStarElements[j].addEventListener("click", (event) => {
        const currStarIdx = [...allStarElements].indexOf(event.currentTarget);
        pElement.innerText = "Rating: " + `${currStarIdx + 1}`;
        currentStarClickedIndex = currStarIdx;
        console.log(currentStarClickedIndex);
        for (var k=currStarIdx+1; k<allStarElements.length; k++) {
            const currStarElement = allStarElements[k];
            if (currStarElement.classList[1] === "yellow") {
                currStarElement.classList.remove("yellow");
            }
        }
        for (var k=0; k<=currStarIdx; k++) {
            const currStarElement = allStarElements[k];
            currStarElement.classList.add("yellow");
        }
    }) 

    allStarElements[j].addEventListener("mouseenter", (event) => {
        const currStarHoverIdx = [...allStarElements].indexOf(event.currentTarget);
        for (var k=0; k<=currStarHoverIdx; k++) {
            const currStarElement = allStarElements[k];
            currStarElement.classList.add("yellow");
        }
        for (var k=currStarHoverIdx+1; k<=currentStarClickedIndex; k++){
            allStarElements[k].classList.remove("yellow");
        }
    })

    allStarElements[j].addEventListener("mouseleave", (event) => {
        const currStarIdx = [...allStarElements].indexOf(event.currentTarget);
        if (currentStarClickedIndex >= currStarIdx) {
            for (var k=currStarIdx+1; k<=currentStarClickedIndex; k++) {
                allStarElements[k].classList.add("yellow");
            }
        }
        else if (currentStarClickedIndex < currStarIdx) {
            for (var k=currentStarClickedIndex+1; k<=currStarIdx; k++) {
                allStarElements[k].classList.remove("yellow");
            }
        }
    })
} 