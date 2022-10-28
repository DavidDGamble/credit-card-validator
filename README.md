Describe: cardNumberLength();

Test: 'It should check lenght of card number for #>15 #<17'
Code: cardNumberLength(4102080860435620);
Expected Output: True

Describe: cardNumberTotal()

Test: 'It takes the card number and finds it's total'
Code: numberTotal('4204070780465320')
Expected Output: 52

Describe: cardTotalValid()

Test: 'It should take the total and determine if its valid based on last digit !== 0'
Code: cardTotalValid(49);
Expected output:
True

Describe:cardConvert()

Test: 'It should run card number through the Luhn Algorithm.'
Code: cardConvert('4102080880435620')
Expected Outcome: '4204070780465320'

Describe: cardDefine()

Test: 'It should define what type of credit card the number belongs to.'
Code: cardDefine('3402080860435620')
Expected Outcome:
'American Express'