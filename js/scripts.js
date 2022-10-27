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


console.log(cardConvert('4102080880435620'));


// function cardNumberConvert(cardNumber) {
//   let isValid = false;
//   const cardArray = cardNumber.split('');
//   for (let i = 1; i <= cardArray.length; i += 2) {
//     let currentNum = parseInt(cardArray[i]) * 2;
//     if (currentNum > 9) {
//       let currentNumArray = currentNum.toString().split('');
//       currentNum = parseInt(currentNumArray[0]) + parseInt(currentNumArray[1]);
//     }
//       cardArray[i] = currentNum.toString();
//   }
//   let total = 0;
//   cardArray.forEach(function(element) {
//     total += parseInt(element);
//   });
//   const totalArray = total.toString().split('');
//   if (parseInt(totalArray[totalArray.length]) !== 0) {
//     isValid = true;
//   }
//   return isValid;
// }

