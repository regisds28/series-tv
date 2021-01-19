<template>
  <div>
    <Imagem class="col-sm-3" />
    <div class="col-sm-9">
      <div>
        <p class="id font-light">ID:{{ this.serie.id }}</p>
      </div>
      <h3 class="font-weight-light">
        {{ this.serie.nome }}
        <router-link class="ml-3" :to="{ name: 'series'}">
          <i v-tooltip="{ content: 'Voltar'}" class="fas fa-backspace"></i>
        </router-link>
      </h3>
      <div>
        <p class="font-light">Canal: {{ this.serie.canalOrigem }}</p>
      </div>
      <div>
        <p class="font-light">Ano de lançamento: {{ this.serie.anoLancamento }}</p>
      </div>
      <div>
        <p class="font-light">Gênero: {{ this.serie.genero }}</p>
      </div>
      <div>
        <p class="font-light">País: {{ this.serie.pais }}</p>
      </div>
      <div>
        <p class="font-light">Sinopse: {{ this.serie.sinopse }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "./../../../axios";
import Imagem from "./../../../views/series/serie/imagem/Imagem";

export default {
  components: {
    Imagem
  },
  data() {
    return {
      serie: [],
      id: this.$route.params.id
      //nome: this.serie.nome
    };
  },
  created() {
    axios.get(`/serie-${this.id}`).then(response => {
      console.log("GET /", response);
      this.serie = response.data;
    });
  },
  watch: {
    $route(to) {
      this.id = to.params.id;
      this.nome = to.params.nome;
    }
  }
};
</script>