function getFormValue() {
    var fName = document.getElementsByName('fname')[0].value;
    var lName = document.getElementsByName('lname')[0].value;
    document.getElementById('form1').innerText = fName + ' ' + lName;
    console.log(fName, lName);
}