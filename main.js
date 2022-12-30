function submitForm() {
let fname = document.getElementById('fname').value;
let lname = document.getElementById('lname').value;
let email = document.getElementById('mail').value;
let reason = document.getElementById('reason').value;
if(fname!=null && lname!=null && email!=null && reason!=null){
    alert("Form Submitted Successfully")
}

}