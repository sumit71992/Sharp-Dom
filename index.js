let form = document.querySelector('#addForm');
let ul = document.querySelector('#items');

//form submit event
form.addEventListener('submit', addItem);
//del event
ul.addEventListener('click', removeItem);

function addItem(e){
    e.preventDefault();
    let list= document.getElementById('item').value;
    let li = document.createElement("li");
    li.className="list-group-item";
    li.appendChild(document.createTextNode(list));
    let del=document.createElement('button');
    del.className="btn btn-danger btn-sm float-right delete";
    del.appendChild(document.createTextNode("X"))
    li.appendChild(del);
    ul.appendChild(li);
    
}
function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm("Are you sure want to delete:")){
            const li= e.target.parentElement;
            ul.removeChild(li);
        }
    }
}