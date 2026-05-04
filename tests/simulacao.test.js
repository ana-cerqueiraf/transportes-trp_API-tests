const { getAuthTokenSimulacao } = require('./helpers/authSimulacao.helper.js');
const { validaRespostaSucesso, validaSchemaBases, validaSchemaEntregasPorBase } = require('./helpers/validation.helper.js');
const request = require('supertest');

let token;

describe('Simulação com usuario interno', () => {
    beforeAll(async () => {
        token = await getAuthTokenSimulacao();
    });

    it('consultar o quantitativo de entregas na simulação', async () => {
        const response = await request(process.env.BASE_URL)
            .get(`/transportadores/${process.env.TEST_USERNAME}/bases?dataInicial=2026-04-01&dataFinal=2026-04-30`)
            .set('chaveVibra', `${process.env.USER_INTERNO}`)
            .set('Authorization', `Bearer ${token}`);

        validaRespostaSucesso(response);
    });

    it('consultar os detalhes das entregas na simulacao', async () => {
        const response = await request(process.env.BASE_URL)
            .get(`/transportadores/${process.env.TEST_USERNAME}/bases/5080/entregas`)
            .set('chaveVibra', `${process.env.USER_INTERNO}`)
            .set('Authorization', `Bearer ${token}`);

        validaRespostaSucesso(response);
    });

});
