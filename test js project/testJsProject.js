let amount = document.querySelector("#price");
let names = document.getElementById("name");
let cat = document.getElementById("category_input");
let btn = document.getElementById("btn");
let url = "https://crudcrud.com/api/f1486d83508a4b8caa4eec396108c0ab/product/";

//Add Items

btn.addEventListener("click", (e) => {
  e.preventDefault();
  let obj = {
    amount: amount.value,
    name: names.value,
    category: cat.value,
  };
  axios
    .post(url, obj)
    .then((res) => {
      let ul = document.getElementById(res.data.category);
      let li = document.createElement("li");
      li.className = "li";
      li.setAttribute("id",res.data._id)
      li.appendChild(
        document.createTextNode(
          res.data.amount +
            " " +
            "-" +
            " " +
            res.data.name +
            " " +
            "-" +
            " " +
            "On" +
            " " +
            res.data.category +
            " "
        )
      );
      let del = document.createElement("button");
      del.className = "btn btn-secondary p-0 del";
      del.appendChild(document.createTextNode("Delete Expense"));
      li.appendChild(del);
      ul.appendChild(li);
    })
    .catch((err) => console.log(err));
});
// get all product
window.addEventListener("DOMContentLoaded", () => {
  axios
    .get(url)
    .then((res) => {
      for (let i = 0; i < res.data.length; i++) {
        let ul = document.getElementById(res.data[i].category?res.data[i].category:"");
        let li = document.createElement("li");
        li.className = "li";
        li.setAttribute('id',res.data[i]._id)
        li.appendChild(
          document.createTextNode(
            res.data[i].amount +
              " " +
              "-" +
              " " +
              res.data[i].name +
              " " +
              "-" +
              " " +
              "On" +
              " " +
              res.data[i].category +
              " "
          )
        );
        let del = document.createElement("button");
        del.className = "btn btn-secondary p-0 del";
        del.setAttribute('id',res.data[i]._id);
        del.appendChild(document.createTextNode("Delete Expense"));
        li.appendChild(del);
        ul.appendChild(li);
      }
    })
    .catch((err) => console.log(err));
});
//remove product

let item = document.querySelector(".items")
item.addEventListener("click", (e) => {
  
  if (e.target.classList.contains("del")) {
    
    axios.delete(url+e.target.parentElement.id)
    .then((res)=>{
      e.target.parentElement.remove()
    }).catch((err)=>console.log(err))
  }
});



