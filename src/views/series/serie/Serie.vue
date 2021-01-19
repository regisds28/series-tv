<template>
  <div>
    <div class="row">
     
      <SerieDetalhe class="col-sm-9" />
    </div>
    <div class="row">
      <SerieMenu />
    </div>
  </div>
</template>

<script>
//import axios from "./../../axios";

import SerieDetalhe from "./../../../components/series/serie/SerieDetalhe";
import SerieMenu from "./../../../components/series/serie/SerieMenu";

export default {
  components: {
    SerieMenu,
    SerieDetalhe
  }
};
</script>