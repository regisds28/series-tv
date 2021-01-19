<template>
  <div>
    <i
      @click="exibirFormularioCriarElenco"
      v-tooltip="{ content: 'Inserir Ator/Atriz'}"
      class="fas fa-plus-square"
    ></i>
    <transition name="fade" mode="out-in" class="transition">
      <div
        class="alert alert-success"
        v-if="successMessage"
        transition="expand"
      >Ator/Atriz salvo(a) com sucesso!</div>
    </transition>
    <div v-if="exibirListaElenco">
      <div class="row mt-2" v-if="elenco.length > 0">
        <ElencoItem class="col-sm-3 float-left" v-for="el in elenco" :key="el.id" :elenco="el" />
      </div>
      <p v-else>Nenhuma ator/atriz cadastrado</p>
    </div>
    

    <ElencoFormEditar
      v-if="exibirFormularioElenco"
      :elenco="elencoSelecionado"
      @criar="criarElenco"
    />
  </div>
</template>

<script>
import axios from "./../../../../axios";
import ElencoItem from "./ElencoItem";
import ElencoFormEditar from "./ElencoFormEditar";

export default {
  components: {
    ElencoItem,
    ElencoFormEditar
  },
  data() {
    return {
      elenco: [],
      elencoSelecionado: undefined,
      exibirListaElenco: true,
      exibirFormularioElenco: false,
      successMessage: false,
      id: this.$route.params.id,
      nome: this.$route.params.nome
    };
  },
  created() {
    axios.get(`/serie-${this.id}/elenco`).then(response => {
      console.log("GET /", response);
      this.elenco = response.data;
    });
  },
  watch: {
    $route(to) {
      (this.id = to.params.id), (this.nome = to.params.nome);
    }
  },
  methods: {
    criarElenco(elenco) {
      axios
        .request({
          method: "post",
          url: `/serie-${this.id}/elenco`,
          data: elenco
        })
        .then(response => {
          console.log("POST /", response);
          this.elenco.push(response.data);
          this.exibirMessagemSucesso();
          this.resetar();
        });
    },
    exibirFormularioCriarElenco() {
      if (this.elencoSelecionado) {
        this.elencoSelecionado = undefined;
        return;
      }
      this.exibirFormularioElenco = !this.exibirFormularioElenco;
      this.exibirListaElenco = !this.exibirListaElenco;
    },
    resetar() {
      this.elencoSelecionado = undefined;
      this.exibirFormularioElenco = false;
      this.exibirListaElenco = true;
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