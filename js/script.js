document.getElementById('donate-btn').addEventListener('click', function(){
console.log('clicked');

const inputDonate = document.getElementById('input-donate').value;
const inputNumber = parseInt(inputDonate);

const amountBalance = document.getElementById('amount-balance').innerText;
const amountBalanceNumber = parseInt(amountBalance)




const navBalance = document.getElementById('balance').innerText;
const navBalanceNumber = parseInt(navBalance);
console.log(navBalanceNumber , amountBalanceNumber , inputNumber);

const newBalance = inputNumber +amountBalanceNumber;
document.getElementById('amount-balance').innerText = newBalance;
if(isNaN(inputNumber) || inputNumber <= 0){
    alert('Please give correct amount');
}
const updateBalance = navBalanceNumber - inputNumber;
document.getElementById('balance').innerText = updateBalance ;
if(navBalanceNumber <inputNumber){
    alert('amount more than update balance');
}
document.getElementById('input-donate').value = '';

const cardTitle =document.getElementById('card-title').innerText ;
console.log(cardTitle);
addToDonationHistory(inputNumber,cardTitle);
document.getElementById('my_modal_1').showModal();
})

const addToDonationHistory = (inputNumber,cardTitle)=>{
const historyContainer = document.getElementById('History-container');
const div = document.createElement('div')
div.classList.add('border', 'p-4', 'rounded-lg', 'shadow-sm');
div.innerHTML= `  
<h1>title : ${cardTitle}</h1>
<p>Donation Amount : ${inputNumber}</p>
<p>Date : ${new Date().toLocaleString()}</p>

`
historyContainer.appendChild(div);
}

document.getElementById('show-history-btn').addEventListener('click', ()=>{

document.getElementById('show-donate-btn').classList.remove('active');
document.getElementById('show-history-btn').classList.add('active');
document.getElementById('donation-container').classList.add('hidden');
document.getElementById('History-container').classList.remove('hidden')
});

document.getElementById('show-donate-btn').addEventListener('click',()=>{

    document.getElementById('show-donate-btn').classList.add('active');
document.getElementById('show-history-btn').classList.remove('active');
document.getElementById('donation-container').classList.remove('hidden');
document.getElementById('History-container').classList.add('hidden')
})
