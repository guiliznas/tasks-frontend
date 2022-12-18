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
  atualizarGamificacao({ commit }, { tarefa }) {
    // verificar se foi no prazo ou nao
    let multiplicador = 1
    if (tarefa.prazo < 0) {
      multiplicador = -1
    }
    console.log('Atualizando valores')
    // atualizar energia - carga
    commit('UPDATE_ENERGY', multiplicador * tarefa.carga)
    // atualizar experiencia - peso_sem_modelo
    commit('UPDATE_EXP', multiplicador * tarefa.peso_sem_modelo)
  },
}

export const mutations = {
  UPDATE_ENERGY: (state, payload) => {
    state.usuario.energia += payload
  },
  UPDATE_EXP: (state, payload) => {
    state.usuario.experiencia += payload
  },
}

export const getters = {
  usuario: (state) => {
    return state.usuario
  },
}
