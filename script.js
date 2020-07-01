let container = document.querySelector(".container");
let grid_container = document.querySelector(".grid_container");
let controls = document.querySelector(".controls");
let clear = document.querySelector(".clear");
let create = document.querySelector(".create");
let reset = document.querySelector(".reset");
let item_counter = 1;
create.addEventListener("click",create_grids);
clear.addEventListener("click",clear_grids);
reset.addEventListener("click",reset_grids);
let items;
function create_grids(event){
    let grid_nums = prompt("Enter the number of grids that you want.");
    for(let i = 0; i < grid_nums; i++){
        let node = document.createElement("div");
        let textNode = document.createTextNode("Item"+(item_counter));
        node.appendChild(textNode);
        item_counter++;
        node.setAttribute("class","item");
        grid_container.appendChild(node);
        node.addEventListener('mouseover',hoverOver);
    }
}

function clear_grids(event){
    let nodeList = document.querySelectorAll(".item");
    nodeList.forEach((element) => {
        grid_container.removeChild(element);
    });
    item_counter = 1;
}

 
function hoverOver(event){
    console.log(event.target.setAttribute("style",`background-color:${randomColor()}`));
}

function randomColor(event){
    let color1 = Math.floor(Math.random()*256);
    let color2 = Math.floor(Math.random()*256);
    let color3 = Math.floor(Math.random()*256);
    console.log("rgb(" + color1 + "," + color2 + "," + color3 + ")");
    return "rgb("+color1+","+color2+","+color3+")"
}

function reset_grids(event){
    let nodeList = document.querySelectorAll(".item");
    nodeList.forEach((element)=>{
        element.setAttribute("style","background:rgba(0, 0, 0, 0.24);");
    })
}