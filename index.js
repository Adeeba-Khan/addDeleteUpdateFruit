const fruitItems = document.querySelectorAll('.newfruit');

const form = document.querySelector(".add-fruit");

form.addEventListener("submit",(e)=>{
        e.preventDefault();  // stop page refresh even if action exists

    const addfruito = document.getElementById('fruito').value.trim();
    const list= document.createElement('li');
    list.textContent= addfruito;
list.classList.add("newfruit");
const uList= document.querySelector('.fruits');
uList.appendChild(list);    
deleteF(list);
editF(list);


});

// ========== DELETE BUTTON ==========
fruitItems.forEach(item => {
    deleteF(item);
});
function deleteF(item){
    const del = document.createElement('button');
    del.textContent = "Delete";
    item.appendChild(del);

    del.addEventListener("click", () => {
        item.remove();
    });
}

// ========== EDIT + SAVE BUTTON ==========
fruitItems.forEach(item => {

    editF(item);
});
function editF(item){
    

    const edit = document.createElement('button');
    edit.textContent = "Edit";
    item.appendChild(edit);

    // Create the edit handler function
    function editHandler() {

        const currentText = item.firstChild.textContent.trim();

        // Create input box
        const inp = document.createElement('input');
        inp.type = 'text';
        inp.value = currentText;
        inp.id = 'inpText';

        // Replace only the text node
        item.firstChild.replaceWith(inp);

        // Edit → Save
        edit.textContent = "Save";

        // Remove edit mode
        edit.removeEventListener("click", editHandler);

        // Add save mode
        edit.addEventListener("click", saveHandler);

        // SAVE HANDLER
        function saveHandler() {

            const newText = document.getElementById('inpText').value;

            const newNode = document.createTextNode(newText + " ");
            inp.replaceWith(newNode);

            // Save → Edit back
            edit.textContent = "Edit";

            // Remove save mode
            edit.removeEventListener("click", saveHandler);

            // Add edit mode back
            edit.addEventListener("click", editHandler);
        }
    }

    // Attach edit handler initially
    edit.addEventListener("click", editHandler);
}
