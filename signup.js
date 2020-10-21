var signup = document.getElementById('signup')
var username = document.getElementById('username')
var email = document.getElementById('email')
var password = document.getElementById('password')

signup.addEventListener('submit', signupform = (e) => {
    e.preventDefault();
    if (username.value != '' && email.value != '' && password.value != '') {
        var userRecord = {
            username : username.value,
            email : email.value,
            password : password.value
        }
        userRecord = JSON.stringify(userRecord)
        localStorage.setItem('userrecord', userRecord)
        

        msg.innerHTML = `<div class="alert alert-warning alert-dismissible fade show" role="alert">
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
