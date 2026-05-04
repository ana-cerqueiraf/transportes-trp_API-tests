const { getAuthToken } = require('./helpers/auth.helper.js');
const { validaRespostaSucesso, validaRespostaUnauthorized, validaSchemaEntregasPorBase } = require('./helpers/validation.helper.js');
const request = require('supertest');

let token;

describe('Consultar Detalhes das Entregas por Base', () => {
  beforeAll(async () => {
    token = await getAuthToken();
  });

  it('deve consultar os detalhes das entregas com sucesso sem enviar nenhum parâmetro', async () => {
    const response = await request(process.env.BASE_URL)
      .get(`/transportadores/${process.env.TEST_USERNAME}/bases/5080/entregas`)
      .set('Authorization', `Bearer ${token}`);

    // 1. Chama a função helper para fazer as validações comuns
    validaRespostaSucesso(response);
    //validaSchemaEntregasPorBase(response);
  });

  it('deve consultar os detalhes das entregas ENTREGUES com sucesso', async () => {
    const response = await request(process.env.BASE_URL)
      .get(`/transportadores/${process.env.TEST_USERNAME}/bases/5080/entregas?statusNota=ENTREGUE`)
      .set('Authorization', `Bearer ${token}`);

    // 1. Chama a função helper para fazer as validações comuns
    validaRespostaSucesso(response);
    //validaSchemaEntregasPorBase(response);
    expect(response.body[0].entregas[0].itens[0].statusRegistroItem).toBe('ENTREGUE');
  });

  it('não deve consultar os detalhes das entregas ao utilizar token expirado', async () => {
    const response = await request(process.env.BASE_URL)
      .get(`/transportadores/${process.env.TEST_USERNAME}/bases/5080/entregas`)
      .set('Authorization', `Bearer ${process.env.TOKEN_EXPIRADO}`);

    validaRespostaUnauthorized(response);
  });

});