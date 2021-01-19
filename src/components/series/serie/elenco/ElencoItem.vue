<template>
  <div class="mt-2 mb-3">
    <div class="img-elenco"> <img /></div>
    <div class="info">
      <span><b>Nome: {{ elenco.nome }}</b></span>
      <br>
      <span class="font-weight-light">Personagem: {{ elenco.personagem }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    elenco: {
      type: Object,
      required: true
    }
  }
};
</script>