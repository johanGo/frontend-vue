<template >
    <div>
        <v-row justify="center">
            <v-dialog v-model="dialog" persistent max-width="600px" >
                <v-card>
                    <v-card-title>
                        <span v-if="Item.id_paciente == 0" class="text-h5">Nuevo Paciente</span>
                        <span v-else class="text-h5">Editar Paciente</span>
                    </v-card-title>

                    <v-card-text>
                        <v-container>
                            <v-row>
                                <v-col cols="12" sm="6" >
                                    <v-text-field label="Cedula*" v-model="Item.id_paciente" type="number" required></v-text-field>
                                </v-col>

                                <v-col cols="12" sm="6" >
                                    <v-text-field label="Nombre*" v-model="Item.nombre" type="text"  hint="example of helper text only on focus"></v-text-field>
                                </v-col>

                                <v-col cols="12" sm="6" >
                                    <v-text-field label="Apellido*" v-model="Item.apellido" type="text" required></v-text-field>
                                </v-col>   
                                
                                <v-col cols="12" sm="6" >
                                    <v-text-field label="Fecha Nacimiento*" v-model="Item.fecha_nac" type="datetime-local"  required></v-text-field>
                                </v-col>                          
                                
                            </v-row>
                        </v-container>
                        <small>*indica los campos requeridos</small>
                    </v-card-text>

                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="blue darken-1" text @click="cerrarDialogo()">
                            Cerrar
                        </v-btn>
                        <v-btn color="blue darken-1" text @click="agregar()">
                            Guardar
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </v-row>
    </div>
</template>


<script>
import { mapActions } from 'vuex';
export default {
    props:['dialog', 'Item'],

    data(){
        return{

        }
    },
    methods:{
        ...mapActions('pacientes', ['agregarPacientes']),
        ...mapActions('pacientes',['actualizarPacientes']),

        agregar(){
            this.$alertify.confirm(
                this.Item.id_paciente == 0 ? 'Desea agregar Item?' : 'Desea editar Item?',
                ()=>{
                        // this.agregarPacientes(this.Item);
                        this.Item.id_paciente === 0 ? this.agregarPacientes(this.Item) : this.actualizarPacientes(this.Item);
                        this.cerrarDialogo();
                        this.$alertify.success(this.Item.id_paciente == 0? 'Paciente Agregado' : 'Paciente Editado')
                    },
                () => this.$alertify.error('Se cancelo la acción')
            );
            
        },
        cerrarDialogo(){
            this.$emit('dialog', false)
        }
    }
}
</script>
