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
  let wordToNumber = {
    'PENNY' : 0.01,
    'NICKEL' : 0.05,
    'DIME' : 0.1,
    'QUARTER': 0.25,
    'ONE' : 1,
    'FIVE':5,
    'TEN':10,
    'TWENTY':20,
    'ONE HUNDRED':100
  }
  // Need to search in the cid after sorting it by high-low so as to give the change as good as posible for the customer.
  let c = cid.sort((a,b)=> {return b[1]*wordToNumber[b[0]]-a[1]*wordToNumber[a[0]]})
	// Once it's sorted, it needs to do the change process saving the currency's name used and how much has been paid using that currency.
  .reduce((changeToGive,currency) => {
    console.log(currency)
    /*if (currency[1]<changeToGive){
      	while(currency[1] < changeToGive){
          console.log(currency)
          changeToGive-=currency[1]
        }
    }*/
    return changeToGive
  },change)
  
  console.log(c)
  // return change;
}

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])

