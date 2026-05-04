const notasPorBaseSchema = {
    "type": "array",
    "items": {
        "type": "object",
        "properties": {
            "baseId": {
                "type": "integer"
            },
            "base": {
                "type": "string"
            },
            "statusNotaFiscal": {
                "type": "object",
                "properties": {
                    "comPendencia": {
                        "type": "integer"
                    },
                    "semRegistro": {
                        "type": "integer"
                    }
                },
                "required": [
                    "comPendencia",
                    "semRegistro"
                ]
            },
            "comprovantes": {
                "type": "object",
                "properties": {
                    "semComprovante": {
                        "type": "integer"
                    },
                    "reprovado": {
                        "type": "integer"
                    }
                },
                "required": [
                    "semComprovante",
                    "reprovado"
                ]
            },
            "totalEntregas": {
                "type": "integer"
            }
        },
        "required": [
            "baseId",
            "base",
            "statusNotaFiscal",
            "comprovantes",
            "totalEntregas"
        ]
    }
};

module.exports = { notasPorBaseSchema };
