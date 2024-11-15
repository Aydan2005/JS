let image1 = document.querySelector(".img1");
let newImage1 = "./img/Group73.svg";
let orijinalImage1 = image1.src;
image1.addEventListener("mouseenter", ()=> {
    image1.src = newImage1;
});
image1.addEventListener("mouseleave", ()=> {
    image1.src = orijinalImage1;
});
let image2 = document.querySelector(".img2");
let newImage2 = "./img/Group91.svg";
let orijinalImage2 = image2.src;
image2.addEventListener("mouseenter", ()=> {
    image2.src = newImage2;
});
image2.addEventListener("mouseleave", ()=> {
    image2.src = orijinalImage2;
});

function addToDo(){
    let todoInput = document.querySelector(".to-do-input");
    let toDoInputDiv = document.querySelector(".to-do-input-div");
    let toDoValue = todoInput.value.trim();
    let tableDiv = document.querySelector(".table-div")
    if(toDoValue == ''){
        todoInput.value = ""
        alert("Bir məlumat girin.");
    }
    else{
        let toDoTable = document.querySelector("tbody");
        let newRow = document.createElement("tr");
        let idCell = document.createElement("td");
        idCell.textContent = toDoTable.children.length + 1;
        let toDoCell = document.createElement("td");
        toDoCell.textContent = toDoValue;
        
        let deleteCell = document.createElement("td");
        let deleteButton = document.createElement("button");
        deleteButton.innerHTML = "&#10006;"; 
        deleteButton.className = "delete-btn";
        deleteButton.addEventListener("click",()=>{
            toDoTable.removeChild(newRow);
            newId();
            if (toDoTable.children.length === 0) {
                tableDiv.style.display = "none";
                toDoInputDiv.style.display = "flex";
                alert("Siz bütün ToDo-ları silmiş olacaqsınız zəhmət olmasa yenilərini daxil edin.")
            }
        })

        deleteCell.appendChild(deleteButton);
        deleteCell.style.textAlign = "right";

        newRow.appendChild(idCell);
        newRow.appendChild(toDoCell);
        newRow.appendChild(deleteCell);
        toDoTable.appendChild(newRow);
        todoInput.value = "";
        toDoInputDiv.style.display = "none";
        tableDiv.style.display = "block";
    }
}
let todoInput = document.querySelector(".to-do-input");
todoInput.addEventListener('keydown', (event) => {
    if(event.key === "Enter"){
        addToDo();
    }
  });
function newId(){
    let toDoTable = document.querySelector("tbody");
    let rows = toDoTable.querySelectorAll("tr");
    rows.forEach((row, index) => {
        row.firstChild.textContent = index + 1;
    });
}
let addButton = document.querySelector(".add2");
addButton.addEventListener("click",addToDo);

let plusButton = document.querySelector(".add1");
function plusBtn(){
    let toDoInputDiv = document.querySelector(".to-do-input-div")
    toDoInputDiv.style.display = "flex";
}
plusButton.addEventListener("click",()=>{
    let toDoInputDiv = document.querySelector(".to-do-input-div")
    toDoInputDiv.style.display = "flex";
})
let buttonX = document.querySelector(".btn-x");
buttonX.addEventListener("click",()=>{
    let todoInput = document.querySelector(".to-do-input");
    todoInput.value = "";
})
let imageDiv = document.querySelector(".imageDiv");
imageDiv.addEventListener("click",()=>{
    let toDoTable = document.querySelector("tbody");
    if (toDoTable.children.length === 0 || toDoTable.children.length === 1) {
        disableImageClicks();
    } 
    else{
        let image1 = document.querySelector(".image1");
        let image2 = document.querySelector(".image2");
        image1.classList.toggle("image");
        image2.classList.toggle("image");
    }
})
function sortToDo(){
    let toDoTable = document.querySelector("tbody");
    let rows = Array.from(toDoTable.querySelectorAll("tr"));
    rows.sort((a,b)=>{
        let cell1 = a.children[1].textContent.toLowerCase();
        let cell2 = b.children[1].textContent.toLowerCase();
        return cell1.localeCompare(cell2);
    })
    rows.forEach(row => toDoTable.appendChild(row));
    newId();
}
image1.addEventListener("click",sortToDo);
function reverseToDo(){
    let toDoTable = document.querySelector("tbody");
    let rows = Array.from(toDoTable.querySelectorAll("tr"));
    rows.sort((a,b)=>{
        let cell1 = a.children[1].textContent.toLowerCase();
        let cell2 = b.children[1].textContent.toLowerCase();
        return cell2.localeCompare(cell1);
    })
    rows.forEach(row => toDoTable.appendChild(row));
    newId();
}
image2.addEventListener("click",reverseToDo)