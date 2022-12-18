export const state = {
  usuario: {
    email: 'teste@teste.com',
    nome: 'Guilherme Nascimento',
    energia: 60,
    experiencia: 70,
  },
  estaLogado: true,
}

export const actions = {
  // carregarDados
  // logar: async ({ commit }) => {},
}

export const mutations = {
  // SALVAR_TAREFAS: (state, payload) => {
  //   state.tarefas = [...payload]
  // },
  // SET_LOADING_TAREFAS: (state, payload) => {
  //   state.loadingTarefas = payload
  // },
}

export const getters = {
  usuario: (state) => {
    return state.usuario
  },
}
