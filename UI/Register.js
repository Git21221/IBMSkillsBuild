const form = document.querySelector('.form form'),
submitbtn = form.querySelector('.submit input'),
errortxt = form.querySelector('.error-text');
form.onsubmit = (e) => {
    e.preventDefault();
}

submitbtn.onclick = () =>{
    alert("Verify Yourself");
    location.href="./Verify.html";   
            }

