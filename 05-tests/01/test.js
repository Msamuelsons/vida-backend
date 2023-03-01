const assert = require('assert')
const { obterPessoas } = require('./service')

describe('Star Wars tests', function () {
  it('Deve buscar r2d2 em formato correto', async function () {
    const expeted = [{ nome: 'R2-D2', peso: 96 }]
    const nomeBase = `r2-d2`
    const resultado = await obterPessoas(nomeBase)

    assert.deepEqual(resultado, expeted)
  })
})
