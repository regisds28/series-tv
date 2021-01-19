<template>
  <div>
    <div class="img-serie">
      <h1>{{ imagem_serie.data }}</h1> 
    </div>
  </div>
</template>
<script>

export default {
  props: {
    imagem_serie: {
      type: Object
    }
  }
};
</script>