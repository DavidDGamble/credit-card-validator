Describe: cardNumberLength();

Test: 'It should check lenght of card number for #>15 #<17'
Code: cardNumberLength(4102080860435620);
Expected Output: True

Describe: cardNumberCovert()

Test: 'It take the card number and find its total'
Code: cardNumberConvert('4204070780465320')
Expected Output: 52

Describe: cardTotalValid()

Test: 'It should take the total and determine if its valid based on last digit !== 0'
Code: cardTotalValid(49);
Expected output:
True

Describe: