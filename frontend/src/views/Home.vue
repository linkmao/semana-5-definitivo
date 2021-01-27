<template>
  <div class="home">
    <navigator-component></navigator-component>
    <carrusel-comp></carrusel-comp>
    <servicios-comp></servicios-comp>
    <api-component></api-component>
    <div class="row justify-content-center mb-5">
      <div class="col mt-5" v-for="(item, index) of team" :key="index">
        <team-card v-bind:member="item" id="testimonios"> </team-card>
      </div>
    </div>
    <page-footer></page-footer>
  </div>
</template>

<script>
import ApiComponent from "../components/ApiComponent.vue";
import CarruselComp from "../components/CarruselComp.vue";
import NavigatorComponent from "../components/NavigatorComponent.vue";
import PageFooter from "../components/PageFooter.vue";
import ServiciosComp from "../components/ServiciosComp.vue";
import TeamCard from "../components/TeamCard.vue";
import TheHome from "../components/TheHome.vue";

export default {
  name: "Home",
  components: {
    TheHome,
    CarruselComp,
    ApiComponent,
    NavigatorComponent,
    TeamCard,
    PageFooter,
    ServiciosComp,
  },
  data() {
    return {
      team: [
        {
          codigo: 1,
          nombre: "Gerente - Tiendas ara",
          rol: "Gerente",
          descripcion:
            '"El nivel de satisfacción de nuestros clientes globales cambió de 10% a 100% de satisfacción desde el primer día de la implementación. Y representó también una reducción de 15% en costos de almacenamiento de archivos multimedia en la nube."',
          imagen: "https://i.ibb.co/2qWD47D/gerente-ara.jpg",
        },
        {
          codigo: 2,
          nombre: "Director general - DIAN",
          rol: "DIAN",
          descripcion:
            '"Con el sistema de análisis de datos de ABC Soluciones, fue posible, a través de API nativas, medir el impacto en ventas de las imágenes de un producto, al almacenar el identificador de la imagen presentada al momento de la compra y su asociación con la factura de venta."',
          imagen: "https://i.ibb.co/8PdJmJg/director-dian.jpg",
        },
        {
          codigo: 3,
          nombre: "Gerente- Almacenes Éxito",
          rol: "Desarrollador front-end",
          descripcion:
            '"Con ABC Soluciones para Almacenamiento de Datos No-Estructurados de Correo Electrónico, a través de la implementación de filtros inteligentes de correo basados en Asunto, Fecha, Contenido y priorización automática de correos electrónicos, logramos reducir nuestros tiempos de repuesta en 65%."',
          imagen: "https://i.ibb.co/4T05PJr/presidente-exito.jpg",
        },
      ],
    };
  },
};
</script>
