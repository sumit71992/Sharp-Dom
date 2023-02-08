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
    // localStorage.setItem('user',x['name'].value);
    // localStorage.setItem('email',x['email'].value);
    // localStorage.setItem('phone',x['phone'].value);
    // localStorage.setItem('Time For Call',x['date'].value+" "+text);
  });

let di = document.querySelector(".local");
let keys = Object.keys(localStorage);
i = keys.length;
while (i--) {
  let div = document.createElement("div");
  div.className = "d-flex justify-content-between";
  let p = document.createElement("p");
  div.setAttribute('id',JSON.parse(localStorage.getItem(keys[i])).email);
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
  div.appendChild(p);
  div.appendChild(btn);
  di.appendChild(div);
}
//delete local storage
let local_data = document.querySelector(".local");
local_data.addEventListener("click", delete_data);
function delete_data(e) {
  if (e.target.classList.contains("del_button")) {
    console.log(e.target.parentElement.id)
    localStorage.removeItem(e.target.parentElement.id);
    di.removeChild(e.target.parentElement);
  }
}
