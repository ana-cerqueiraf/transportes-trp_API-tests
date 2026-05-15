const { getAuthToken } = require('./helpers/auth.helper.js');
const { validaRespostaSucesso, validaSchemaBases, validaRespostaUnauthorized } = require('./helpers/validation.helper.js');
const request = require('supertest');

let token;

describe('GET /{cnpj}/bases| Consultar Quantitativo de Notas por Base', () => {
  beforeAll(async () => {
    token = await getAuthToken();
  });

  it('deve consultar o quantitativo de entregas com sucesso para 1 base', async () => {
    const response = await request(process.env.BASE_URL)
      .get(`/transportadores/${process.env.TEST_USERNAME}/bases?dataInicial=2026-04-01&dataFinal=2026-04-30`)
      .set('Authorization', `Bearer ${token}`);

    validaRespostaSucesso(response);
    validaSchemaBases(response);
    expect(response.body.length).toBe(1);
  });

  it('deve consultar o quantitativo de entregas com sucesso para várias bases', async () => {
    const response = await request(process.env.BASE_URL)
      .get(`/transportadores/${process.env.TEST_USERNAME}/bases?dataInicial=2024-04-03&dataFinal=2026-04-30`)
      .set('Authorization', `Bearer ${token}`);

    validaRespostaSucesso(response);
    validaSchemaBases(response);

    expect(response.body.length).toBeGreaterThan(1);
  });

  it('deve consultar o quantitativo de entregas com sucesso sem enviar datas (default 15 dias)', async () => {
    const response = await request(process.env.BASE_URL)
      .get(`/transportadores/${process.env.TEST_USERNAME}/bases`)
      .set('Authorization', `Bearer ${token}`);

    validaRespostaSucesso(response);
    validaSchemaBases(response);
  });

  it('não deve consultar o quantitativo de entregas ao utilizar token expirado', async () => {
    const response = await request(process.env.BASE_URL)
      .get(`/transportadores/${process.env.TEST_USERNAME}/bases`)
      .set('Authorization', `Bearer ${process.env.TOKEN_EXPIRADO}`);

    validaRespostaUnauthorized(response);
  });

  it('deve consultar o quantitativo de entregas sem resultados (retorno vazio)', async () => {
    const response = await request(process.env.BASE_URL)
      .get(`/transportadores/${process.env.TEST_USERNAME}/bases?dataInicial=2026-04-03&dataFinal=2026-04-04`)
      .set('Authorization', `Bearer ${token}`);

    validaRespostaSucesso(response);
    expect(response.body.length).toBe(0);
  });
});
