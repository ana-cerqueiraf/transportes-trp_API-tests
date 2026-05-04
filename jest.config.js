module.exports = {
  setupFilesAfterEnv: ['./jest.setup.js'],
  testTimeout: 30000, 

  // 1. O testEnvironment DEVE ser o allure-jest/node
  testEnvironment: "allure-jest/node",

  // 2. Opções adicionais para o Allure (Opcional, mas recomendado)
  testEnvironmentOptions: {
    resultsDir: "./allure-results", // Pasta onde os dados brutos serão salvos (padrão é allure-results)
  },

  // 3. Mantenha o reporter 'default' se você quiser ver a saída no terminal também
  /* reporters: [
    'default',
    [ 'jest-html-reporters', {
        publicPath: './reports',
        filename: 'trpAPI-test-report.html',
        expand: true,
        openReport: true,
        pageTitle: '+Transportes Transportador [BFF]'
      }
    ]
  ] */
};