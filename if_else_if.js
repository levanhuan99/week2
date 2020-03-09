function login() {
    let get_account=document.getElementById('account').value;
    let get_pasword=document.getElementById('password').value;
    if (get_account==='admin'&&get_pasword==='theMaster'){
        alert('welcome');
    }else{
        alert('wrong password');
    }
    if (get_account !== 'admin'){
        alert('your account is not exsist');

    }


}