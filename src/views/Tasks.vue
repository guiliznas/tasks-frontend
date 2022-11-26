<script>
import { apiTasks } from '@api/apiTasks'
import TarefaView from '@components/Tarefa.vue'
import { NOVA_TAREFA } from '@constants/Modals'

export default {
  name: 'TasksList',
  components: { TarefaView },
  data() {
    return {
      tarefas: [],
    }
  },
  created() {
    this.loadData()
  },
  methods: {
    async loadData() {
      const r = await apiTasks.carregarTarefas()
      console.log(r)
      this.tarefas = r
    },
    abrirNovaTarefa() {
      this.$root.$emit(NOVA_TAREFA)
    },
  },
}
</script>

<template>
  <div>
    <v-row>
      <v-col cols="8">
        <v-card>
          <div class="d-flex">
            <h2>Lista de tarefas</h2>
            <v-btn color="accent" @click="abrirNovaTarefa"> Nova tarefa </v-btn>
          </div>
          <div
            style="
              max-height: 50vh;
              overflow-y: auto;
              padding-right: 10px;
              padding-bottom: 10px;
              margin-top: 24px;
              padding-left: 5px;
              margin-left: -5px;
            "
          >
            <TarefaView
              v-for="tarefa in tarefas"
              :key="tarefa.id"
              :value="tarefa"
            />
          </div>
        </v-card>
      </v-col>
      <v-col cols="4">
        <v-card> <h2>Agenda</h2> </v-card>
      </v-col>
    </v-row>
  </div>
</template>
