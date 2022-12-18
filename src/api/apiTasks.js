import api from '@plugins/api'
import { tarefas } from '@constants/URL'

class APITasks {
  async carregarTarefas({ modelo, agenda = false, ativas = false } = {}) {
    let url =
      tarefas.manage +
      `?agenda=${agenda ? 'True' : 'False'}&ativas=${ativas ? 'True' : 'False'}`

    if (modelo) {
      url += `&modo=${modelo}`
    }

    const r = await api.get(url)
    return r || {}
  }

  async salvarTarefa({
    titulo,
    descricao,
    urgencia,
    importancia,
    prazo,
    carga,
    id,
  }) {
    const tarefa = {
      titulo,
      descricao,
      urgencia,
      importancia,
      prazo: prazo ? prazo.split('/').join('-') : null,
      carga,
    }

    if (id > 0) {
      return api.put(tarefas.tarefa + id, tarefa)
    } else {
      return api.post(tarefas.manage, tarefa)
    }
  }

  async concluir({ id, concluida }) {
    const data = {
      concluida: !concluida,
    }

    return api.patch(tarefas.tarefa + id, data)
  }
}

const apiTasks = new APITasks()
export { apiTasks }
