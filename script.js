var username = document.getElementById('username')
var email = document.getElementById('email')
var password = document.getElementById('password')
var msg = document.getElementById('msg')
var loginmsg = document.getElementById('loginmsg')
var login = document.getElementById('login')

login.addEventListener('submit', loginform = (e) => {
    e.preventDefault();
    var loginemail = document.getElementById('loginemail')
    var loginpassword = document.getElementById('loginpassword')
    let usersRecord = localStorage.getItem('userrecord');
    usersRecord = JSON.parse(usersRecord)
    for (let i = 0; i < usersRecord.length; i++) {
        if (loginemail.value === usersRecord[i].email && loginpassword.value === usersRecord[i].password) {
            loginmsg.innerHTML = `<div class="alert alert-success alert-dismissible fade show" role="alert">
        <strong>Success</strong> Login Succesfully
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
        </div>`;
        var currentUser = usersRecord[i].username;
        sessionStorage.setItem('currentuser', currentUser)
        setTimeout(() => {
            location.href = 'home.html'
            }, 2000);
        break;
        

        }
        else {
            loginmsg.innerHTML = `<br><div class="alert alert-danger alert-dismissible fade show" role="alert"><strong>Failed! </strong>Wrong Email and Password.
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
            </div>`;

            setTimeout(() => {
                loginmsg.innerHTML = ''
            }, 2000);

        }
    }

});