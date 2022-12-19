import { apiTasks } from '@api/apiTasks'
import store from '@state/store'

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
      if (typeof r.data === 'string') {
        // r.data = JSON.parse(JSON.stringify(r.data.split('NaN').join('null')))
        r.data = []
      }
      commit('SALVAR_TAREFAS', r.data || [])
    } else {
      alert(r.data.message)
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
  concluir: async ({ commit }, tarefa) => {
    commit('SET_LOADING_TAREFA', { ...tarefa, loading: true })
    const r = await apiTasks.concluir(tarefa)
    if (r.status === 200) {
      commit('ATUALIZAR_TAREFA', { ...r.data, loading: false })
      store.dispatch('user/atualizarGamificacao', { tarefa: { ...r.data } })
    }
    commit('SET_LOADING_TAREFA', { ...tarefa, loading: false })
  },
}

export const mutations = {
  SALVAR_TAREFAS: (state, payload) => {
    state.tarefas = [...payload].map((tarefa) => {
      return {
        ...tarefa,
        loading: false,
      }
    })
  },
  SET_LOADING_TAREFAS: (state, payload) => {
    state.loadingTarefas = payload
  },
  SET_LOADING_TAREFA: (state, payload) => {
    const tarefa = state.tarefas.find((item) => item.id === payload.id)
    if (tarefa) {
      console.log('set loading', payload.loading)
      tarefa.loading = payload.loading
    }
  },
  ATUALIZAR_TAREFA: (state, payload) => {
    let old = state.tarefas.find((tarefa) => tarefa.id === payload.id)
    if (old) {
      Object.keys(payload).forEach((key) => {
        old[key] = payload[key] || old[key]
      })
    }
  },
}

export const getters = {
  lista: (state) => {
    return state.tarefas
  },
}
