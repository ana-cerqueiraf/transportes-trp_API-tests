const Ajv = require('ajv'); // Biblioteca para validação de JSON Schema
const ajv = new Ajv(); // Inicializa o validador
const { notasPorBaseSchema } = require('./schemas/qtdNotasPorBase.schema.js');
const { detalheEntregasSchema } = require('./schemas/detalheEntregasPorBase.schema.js');

/**
 * Valida a resposta geral de sucesso da API de consulta de entregas.
 * Verifica o status e o tipo da resposta, e valida cada objeto no array.
 * @param {object} response - O objeto de resposta do Supertest.
 */
function validaRespostaSucesso(response) {
  // 1. Validações gerais da resposta
  expect(response.status).toBe(200);
  expect(response.body).toBeInstanceOf(Array);
};

function validaRespostaUnauthorized(response) {
  expect(response.status).toBe(401);
  expect(response.body).toBeInstanceOf(Object);
  expect(response.body.message).toBe('Unauthorized');
};

function validaSchemaBases(response) {
    const schemaValido = ajv.validate(notasPorBaseSchema, response.body);

    if (!schemaValido) {
      console.error('Erros de validação do Schema:', ajv.errors);
    }
    expect(schemaValido).toBe(true);
};

function validaSchemaEntregasPorBase(response) {
    const schemaValido = ajv.validate(detalheEntregasSchema, response.body);

    if (!schemaValido) {
      console.error('Erros de validação do Schema:', ajv.errors);
    }
    expect(schemaValido).toBe(true);
};

// Exporta a função para que possa ser usada em outros arquivos
module.exports = {validaRespostaSucesso, validaRespostaUnauthorized, validaSchemaBases, validaSchemaEntregasPorBase};