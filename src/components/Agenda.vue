<script>
import TarefaView from '@components/Tarefa.vue'
export default {
  name: 'AgendaList',
  components: { TarefaView },
  props: {
    tarefas: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    tarefasPorData() {
      const aux = {}
      this.tarefas.forEach((tarefa) => {
        if (!aux[tarefa.prazo]) {
          aux[tarefa.prazo] = []
        }
        aux[tarefa.prazo].push(tarefa)
      })
      return aux
    },
    datas() {
      return Object.keys(this.tarefasPorData).sort(this.compareDates)
    },
  },
  methods: {
    compareDates(a, b) {
      const convert = /(\d{2})\/(\d{2})\/(\d{4})/
      const erroB =
        new Date(b.replace(convert, '$3-$2-$1')).toString() === 'Invalid Date'
      const erroA =
        new Date(a.replace(convert, '$3-$2-$1')).toString() === 'Invalid Date'
      if (erroA && erroB) {
        return 0
      }
      if (erroB) {
        return -1
      }
      if (erroA) {
        return 1
      }

      return (
        new Date(a.replace(convert, '$3-$2-$1')) -
        new Date(b.replace(convert, '$3-$2-$1'))
      )
    },
  },
}
</script>

<template>
  <div>
    <div v-for="data in datas" :key="data">
      <div
        style="
          font-weight: 600;
          font-size: 12px;
          color: #8e8e8e;
          margin-top: 16px;
          margin-bottom: 8px;
        "
      >
        {{ data || 'Sem prazo definido' }}
      </div>
      <tarefa-view
        v-for="tarefa in tarefasPorData[data]"
        :key="tarefa.id"
        :value="tarefa"
        hide-values
      />
    </div>
  </div>
</template>
