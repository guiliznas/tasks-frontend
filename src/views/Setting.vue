<script>
export default {
  name: 'SettingPage',
  data() {
    return {
      username: '',
      darkMode: false,
    }
  },
  created() {
    this.username = this.$store.getters['user/usuario'].nome
  },
}
</script>

<template>
  <div>
    <h1>Configurar plataforma</h1>
    <div class="mt-15" style="max-width: 300px">
      <v-text-field
        v-model="username"
        label="Nome de usuário:"
        outlined
        placeholder="Fulano da Silva"
      />
      <div>
        <label> Modo da interface: </label>
        <div
          class="d-flex"
          style="color: #8e8e8e; align-items: center; gap: 12px"
        >
          <label> Light </label>
          <v-switch v-model="darkMode" />
          <label> Dark </label>
        </div>
      </div>
      <div class="d-flex">
        <v-spacer />
        <v-btn color="accent"> Salvar </v-btn>
      </div>
    </div>
  </div>
</template>
