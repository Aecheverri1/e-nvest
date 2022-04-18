let users = [
    {
        user: "Andres25",
        password: "cards987"
    },
    {
        user: "Captain28",
        password: "7523"
    }
]

function logIn() {
    let user = document.getElementById("userName");
    let userValue = user.value;

    let password = document.getElementById("password");
    let passwordValue = password.value;

    if(userValue == users[0].user && passwordValue == users[0].password) {
        window.location.assign("/html/home.html")
    }
    else {
        alert("Wrong username or password");
    }
}