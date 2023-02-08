let di = document.querySelector(".local");
document
  .querySelector("form.formdata")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    let x = document.querySelector("form.formdata").elements;
    var t = document.getElementById("time");
    var text = t.options[t.selectedIndex].text;
    let email = x["email"].value;
    let user_obj = {
      name: x["name"].value,
      email: x["email"].value,
      phone: x["phone"].value,
      Time: x["date"].value + " " + text,
    };
    let user = JSON.stringify(user_obj);
    localStorage.setItem(email, user);
    window.location.reload();
  });

let keys = Object.keys(localStorage);
i = keys.length;
while (i--) {
  let div = document.createElement("div");
  div.className = "d-flex justify-content-between gap-2";
  let p = document.createElement("p");
  div.setAttribute("id", JSON.parse(localStorage.getItem(keys[i])).email);

  p.appendChild(
    document.createTextNode(
      JSON.parse(localStorage.getItem(keys[i])).name +
        " " +
        JSON.parse(localStorage.getItem(keys[i])).email +
        " " +
        JSON.parse(localStorage.getItem(keys[i])).phone +
        " " +
        JSON.parse(localStorage.getItem(keys[i])).Time
    )
  );
  let btn = document.createElement("button");
  btn.className = "del_button";
  btn.appendChild(document.createTextNode("Delete"));
  let btn1 = document.createElement("button");
  btn1.className = "edit_btn";
  btn1.appendChild(document.createTextNode("Edit"));
  div.appendChild(p);
  div.appendChild(btn);
  div.appendChild(btn1);
  di.appendChild(div);
}
//delete local storage
let local_data = document.querySelector(".local");
local_data.addEventListener("click", delete_data);
function delete_data(e) {
  if (e.target.classList.contains("del_button")) {
    localStorage.removeItem(e.target.parentElement.id);
    di.removeChild(e.target.parentElement);
  }
}
//edit local storage data
let local = document.querySelector(".local");
let names = document.getElementById('name');
let emails = document.getElementById('email');
let phones = document.getElementById('phone');
local.addEventListener("click", edit_data);
function edit_data(e) {
  if (e.target.classList.contains("edit_btn")) {
    let edit=e.target.parentElement.id;
    names.value=JSON.parse(localStorage.getItem(edit)).name;
    emails.value=JSON.parse(localStorage.getItem(edit)).email;
    phones.value=JSON.parse(localStorage.getItem(edit)).phone;
    localStorage.removeItem(edit);
    di.removeChild(e.target.parentElement);

  }
}
