const service = require('./service')

async function main() {
  try {
    const result = await service.obterPessoas('b')
    const names = []
    console.time('for')
    for (let i = 0; i <= result.results.length - 1; i++) {
      const pessoa = result.results[i]
      names.push(pessoa.name)
    }
    console.timeEnd('for')

    console.time('For in: ')
    for (let i in result.results) {
      const pessoa = result.results[i]
      names.push(pessoa.name)
    }
    console.timeEnd('For in: ')

    console.time('For of: ')
    for (pessoa of result.results) {
      names.push(pessoa.name)
    }
    console.timeEnd('For of: ')

    console.log(names)
  } catch (err) {
    console.log('Erro interno: ', err)
  }
}

main()
