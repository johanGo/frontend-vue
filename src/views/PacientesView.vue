<template>
    <div>
        <!-- <h1 class="text-center">Pacientes</h1> -->
        <tabla class="tabla mt-5"  Titulo="PACIENTES" :Cabecera="Cabecera" :Items="Items.data"/>
    </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
import tabla from '@/components/pacientes/tabla.vue'

export default {
    name:'PACIENTES',
    
    components:{
        tabla
    },
    created(){
        this.cargarPacientes();
    },
    data(){
        return{
            Cabecera:[
                {text:'ID', value:'id_paciente'},
                {text:'Nombre', value:'nombre'},
                {text:'Apellido', value:'apellido'},
                {text:'Edad', value:'edad'},
                {text:'Acciones', value:'actions'}
            ]
        }
    },
    methods:{
        
        ...mapActions('pacientes', ['cargarPacientes'])
    },
    computed:{
        ...mapGetters('pacientes', ['Items'])
    }
}
</script>
