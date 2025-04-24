// todoApp in js
// tutorial
// How To Create To-Do List App Using HTML CSS And JavaScript | Task App In JavaScript

const inputBox=document.getElementById("input-box")
const listcontainer=document.getElementById("list-container")

function addTask(){
    if(inputBox.value===''){
        alert("you most wring something")
    }
    else{
        let li=document.createElement("li")
        li.innerHTML=inputBox.value;
        listcontainer.appendChild(li)
        let span=document.createElement("span")
        span.innerHTML="\u00d7"
        li.appendChild(span)
    }
    inputBox.value=""
    saveData();

}
listcontainer.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classlist.toggle("checked")
        saveData();
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false)

function saveData(){
    localStorage.setItem("data",listcontainer.innerHTML)
}
function showTask(){
    listcontainer.innerHTML=localStorage.getItem("data")
}
showTask();