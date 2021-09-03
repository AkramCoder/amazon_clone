const functions = require("firebase-functions");
const express = require("express")
const cors = require('cors');
const { response } = require("express");
const stripe = require('stripe')('sk_test_51JI9RpG4OyyP4qfKQXsP0sATxEypbNgxUppu1Jwpe9GGdznB5FLdf1G0u7NP1avdhAZYG9dAZCeL6kvECEDaoUN300j0duImS3')

// API

// App config
const app = express()

// Middlewares
app.use(cors({ origin: true }))
app.use(express.json())

// API routes
app.get('/', (request, response) => response.status(200).send('hello world'))

app.post('/payments/create', async (request, response) => {
    const total = request.query.total

    console.log('Payment request boom ', total)
    const paymentIntent = await stripe.paymentIntent.create({
        amount: total,
        currency: "usd",
    })

    response.status(201).send({
        clientSecret: paymentIntent.client_secret
    })
})

// Listen command
exports.api = functions.https.onRequest(app)

// exemple endpoint
// http://localhost:5001/clone-6c675/us-central1/api