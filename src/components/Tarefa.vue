<script>
import moment from 'moment'

export default {
  name: 'TarefaItem',
  props: {
    value: {
      type: Object,
      required: true,
    },
    hideValues: {
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
  <div class="tarefa-container">
    <div>
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
      style="gap: 8px; color: #8e8e8e; flex-wrap: wrap"
    >
      <div>
        <span
          >Importância: <strong> {{ value.importancia || '-' }} </strong>
        </span>
        <br />
        <span
          >Urgência: <strong> {{ value.urgência || '-' }} </strong>
        </span>
      </div>
      <div>
        <span
          >Carga: <strong> {{ value.carga || '-' }} </strong>
        </span>
        <br />
        <span>
          Prazo de entrega: <strong> {{ shortDate(value.prazo) }} </strong>
        </span>
      </div>
    </div>
  </div>
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
