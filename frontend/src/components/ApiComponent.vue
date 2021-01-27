<template>
  <div id="servicios">
    <div class="row mt-md-5 mt-sm-5 mt-xs-5 api">
      <div
        class="col-lg-6 col-xs-12"
        v-for="(servicio, index) of Jinfo"
        :key="index"
      >
        <div class="componente-api mt-3 md-4">
          <div class="d-flex justify-content-center align-items-center">
            <div class="p-3">
              <img :src="servicio.codigo" alt="" width="300px" height="200px" />
            </div>

            <div class="p-2">
              <h5 class="tittle-service">{{ servicio.nombre }}</h5>
              <hr />
              <p>
                {{ servicio.descripcion }}
              </p>
            </div>
          </div>

          <div class="d-flex container-fluid justify-content-end pb-2 mt-n2">
            <button
              @click.prevent="infoForm"
              class="btn btn-outline-info"
              type="submit"
              target="_blank"
            >
              + Info
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "ApiComponent",
  data() {
    return {
      titulo2: "Compomente Api Enlazado",
      info: null,
      Jinfo: null,
    };
  }, 
  methods: {
    async infoForm() {
      this.$router.push("/form");
    },
  },
  async mounted() {
    this.info = await fetch(`http://localhost:3000/api/articulo/list`);
    this.Jinfo = await this.info.json();
    console.log(this.Jinfo);
  },
};
</script>

<style scoped>
.tittle-service {
  color: #5eb3e3;
}
.api {
  color: aliceblue;
}

.componente-api {
  border-radius: 10%;
  overflow: hidden;
  border: 1px solid #6df3a3;
  background-color: #34373b;
  box-shadow: inset 2px 2px 4px rgba(120, 120, 120, 0.4),
    inset -3px -3px 3px rgba(255, 255, 255, 0.4);
  color: silver;
}
</style>
