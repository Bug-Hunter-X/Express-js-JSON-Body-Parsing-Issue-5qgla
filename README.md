# Express.js JSON Body Parsing Bug

This repository demonstrates a common issue in Express.js applications where the server fails to correctly parse JSON data sent in the request body.  The bug results in an empty `req.body` object, even when valid JSON data is provided.

## Bug Description

The provided code uses `express.json()` middleware, which should parse JSON data.  However, due to a potential misconfiguration or missing dependency, the parsing fails, leading to unexpected behavior.

## Solution

The solution provided addresses the parsing issue, ensuring the server correctly receives and processes the JSON data.

## How to reproduce

1. Clone this repository.
2. Install dependencies: `npm install express`
3. Run the server: `node bug.js`
4. Send a POST request to `/data` with a JSON payload (using tools like Postman or curl).  Observe that the server logs an empty `req.body`.
5. Run the solution `node bugSolution.js` and repeat step 4, observing the correct parsing.

This example is intended to highlight a common mistake and offer a quick solution.