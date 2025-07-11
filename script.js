console.log("welcome");
console.log("let's make the day organised");

const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    if(inputBox.value ===''){
        alert("You must write something!");
    }else{
        let li = document.createElement("li");   //  a list is created
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";    //cross symbol is created as a span
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName ==="LI"){
        e.target.classList.toggle("checked");   //the toggle method removes an existing token from list and returns 'false'. if the token doesn't exist it's added and  
        saveData();                             //function returns 'true'.
    }
    else if(e.target.tagName === "SPAN"){
            e.target.parentElement.remove();
            saveData();
    }
}, false);

                            //now on refreshing the page data is not deleted 
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);   
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();
