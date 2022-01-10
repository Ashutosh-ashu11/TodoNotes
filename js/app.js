showNotes();
let addBtn = document.getElementById('addBtn')
addBtn.addEventListener('click', function (e) {
    let addTxt = document.getElementById('addTxt');
    let notes = localStorage.getItem("notes");
    var notesObj = [];
    if (addTxt.value) {
        if (notes) {
            localStorage.clear();
            notesObj = JSON.parse(notes);
        }

        notesObj.push(addTxt.value);
        localStorage.setItem("notes", JSON.stringify(notesObj));
        addTxt.value = "";

        showNotes()
    }
    else {
        alert("please enter the notes !");
    }
})

function showNotes() {

    let notes = localStorage.getItem('notes');
    var notesObj = []
    if (notes) {
        notesObj = JSON.parse(notes);
    }
    let html = "";
    notesObj.forEach((element, index) => {
        html += `   <div class="noteCard card mx-2 my-2" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">note ${index}</h5>
          <p class="card-text">${element}</p>
          <button class="btn btn-primary" onClick="deleteNotes(this.id)" id="${index}">Delete Notes</button>
        </div>
      </div>`
    });
    let notesEle = document.getElementById('notes');
    if (notesObj.length != 0) {
        notesEle.innerHTML = html;
    }
    else {
        notesEle.innerHTML = `nothing to show! use addNotes`;
    }
}

function deleteNotes(index) {
    let notes = localStorage.getItem("notes");
    localStorage.clear();
    notesObj = JSON.parse(notes);
    ind = parseInt(index);
    notesObj.splice(ind, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes()
}

var searchText = document.getElementById('searchText');
searchText.addEventListener('input', () => {
    debugger;
    noteCard = document.getElementsByClassName('noteCard');
    Array.from(noteCard).forEach((element) => {
        let cardTxt = document.getElementsByTagName('p')[0].innerText;
        if (cardTxt.includes(searchText.value)) {
            element.style.display = 'block'
        }
        else {
            element.style.display = 'none'
        }
    })
});

//Next feature will be 
//Add Title dynamically 
//marking of important notes
//seprates Notes for seprate username
//connectivity with dataBase  
