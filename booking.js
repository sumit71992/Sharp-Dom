document.querySelector('form.formdata').addEventListener('submit', function (e) {
    e.preventDefault();
    let x = document.querySelector('form.formdata').elements;
    var t = document.getElementById("time");
    var text = t.options[t.selectedIndex].text;
   let user_obj={
    name: x['name'].value,
    email: x['email'].value,
    phone: x['phone'].value,
    Time: x['date'].value+" "+text
   }
   let user = JSON.stringify(user_obj);
    // localStorage.setItem('user',x['name'].value);
    // localStorage.setItem('email',x['email'].value);
    // localStorage.setItem('phone',x['phone'].value);
    // localStorage.setItem('Time For Call',x['date'].value+" "+text);
    localStorage.setItem('user',user);
    let user_object = JSON.parse(localStorage.getItem('user'))
    console.log(user_object)
});