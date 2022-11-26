import api from '@plugins/api'
import { tarefas } from '@constants/URL'

class APITasks {
  async carregarTarefas() {
    const r = await api.get(tarefas.manage)
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
}

const apiTasks = new APITasks()
export { apiTasks }
