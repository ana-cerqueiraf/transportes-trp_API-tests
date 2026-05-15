const { getAuthTokenPF } = require('./helpers/auth.helper.js');
const { validaRespostaSucesso, validaSchemaTransportador, validaRespostaUnauthorized } = require('./helpers/validation.helper.js');
const request = require('supertest');

let token;

describe('GET /{cpf}/resumo | Consultar Dados do Transportador PF', () => {

  beforeAll(async () => {
    token = await getAuthTokenPF();
  });

  it('deve consultar os dados de transportador PF FOB com sucesso', async () => {

    const response = await request(process.env.BASE_URL)
      .get(`/transportadores/${process.env.CPF}/resumo`)
      .set('Authorization', `Bearer ${token}`);

    validaRespostaSucesso(response);
    // validaSchemaTransportador(response);
    expect(response.body[0].modalidadeEntrega).toBe('FOB');
  });
});