const home = (req, resp) => {
  return resp.json({name: "Home Screen"})
}

const login = (req, resp) => {
  const { username = "", senha = "" } = req.body
  if(username === "tauan" && senha === "123456") 
    return resp.json({
      nome: 'Tauan Gabriel',
      cpf: '05097830000',
      sexo: 'masculino',
      senha: '123456',
      token: "a1z2s4a5a6w6"
    })
  
  if(username === "alexandre" && senha === "123456")
    return resp.json({
      nome: 'MArcos Alexandre ',
      cpf: '12345678901',
      sexo: 'masculino',
      senha: '123456',
      token: "a1z2s4a5a6w6"
    })

  return resp.json({
    error: "user not authenticated"
  })
  
}

module.exports = { home, login }