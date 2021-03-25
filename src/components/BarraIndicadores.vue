<template>
  <!-- NAVBAR PARA LOS INDICADORES ECONOMICOS -->
  <nav class="navbar navbar-expand-md bg-primary navbar-dark">
    <!-- <a class="navbar-brand"> -->
    <router-link to="#" class="navbar-brand">
      <img src="../assets/img/bender_icono.png" width="30" height="30" class="d-inline-block align-top" alt="..." loading="lazy"/>
      Indicadores Economicos del dia {{this.fechaUSD}}
    </router-link>
    <!-- </a> -->

    <!-- Toggler/collapsibe Button -->
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>

    <!-- Navbar links -->
    <div class="collapse navbar-collapse" id="collapsibleNavbar">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" href="#">USD$ {{valorUSD}}</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Euro {{valorEuro}}</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import ServicioDatos from "../services/ServicioDatos";
export default {
    name:"Indicadores",
    components:{
    /* Añade aqui los componentes necesarios */
    
    },
    data(){
        return{
            usdArray:[],
            euroArray:[],
            glpArray:[],
            gbpArray:[],
            fechaUSD: String,
            valorUSD: String,
            fechaEuro: String,
            valorEuro: String

        }
    },
    methods:{
        async obtenerUSD(){
            setTimeout(()=>{
                let servicio = new ServicioDatos();
                servicio.getAll().then(response =>{
                    return response.json();
                })
                .then(this.procesarUSD).catch(error =>{
                    console.log(error)
                })
            }, 1000)
        },
        async obtenerEuro(){
            setTimeout(()=>{
                let servicio = new ServicioDatos();
                servicio.getEuro().then(response =>{
                    return response.json();
                })
                .then(this.procesarEuro).catch(error =>{
                    console.log(error)
                })
            }, 1000)
        },

        async obtenerGLP(){
            setTimeout(()=>{
                let servicio = new ServicioDatos();
                servicio.getGLP().then(response =>{
                    return response.json();
                })
                .then(this.procesarGLP).catch(error =>{
                    console.log(error)
                })
            }, 1000)
        },

        async obtenerGBP(){
                let servicio = new ServicioDatos();
                servicio.getGBP().then(response =>{
                    return response.json();
                })
                .then(this.procesarGBP).catch(error =>{
                    console.log(error)
                })
        },

        procesarUSD(response){
            this.usdArray = response;
            this.fechaUSD = this.usdArray.Dolares[0].Fecha
            this.valorUSD = this.usdArray.Dolares[0].Valor
            /* 
            console.log(this.usdArray)
            console.log('El valor del dolar es: '+ this.valorUSD);
            console.log('La fecha es: ' + this.fechaUSD); */
        },

        procesarEuro(response){
            this.euroArray = response;
            this.fechaEuro = this.euroArray.Euros[0].Fecha
            this.valorEuro = this.euroArray.Euros[0].Valor
            /* console.log(this.euroArray)
            console.log('El valor del euro es: '+ this.valorEuro);
            console.log('La fecha es: ' + this.fechaEuro); */
        },

        procesarGLP(response){
            this.glpArray = response
            console.log(this.glpArray)
        },

        procesarGBP(response){
            this.gbpArray = response;
            console.log(this.gbpArray)
        }
    },
    mounted(){
        this.obtenerUSD(); // Llama a la funcion ObtenerUSD para inicializar el proceso
        this.obtenerEuro();
        this.obtenerGLP();
        this.obtenerGBP();
    }
}


</script>

<style>

</style>