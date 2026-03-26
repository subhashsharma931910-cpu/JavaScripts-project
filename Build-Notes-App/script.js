const notesContainer = document.querySelector(".notes-container")
const createBtn = document.querySelector(".btn")
let notes = document.querySelectorAll(".input-box")

function showNotes(){
  notesContainer.innerHTML = localStorage.getItem("notes");
}
showNotes();

function updateStorage(){
  localStorage.setItem("notes", notesContainer.innerHTML)
}

createBtn.addEventListener("click", () => {
  let inputbox = document.createElement("p");
  let img = document.createElement("img")
  inputbox.className =" input-box ";
  inputbox.setAttribute("contenteditable","true");
  img.src = "images/delete.png";
  notesContainer.appendChild(inputbox).appendChild(img);
})

notesContainer.addEventListener("click",function(event){
  if(event.target.tagName ==="IMG"){
    event.target.parentElement.remove();
    updateStorage();
  } else if(event.target.tagName === "P"){
    notes = document.querySelectorAll(".input-box")
    notes.forEach(nt => {
      nt.onkeyup = function(){
        updateStorage();
      }
    })
  }
})

document.eventListener("keydown", event =>{
  if(event.key === "Enter"){
    document.execCommand("insertLineBreak");
    event.preventDefault();
  }
})
