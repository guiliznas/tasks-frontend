<script>
export default {
  page: {
    title: 'Carregando...',
    meta: [{ name: 'description', content: 'Loading page...' }],
  },
}
</script>

<template>
  <Transition appear> </Transition>
</template>

<style lang="sass" module>
.loadingIcon
  color: var(--v-primary-base)
</style>
