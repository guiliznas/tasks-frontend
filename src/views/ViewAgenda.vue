<script>
import { apiTasks } from '@api/apiTasks'
import moment from 'moment'
import TarefaView from '@components/Tarefa.vue'

export default {
  name: 'AgendaPage',
  components: { TarefaView },
  data() {
    return {
      tarefas: [],
    }
  },
  computed: {
    tarefaPorDia() {
      return this.tarefas.reduce((all, next) => {
        if (!all[next.dia_agenda]) {
          all[next.dia_agenda] = []
        }
        all[next.dia_agenda].push(next)
        return all
      }, {})
    },
    dias() {
      return Object.keys(this.tarefaPorDia).sort(
        (a, b) => Number(a) - Number(b)
      )
    },
    datas() {
      return this.dias.map((dia) => {
        return moment().add(Number(dia), 'days').format('DD/MM/YYYY')
      })
    },
  },
  created() {
    apiTasks.carregarTarefas({ agenda: true }).then((r) => {
      this.tarefas = r.data || r || []
    })
  },
}
</script>

<template>
  <div>
    <h1> Agenda </h1>
    <p class="secondary--text">
      As tarefas abaixo estão na ordem priorizada pelo modelo selecionado e
      separadas por dia em que podem ser executadas.
    </p>

    <v-card class="mt-10">
      <div v-for="dia in dias" :key="dia">
        <div
          style="
            font-weight: 600;
            font-size: 12px;
            margin-top: 16px;
            margin-bottom: 8px;
          "
        >
          {{ datas[dia] || 'Sem prazo definido' }}
        </div>
        <tarefa-view
          v-for="tarefa in tarefaPorDia[dia]"
          :key="tarefa.id"
          :value="tarefa"
        />
      </div>
    </v-card>
  </div>
</template>
