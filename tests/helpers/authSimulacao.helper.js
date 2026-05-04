const request = require('supertest');
const { URLSearchParams } = require('url');

const getAuthTokenSimulacao = async () => {
  const baseUrl = process.env.SSO_URL;

  if (!process.env.CLIENT_ID || !process.env.CLIENT_SECRET || !process.env.USER_INTERNO || !process.env.PASS_INTERNO || !baseUrl) {
    throw new Error('Uma ou mais variáveis de ambiente de autenticação não foram encontradas no arquivo .env');
  }

  const credentials = {
    grant_type: 'password',
    client_id: process.env.CLIENT_ID.trim(),
    client_secret: process.env.CLIENT_SECRET.trim(),
    username: process.env.USER_INTERNO.trim(),
    password: process.env.PASS_INTERNO.trim(),
  };

  const requestBody = new URLSearchParams(credentials).toString();
  try {
    const response = await request(baseUrl)
      .post('/auth/realms/brhml/protocol/openid-connect/token')
      .set('Content-Type', 'application/x-www-form-urlencoded')
      .send(requestBody);

    if (response.status !== 200 || !response.body.access_token) {
      console.error('Resposta da API de autenticação (Simulação):', response.body);
      throw new Error('Falha ao obter o access_token como interno. Verifique as credenciais no arquivo .env.');
    }

    return response.body.access_token;

  } catch (error) {
    console.error('Erro fatal durante a tentativa de autenticação como interno:', error.message);
    throw error;
  }
};

module.exports = { getAuthTokenSimulacao };