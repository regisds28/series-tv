<template>
<div>
  <ul class="list-group" v-if="temporada.length > 0">
    <TemporadaItem 
        class="list-group-item"
        v-for="temp in temporada" 
        :key="temp.id" 
        :temporada="temp" />
  </ul>
  <p v-else>Nenhuma temporada cadastrada</p>
</div>
</template>

<script>
import axios from "./../../../../axios";
import TemporadaItem from "./TemporadaItem";

export default {
  components: {
    TemporadaItem
  },
  data() {
    return {
      temporada: [],
      id: this.$route.params.id,
      nome: this.$route.params.nome
    };
  },
  created() {
    axios.get(`/serie-${this.id}/temporadas`).then(response => {
      console.log("GET /", response);
      this.temporada = response.data;
    })
  },
  watch: {
    $route(to) {
      this.id = to.params.id;
    }
  }
};
</script>