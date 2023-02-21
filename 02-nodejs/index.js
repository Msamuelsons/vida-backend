// 0 - Obter um usuário
// 1 - Obter o número de telefone de um usuário a partir de seu id
// 2 - Obter o endereço do usuário

function obterUsuario(callback) {
  setTimeout(() => {
    return callback(null, {
      id: 1,
      nome: 'Darth Vader',
      dataNascimento: new Date(),
    })
  }, 1000)
}

function obterTelefone(idUsuario, callback) {
  setTimeout(() => {
    return callback(null, {
      telefone: '1109323',
      ddd: 86,
    })
  }, 2000)
}

function obterEndereco(idUsuario, callback) {
  setTimeout(() => {
    return callback(null, {
      rua: 'Dos bobos',
      numero: 0,
    })
  }, 2000)
}

function resolverUsuario(error, usuario) {
  console.log('Usuário', usuario)
}
obterUsuario(function resolverUsuario(error, usuario) {
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
      Endereço: ${endereco.rua}, N°: ${endereco.numero},
      Telefone: (${telefone.ddd})${telefone.telefone}
      `)
    })
  })
})
