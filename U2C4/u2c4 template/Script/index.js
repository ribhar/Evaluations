var studentDataBase = JSON.parse(localStorage.getItem('studentDataBase')) || [];

document.getElementById("form").addEventListener("submit", application);

function application(event){
    event.preventDefault();
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var gender = document.getElementById("gender").value;
    var email = document.getElementById("email").value;
    var mobile = document.getElementById("phone").value
    var obj = {
        name: name,
        age: age,
        gender: gender,
        email: email,
        mobile: mobile
    }

    studentDataBase.push(obj);
    localStorage.setItem("studentDataBase",JSON.stringify(studentDataBase));

    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("gender").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
}