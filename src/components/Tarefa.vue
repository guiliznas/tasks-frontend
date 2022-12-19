<script>
import moment from 'moment'

export default {
  name: 'TarefaItem',
  emmits: ['concluir'],
  props: {
    value: {
      type: Object,
      required: true,
    },
    hideValues: {
      type: Boolean,
    },
    hideActions: {
      type: Boolean,
    },
    loading: {
      type: Boolean,
    },
  },
  methods: {
    shortDate(val) {
      const d = moment(val, 'DD/MM/YYYY HH:mm:SS')
      if (!d.isValid()) {
        return '-'
      }
      return d.format('DD/MM/YYYY')
    },
  },
}
</script>

<template>
  <v-hover v-slot="{ hover }">
    <div class="tarefa-view my-3">
      <div
        class="tarefa-container"
        :style="{ opacity: value.concluida ? 0.3 : 1 }"
      >
        <div>
          <v-progress-circular
            v-if="loading"
            indeterminate
            size="16"
            color="primary"
            width="2"
          />
          <label class="titulo">
            {{ value.titulo }}
          </label>
          <p class="subtitulo">
            {{ value.descricao }}
          </p>
        </div>
        <div
          v-if="!hideValues"
          class="d-flex text-right descricao"
          style="
            gap: 8px;
            color: #8e8e8e;
            flex-wrap: wrap;
            max-width: 250px;
            justify-content: flex-end;
            align-items: center;
          "
        >
          <span style="max-width: 45%">
            Importância: <strong> {{ value.importancia || '-' }} </strong>
          </span>
          <br />
          <span style="max-width: 45%">
            Urgência: <strong> {{ value.urgencia || '-' }} </strong>
          </span>
          <span style="max-width: 45%">
            Carga: <strong> {{ value.carga || '-' }} </strong>
          </span>
          <br />
          <span>
            Prazo de entrega: <strong> {{ shortDate(value.prazo) }} </strong>
          </span>
        </div>
      </div>
      <v-expand-transition v-if="!hideActions">
        <div
          v-if="!value.concluida && hover"
          class="d-flex my-3 tarefa-acoes"
          style="justify-content: flex-end"
        >
          <v-btn text color="primary" @click="$emit('concluir', value)">
            <v-icon> mdi-checkbox-marked-circle-outline </v-icon>
            Concluir
          </v-btn>
        </div>
      </v-expand-transition>
    </div>
  </v-hover>
</template>

<style lang="sass">
.tarefa-container
  border: 0.5px solid #8e8e8e3d
  padding: 16px 8px
  border-radius: 8px
  box-shadow: 0 2px 1px -1px rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 1px 3px 0 rgba(0,0,0,.12)!important
  transition: all .3s ease

  display: flex
  justify-content: space-between
  align-items: center

  & + .tarefa-container
    margin-top: 16px
  &:hover
    box-shadow: 0 3px 3px -2px rgba(0,0,0,.2),0 3px 4px 0 rgba(0,0,0,.14),0 1px 8px 0 rgba(0,0,0,.12)!important
</style>
