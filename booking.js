document.querySelector('form.formdata').addEventListener('submit', function (e) {
    e.preventDefault();
    let x = document.querySelector('form.formdata').elements;
    var t = document.getElementById("time");
    var text = t.options[t.selectedIndex].text;
   
    localStorage.setItem('name',x['name'].value);
    localStorage.setItem('email',x['email'].value);
    localStorage.setItem('phone',x['phone'].value);
    localStorage.setItem('Time For Call',x['date'].value+" "+text);
});