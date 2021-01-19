<template>
  <div>
    <div class="content">
      <h3 class="font-weight-light">Cadastrar Elenco</h3>
      <form @submit.prevent="salvar">
        <div class="form-row">
          <div class="form-group col-md-2">
            <label for="nomeElenco">Id</label>
            <input type="text" readonly class="form-control" id="idElenco" v-model="elencoLocal.id" />
          </div>
          <div class="form-group col-md-4">
            <label for="nomeElenco">Nome</label>
            <input type="text" class="form-control" id="nomeElenco" v-model="elencoLocal.nome"/>
          </div>
          <div class="form-group col-md-4">
            <label for="personagem">Personagem</label>
            <input type="text" class="form-control" id="personagem" v-model="elencoLocal.personagem"/>
          </div>
        </div>
        <button type="submit" class="btn btn-primary">Salvar</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    elenco: {
      type: Object,
      default: undefined
    }
  },
  data() {
    return {
      elencoLocal: Object.assign({}, this.elenco)
    };
  },
  watch: {
    elenco() {
      this.elencoLocal = Object.assign({}, this.elenco);
    }
  },
  methods: {
    salvar() {
      const operacao = "criar";
      this.$emit(operacao, this.elencoLocal);
    },
    voltar() {
      return this.$router.back();
    }
  }
};
</script>