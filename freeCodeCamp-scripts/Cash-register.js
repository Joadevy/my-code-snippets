/*
Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.
cid is a 2D array listing available currency.
The checkCashRegister() function should always return an OBJECT with a STATUS KEY and a CHANGE KEY.

Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.
*/

function checkCashRegister(price, cash, cid) {
  let change = cash - price;
  
  // It's necesasary to work with integer numbers becausee JS have problems with float numbers (if we work with 0.01 for example, bugs will occur)
  let wordToNumber = {
    'PENNY' : 0.01*100,
    'NICKEL' : 0.05*100,
    'DIME' : 0.1*100,
    'QUARTER': 0.25*100,
    'ONE' : 1*100,
    'FIVE':5*100,
    'TEN':10*100,
    'TWENTY':20*100,
    'ONE HUNDRED':100*100,
  }
  
  // We need to search in the cid after sorting it by high-low so as to give the change as good as posible for the customer.
  let cashData = [...cid].sort((a,b)=> {return wordToNumber[b[0]]-wordToNumber[a[0]]})
	// Once it's sorted, it's necessary to do the change process saving the currency's name used and how much has been paid using that currency.
  .reduce((obj,currency) => {
    let controlMoney = currency[1]*100
    if (wordToNumber[currency[0]] <= obj.status && currency[1]>0){
      	let acum = 0;
        while(wordToNumber[currency[0]] <= obj.status && controlMoney>0){
          obj.status-=wordToNumber[currency[0]]
          controlMoney -= wordToNumber[currency[0]]
          acum+=wordToNumber[currency[0]]
        }
        obj.change.push([currency[0],acum/100])
    }
    return obj
  },{status:change*100,change:[]})
  
  // Now, It's time to check the status of cashData because it keeps the change to be given to the customer.
	if (cashData.status>0){
    cashData.status = "INSUFFICIENT_FUNDS";
    cashData.change = []
  } else if (cashData.status == 0 
             && cid.reduce((totalInCid,currency) => {totalInCid+=currency[1]; return totalInCid},0)-change == 0){ // The second condition checks if the cid is actually without money to close the cid.
     cashData.status = "CLOSED";
   	 cashData.change = cid;
  } else {
    cashData.status = "OPEN"
  }
	return cashData;
}

// Testing area
checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])
// It returns {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}

checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) 
// It return {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}

checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) 
// It returns {status: "INSUFFICIENT_FUNDS", change: []}

