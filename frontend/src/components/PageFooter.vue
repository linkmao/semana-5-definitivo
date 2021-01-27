<template>
  <div class="foooter">
    <footer
      class="page-footer border border-secondary pt-4"
    >
      <div class="container-fluid text-center text-md-left">
        <div class="row">
          <div class="col-md-6 mt-md-0 mt-3">
            <h2><b>Informacion de contacto</b></h2>
            <p>Telefóno: 45768889</p>
            <p>Celular: 3305405060</p>
            <p>
              Enlace a git hub:
              <a href="https://github.com/Team-58/semana-2-58"
                ><b>Repositorio github</b></a
              >
            </p>
          </div>

          <hr class="clearfix w-100 d-md-none pb-3" />

          <div class="col-md-6 mb-md-0 mb-3">
            <h2><b>Sedes:</b></h2>
            <p>SantaMarta <b> </b></p>
            <p>Cartagena <b> </b></p>
            <p>Medellin <b> </b></p>
          </div>
        </div>
      </div>

      <div
        class="pag-footer bg-dark text-center text-white pt-0.6 border border-white"
      >
        © 2020 Copyright por ABC soluciones SAS.
      </div>
    </footer>
  </div>
</template>


<script>
export default { name: "PageFooter" };
</script>


<style scoped>
.foooter {
    color: white;
  background:#34373B;
}
</style>
