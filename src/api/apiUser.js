class APIUser {
  async salvarAvaliacao(dados) {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log(dados)
        resolve({
          status: 200,
          data: dados,
        })
      }, 1500)
    })
  }
}

const apiUser = new APIUser()
export { apiUser }
