const date = document.getElementById("date_of_birth");
const validButton = document.querySelector("button");
const ageMessage = document.querySelector(".form__message");

// add event
validButton.addEventListener("click",  ageCalc);


// age calcul
function ageCalc(e) {
    // get the birth date and parse it
    const birthDate = new Date(date.value);
    const birthDateYear =  birthDate.getFullYear();
    // get today date and parse it
    const todayDate = new Date();
    const yearDate =  todayDate.getFullYear();
    // calculate the difference 
    const age = yearDate - birthDateYear;
    

    // change the background color and  message
    if (age > 130  || age < 0) {
        ageMessage.classList.remove("success");
        ageMessage.classList.remove("error");
        ageMessage.classList.add("notpossible");  
        ageMessage.innerHTML = `Vous êtes un extra terrestre!`}
    else if (age>18)  {
        ageMessage.classList.remove("notpossible");
        ageMessage.classList.remove("error");
        ageMessage.classList.add("success");
        ageMessage.innerHTML = `Vous avez ${age} ans`;
    } else if  (age < 19){
        ageMessage.classList.remove("notpossible");
        ageMessage.classList.remove("success");
        ageMessage.classList.add("error");
        ageMessage.innerHTML = `Vous avez ${age} ans`;}
};