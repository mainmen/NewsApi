<template>
  <v-app>
    <SideMenu :drawer = !drawer @selectsource="this.setCurrentResource"></SideMenu>
    <v-toolbar fixed app light clipped-left color="primary" class="elevation-2">
      <v-toolbar-side-icon @click.stop="drawer = !drawer" class="white--text"></v-toolbar-side-icon>
      <v-toolbar-title class="white--text">WWN NEWS</v-toolbar-title>
    </v-toolbar>   
    <v-content>
      <v-container fluid>
        <Home :articlesArray="this.HomeData"></Home>
      </v-container>
    </v-content>
    <v-footer class="secondary white--text" app>
      <v-layout row wrap align-center>
        <v-flex xs12>
          <div class="white--text ml-3">
            Made with
            <v-icon class="red--text">favorite</v-icon>
            by <a class="white--text" href="https://vuetifyjs.com" target="_blank">stan de men</a>
          </div>
        </v-flex>
      </v-layout>
    </v-footer>
  </v-app>
</template>

<script>
import Home from '@/components/Home.vue'
import store from './store'
import SideMenu from '@/components/SideMenu.vue'
import axios from 'axios'
import { mapGetters, mapActions, mapState } from 'vuex'

export default {
  name: 'App',
  
  data () {
    return {
      // api_key:'ea63759b40db4ce8be20f2c7571ef5d0',
      drawer : false,
      // articles: [],
      errors: [],
      sources: [],
      // sideNavIcons: []
    }
  },
  components: {
    Home,
    SideMenu
  },
  mounted(){
    // this.setSidenavIcons
    // this.$store.dispatch('loadtechcrinch')
  },
  created(){
    this.loadHomeData
    // this.$store.dispatch('loadtechcrinch')
  },
  computed: {
    ...mapActions(['loadHomeData', 'loadSidenavItems', 'setCurrentResource']),
    ...mapState(['api_key', 'sideNavData', 'HomeData'])
  },
  methods: {
     //We are adding the method event handler with setResource() function
    setResource(sourceId){
      setCurrentResource(sourceId)
    }
  }
}
</script>
