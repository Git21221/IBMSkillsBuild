const form = document.querySelector('.form form'),
submitbtn = form.querySelector('.submit input'),
errortxt = form.querySelector('.error-text');
let fname= document.getElementById("fname");
let lname= document.getElementById("lname");
let email= document.getElementById("email");
let image= document.getElementById("image");
let phone= document.getElementById("phone");
let password= document.getElementById("password");
let cpassword= document.getElementById("cpassword");
form.onsubmit = (e) => {
    e.preventDefault();
}

submitbtn.onclick = () =>{
    //if we buy domain then remove this
    if(fname.value.length>0 && lname.value.length>0 && email.value.length>0 && image.value.length>0 && phone.value.length>0 && password.value.length>0 && cpassword.value.length>0){
        if(password.value == cpassword.value){
            alert("Registration Successfull");
            location.href="./indexafter.html";
        }
        else
        {
            alert("Passwords are not matching please check");
        }
    }
    else
        {
            alert("All field are required");
        }
    //--------
    /*let xhr = new XMLHttpRequest();    
    xhr.open("POST","./UI/Register.php",true);
    xhr.onload = () => {
        if(xhr.readyState === XMLHttpRequest.DONE){
            if(xhr.status == 200){
                let data = xhr.response;
                if(data=="success"){
                    location.href="./index.html";
                }
                else{
                    errortxt.textContent = data;
                    alert(data);
                    errortxt.style.display = "block";
                }
            }
        }
    }


    let formData = new FormData(form);
    xhr.send(formData);*/
}