function loginValidate(checkSuccess) 
{
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    checkSuccess(username,password);
}
 
function onSuccess(uname,pwd) 
{
        if (uname == "admin" && pwd == "12345")
        {    
            document.querySelector("form").action="./todolist.html";
        }
        else {
            alert("Invalid Credentials");
        }
}

function Login() 
{
    loginValidate(onSuccess);
}

