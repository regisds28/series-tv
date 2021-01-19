<template>
  <div>
    <div class="content">
      <form @submit.prevent="salvar">
        <div class="form-row">
          <div class="form-group col-md-2">
            <label for="nomeSerie">Id</label>
            <input type="text" readonly class="form-control" id="idSerie" v-model="serieLocal.id" />
          </div>
          <div class="form-group col-md-8">
            <label for="nomeSerie">Nome da série</label>
            <input type="text" class="form-control" id="nomeSerie" v-model="serieLocal.nome" />
          </div>
          <div class="form-group col-md-2">
            <label for="anoLancamento">Ano de Lançamento</label>
            <select id="anoLancamento" class="form-control" v-model="serieLocal.anoLancamento">
              <option selected>Escolher...</option>
              <option value="2018">2020</option>
              <option value="2018">2019</option>
              <option value="2018">2018</option>
              <option value="2017">2017</option>
              <option value="2016">2016</option>
              <option value="2015">2015</option>
              <option value="2014">2014</option>
              <option value="2013">2013</option>
              <option value="2012">2012</option>
              <option value="2011">2011</option>
              <option value="2010">2010</option>
              <option value="2009">2009</option>
              <option value="2008">2008</option>
              <option value="2007">2007</option>
              <option value="2006">2006</option>
              <option value="2005">2005</option>
              <option value="2004">2004</option>
              <option value="2003">2003</option>
              <option value="2002">2002</option>
              <option value="2001">2001</option>
              <option value="2000">2000</option>
              <option value="1999">1999</option>
              <option value="1998">1998</option>
              <option value="1997">1997</option>
              <option value="1996">1996</option>
              <option value="1995">1995</option>
              <option value="1994">1994</option>
              <option value="1993">1993</option>
              <option value="1992">1992</option>
              <option value="1991">1991</option>
              <option value="1990">1990</option>
              <option value="1989">1989</option>
              <option value="1988">1988</option>
              <option value="1987">1987</option>
              <option value="1986">1986</option>
              <option value="1985">1985</option>
              <option value="1984">1984</option>
              <option value="1983">1983</option>
              <option value="1982">1982</option>
              <option value="1981">1981</option>
              <option value="1980">1980</option>
              <option value="1979">1979</option>
              <option value="1978">1978</option>
              <option value="1977">1977</option>
              <option value="1976">1976</option>
              <option value="1975">1975</option>
              <option value="1974">1974</option>
              <option value="1973">1973</option>
              <option value="1972">1972</option>
              <option value="1971">1971</option>
              <option value="1970">1970</option>
            </select>
          </div>
        </div>
        <div class="form-row">
          <div class="form-group col-md-4">
            <label for="pais">País de Origem</label>
            <input type="text" class="form-control" id="pais" v-model="serieLocal.pais" />
          </div>
          <div class="form-group col-md-4">
            <label for="canal">Exibição atual</label>
            <input type="text" class="form-control" id="canal" v-model="serieLocal.canalOrigem" />
          </div>
          <div class="form-group col-md-4">
            <label for="genero">Gênero</label>
            <select id="genero" class="form-control" v-model="serieLocal.genero">
              <option selected>Escolher...</option>
              <option value="Ação">Ação</option>
              <option value="Animação">Animação</option>
              <option value="Aventura">Aventura</option>
              <option value="Biografia">Biografia</option>
              <option value="Comédia">Comédia</option>
              <option value="Crime">Crime</option>
              <option value="Desenho">Desenho</option>
              <option value="Documentário">Documentário</option>
              <option value="Drama">Drama</option>
              <option value="Épico">Épico</option>
              <option value="Espionagem">Espionagem</option>
              <option value="Fantasia">Fantasia</option>
              <option value="Faroeste">Faroeste</option>
              <option value="Guerra">Guerra</option>
              <option value="Médico">Médico</option>
              <option value="Histórico">Histórico</option>
              <option value="Policial">Policial</option>
              <option value="Romance">Romance</option>
              <option value="Suspense">Suspense</option>
              <option value="Terror">Terror</option>
            </select>
          </div>
        </div>
        <div class="form-group">
          <label for="sinopse">Sinopse</label>
          <textarea class="form-control" id="sinopse" rows="4" v-model="serieLocal.sinopse"></textarea>
        </div>
        <button type="submit" class="btn btn-primary">Salvar</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    serie: {
      type: Object,
      default: undefined
    }
  },
  data() {
    return {
      serieLocal: Object.assign({}, this.serie)
    };
  },
  watch: {
    serie() {
      this.serieLocal = Object.assign({}, this.serie);
    }
  },
  methods: {
    salvar() {
      const operacao = !this.serie ? "criar" : "editar";
      this.$emit(operacao, this.serieLocal);
    },
    voltar() {
      return this.$router.back();
    }
  }
};
</script>
