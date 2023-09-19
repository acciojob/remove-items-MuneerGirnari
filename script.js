//your JS code here. If required.
let element = document.getElementById("colorSelect");

function removeElement() {

    let currentValue = element.options[element.selectedIndex];

    if(currentValue){
        element.removeChild(currentValue);
    }
}
