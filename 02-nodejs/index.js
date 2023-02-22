// 0 - Obter um usuário
// 1 - Obter o número de telefone de um usuário a partir de seu id
// 2 - Obter o endereço do usuário
const { time } = require('console')
const util = require('util')
const obterEnderecoAsync = util.promisify(obterEndereco)

function obterUsuario() {
  return new Promise(function resolvePromise(resolve, reject) {
    setTimeout(() => {
      return resolve({
        id: 1,
        nome: 'Darth Vader',
        dataNascimento: new Date(),
      })
    }, 1000)
  })
}

function obterTelefone(idUsuario) {
  return new Promise(function resolvePromise(resolve, reject) {
    setTimeout(() => {
      return resolve({
        telefone: '1109323',
        ddd: 86,
      })
    }, 2000)
  })
}

function obterEndereco(idUsuario, callback) {
  setTimeout(() => {
    return callback(null, {
      rua: 'Dos bobos',
      numero: 0,
    })
  }, 2000)
}
main()
async function main() {
  try {
    console.time('medida-promise')
    const usuario = await obterUsuario()
    /* const telefone = await obterTelefone(usuario.id)
    const endereco = await obterEnderecoAsync(usuario.id) */

    const resultado = await Promise.all([
      obterTelefone(usuario.id),
      obterEnderecoAsync(usuario.id),
    ])
    const endereco = resultado[1]
    const telefone = resultado[0]

    console.log(` 
      Nome: ${usuario.nome},
      Endereço: ${endereco.rua}, N°: ${endereco.numero},
      Telefone: (${telefone.ddd}) ${telefone.telefone}
      `)
    console.timeEnd('medida-promise')
  } catch (err) {
    console.log('DEU RUIM', err)
  }
}

/* const usuarioPromise = obterUsuario()
usuarioPromise
  .then(function (usuario) {
    return obterTelefone(usuario.id).then(function resolverTelefone(result) {
      return {
        usuario: {
          nome: usuario.id,
          id: usuario.id,
        },
        telefone: result,
      }
    })
  })
  .then(function (resultado) {
    const endereco = obterEnderecoAsync(resultado.id)
    return endereco.then(function resolverEndereco(result) {
      return {
        usuario: resultado.usuario,
        telefone: resultado.telefone,
        endereco: result,
      }
    })
  })
  .then(function (resultado) {
    console.log(`
      Nome: ${resultado.usuario.nome},
      Endereço: ${resultado.endereco.rua}, N°: ${resultado.endereco.numero},
      Telefone: (${resultado.telefone.ddd}) ${resultado.telefone.numero}


    `)
  })
  .catch(function (error) {
    console.log('DEU RUIM', error)
  }) */
// Para manipular o sucesso usamos a função .then()
// Para manipular os erros usamos a função .catch()

/* obterUsuario(function resolverUsuario(error, usuario) {
  if (error) {
    console.error('DEU RUIM MANO: ', error)
    return
  }

  obterTelefone(usuario.id, function resolverTelefone(error1, telefone) {
    if (error1) {
      console.error('DEU RUI MANO: ', error1)
      return
    }

    obterEndereco(usuario.id, function resolverEndereco(error2, endereco) {
      if (error2) {
        console.error('DEU RUI MANO: ', error2)
        return
      }
      console.log(`
      Nome: ${usuario.nome},
      Endereço: ${endereco.rua}, N°:${endereco.numero},
      Telefone: (${telefone.ddd})${telefone.telefone}
      `)
    })
  })
})
 */
