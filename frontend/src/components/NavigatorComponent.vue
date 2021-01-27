<template>
  <nav class="navbar navbar-expand-lg sticky-top navbar-dark nnn">
    <a class="navbar-brand" href="# ">
      <img
        src="https://i.ibb.co/YBtptRt/Group-1team-58.jpg"
        width="90 "
        height="30
        "
        class="d-inline-block align-top"
        alt=" "
        loading="lazy "
      />
      Team 58
    </a>
    <div class="collapse navbar-collapse justify-content-end" id="navbarNav ">
      <ul class="navbar-nav">
        <li class="nav-item active">
          <a class="nav-link" href="#inicio"
            >Inicio<span class="sr-only">(current)</span></a
          >
        </li>
        <li class="nav-item active">
          <a class="nav-link" href="#servicios">Servicios</a>
        </li>
        <li class="nav-item active">
          <a class="nav-link" href="#testimonios">Testimonios</a>
        </li>
        <li class="nav-item">
          <button @click.prevent="log" type="submit" class="btn btn-primary">
            login
          </button>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavigatorComponent",
  methods: {
    log() {
      this.$router.push("/Login");
    },
  },
};
</script>

<style scoped>
.nav-link {
  color: #5eb3e3;
}
.nnn {
  color: #5eb3e3;
}
.navbar {
  background: #34373b;
  color: #5eb3e3;
}
</style>
