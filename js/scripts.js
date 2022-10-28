function cardNumberLength(number) {
let  numLength = number.length;
  if (numLength >= 15 && numLength < 17) {
    return true;
  } else {
    return false;
  }
}

function numberTotal(cardNumber) {
    let cardArray = cardNumber.split('');
    let total = 0;
    cardArray.forEach(function(element) {
      total += parseInt(element);
    });
    return total;
  }

  function cardTotalValid(total) {
    let numString = total.toString();
    let numArray = numString.split('');
    if (numArray[1] !== 0) {
      return true;
    } else {
      return false;
    }
  }

function cardConvert(cardNumber) {
  const cardArray = cardNumber.split('');
  for (let i = 1; i <= cardArray.length; i += 2) {
    let currentNum = parseInt(cardArray[i]) * 2;
    if (currentNum > 9) {
      let currentNumArray = currentNum.toString().split('');
      currentNum = parseInt(currentNumArray[0]) + parseInt(currentNumArray[1]);
    }
      cardArray[i] = currentNum.toString();
  }
  return cardArray.join('');
}

function cardDefine(cardNumber) {
  const cardArray = cardNumber.split('');
  if (parseInt(cardArray[0]) === 3 && parseInt(cardArray[1]) === 4 || parseInt(cardArray[0]) === 3 && parseInt(cardArray[1]) === 7) {
    return 'American Express';
  } else if (parseInt(cardArray[0]) === 4) {
    return 'Visa';
  } else if (parseInt(cardArray[0]) === 5) {
    return 'Mastercard';
  } else if (parseInt(cardArray[0]) === 6) {
    return 'Discover Card'
  }
}

window.addEventListener("load" , function(){
  let form = document.querySelector("form");
  form.addEventListener("submit" , handleSubmit);
});

function handleSubmit(event) {
  event.preventDefault();
  const cardNumberInput = document.getElementById('cardNumber').value;
  if (cardNumberLength(cardNumberInput)) {
    if (cardTotalValid(numberTotal(cardConvert(cardNumberInput))) === false) {
      document.getElementById('output').innerText = 'INVALID CARD NUMBER!'; 
    } else {
      document.getElementById('output').innerText = 'Valid ' + cardDefine(cardNumberInput);
    }
  } else {
    document.getElementById('output').innerText = 'INVALID CARD LENGTH!';
  }
}