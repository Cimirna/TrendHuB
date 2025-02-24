function login(){
    const username=document.getElementById('username').value;
    const password=document.getElementById('password').value;
    if(username==='cimirna' && password==='123456'){
        document.getElementById('loginpage').style.display='none';
        document.getElementById('homepage').style.display='block';

    }
    else{
        alert('Invalid user id');
    }
}
function logout(){
    document.getElementById('homepage').style.display='block';
        document.getElementById('loginpage').style.display='none';

    
}


var MenuItems=document.getElementById("MenuItems");
        MenuItems .style.maxHeight="0px";
        function menutoggle()
        {
            if (MenuItems.style.maxHeight=="0px") {
                MenuItems .style.maxHeight="200px"
            }
            else{
                MenuItems .style.maxHeight="0px";
            }
        }