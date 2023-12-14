import Vue from 'vue'
import Vuex from 'vuex'
import imagenes from './imagenes'
import pacientes from './pacientes'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
    },
    getters: {
    },
    mutations: {
    },
    actions: {
    },
    modules: {
        imagenes,
        pacientes
    }
})
