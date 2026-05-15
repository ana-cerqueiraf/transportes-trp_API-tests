const Ajv = require('ajv'); // Biblioteca para validação de JSON Schema
const ajv = new Ajv(); // Inicializa o validador
const { dadosTransportadorSchema } = require('./schemas/dadosTransportador.schema.js');
const { notasPorBaseSchema } = require('./schemas/qtdNotasPorBase.schema.js');
const { detalheEntregasSchema } = require('./schemas/detalheEntregasPorBase.schema.js');

exports.validaRespostaSucesso = (response) => {
  // 1. Validações gerais da resposta
  expect(response.status).toBe(200);
  expect(response.body).toBeInstanceOf(Array);
};

exports.validaRespostaUnauthorized = (response) => {
  expect(response.status).toBe(401);
  expect(response.body).toBeInstanceOf(Object);
  expect(response.body.message).toBe('Unauthorized');
};

exports.validaRespostaForbidden = (response) => {
  expect(response.status).toBe(403);
  expect(response.body).toBeInstanceOf(Object);
  expect(response.body.detail).toBe('Forbidden');
};

exports.validaSchemaBases = (response) => {
    const schemaValido = ajv.validate(notasPorBaseSchema, response.body);

    if (!schemaValido) {
      console.error('Erros de validação do Schema:', ajv.errors);
    }
    expect(schemaValido).toBe(true);
};

exports.validaSchemaEntregasPorBase = (response) => {
    const schemaValido = ajv.validate(detalheEntregasSchema, response.body);

    if (!schemaValido) {
      console.error('Erros de validação do Schema:', ajv.errors);
    }
    expect(schemaValido).toBe(true);
};

exports.validaSchemaTransportador = (response) => {
    const schemaValido = ajv.validate(dadosTransportadorSchema, response.body);

    if (!schemaValido) {
      console.error('Erros de validação do Schema:', ajv.errors);
    }
    expect(schemaValido).toBe(true);
};