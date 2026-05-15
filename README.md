# transportestrp-api-tests

Este projeto contém testes automatizados para a API BFF do `+transportes transportador`, desenvolvidos para garantir a qualidade e a funcionalidade dos endpoints. Os testes utilizam Jest para o framework de testes, Supertest para requisições HTTP e AJV para validação de JSON Schemas.

## Tecnologias Utilizadas

*   **Jest**;
*   **Supertest**;
*   **AJV (Another JSON Schema Validator)**;
*   **dotenv**;
*   **Allure Reports**.

## Estrutura do Projeto

```
.
├── README.md
├── jest.config.js
├── jest.setup.js
├── package.json
├── .env.example (exemplo de variáveis de ambiente)
└── tests/
    ├── dadosTransportadorPF.test.js
    ├── dadosTransportadorPJ.test.js
    ├── detalhesEntregas.test.js
    ├── notasPorBase.test.js
    ├── simulacao.test.js
    └── helpers/
        ├── auth.helper.js         (Funções para autenticação)
        ├── validation.helper.js   (Funções auxiliares para validação de respostas)
        └── schemas/         (JSON Schema das respostas das requisições)
            ├── detalheEntregasPorBase.schema.js
            ├── qtdNotasPorBase.schema.js
            └── dadosTransportador.schema.js
```

## Executando os Testes

Para configurar o projeto e executar os testes localmente, siga os passos abaixo:

1.  **Clone o repositório:**
2.  **Instale as dependências:**
```bash
npm install
```
3.  **Variáveis de Ambiente:**
    Crie um arquivo `.env` na raiz do projeto (mesmo nível que `package.json`) baseado no `.env.example`.
    Este arquivo deve conter as variáveis de ambiente necessárias para a execução dos testes.

4. Para executar todos os testes configurados no projeto, utilize o comando:

```bash
npm test
```

Este comando irá:
- Limpar resultados anteriores de Allure;
- Executar todos os testes Jest;
- Gerar os relatórios Allure a partir dos resultados.

É possível conferir o relatório da última execução dos testes em: https://ana-cerqueiraf.github.io/transportes-trp_API-tests

### Comandos de Teste Úteis

*   **Executar apenas os testes Jest (sem geração de relatório imediata):**
    ```bash
    npm test
    ```

*   **Gerar relatórios Allure a partir de resultados existentes:**
    ```bash
    npm run allure:generate
    ```

*   **Abrir os relatórios Allure no navegador:**
    ```bash
    npm run allure:open
    ```
