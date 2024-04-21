let time = document.getElementById("current-time");

setInterval(() => {
    let d = new Date();
time.innerHTML = d. toLocaleTimeString();
}, 1000);


let datetoday = document.getElementById("date-today");

    let today = new Date();
    let day = `${today.getDate()< 10 ? "0" : ""} ${today.getDate()}`;
    let month = `${(today.getMonth() + 1) < 10 ? "0" : ""} ${today.getMonth()}`;
    let year = today.getFullYear();
    
    datetoday.textContent = `${day}/${month}/${year}`



    let errors;


    let name = document.querySelector("#name");
    let area = document.querySelector("#area");
let phone = document.querySelector("#phone");
let email = document.querySelector("#email");
let services = document.querySelectorAll('input[name="services"]');
let contact = document.querySelectorAll('input[type="checkbox"]')


let alpha = /^[a-z]+$/i;
let numeric = /^[0-9]+$/i;
let alphaNumeric = /^[a-z\d\-_\s]+$/i;
let emailValidation = /^[a-z0-9._%+-]{1,64}@[a-z0-9.-]{1,252}\.[a-z]{2,3}$/i;


function validateForm() {
    errors = 0;
    let contactchecked = document.querySelectorAll('input[type="checkbox"]:checked');
    let mealchecked = document.querySelectorAll('input[name="services"]:checked');

    alpha.test(name.value) ? valid(name) : invalid(name);
    area.value.length == 3 && numeric.test(area.value) ? valid(area) : invalid(area);
    phone.value.length == 7 && numeric.test(phone.value) ? valid(phone) : invalid(phone);
    emailValidation.test(email.value) ? valid(email) : invalid(email);
   
    // Radio and Checkboxes
    serviceschecked.length == 0 ? services.forEach(element => invalid(element)) : services.forEach(element => valid(element));
    contactchecked.length < 2 ? contact.forEach(element => invalid(element)) : contact.forEach(element => valid(element));
    
    // Validation Helpers
    function invalid(element) {
      element.classList.add("is-invalid");
      errors++;
    }
    function valid(element) {
      element.classList.remove("is-invalid");
    }
    
    return errors > 0 ? false : true;
  }
  
  function resetform() {
    document.getElementById("myform").reset();
  }
  document.forms[0].reset();


