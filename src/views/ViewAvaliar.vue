<script>
import { apiTasks } from '@/api/apiTasks'
import TarefaView from '@components/Tarefa.vue'
import { apiUser } from '@/api/apiUser'

export default {
  name: 'AvaliarPage',
  components: { TarefaView },
  data() {
    return {
      modelos: [
        { name: 'Sem modelo', value: 'sem_modelo' },
        { name: 'Modelo básico', value: 'basico' },
        { name: 'Modelo avançado', value: 'avancado' },
        { name: 'Modelo alternativo', value: 'alternativo' },
      ],
      tarefas: {
        sem_modelo: [],
        basico: [],
        avancado: [],
        alternativo: [],
      },
      bestModel: 'alternativo',
      avaliacaoSemModelo: null,
      avaliacaoBasico: null,
      avaliacaoAvancado: null,
      avaliacaoAlternativo: null,
      loadingSave: false,
    }
  },
  created() {
    this.carregarTarefas()
  },
  methods: {
    async carregarTarefas() {
      this.modelos.map((item) => {
        apiTasks
          .carregarTarefas({ modelo: item.value, ativas: true })
          .then((r) => {
            this.tarefas[item.value] = r.data || []
          })
      })
    },
    async salvar() {
      this.loadingSave = true
      await apiUser.salvarAvaliacao()
      this.loadingSave = false
      alert('Salvo com sucesso')
    },
  },
}
</script>

<template>
  <div>
    <h1>Avaliação dos modelos</h1>

    <h2 class="mt-10"> Qual modelo se adequa melhor e parece mais efetivo? </h2>
    <div>
      <v-radio-group
        v-model="bestModel"
        class="d-flex lista-modelos-avaliar"
        style="gap: 8px"
        row
      >
        <div
          v-for="modelo in modelos"
          :key="modelo.value"
          style="max-width: 23%; margin: auto"
        >
          <v-radio :value="modelo.value" :label="modelo.name" class="my-2">
          </v-radio>
          <v-card>
            <tarefa-view
              v-for="tarefa in tarefas[modelo.value]"
              :key="tarefa.id"
              :value="tarefa"
              hide-values
              hide-actions
            />
          </v-card>
        </div>
      </v-radio-group>
    </div>

    <div>
      <h2 class="mt-15">
        Como seria o seu desempenho usando a priorização sem modelo?
      </h2>
      <v-radio-group v-model="avaliacaoSemModelo" row>
        <v-radio value="1" label="Melhor"></v-radio>
        <v-radio value="0" label="Igual"></v-radio>
        <v-radio value="-1" label="Pior"></v-radio>
      </v-radio-group>
      <h2 class="mt-5">
        Como seria o seu desempenho usando o modelo básico?
      </h2>
      <v-radio-group v-model="avaliacaoBasico" row>
        <v-radio value="1" label="Melhor"></v-radio>
        <v-radio value="0" label="Igual"></v-radio>
        <v-radio value="-1" label="Pior"></v-radio>
      </v-radio-group>
      <h2 class="mt-5">
        Como seria o seu desempenho usando o modelo avançado?
      </h2>
      <v-radio-group v-model="avaliacaoAvancado" row>
        <v-radio value="1" label="Melhor"></v-radio>
        <v-radio value="0" label="Igual"></v-radio>
        <v-radio value="-1" label="Pior"></v-radio>
      </v-radio-group>
      <h2 class="mt-5">
        Como seria o seu desempenho usando o modelo alternativo?
      </h2>
      <v-radio-group v-model="avaliacaoAlternativo" row>
        <v-radio value="1" label="Melhor"></v-radio>
        <v-radio value="0" label="Igual"></v-radio>
        <v-radio value="-1" label="Pior"></v-radio>
      </v-radio-group>
      <div class="d-flex mt-10">
        <v-spacer />
        <v-btn color="accent" :loading="loadingSave" @click="salvar">
          Salvar
        </v-btn>
      </div>
    </div>
  </div>
</template>

<style lang="sass">
.lista-modelos-avaliar
  .v-card
    max-height: 80vh
    overflow: auto
</style>
