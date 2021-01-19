<template>
  <div>
    <div class="row mt-2">
      <ImagemItem class="col-sm-3 float-left"/>
    </div>
  </div>
</template>

<script>
import axios from "./../../../../axios";
import ImagemItem from "./ImagemItem";

export default {
  components: {
    ImagemItem
  },
  data() {
    return {
      imagem_serie: {},
      id: this.$route.params.id
    };
  },
  created() {
    axios.get(`/serie-${this.id}/imagem`).then(response => {
      console.log("GET /" + this.imagem_serie.data, response);
      this.imagem_serie = response.data;
    });
  },
  watch: {
    $route(to) {
      this.id = to.params.id;
    }
  }
};
</script>