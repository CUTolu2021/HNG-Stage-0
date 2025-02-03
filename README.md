# HNG12 Backend API

https://hng.tech/hire/nodejs-developers 

# Number Classification API

## Overview

The Number Classification API is a RESTful API that takes a number as input and returns interesting mathematical properties about it, along with a fun fact. The API can classify numbers as prime, perfect, or Armstrong, and it provides the sum of the digits of the number.

## Features

- Classifies numbers as prime, perfect, or Armstrong.
- Returns whether the number is odd or even.
- Provides the sum of the digits of the number.
- Fetches a fun fact about the number from the Numbers API.
- Handles CORS for cross-origin requests.

## API Endpoint

### GET `/api/classify-number`

#### Query Parameters

- `number`: The number to classify (must be a valid integer).

#### Example Request
GET https://hng-stage-0-three.vercel.app/api/classify-number?number=153


#### Example Response (200 OK)

```json
{
    "entry": 371,
    "is_prime": false,
    "is_perfect": false,
    "properties": ["armstrong", "odd"],
    "digit_sum": 11,
    "fun_fact": "371 is an Armstrong number because 3^3 + 7^3 + 1^3 = 371"
}


{
    "number": "alphabet",
    "error": true
}
