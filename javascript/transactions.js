var totalIncome = [];
var expenses = [];
var generalIncome = 0;
var generalExpenses = 0;
var incomeCounter = 0;
var expensesCounter = 0;
let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Agu", "Sep", "Oct", "Nov", "Dec"]

let currentDate =  new Date();
let currentMonth = currentDate.getMonth();

// var incomeBalance = document.getElementById("incomeBalance");
// incomeBalance.innerHTML = `$ ${generalIncome}`;

// var expensesBalance = document.getElementById("expensesBalance");
// expensesBalance.innerHTML = `$ ${generalExpenses}`

function income() {
     var incomeBalance = document.getElementById("incomeBalance");
     var receivedAmount = document.getElementById("receivedAmount");
     var receivedAmountValue = receivedAmount.value;
     receivedAmountValue = parseInt(receivedAmountValue);

     var incomeDescription = document.getElementById("income-description");
     var incomeDescriptionValue = incomeDescription.value;

    document.getElementById("income-form").reset();

    totalIncome.push({
         amount: receivedAmountValue,
         concept: incomeDescriptionValue,
         date: new Date(),
     });

 generalIncome = totalIncome.map((income) => income.amount).reduce((a, b) => a + b, 0);
    
//  incomeBalance.innerHTML = `$ ${generalIncome.toLocaleString('en-US')}`;

     summaryOfIncome(totalIncome)
}

function expense() {
     var amountSpent = document.getElementById("amountSpent");
     amountSpentValue = amountSpent.value;
     amountSpentValue = parseInt(amountSpentValue);

     var expenseDescription = document.getElementById("expense-description");
     var expenseDescriptionValue = expenseDescription.value;

     document.getElementById("outcome-form").reset();

     expenses.push({
         amount: amountSpentValue,
         concept: expenseDescriptionValue,
         date: new Date(),
     })

    generalExpenses = expenses.map((expense) => expense.amount).reduce((a, b) => a + b, 0);

    // expensesBalance.innerHTML = `$ ${generalExpenses.toLocaleString('en-US')}`;

    summaryOfExpenses(expenses)
}

var conceptsList = document.getElementById("concepts");

function summaryOfIncome(list) {
     const parent = document.getElementById("concepts")
     const itemConcept = document.createElement('article');
     itemConcept.classList.add("card-container");

     itemConcept.innerHTML = `<div class="card-header-container">
     <p class="date">${list[incomeCounter].date.getDate()} ${months[currentMonth]} ${list[incomeCounter].date.getFullYear()}</p>
     <i class="fa-solid fa-money-bill-transfer fa-2x"></i>
 </div>
 <div class="card-info-container">
     <img src="/logos-and-icons/user-expenses-05.png" alt="">
     <p class="card-container-reference">${list[incomeCounter].concept}</p>
     <p class="card-container-cost"><span>+ </span>${list[incomeCounter].amount.toLocaleString('en-US')}</p>
 </div>`

 parent.insertAdjacentElement("beforeend", itemConcept)
 incomeCounter = incomeCounter + 1;
}

function summaryOfExpenses(list) {
    const parent = document.getElementById("concepts")
    const itemConcept = document.createElement('article');
    itemConcept.classList.add("card-container");

    itemConcept.innerHTML = `<div class="card-header-container">
    <p class="date" id="date">${list[expensesCounter].date.getDate()} ${months[currentMonth]} ${list[expensesCounter].date.getFullYear()}</p>
    <i class="fa-solid fa-money-bill-transfer"></i>
</div>
<div class="card-info-container">
    <img src="logos-and-icons/user-expenses-05.png" alt="">
    <p class="card-container-reference">${list[expensesCounter].concept}</p>
    <p class="card-container-cost"><span>- </span>${list[expensesCounter].amount.toLocaleString('en-US')}</p>
</div>`

parent.insertAdjacentElement("beforeend", itemConcept)
expensesCounter = expensesCounter + 1;
}