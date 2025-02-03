const express = require('express')
const cors = require('cors')

const app = express()
let PORT = 3000

app.use(cors())

app.get('/api/classify-number', async (req, res) => {
    const entry = Number(req.query.number)

    if (isNaN(entry)||!Number.isInteger(entry)) {
        return res.status(400).send(
            {
                number: 'alphabet',
                error: true
            });
    }
    let isPrime = entry > 1;
    for (let i = 2; i <= Math.sqrt(entry); i++) {
        if (entry % i === 0) {
            isPrime = false;
            break;
        }
    }

    function isPerfectNumber(number) {
        if (number <= 1) return false;
    
        let sum = 0;
        for (let i = 1; i <= number / 2; i++) {
            if (number % i === 0) {
                sum += i;
            }
        }
    
        return sum === number;
    }

    const isPerfect = isPerfectNumber(entry);

    function isArmstrongNumber(number) {
        const digits = number.toString().split('');
        const numberOfDigits = digits.length;
        const armstrongSum = digits.reduce((accumulator, digit) => {
            return accumulator + Math.pow(parseInt(digit), numberOfDigits);
        }, 0);
        return armstrongSum === number;
    }

    console.log(isArmstrongNumber(entry))

    function digitSum(number){
        const digits = number.toString().split('');
        const sum = digits.reduce((acc, digit) => acc + parseInt(digit), 0);
        return sum;
    }
    const fun_fact_response = await fetch(`http://numbersapi.com/${entry}/math?json`)
    const fun_fact = (await fun_fact_response.json()).text || 'No fun fact available.';

    const properties = []
    if (isArmstrongNumber(entry)){
        properties.push("armstrong")
    }
    if (entry % 2 != 0){
        properties.push("odd")
    }else{
        properties.push("even")
    }

    const response = {
        number: entry,
        is_prime: isPrime,
        is_perfect: isPerfect,
        properties,
        digit_sum:digitSum(entry),
        fun_fact
        };
    res.status(200).send(response);
})

app.listen(PORT, () => {
    console.log(`HNG Stage one app listening on port ${PORT}`)
})
