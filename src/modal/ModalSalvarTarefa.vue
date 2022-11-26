<script>
import { NOVA_TAREFA } from '@constants/Modals'
import { apiTasks } from '@api/apiTasks'
export default {
  name: 'ModalSalvarTarefa',
  data() {
    return {
      dialog: false,
      tarefa: {
        titulo: 'tarefa frontend',
        descricao: 'criando tarefa pelo frontend',
        urgencia: 10,
        importancia: 10,
        prazo: '10/12/2022',
        carga: 1,
        id: null,
      },
    }
  },
  created() {
    this.$root.$on(NOVA_TAREFA, this.open)
  },
  beforeDestroy() {
    this.$root.$off(NOVA_TAREFA, this.open)
  },
  methods: {
    clear() {
      this.tarefa = {
        titulo: null,
        descricao: null,
        urgencia: null,
        importancia: null,
        prazo: null,
        carga: null,
        id: null,
      }
    },
    open() {
      // this.clear()
      this.dialog = true
    },
    async salvar() {
      apiTasks.salvarTarefa({ ...this.tarefa }).then((r) => {
        console.log(r)
        if (r.status === 201) {
          // console.log(sucesso)
          this.dialog = false
        }
      })
    },
  },
}
</script>

<template>
  <v-dialog v-model="dialog" persistent max-width="1000px">
    <v-card>
      <v-card-title>
        <div class="d-flex" style="width: 100%">
          <h2 class="titulo">Tarefa</h2>
          <v-spacer />
          <v-btn icon @click="dialog = false">
            <v-icon> mdi-close </v-icon>
          </v-btn>
        </div>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12">
              <v-text-field
                v-model="tarefa.titulo"
                label="Titulo*"
                outlined
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-textarea
                v-model="tarefa.descricao"
                label="Descrição"
                placeholder="Descreva um pouco sobre a tarefa"
                outlined
              >
              </v-textarea>
            </v-col>
            <v-col cols="12" sm="6" md="3">
              <v-currency-field
                v-model="tarefa.urgencia"
                label="Urgência"
                outlined
              />
            </v-col>
            <v-col cols="12" sm="6" md="3">
              <v-currency-field
                v-model="tarefa.importancia"
                label="Importância"
                outlined
              />
            </v-col>
            <v-col cols="12" sm="6" md="3">
              <v-text-field
                v-model="tarefa.prazo"
                v-mask="'##/##/####'"
                placeholder="DD/MM/AAAA"
                label="Prazo"
                persistent-placeholder
                outlined
              />
            </v-col>
            <v-col cols="12" sm="6" md="3">
              <v-currency-field v-model="tarefa.carga" label="Carga" outlined />
            </v-col>
          </v-row>
        </v-container>
        <small>*Campos obrigatórios</small>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="accent" text @click="dialog = false"> Cancelar </v-btn>
        <v-btn color="accent" @click="salvar"> Salvar </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<style></style>
