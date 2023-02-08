let form = document.querySelector('#addForm');
let ul = document.querySelector('#items');
let filter=document.getElementById('filter');

//form submit event
form.addEventListener('submit', addItem);
//del event
ul.addEventListener('click', removeItem);
//filter event
filter.addEventListener('keyup',filterItem);

function addItem(e){
    e.preventDefault();
    let list= document.getElementById('item').value;
    let des = document.getElementById('description').value;
    let li = document.createElement("li");
    li.className="list-group-item";
    li.appendChild(document.createTextNode(list));
    let span = document.createElement('span');
    span.className="ml-3";
    span.appendChild(document.createTextNode(des));
    li.appendChild(span);
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

function filterItem(e){
    let search = e.target.value.toLowerCase();
    let liItems = ul.getElementsByTagName('li');
    Array.from(liItems).forEach((item)=>{
        let itemName=item.firstChild.textContent.toLowerCase();
        if(itemName.indexOf(search)!=-1){
            item.style.display='block';
        }else{
            item.style.display='none';
        }
    })
}

 