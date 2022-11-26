<script>
import GlobalModais from '@modal/GlobalModais.vue'
export default {
  components: { GlobalModais },
  data() {
    return {
      drawer: true,
      links: [
        ['mdi-notebook-outline', 'Visão geral'],
        ['mdi-cog-outline', 'Configurações'],
      ],
    }
  },
  computed: {
    user() {
      return {
        email: 'teste@teste.com',
        nome: 'Guilherme Nascimento',
      }
    },
    initials() {
      const nome = this.user.nome.split(' ')
      return (nome[0][0] + nome.at(-1)[0]).toUpperCase()
    },
  },
}
</script>

<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" app>
      <v-sheet color="grey lighten-4" class="pa-4">
        <v-avatar class="mb-4" color="grey darken-1" size="64">
          <span class="white--text"> {{ initials }} </span>
        </v-avatar>

        <div> {{ user.email }} </div>
      </v-sheet>

      <v-divider></v-divider>

      <v-list>
        <v-list-item v-for="[icon, text] in links" :key="icon" link>
          <v-list-item-icon>
            <v-icon>{{ icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="primary" class="white--text">
      <v-app-bar-nav-icon
        color="white"
        @click="drawer = !drawer"
      ></v-app-bar-nav-icon>

      <v-toolbar-title>Tasks</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <v-container
        fluid
        style="
          min-height: calc(100vh - 68px);
          padding: 64px 48px;
          overflow: auto;
        "
      >
        <router-view></router-view>
      </v-container>
    </v-main>

    <GlobalModais />
  </v-app>
</template>

<style lang="scss">
@import './styles/index.sass';

#app {
  font-family: Sarabun, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
