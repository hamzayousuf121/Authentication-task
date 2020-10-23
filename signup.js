var signup = document.getElementById('signup')
var username = document.getElementById('username')
var email = document.getElementById('email')
var password = document.getElementById('password')
var users = [];
let userFound = false;
var emailError = document.getElementById('emailError')

onEmailExist = () => {
    var userEmailFound = false;

    let usersRecord = localStorage.getItem('userrecord');
    if (usersRecord) {
        usersRecord = JSON.parse(usersRecord)
        for (let i = 0; i < usersRecord.length; i++) {
            if (email.value === usersRecord[i].email) {
                emailError.innerHTML = '<span class="text-danger"><b>Email</b> Already Exist!!</span>';
                email.focus();
                userEmailFound = true;
                break;
            }
        }

        if (userEmailFound === false) {
            emailError.innerHTML = '';
        }
    }
}

signup.addEventListener('submit', signupform = (e) => {
    e.preventDefault();
    if (username.value != '' && email.value != '' && password.value != '') {
        var userRecord = {
            username: username.value,
            email: email.value,
            password: password.value
        }
        users.push(userRecord)
        userRecord = JSON.stringify(users)
        localStorage.setItem('userrecord', userRecord)
        username.value = '' 
        email.value = '' 
        password.value = '';

        msg.innerHTML = `<br><div class="alert alert-success alert-dismissible fade show" role="alert">
        <strong>Success</strong> You Are Registered Success Fully.
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
        </div>`;
        setTimeout(() => {
            location.href = 'login.html'
        }, 2000);
    }
});
