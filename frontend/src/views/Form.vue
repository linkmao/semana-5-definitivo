<template>
  <div class="container">

      <img src="https://i.ibb.co/D9NxpsX/Group-1team-58.png" alt="Group-1team-58" border="0">

      
      <div class="form mt-5">
          <h1>Contactanos</h1>

          <form class="row g-3 mt-5">
      <div class="col-md-6">
        <label for="inputEmail4" class="form-label">Nombre de la empresa</label>
        <input type="email" class="form-control" id="inputEmail4" />
      </div>
      <div class="col-md-6">
        <label for="inputPassword4" class="form-label">Identificacion</label>
        <input type="password" class="form-control" id="inputPassword4" />
      </div>
      <div class="col-md-6">
        <label for="inputEmail4" class="form-label">Correo electronico</label>
        <input type="email" class="form-control" id="inputEmail4" />
      </div>
      <div class="col-md-6">
        <label for="inputPassword4" class="form-label">Telefono</label>
        <input type="password" class="form-control" id="inputPassword4" />
      </div>
      <div class="col-12">
        <label for="inputAddress" class="form-label mb-10">Problemas</label>
        <input
          type="text"
          class="form-control"
          id="inputAddress"
          placeholder="Describe brevemente los problemas de tu empresa para ofrecerte la mejor solucion."
        />
      </div>
            
      <div class="col-12 mt-5">
        <button @click.prevent="enviar" type="submit" class="btn btn-primary">Enviar</button>
      </div>
    </form>




      </div>
    
  </div>
</template>

<script>
export default {
    methods: {
    async enviar() {
        this.$router.push("/");
      
    },
  },
};
</script>

<style scoped>
.form{
    color: aliceblue;
}
</style>