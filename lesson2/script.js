'use strict';

let money, time;

function start() {
    
    time=prompt("Please enter date in YYYY-MM-DD format", '');
    
    while(isNaN(money) || money =='' || money == null || money == undefined) {
        money=+prompt("Your monthly budget?", '');
    }
}

//start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpences: {},
    income: '',
    savings: true
};

function chooseExpenses() {
    for (let i=0;i < 2; i++) {
        let a = prompt("Enter necessary type of expences in this month"),
            b = prompt("How much will it cost?");
        
        if(typeof(a)==='string' && typeof(a)!=null && typeof(b)==='string' && typeof(b)!=null 
            && a!='' && b!=='' && a.length<50 ) {
            console.log(a+':'+b);
            appData.expenses[a]=b;
        } else {
            i--;
        }
    
    
    }
}

//chooseExpenses();

function detectDailyBudget(){
    appData.moneyPerDay = (appData.budget / 30).toFixed(2);
    // console.log(appData);
    alert("Daily budget is: "+appData.moneyPerDay);
}
//detectDailyBudget();

function detectLevel(){
    if(appData.moneyPerDay<100) {
        console.log("Minimal welth level");
    } else if (appData.moneyPerDay>100 && appData.moneyPerDay<2000) {
        console.log("Middle class income level");   
    } else if (appData.moneyPerDay>2000) {
        console.log("Ritch b..ch");
    } else {
        console.log("Something went wrong.");
    }
}
//detectLevel();


function checkSavings(){
    if(appData.savings == true) {
        let save=+prompt("What is the savings ammount?"),
            percent = +prompt("On what interest rate?");

        appData.monthIncome = save / 100 / 12 * percent;
        alert("Your deposit montly incime:" + appData.monthIncome);
    }
}

//checkSavings();

function chooseOptExpenses(){
    for(let i=1; i<4;i++){

        let optionalExpenses=+prompt("Ammount of optional expenses ?");

        appData.optionalExpences[i]=optionalExpenses;
    }
}
chooseOptExpenses();
