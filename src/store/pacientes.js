import Vue from 'vue'
import Vuex from 'vuex'
import moment from "moment"

Vue.use(Vuex)

export default{
    namespaced:true,
    state: {
        Items:[],        
    },

    getters: {
        Items(state){
            return state.Items;
        }
    },
    
    mutations: {
        LlenarItems(state, data){
            state.Items=data;
        }
    },
    actions: {
        cargarPacientes: async function({commit}){
            function formatDate(value){
                return moment(value).format('YYYY-MM-DD hh:mm:ss')
            };
            try {
                const setting={
                    method: 'GET',
                }
                const url = 'http://localhost:3000/api/pacientes';
                const data = await fetch(url, setting);
                const json = await data.json();
                console.log(json)
                
                json.data.forEach(e => {
                    // console.log(formatDate(e.fecha_nac))
                    e.fecha_nac = formatDate(e.fecha_nac)
                });    

                commit('LlenarItems', json)

            } catch (error) {
                console.log(error)
            }
        },

        agregarPacientes: async function({commit, dispatch}, datos){
            try {
                const setting={
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body:JSON.stringify(datos)
                }
                const url = `http://localhost:3000/api/pacientes`;
                const data = await fetch(url, setting);
                const json = await data.json();
                dispatch('cargarPacientes')
            } catch (error) {
                console.log(error)
            }
        },

        actualizarPacientes: async function({commit, dispatch}, datos){
            try {
                const setting={
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body:JSON.stringify(datos)
                }
                const url = `http://localhost:3000/api/pacientes/${datos.id_paciente}`;
                const data = await fetch(url, setting);
                const json = await data.json();
                console.log(json)
                dispatch('cargarPacientes')
            } catch (error) {
                console.log(error)
            }
        },

        eliminarPacientes: async function({commit, dispatch}, datos){
            try {
                const setting={
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body:JSON.stringify(datos)
                }
                const url = `http://localhost:3000/api/pacientes/${datos.id_paciente}`;
                const data = await fetch(url, setting);
                const json = await data.json();
                console.log(json)
                dispatch('cargarPacientes')
            } catch (error) {
                console.log(error)
            }
        }
    }
}


