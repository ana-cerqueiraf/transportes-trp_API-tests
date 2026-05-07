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

    validaRespostaSucesso(response);
    //validaSchemaEntregasPorBase(response);
  });

  it('deve consultar os detalhes das entregas com sucesso passando período de 15 dias', async () => {
    const response = await request(process.env.BASE_URL)
      .get(`/transportadores/${process.env.TEST_USERNAME}/bases/5080/entregas?periodo=15`)
      .set('Authorization', `Bearer ${token}`);

    validaRespostaSucesso(response);

    response.body.forEach(programacao => {
      programacao.entregas.forEach(entrega => {
        entrega.itens.forEach(item => {
          expect(item.notaFiscal).not.toBe('3679733'); //garante que a nota com data fora dos 15 dias enviados no parâmetro não é retornada
        });
      });
    });
  });

  it('deve consultar os detalhes das entregas ENTREGUES com sucesso', async () => {
    const response = await request(process.env.BASE_URL)
      .get(`/transportadores/${process.env.TEST_USERNAME}/bases/5080/entregas?dataInicial=2024-01-01&dataFinal=2026-06-30&statusNota=ENTREGUE`)
      .set('Authorization', `Bearer ${token}`);

    validaRespostaSucesso(response);
    response.body.forEach(programacao => {
      programacao.entregas.forEach(entrega => {
        entrega.itens.forEach(item => {
          expect(item.statusRegistroItem).toBe('ENTREGUE');
        });
      });
    //validaSchemaEntregasPorBase(response);
    });
  });

  it('deve consultar os detalhes das entregas NÃO ENTREGUES com sucesso', async () => {
    const response = await request(process.env.BASE_URL)
      .get(`/transportadores/${process.env.TEST_USERNAME}/bases/5080/entregas?dataInicial=2024-01-01&dataFinal=2026-06-30&statusNota=NAO_ENTREGUE`)
      .set('Authorization', `Bearer ${token}`);

    validaRespostaSucesso(response);
    response.body.forEach(programacao => {
      programacao.entregas.forEach(entrega => {
        entrega.itens.forEach(item => {
          expect(item.statusRegistroItem).toBe('NAO_ENTREGUE');
        });
      });
    //validaSchemaEntregasPorBase(response);
    });
  });

  it('deve consultar os detalhes das entregas SEM REGISTRO com sucesso', async () => {
    const response = await request(process.env.BASE_URL)
      .get(`/transportadores/${process.env.TEST_USERNAME}/bases/5080/entregas?dataInicial=2024-01-01&dataFinal=2026-06-30&statusNota=SEM_REGISTRO`)
      .set('Authorization', `Bearer ${token}`);

    validaRespostaSucesso(response);
    response.body.forEach(programacao => {
      programacao.entregas.forEach(entrega => {
        entrega.itens.forEach(item => {
          expect(item.statusRegistroItem).toBe('SEM_REGISTRO');
        });
      });
    //validaSchemaEntregasPorBase(response);
    });
  });

  it('deve buscar nota fiscal por número com sucesso', async () => {
    let numeroNota = '3679733';
    const response = await request(process.env.BASE_URL)
      .get(`/transportadores/${process.env.TEST_USERNAME}/bases/5080/entregas?numeroNota=${numeroNota}`)
      .set('Authorization', `Bearer ${token}`);

    validaRespostaSucesso(response);
    response.body.forEach(programacao => {
      programacao.entregas.forEach(entrega => {
        entrega.itens.forEach(item => {
          expect(item.notaFiscal).toBe(numeroNota);
        });
      });
    expect(response.body.length).toBe(1);
    //validaSchemaEntregasPorBase(response);
    });
  });

  it('não deve consultar os detalhes das entregas ao utilizar token expirado', async () => {
    const response = await request(process.env.BASE_URL)
      .get(`/transportadores/${process.env.TEST_USERNAME}/bases/5080/entregas`)
      .set('Authorization', `Bearer ${process.env.TOKEN_EXPIRADO}`);

    validaRespostaUnauthorized(response);
  });

});