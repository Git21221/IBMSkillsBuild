const form = document.querySelector('.form form'),
submitbtn = form.querySelector('.submit input'),
errortxt = form.querySelector('.error-text');
form.onsubmit = (e) => {
    e.preventDefault();
}

submitbtn.onclick = () =>{
    //if we buy domain then remove this
    alert("Login Successfull");
    location.href="./indexafter.html";
    //--------

    let xhr = new XMLHttpRequest();    
    xhr.open("POST","./UI/Login.php",true);
    xhr.onload = () => {
        if(xhr.readyState === XMLHttpRequest.DONE){
            if(xhr.status == 200){
                let data = xhr.response;
                
                if(data=="success"){
                    location.href="#";
                }
                
                else{
                    errortxt.textContent = data;
                    errortxt.style.display = "block";
                }
            }
        }
    }


    let formData = new FormData(form);
    xhr.send(formData);
}