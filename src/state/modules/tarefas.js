import { apiTasks } from '@api/apiTasks'

export const state = {
  tarefas: [],
  loadingTarefas: false,
}

export const actions = {
  carregar: async ({ commit }) => {
    commit('SET_LOADING_TAREFAS', true)
    const r = await apiTasks.carregarTarefas()
    console.log(r)
    if (r.status === 200) {
      commit('SALVAR_TAREFAS', r.data || [])
    }
    commit('SET_LOADING_TAREFAS', false)
    return {
      status: r.status,
      value: r.data || [],
      message:
        r.status === 200
          ? 'Tarefas carregadas'
          : 'Não foi possível carregar as tarefas',
    }
  },
}

export const mutations = {
  SALVAR_TAREFAS: (state, payload) => {
    state.tarefas = [...payload]
  },
  SET_LOADING_TAREFAS: (state, payload) => {
    state.loadingTarefas = payload
  },
}

export const getters = {
  lista: (state) => {
    return state.tarefas
  },
}
