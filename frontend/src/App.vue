<template>
  <div id="app">
    <router-view />
  </div>
</template>


<script>
  import NavigatorComponent from './components/NavigatorComponent.vue'
  import CarruselComp from './components/CarruselComp.vue'
  import ServiciosComp from './components/ServiciosComp.vue'
  import ApiComponent from './components/ApiComponent.vue'
  import TeamCard from './components/TeamCard.vue'
  import PageFooter from './components/PageFooter.vue'  

  export default {
  name: 'App',
  components :{	NavigatorComponent, CarruselComp, ServiciosComp,  ApiComponent, TeamCard, PageFooter },
  data()  {return {
            team: [{
                    codigo: 1,
                    nombre: "Gerente- Tiendas ara",
                    rol: "Gerente",
                    descripcion:'"El nivel de satisfacción de nuestros clientes globales cambió de 10% a 100% de satisfacción desde el primer día de la implementación. Y representó también una reducción de 15% en costos de almacenamiento de archivos multimedia en la nube."',
                    imagen: "imagen/gerente-ara.jpg",
                },
                {
                    codigo: 2,
                    nombre: "Director general - DIAN",
                    rol: "DIAN",
                    descripcion: '"Con el sistema de análisis de datos de ABC Soluciones, fue posible, a través de API nativas, medir el impacto en ventas de las imágenes de un producto, al almacenar el identificador de la imagen presentada al momento de la compra y su asociación con la factura de venta."',
                    imagen: "imagen/director-dian.jpg",
                },
                {
                    codigo: 3,
                    nombre: "Gerente- Almacenes Éxito",
                    rol: "Desarrollador front-end",
                    descripcion: '"Con ABC Soluciones para Almacenamiento de Datos No-Estructurados de Correo Electrónico, a través de la implementación de filtros inteligentes de correo basados en Asunto, Fecha, Contenido y priorización automática de correos electrónicos, logramos reducir nuestros tiempos de repuesta en 65% y pasamos de dar respuesta a nuestros clientes en un periodo de 72H a tan solo 25H"',
                    imagen: "imagen/presidente-exito.jpg",
                },
             
            ],
        }; }
}
</script>






<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #34373b;
  min-height: 100vh; 
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
