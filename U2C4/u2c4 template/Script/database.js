var studentDataBase = JSON.parse(localStorage.getItem('studentDataBase')) || [];

var admitted = JSON.parse(localStorage.getItem('admitted')) || [];
var rejected = JSON.parse(localStorage.getItem('rejected')) || [];

studentDataBase.map(function(el){
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

    var accept = document.createElement("td");
    // "<button>Reject</button>"
    accept.innerHTML = "<button>Accept</button>";
    accept.addEventListener("click", function(){
        accepted(el);
    });
    // var buta = document.createElement("button");
    // buta.addEventListener("click", accepted);

    var reject = document.createElement("td");
    reject.innerHTML = "<button>Reject</button>";
    reject.addEventListener("click", function(){
        rejectf(el);
    });

    // accept.append(buta);
    row.append(name,age,gender,email,mobile,accept,reject);
    document.getElementById("body").append(row);
})


function accepted(el){
    admitted.push(el);
    localStorage.setItem("admitted",JSON.stringify(admitted));
    return;
}

function rejectf(el){
    rejected.push(el);
    localStorage.setItem("rejected",JSON.stringify(rejected));
    return;
}