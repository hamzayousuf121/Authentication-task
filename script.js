var username = document.getElementById('username')
var email = document.getElementById('email')
var password = document.getElementById('password')
var msg = document.getElementById('msg')
var loginmsg = document.getElementById('loginmsg')
var login = document.getElementById('login')

let data = localStorage.getItem('userrecord');

login.addEventListener('submit', loginform = (e) => {
    e.preventDefault();
    var loginemail = document.getElementById('loginemail')
    var loginpassword = document.getElementById('loginpassword')
        let data = localStorage.getItem('userrecord');
        data = JSON.parse(data)
        if(loginemail.value === data.email && loginpassword.value === data.password)
        loginmsg.innerHTML = `<div class="alert alert-success alert-dismissible fade show" role="alert">
        <strong>Success</strong> Login Succesfully
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
        </div>`;
        setTimeout(() => {
            location.href = 'home.html'
        }, 2000);
});





