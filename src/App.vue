<script>
import GlobalModais from '@modal/GlobalModais.vue'
export default {
  components: { GlobalModais },
  data() {
    return {
      drawer: true,
      links: [
        ['mdi-notebook-outline', 'Visão geral', 'home'],
        ['mdi-calendar', 'Agenda', 'agenda'],
        ['mdi-medal-outline', 'Avaliar os modelos', 'avaliar'],
        ['mdi-cog-outline', 'Configurações', 'setting'],
      ],
      multiplicadorExperiencia: 100,
    }
  },
  computed: {
    user() {
      return this.$store.getters['user/usuario']
    },
    initials() {
      const nome = this.user.nome.split(' ')
      return (nome[0][0] + nome.at(-1)[0]).toUpperCase()
    },
    menu() {
      return this.$route.name
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

        <div> {{ user.nome }} </div>
        <div
          style="
            font-size: 12px;
            margin-top: 10px;
            color: #8e8e8e;
            font-weight: 600;
          "
        >
          <div>
            <v-progress-linear color="error" :value="user.energia" rounded />
            <label> Energia </label>
          </div>
          <div style="margin-top: 6px">
            <v-progress-linear
              color="warning"
              :value="user.experiencia"
              rounded
            />
            <div class="d-flex">
              <label>Experiência</label>
              <v-spacer />
              <label>
                Nível
                {{ parseInt(user.experiencia / multiplicadorExperiencia) + 1 }}
              </label>
            </div>
          </div>
        </div>
      </v-sheet>

      <v-divider></v-divider>

      <v-list>
        <v-list-item-group :value="menu">
          <v-list-item
            v-for="[icon, text, route] in links"
            :key="icon"
            link
            :value="route"
            @click="$router.push({ name: route })"
          >
            <v-list-item-icon>
              <v-icon>{{ icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ text }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
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
          background-color: #cfd8dc;
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

.v-item--active {
  color: var(--v-accent-base) !important;
}
</style>
