<template>
  <div id="testimonios">
    <div class="card text-white bg-dark">
      <div class="d-flex justify-content-center p-2">
        <img  width="300px" height="200px"  v-bind:src="member.imagen" >
      </div>
      <div class="card-body">
        <h5 class="card-title">{{ member.nombre }}</h5>
        <p class="card-text">{{ member.descripcion }}</p>
        
      </div>
      
    </div>
  </div>
</template>

<script>
export default {name: "TeamCard",
  props: {
    member: Object
  },
}
</script>

<style scoped>
</style>
