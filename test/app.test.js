const request = require('supertest');
const app = require('../src/app');

describe('GET /', () => {
    it('responds with Hola Diners Club del Ecuador!', async () => {
        const res = await request(app).get('/');
        expect(res.statusCode).toBe(200);
        expect(res.text).toBe('Hola Diners Club del Ecuador!');
    });
});

