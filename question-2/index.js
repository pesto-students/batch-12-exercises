const getStringorEmpty = string => (typeof string === 'string') ? string : "";

function getFormvalue(event) {
    event.preventDefault();
    const form = document.getElementById('form1');
    console.log(form);
    let first_name = form.elements['fname'].value;
    let last_name = form.elements['lname'].value;
    console.log({
        first_name: getStringorEmpty(first_name),
        last_name: getStringorEmpty(last_name)
    });
}