const billInput = document.querySelector('.bill-input');
const peopleInput = document.querySelector('.people-input');
const tipBtns = document.querySelectorAll('.tip-btn');

const tipAmount = document.querySelector('.tip-amount');

const totalTip = document.querySelector('.total');
const customTip = document.querySelector('.tip-input')
const resetBtn = document.querySelector('.reset-btn');
const errorMsg = document.querySelector('.error-message');
const peopleDiv = document.querySelector('.people-div');

let tip;



tipBtns.forEach(tipBtn => {
    tipBtn.addEventListener('click', () => {
        const percentage = tipBtn.getAttribute('data-percentage');
        const numericValue = parseFloat(percentage);

        if(peopleInput.value <= 0){
            errorMsg.classList.add('active');
            peopleDiv.classList.add('active');
        } else {
            let bill = billInput.value;
            tip = bill * (numericValue / 100);
            let totalpeople = peopleInput.value;
            let billperperson = bill / totalpeople;
            let tipperperson = (tip / totalpeople);
            let totalperperson = (tipperperson + billperperson);
            tipAmount.innerHTML = `${tipperperson.toFixed(2)}`;
            totalTip.innerHTML = `${totalperperson.toFixed(2)}`;
            errorMsg.classList.remove('active');
            peopleDiv.classList.remove('active');
        }
        
    });
});

customTip.addEventListener('input', ()=>{

    if(peopleInput.value <= 0){
        errorMsg.classList.add('active');
        peopleDiv.classList.add('active');
    } else {
        let randomTipValue = customTip.value;
        let bill = billInput.value;
        tip = bill * (randomTipValue / 100);
        let totalpeople = peopleInput.value;
        let billperperson = bill / totalpeople;
        let tipperperson = (tip / totalpeople);
        let totalperperson = (tipperperson + billperperson);
        tipAmount.innerHTML = `${tipperperson.toFixed(2)}`;
        totalTip.innerHTML = `${totalperperson.toFixed(2)}`;
        customTip.classList.add('active');
        errorMsg.classList.remove('active');
        peopleDiv.classList.remove('active');
    }
});

resetBtn.addEventListener('click', reset)


function reset(){
    billInput.value = ''
    customTip.value = ''
    peopleInput.value = ''
    tipAmount.innerHTML = (0).toFixed(2);
    totalTip.innerHTML = (0).toFixed(2);
    customTip.classList.remove('active');
    errorMsg.classList.remove('active');
    peopleDiv.classList.remove('active');
}





