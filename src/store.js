import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // sideNavItems: null,
    HomeData: null,
    sideNavData: null,
    errors: [],
    api_key:'ea63759b40db4ce8be20f2c7571ef5d0',
  },
  mutations: {
    SET_SIDENAVDATA(state, payload){
      state.sideNavData = payload
    } ,
    SET_HOMEDATA(state, payload){
      state.HomeData = payload
    },
    SET_RESOURCEDATA(state, payload){
      state.HomeData = payload
    }
    
  },
  actions: {
    async loadSidenavData({commit}, state) {
      await axios.get(`https://newsapi.org/v2/sources?language=en&apiKey=${this.state.api_key}`)
        .then(response => {
          if(response.data){
            commit('SET_SIDENAVDATA', response.data.sources)
            console.log("Data from API for sideNav: ");
            console.log(response.data.sources);
          }
        })
        .catch(error => {
          this.errors = error
        })
    },
    async loadHomeData({commit}, state){
      await axios.get(`https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${state.api_key}`)
      .then(response => {
        if(response.data){
          commit('SET_HOMEDATA',response.data.articles)
          console.log("Data from API for Homepage: ");
          console.log(response.data.articles);
        }
      })
      .catch(error => this.errors.push(error))
    },
    async setCurrentResource({commit, state}, payload){
      await axios.get(`https://newsapi.org/v2/top-headlines?sources=${payload}&apiKey=${state.api_key}`)
      .then(response => {
        if(response.data){
          commit('SET_HOMEDATA', response.data.articles)
          // this.articles = response.data.articles
          console.log("Data from API for source: ");
          console.log(response.data.articles);
        }
      })
      .catch(error => this.errors.push(error))
      }
    }
})

