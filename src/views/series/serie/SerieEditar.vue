<template>
  <div>
    <h3 class="font-weight-light">
      Editar Série
      <router-link :to="{name: 'series'}" class="ml-2">
        <i v-tooltip="{ content: 'Voltar'}" class="fa fa-backspace"></i>
      </router-link>
    </h3>
    <div class="content">
      <SerieFormEditar @editar="editarSerie" />
    </div>
  </div>
</template>

<script>
import axios from "./../../../axios";
import SerieFormEditar from "./../../../components/series/serie/SerieFormEditar";
export default {
  components: {
    SerieFormEditar
  },
  data() {
    return {
      series: []
    };
  },
  methods: {
    editarSerie(serie) {
      axios
        .request({
          method: "put",
          url: "/",
          data: serie
        })
        .then(response => {
          console.log("PUT /", response);
          //this.series.push(response.data);
          const indice = this.series.findIndex(t => t.id === this.serie.id);
          this.series.splice(indice, 1);
        });
    }
  }
};
</script>