const request = require('supertest');
const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('../src/routes/userRoutes');
const connectDB = require('../src/config/db');

const app = express();
app.use(bodyParser.json());
app.use('/api', userRoutes);

describe('User API', () => {
    beforeAll(async () => {
        await connectDB();
    });

    it('should list users', async () => {
        const res = await request(app).get('/api/worko/user');
        expect(res.statusCode).toEqual(200);
        expect(res.body).toBeInstanceOf(Array);
    });

    // Add more tests for other routes
});
