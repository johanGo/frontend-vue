<template>
    <div class="mt-">
        <Formulario :dialog="dialog" @dialog="dialog=$event" :Item="itemSelected"/>
        <v-card>
            <v-card-title>
                {{ Titulo }}
                <v-spacer></v-spacer>
                <v-text-field
                    v-model="search"
                    append-icon="mdi-account"
                    label="Filtrar"
                    single-line
                    hide-details>
                </v-text-field>
                <v-spacer></v-spacer>
                <v-btn
                    color="primary"
                    dark
                    class="mb-2"
                    @click="nuevoItem()">
                    New Item
                </v-btn>
            </v-card-title>
            <v-data-table
                dense
                :headers="Cabecera"
                :items="Items"
                :items-per-page="10"
                class="elevation-1">

                <template v-slot:item.actions="{ item }">
                    <v-tooltip bottom color="primary">
                        <template v-slot:activator="{ on, attrs }">
                            <v-icon
                                small
                                class="mr-2"
                                @click="editarItem(item)"
                                v-bind="attrs"
                                v-on="on">
                                mdi-pencil
                            </v-icon>
                        </template>
                        <span>Editar</span>
                    </v-tooltip>
                    
                    <v-tooltip bottom color="error">
                        <template v-slot:activator="{ on, attrs }">
                            <v-icon
                                small
                                @click="eliminar(item)"
                                v-bind="attrs"
                                v-on="on">
                                mdi-delete
                            </v-icon>
                        </template>
                        <span>Eliminar</span>
                    </v-tooltip>                    
                </template>
            </v-data-table>
        </v-card>        
    </div>
</template>



<script>
import {mapActions} from 'vuex'
import Formulario from './formulario.vue'

export default {
    props:['Titulo', 'Cabecera', 'Items'],


    components:{
        Formulario
    },

    data(){
        return {
            search:'',
            dialog:false,
            itemSelected:{}
        }
    },

    methods:{
        
        ...mapActions('pacientes',['eliminarPacientes']),

        nuevoItem(){
            this.itemSelected={
                id_paciente:0,
                nombre:'',
                apellido:'',
                fecha_nac:''
            }
            this.dialog = true
        },

        editarItem(item){
            this.itemSelected = item;
            this.dialog = true;
        },

        eliminar(item){
            this.$alertify.confirm(
                'Desea eliminar el/la paciente '+item.nombre+'?',
                ()=>{
                        this.eliminarPacientes(item);
                        this.$alertify.success('El paciente con ID: '+item.id_paciente+' fue eliminado')
                    },
                () => this.$alertify.error('Se cancelo la acción')
            );
        }
    }
}
</script>
