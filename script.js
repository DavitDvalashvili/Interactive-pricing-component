// slider
const slider = document.getElementById("slider");
const min = slider.min
const max = slider.max
const value = slider.value

//changer color of the slider
slider.style.background = `linear-gradient(to right, #A4F3EB 0%,  #A4F3EB ${(value-min)/(max-min)*100}%, 
#ECF0FB ${(value-min)/(max-min)*100}%, #ECF0FB 100%)`
slider.oninput = function() {
    this.style.background = `linear-gradient(to right, #A4F3EB 0%, #A4F3EB ${(this.value-this.min)/(this.max-this.min)*100}%, 
    #ECF0FB ${(this.value-this.min)/(this.max-this.min)*100}%, #ECF0FB 100%)`
};

// define global variables.
let price = document.getElementById("price");
let viewer = document.getElementById("viewer-number");
let timing = document.getElementById("time-interval");
let checkbox = document.getElementById("switch");

//on the screen changes price value
function displayPrice() {
    sliderListener();
    checkboxListener()
}

displayPrice();

//change price value when checkbox is not checked and slider value changes
function sliderListener(){
    slider.addEventListener("input", ()=> {
        displayViewer()
        if(checkbox.checked) {
            price.innerHTML = "$" + slider.value*12*0.75 + ".00";
        } else {
            price.innerHTML = "$" + slider.value + ".00";
        }
    })
}
//change price value when checkbox is checked
function checkboxListener(){
    checkbox.addEventListener("change", () =>{
        if(checkbox.checked) {
            price.innerHTML = "$" + slider.value*12*0.75 + ".00";
            timing.innerHTML = "/Year"
        } else {
            price.innerHTML = "$" + slider.value + ".00";
            timing.innerHTML = "/Month"
        }
    })
}
// displays  number of page viewer
function displayViewer() {
    if (slider.value == 8) {
        viewer.innerHTML = `${10}K`;
    } else if (slider.value == 12) {
        viewer.innerHTML = `${50}K`;
    } else if(slider.value == 16) {
        viewer.innerHTML = `${100}K`;
    } else if(slider.value == 20) {
        viewer.innerHTML = `${500}K`;
    } else if(slider.value == 24) {
        viewer.innerHTML = `${1}M`;
    }
}

