function validateForm() {
    let x =document.forms["myForm"]["fname"].value;
    let y = document.forms["myForm"]["lastname"].value;
    if (x == "" || y==""){
        alert("Name must be filled out");
        return false;
     

    }
}