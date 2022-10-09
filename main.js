let inputBillAmt = document.querySelector("#billAmount");
let inputCash = document.querySelector('#cashRecieved');
let messageDiv = document.querySelector(".display-message");

let submitBtn = document.querySelector("#submit-btn");

let returnCurrencyRowArr = document.querySelectorAll(".notes");

let currencyArr = [2000, 500, 200, 100, 50, 20, 10, 5, 1];


function calculateReturn(amount) {

      for (let i = 0; i < currencyArr.length; i++) {
            let noOfnotes = Math.trunc(amount / currencyArr[i]);

            if (noOfnotes > 0)
                  returnCurrencyRowArr[i].innerText = noOfnotes;

            amount %= currencyArr[i];
      }

}

function displayMessage(message , bg ) {
      messageDiv.innerHTML = `<h2>${message}</h2>`;
      messageDiv.style.backgroundColor = bg ;
      messageDiv.style.display = "block";
}

function calculateChange(event) {
     

      let billAmt = parseInt(inputBillAmt.value);
      let cashAmt = parseInt(inputCash.value);

      returnCurrencyRowArr.forEach((node) => {
            node.innerText = "";
      })

      
      
      
      if(inputBillAmt.value ===""  || inputCash.value === ""){
            displayMessage("Empty Input Feild" , "red") ;
      }
      else  if (billAmt <= 0 || cashAmt <= 0) {
            displayMessage("Invalid Input, Amount cant be negative or zero" , "red");
           
      }
      else if (cashAmt < billAmt) {
            displayMessage("Cash is less then bill Amount !" , "red");
           
      }
      else if (cashAmt === billAmt) {
            displayMessage("No Change need to be return!" , "cyan");
      }
      else {
           
            let amtToBeRetun = Number(cashAmt - billAmt);
            displayMessage(`Amount to be return ${amtToBeRetun}` , "cyan")
            calculateReturn(amtToBeRetun);
      }


}

submitBtn.addEventListener("click", calculateChange);

