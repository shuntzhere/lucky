const dateOfBirth = document.querySelector('#date-of-birth');
const luckyNumber = document.querySelector('#lucky-number');
const checkNumberButton = document.querySelector('#check');
const outputBox = document.querySelector('#output');

function compareValues(sum,luckyNumber) {
if(sum%luckyNumber===0){
    outputBox.value="Your birthday is lucky";
} else {
    outputBox.value="Your birthday isn't lucky";
}
}

function checkBirthday() {
    const dob = dateOfBirth.value;
    const sum = calculateSum(dob);
    if(sum && dob){
        compareValues(sum,luckyNumber.value)
    }else {
        outputBox.value="Enter both fields."
    }
}

function calculateSum(dob) {
    dob = dob.replaceAll("-","");
    let sum = 0;
    for(let i=0; i<dob.length;i++){
        sum = sum + Number(dob.charAt(i));
    }
    return sum;
}

checkNumberButton.addEventListener('click', checkBirthday)