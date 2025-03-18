document.getElementById("add-button").addEventListener("click", function() {
    let inputField = document.getElementById("dom-input");
    let taskText = inputField.value.trim();
    
    if (taskText !== "") {
        let listItem = document.createElement("li");
        listItem.textContent = taskText;
        
        listItem.addEventListener("click", function() {
            this.classList.toggle("completed");
        });
        
        document.getElementById("dom-list").appendChild(listItem);
        inputField.value = "";
    }
});