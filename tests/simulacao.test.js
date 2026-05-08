const { getAuthTokenSimulacao } = require('./helpers/authSimulacao.helper.js');
const { validaRespostaSucesso, validaRespostaForbidden, validaRespostaUnauthorized } = require('./helpers/validation.helper.js');
const request = require('supertest');

let token;

describe('Simulação com usuario interno', () => {
    beforeAll(async () => {
        token = await getAuthTokenSimulacao();
    });

    it('Usuário interno com token expirado não deve consultar o quantitativo de entregas na simulação', async () => {
        const response = await request(process.env.BASE_URL)
            .get(`/transportadores/${process.env.TEST_USERNAME}/bases?dataInicial=2026-04-01&dataFinal=2026-04-30`)
            .set('chaveVibra', `${process.env.USER_INTERNO}`)
            .set('Authorization', `Bearer ${process.env.TOKEN_EXPIRADO}`);

        validaRespostaUnauthorized(response);
    });

    it('Usuário interno sem permissão de simulaçã não deve consultar o quantitativo de entregas na simulação', async () => {
        const response = await request(process.env.BASE_URL)
            .get(`/transportadores/${process.env.TEST_USERNAME}/bases?dataInicial=2026-04-01&dataFinal=2026-04-30`)
            .set('chaveVibra', `${process.env.USER_INTERNO_INVALIDO}`)
            .set('Authorization', `Bearer ${token}`);

        validaRespostaForbidden(response);
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

    it('pesquisar por número da nota fiscal na simulacao', async () => {
        let numeroNota = '3679735';
        const response = await request(process.env.BASE_URL)
            .get(`/transportadores/${process.env.TEST_USERNAME}/bases/5080/entregas?numeroNota=${numeroNota}`)
            .set('chaveVibra', `${process.env.USER_INTERNO}`)
            .set('Authorization', `Bearer ${token}`);

        validaRespostaSucesso(response);
        response.body.forEach(programacao => {
            programacao.entregas.forEach(entrega => {
                entrega.itens.forEach(item => {
                    expect(item.notaFiscal).toBe(numeroNota);
                });
            });
            expect(response.body.length).toBe(1);
        });

    });

});
