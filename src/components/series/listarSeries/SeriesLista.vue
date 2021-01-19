<template>
  <div>
    <div v-if="exibirLista">
      <div>
        <transition name="fade" mode="out-in" class="transition">
          <div
            class="alert alert-success"
            v-if="successMessage"
            transition="expand"
          >Série salva com sucesso!</div>
        </transition>
        <div v-if="loading" class="loading">
          <img src="./../../../assets/loading.gif" />
        </div>
        <h3 class="font-weight-light">
          Lista de séries
          <button @click="exibirFormularioCriarSerie">
            <i v-tooltip="{ content: 'Inserir série'}" class="fas fa-plus-square"></i>
          </button>
          <!-- <router-link class="ml-2" :to="{ name: 'inserirSerie'}">
            <i v-tooltip="{ content: 'Inserir série'}" class="fas fa-plus-square"></i>
          </router-link>-->
        </h3>
      </div>
      <div class="mb-3">
        <input
          type="search"
          class="form-control"
          @keyup="buscar"
          placeholder="Pesquisar"
        />
      </div>
      <ul class="list-group" v-if="seriesFiltradas.length > 0">
        <SerieItensLista
          class="list-group-item"
          v-for="serie in seriesFiltradas"
          :key="serie.id"
          :serie="serie"
          @editar="selecionarSerieParaEdicao"
          @deletar="deletarSerie"
        />
      </ul>
      <p v-else>Nenhuma série encontrada</p>
    </div>
    <div>
      <SerieFormEditar
        v-if="exibirFormulario"
        :serie="serieSelecionada"
        @criar="criarSerie"
        @editar="editarSerie"
      />
    </div>
  </div>
</template>

<script>
import axios from "./../../../axios";
import SerieItensLista from "./SerieItensLista";
import SerieFormEditar from "./../../../components/series/serie/SerieFormEditar";
export default {
  components: {
    SerieItensLista,
    SerieFormEditar
  },
  data() {
    return {
      series: [],
      loading: false,
      serieSelecionada: undefined,
      exibirFormulario: false,
      exibirLista: true,
      successMessage: false
    };
  },
  created() {
    this.loading = true;
    axios.get(`/`).then(response => {
      if (response.data) {
        console.log("GET /", response);
        this.loading = false;
        this.series = response.data;
      }
    });
  },
  computed: {
    seriesFiltradas() {
      const busca = this.$route.query.busca;
      return !busca
        ? this.series
        : this.series.filter(s =>
            s.nome.toLowerCase().includes(busca.toLowerCase())
          );
    }
  },
  methods: {
    criarSerie(serie) {
      axios
        .request({
          method: "post",
          url: "/",
          data: serie
        })
        .then(response => {
          console.log("POST /", response);
          this.series.push(response.data);
          this.exibirMessagemSucesso();
          this.resetar();
        });
    },
    editarSerie(serie) {
      axios
        .request({
          method: "put",
          url: "/",
          data: serie
        })
        .then(response => {
          console.log("PUT /", response);
          const indice = this.series.findIndex(t => t.id === serie.id);
          this.series.splice(indice, 0, serie);
          this.exibirMessagemSucesso();
          this.resetar();
        });
    },
    deletarSerie(serie) {
      const confirmar = window.confirm(
        `Deseja realmente deletar a série "${serie.nome}"?`
      );
      if (confirmar) {
        axios.delete(`/serie-${serie.id}`).then(response => {
          console.log(`DELETE /series/serie-${serie.id}`, response);
          const indice = this.series.findIndex(t => t.id === serie.id);
          this.series.splice(indice, 1);
        });
      }
    },
    buscar(event) {
      this.$router.push({
        path: "/series",
        query: { busca: event.target.value }
      });
    },
    resetar() {
      this.serieSelecionada = undefined;
      this.exibirFormulario = false;
      this.exibirLista = true;
    },
    selecionarSerieParaEdicao(serie) {
      this.serieSelecionada = serie;
      this.exibirFormulario = true;
      this.exibirLista = false;
    },
    exibirFormularioCriarSerie() {
      if (this.serieSelecionada) {
        this.serieSelecionada = undefined;
        return;
      }
      this.exibirFormulario = !this.exibirFormulario;
      this.exibirLista = !this.exibirLista;
    },
    exibirMessagemSucesso() {
      this.successMessage = true;
      setTimeout(
        function() {
          this.successMessage = false;
        }.bind(this),
        5000
      );
    }
  }
};
</script>
<style scoped>

</style>