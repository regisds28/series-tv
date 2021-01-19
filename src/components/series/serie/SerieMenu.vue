<template>
  <div class="col-sm-12 mt-5">
    <router-link :to="{name: 'elenco'}" class="btn btn-info mb-2 mr-2">Elenco</router-link>
    <router-link :to="{name: 'temporadas'}" class="btn btn-info mb-2 mr-2">Temporadas</router-link>
    <!-- <router-link :to="{name: 'series'}" class="btn btn-secondary mb-2 mr-2">Voltar</router-link>
    <router-link :to="{name: 'episodiosSerieId'}" class="btn btn-info mb-2 mr-2">Episódios</router-link> -->

    <router-view></router-view>
  </div>
</template>