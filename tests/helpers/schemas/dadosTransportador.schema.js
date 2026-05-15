const dadosTransportadorSchema = {
  type: "array",
  items: {
    type: "object",
    required: [
      "id",
      "cnpj",
      "nome",
      "codigoSAP",
      "situacaoCadastro",
      "bairro",
      "codigoPostal",
      "cidade",
      "regiao",
      "telefone",
      "celular",
      "nomeContato",
      "inscricaoEstadual",
      "tipoConta",
      "modalidadeEntrega",
      "tipoPessoa"
    ],
    properties: {
      id: { type: "number" },
      cnpj: { type: "string" },
      nome: { type: "string" },
      codigoSAP: { type: "string" },
      situacaoCadastro: { type: "string", enum: ["ANALISE", "CADASTRO_PENDENTE_ATUALIZACAO"] },
      rua: { type: ["string", "null"] },
      numero: { type: ["string", "null"] },
      complemento: { type: ["string", "null"] },
      bairro: { type: "string" },
      codigoPostal: { type: "string" },
      cidade: { type: "string" },
      regiao: { type: "string" },
      telefone: { type: "string" },
      celular: { type: "string" },
      email: { type: ["string", "null"] },
      nomeContato: { type: "string" },
      inscricaoEstadual: { type: "string" },
      inscricaoMunicipal: { type: ["string", "null"] },
      tipoConta: { type: "string", enum: ["ZFTR", "ZFCA"] },
      modalidadeEntrega: { type: "string", enum: ["FOB", "CIF"] },
      tipoPessoa: { type: "string", enum: ["JURIDICA"] }
    },
    additionalProperties: false
  }
};

module.exports = { dadosTransportadorSchema };
