const { obterPessoas } = require('./service')

Array.prototype.meuReduce = function (callback, valorInicial) {
  let valorFinal = typeof valorInicial !== undefined ? valorInicial : this[0]
  for (let index = 0; index <= this.length - 1; index++) {
    valorFinal = callback(valorFinal + this[index])
  }
  return valorFinal
}

async function main() {
  try {
    const { results } = await obterPessoas('a')

    const pesos = results.map(function (item) {
      return parseFloat(item.height)
    })

    const total = pesos.reduce(function (proximo, anterior) {
      return proximo + anterior
    })

    console.log('Total: ', total)

    console.log(pesos)
  } catch (error) {
    console.log('Deu ruim: ', error)
  }
}
main()
