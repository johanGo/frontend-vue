<template>
    <div class="about">
        <h1 class="text-center my-8">Este es el usuario {{$route.params.id}} ****</h1>
        <v-btn color="primary" @click="visible()">Button</v-btn>
        <appAlerta v-if="success" type="success" mensaje="Esto es una alerta de exito" @salir="success = $event"></appAlerta>
        <appAlerta v-if="error" type="error" mensaje="Esto es un error" @salir="error = $event"></appAlerta>
        <appAlerta v-if="warning" type="warning" mensaje="Esto es una advertenvia" @salir="warning = $event"></appAlerta>
        
        <!-- <appAlerta v-if="visible" type="warning" mensaje="Esto es una alerta de error"></appAlerta>
        <appAlerta v-if="visible" type="error" mensaje="Esto es una alerta de peligro"></appAlerta> -->
        
        <div class="text-center">
            <v-pagination
                v-model="page"
                :length="4"
                prev-icon="mdi-menu-left"
                next-icon="mdi-menu-right">
            </v-pagination>
        </div>        
    </div>
</template>


<script>
    import appAlerta from '../components/alertas.vue'
    export default {
        name:"usuarios",

        components:{
            appAlerta
        },
        data () {
        return {
            success:false,
            error:false,
            warning:false,
            page: 1,
        }
        },
        methods:{
            visible(){
                this.success = true;
                this.error = true;
                this.warning = true;
            }
        },
        watch:{
            page(){
                this.$router.push('/usuarios/'+this.page);
            }
        }
    }
</script>

