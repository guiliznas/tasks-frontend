<script>
import { apiTasks } from '@/api/apiTasks'
import TarefaView from '@components/Tarefa.vue'
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
      bestModel: '',
      avaliacaoSemModelo: null,
      avaliacaoBasico: null,
      avaliacaoAvancado: null,
      avaliacaoAlternativo: null,
    }
  },
  created() {
    this.carregarTarefas()
  },
  methods: {
    async carregarTarefas() {
      this.modelos.map((item) => {
        apiTasks.carregarTarefas({ modelo: item.value }).then((r) => {
          this.tarefas[item.value] = r.data || []
        })
      })
    },
    salvar() {
      console.log('dados')
    },
  },
}
</script>

<template>
  <div>
    <h1>Avaliação dos modelos</h1>

    <h2 class="mt-10"> Qual modelo se adequa melhor e parece mais efetivo? </h2>
    <div class="d-flex lista-modelos-avaliar" style="gap: 8px">
      <div v-for="modelo in modelos" :key="modelo.value">
        <v-radio
          v-model="bestModel"
          :value="modelo.value"
          :label="modelo.name"
          class="my-2"
        >
        </v-radio>
        <v-card>
          <tarefa-view
            v-for="tarefa in tarefas[modelo.value]"
            :key="tarefa.id"
            :value="tarefa"
            hide-values
          />
        </v-card>
      </div>
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
        <v-btn color="accent" @click="salvar" s> Salvar </v-btn>
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
