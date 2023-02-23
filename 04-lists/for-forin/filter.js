const { obterPessoas } = require('./service')

Array.prototype.meuFilter = (callback) => {
  const lista = []

  for (index in this) {
    const item = this[index]
    const result = callback(item, index, this)
    if (!result) continue
    lista.push(item)
  }

  return lista
}

async function main() {
  try {
    const { results } = await obterPessoas('l')

    const familiaSkywalker = results.filter(function (item) {
      const result = item.name.toLowerCase().indexOf('skywalker') !== -1
      return result
    })

    const names = familiaSkywalker.map((pessoa) => pessoa.name)
    console.log(names)
  } catch (err) {
    console.error('Deu ruim: ', err)
  }
}

main()
