<script>
export default {
  page: {
    title: '404',
    meta: [{ name: 'description', content: '404' }],
  },
  components: {},
  props: {
    resource: {
      type: String,
      default: '',
    },
  },
}
</script>

<template>
  <div
    :class="$style.title"
    style="
      height: calc(100vh - 195px);
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    "
  >
    <h1 class="mb-10">Página não encontrada</h1>
    <h3 class="mt-10 mb-5">
      Não foi possível acessar o endereço, mas você pode:
    </h3>
    <br />
  </div>
</template>

<style lang="sass" module>
.title
  text-align: center
</style>
