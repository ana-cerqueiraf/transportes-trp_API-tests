const detalheEntregasSchema = {
  "type": "array",
  "items": {
    "type": "object",
    "properties": {
      "id": {
        "type": "number"
      },
      "baseId": {
        "type": "number"
      },
      "placaCt": {
        "type": "string"
      },
      "placaCavalo": {
        "type": "string"
      },
      "incoterm": {
        "type": "string"
      },
      "modalidadeEntrega": {
        "type": "string"
      },
      "tipoTransporte": {
        "type": "string"
      },
      "tipoOperacao": {
        "type": "string"
      },
      "modal": {
        "type": "string"
      },
      "statusTd": {
        "type": "number"
      },
      "statusMd": {
        "type": "number"
      },
      "cnpjTransportador": {
        "type": "string"
      },
      "criadoEm": {
        "type": "string"
      },
      "agendadoPara": {
        "type": "string"
      },
      "eb": {
        "type": "string"
      },
      "epi": {
        "type": "string"
      },
      "spi": {
        "type": "string"
      },
      "sb": {
        "type": "string"
      },
      "motoristas": {
        "type": "array",
        "items": {
          "type": "object",
          "properties": {
            "id": {
              "type": "string"
            },
            "motoristaId": {
              "type": "number"
            },
            "programacaoId": {
              "type": "number"
            },
            "registradoEm": {
              "type": "string"
            },
            "atual": {
              "type": "boolean"
            }
          },
          "required": [
            "id",
            "motoristaId",
            "programacaoId",
            "registradoEm",
            "atual"
          ]
        }
      },
      "entregas": {
        "type": "array",
        "items": {
          "type": "object",
          "properties": {
            "id": {
              "type": "string"
            },
            "recebedorId": {
              "type": "number"
            },
            "emissorId": {
              "type": "number"
            },
            "ordemEntrega": {
              "type": "number"
            },
            "finalizadaEm": {
              "type": "string"
            },
            "itens": {
              "type": "array",
              "items": {
                "type": "object",
                "properties": {
                  "id": {
                    "type": "string"
                  },
                  "remessaId": {
                    "type": "number"
                  },
                  "itemRemessa": {
                    "type": "number"
                  },
                  "ordemVendaId": {
                    "type": "number"
                  },
                  "itemOrdemVenda": {
                    "type": "number"
                  },
                  "produtoId": {
                    "type": "number"
                  },
                  "notaFiscal": {
                    "type": "string"
                  },
                  "faturadoEm": {
                    "type": "string"
                  },
                  "statusFaturamento": {
                    "type": "string"
                  },
                  "statusRegistroItem": {
                    "type": "string"
                  },
                  "compartimentos": {
                    "type": "array",
                    "items": {
                      "type": "object",
                      "properties": {
                        "id": {
                          "type": "string"
                        },
                        "compartimentoUt": {
                          "type": "number"
                        },
                        "placaUt": {
                          "type": "string"
                        },
                        "compartimentoCt": {
                          "type": "number"
                        },
                        "quantidadeProgramada": {
                          "type": "number"
                        },
                        "quantidadeFaturada": {
                          "type": "number"
                        },
                        "uom": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "id",
                        "compartimentoUt",
                        "placaUt",
                        "compartimentoCt",
                        "quantidadeProgramada",
                        "quantidadeFaturada",
                        "uom"
                      ]
                    }
                  },
                  "registroItem": {
                    "type": "object",
                    "properties": {
                      "id": {
                        "type": "string"
                      },
                      "canalRegistro": {
                        "type": "string"
                      },
                      "tipoRegistro": {
                        "type": "string"
                      },
                      "registradoEm": {
                        "type": "string"
                      },
                      "registradoPor": {
                        "type": "string"
                      },
                      "recusaDeDados": {
                        "type": "boolean"
                      },
                      "nomeRecebedor": {
                        "type": "string"
                      },
                      "cargoRecebedor": {},
                      "documentoRecebedor": {
                        "type": "string"
                      },
                      "tipoDocumento": {
                        "type": "string"
                      },
                      "telefoneRecebedor": {},
                      "entregueEm": {
                        "type": "string"
                      },
                      "latitude": {
                        "type": "number"
                      },
                      "longitude": {
                        "type": "number"
                      },
                      "ip": {
                        "type": "string"
                      },
                      "device": {
                        "type": "string"
                      },
                      "sapNfe": {},
                      "codigoNaoEntrega": {
                        "type": "string"
                      },
                      "motivoNaoEntrega": {
                        "type": "string"
                      },
                      "submotivoNaoEntrega": {
                        "type": "string"
                      },
                      "statusComprovante": {
                        "type": "string"
                      },
                      "nomeMotorista": {
                        "type": "string"
                      }
                    },
                    "required": [
                      "id",
                      "canalRegistro",
                      "tipoRegistro",
                      "registradoEm",
                      "registradoPor",
                      "recusaDeDados",
                      "cargoRecebedor",
                      "documentoRecebedor",
                      "tipoDocumento",
                      "telefoneRecebedor",
                      "sapNfe",
                      "statusComprovante"
                    ]
                  },
                  "descricaoProduto": {
                    "type": "string"
                  },
                  "uomProduto": {
                    "type": "string"
                  }
                },
                "required": [
                  "id",
                  "remessaId",
                  "itemRemessa",
                  "ordemVendaId",
                  "itemOrdemVenda",
                  "produtoId",
                  "notaFiscal",
                  "faturadoEm",
                  "statusFaturamento",
                  "statusRegistroItem",
                  "compartimentos",
                  "registroItem",
                  "descricaoProduto",
                  "uomProduto"
                ]
              }
            },
            "statusRegistroEntrega": {
              "type": "string"
            },
            "statusViagemEntrega": {
              "type": "string"
            },
            "nomeFantasia": {
              "type": "string"
            },
            "endereco": {
              "type": "string"
            }
          },
          "required": [
            "id",
            "recebedorId",
            "emissorId",
            "ordemEntrega",
            "finalizadaEm",
            "itens",
            "statusRegistroEntrega",
            "statusViagemEntrega",
            "nomeFantasia",
            "endereco"
          ]
        }
      },
      "statusViagem": {
        "type": "string"
      },
      "nomeBase": {
        "type": "string"
      }
    },
    "required": [
      "id",
      "baseId",
      "placaCt",
      "placaCavalo",
      "incoterm",
      "modalidadeEntrega",
      "tipoTransporte",
      "tipoOperacao",
      "modal",
      "statusTd",
      "statusMd",
      "cnpjTransportador",
      "criadoEm",
      "agendadoPara",
      "eb",
      "epi",
      "spi",
      "sb",
      "motoristas",
      "entregas",
      "statusViagem",
      "nomeBase"
    ]
  }
};

module.exports = { detalheEntregasSchema };
