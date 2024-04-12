const express = require('express');
const app = express();

app.use(express.json())

const customers = [];

// GET /customers: List all customers.
app.get('/customers', (req, res) => {
    res.status(200).json(customers);
})

// POST /customers: Create a new user.
app.post('/customers', (req, res) => {
    const newCustomer = { id: customers.length + 1,
        username: req.body.username,
        email: req.body.email,
        isActive: req.body.isActive
    }
    customers.push(newCustomer);
    res.status(201).json(newCustomer);
})

// GET /customers/:id: Retrieve details of a specific user by ID.
app.get('/customers/:id', (req, res) => {
    const { id } = req.params;
    const numId = Number(id);
    const index = customers.findIndex(customer => customer.id = numId);
    if (index !== -1) {
        res.status(200).send(customers[index]);
    } else {
        res.status(400).send('Customer not found')
    }
})

// PUT /customers/:id: Update a user's information by ID.
app.put('/customers/:id', (req, res) => {
    const { id } = req.params;
    const numId = Number(id);
    const index = customers.findIndex(customer => customer.id = numId);
    if (index !== -1) {
        customers[index] = { ...customers[index], ...req.body }
        res.status(200).send(customers[index]);
    } else {
        res.status(400).send('Customer not found')
    }
})
// DELETE /customers/:id: Delete a user by ID.
app.delete('/customers/:id', (req, res) => {
    const { id } = req.params;
    const numId = Number(id);
    const index = customers.findIndex(customer => customer.id = numId);
    if (index !== -1) {
        customers.slice(index, 1);
        res.status(200).send('Customer successfully deleted');
    } else {
        res.status(400).send('Customer not found')
    }
})

module.exports = {
    app: app
}