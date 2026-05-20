const loginFunc = () => {
    const login = document.querySelector('input[name="login"]').value;
    const password = document.querySelector('input[name="password"]').value;

    const currentLogin = localStorage.getItem("login");
    const currentPassword = localStorage.getItem("password");

    if (currentLogin == login  && currentPassword == password){
        localStorage.setItem("isAuth", true)
        location.href = "http://127.0.0.1:5500/go.html"
    }
}



// A  &&  B
// 0      0     0
// 0      1     0
// 1      0     0
// 1      1     1


// A  ||  B
// 0      0     0
// 0      1     1
// 1      0     1
// 1      1     1