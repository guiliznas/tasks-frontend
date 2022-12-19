<script>
import TarefaView from '@components/Tarefa.vue'
import AgendaView from '@components/Agenda'
import { NOVA_TAREFA } from '@constants/Modals'

export default {
  name: 'TasksList',
  components: { TarefaView, AgendaView },
  data() {
    return {
      hideDone: true,
    }
  },
  computed: {
    tarefas() {
      if (this.hideDone) {
        return this.$store.getters['tarefas/lista'].filter(
          (item) => !item.concluida
        )
      }
      return this.$store.getters['tarefas/lista']
    },
    tarefasAtrasadas() {
      return []
    },
    tarefasNestaSemana() {
      return []
    },
  },
  created() {
    this.loadData()
  },
  methods: {
    loadData() {
      this.$store.dispatch('tarefas/carregar')
    },
    abrirNovaTarefa() {
      this.$root.$emit(NOVA_TAREFA)
    },
    async concluirTarefa(tarefa) {
      this.$store.dispatch('tarefas/concluir', tarefa)
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
            <v-spacer />
            <v-switch
              v-model="hideDone"
              dense
              hide-details
              label="Esconder concluídas"
              class="mx-3 mt-0"
            />
            <v-btn color="accent" small @click="abrirNovaTarefa">
              Nova tarefa
            </v-btn>
          </div>
          <div class="tasks-container">
            <TarefaView
              v-for="tarefa in tarefas"
              :key="tarefa.id"
              :value="tarefa"
              :loading="tarefa.loading"
              @concluir="concluirTarefa"
            />
          </div>
        </v-card>
      </v-col>
      <v-col cols="4">
        <v-card>
          <h2>Próximas entregas</h2>
          <div class="tasks-container">
            <AgendaView :tarefas="tarefas" />
          </div>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<style lang="sass">
.tasks-container
  max-height: 70vh
  overflow-y: auto
  padding-right: 10px
  padding-bottom: 10px
  margin-top: 24px
  padding-left: 5px
  margin-left: -5px
</style>
