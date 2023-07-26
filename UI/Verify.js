const otp = document.querySelectorAll('.otp_field');
otp[0].focus();
otp.forEach((field, index) =>{
    field.addEventListener('keydown', (e) =>{
        if(e.key >=0 && e.key<=9){
            otp[index].value = "";
            setTimeout(() => {
                otp[index+1].focus();
            },4);
        }
        else if(e.key === 'Backspace'){
            setTimeout(() => {
                otp[index-1].focus();
            },4);
        }
    });
});
const form = document.querySelector('.form form'),
submitbtn = form.querySelector('.submit .button'),
errortxt = form.querySelector('.error-text');
let T1= document.getElementById("T1");
let T2= document.getElementById("T2");
let T3= document.getElementById("T3");
let T4= document.getElementById("T4");
form.onsubmit = (e) => {
    e.preventDefault();
}

submitbtn.onclick = () =>{

                if(T1.value==2){
                    if(T2.value==0){
                        if(T3.value==2){
                            if(T4.value==3){
                                alert("Registration Succesfull");
                                location.href="index.html";
                            }
                            else{
                                alert("Please write the correct year");
                            }
                        }
                        else{
                                alert("Please write the correct year");
                            }
                    }
                    else{
                                alert("Please write the correct year");
                            }
                }
        else{
                                alert("Please write the correct year");
                            }
}
