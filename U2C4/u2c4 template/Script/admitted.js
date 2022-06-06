var admitted = JSON.parse(localStorage.getItem('admitted')) || [];

admitted.map(function(el){
    var row = document.createElement("tr");

    var name = document.createElement("td");
    name.innerText = el.name;

    var age = document.createElement("td");
    age.innerText = el.age;

    var gender = document.createElement("td");
    gender.innerText = el.gender;

    var email = document.createElement("td");
    email.innerText = el.email;

    var mobile = document.createElement("td");
    mobile.innerText = el.mobile;

    row.append(name,age,gender,email,mobile);
    console.log(row)
    document.getElementById("body").append(row);
})