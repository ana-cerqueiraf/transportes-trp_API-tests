const { getAuthToken } = require('./helpers/auth.helper.js');
const { validaRespostaSucesso, validaSchemaTransportador, validaRespostaUnauthorized } = require('./helpers/validation.helper.js');
const request = require('supertest');

let token;

describe('GET /{cnpj}/resumo | Consultar Dados do Transportador', () => {

  beforeAll(async () => {
    token = await getAuthToken();
  });

  it('deve consultar os dados de transportador PJ CIF e FOB com sucesso', async () => {

    const response = await request(process.env.BASE_URL)
      .get(`/transportadores/${process.env.TEST_USERNAME}/resumo`)
      .set('Authorization', `Bearer ${token}`);

    validaRespostaSucesso(response);
    // validaSchemaTransportador(response);
    expect(response.body[1].modalidadeEntrega).toBe('CIF');
  });
});