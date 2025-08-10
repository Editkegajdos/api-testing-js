const axios = require('axios');

describe('API Testing', () => {
  test('GET user data', async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users/1');
    expect(response.status).toBe(200);
    expect(response.data).toHaveProperty('id', 1);
    expect(response.data).toHaveProperty('email');
  });
});
