<template>
  <li>
    <span>{{ serie.nome }}</span>
    <button type="button" class="float-right ml-2" @click="$emit('deletar', serie)">
      <i v-tooltip="{ content: 'Excluir' }" class="fas fa-trash"></i>
    </button>
    <router-link class="float-right ml-2" :to="{ name: 'episodios', params: {id: serie.id}}">
      <i v-tooltip="{ content: 'Episódios' }" class="fas fa-list-ol"></i>
    </router-link>
    <router-link class="float-right ml-2" :to="{ name: 'temporadas', params: {id: serie.id}}">
      <i v-tooltip="{ content: 'Temporadas' }" class="fas fa-folder-open"></i>
    </router-link>
    <router-link class="float-right ml-2" :to="{ name: 'elenco', params: {id: serie.id}}">
      <i v-tooltip="{ content: 'Elenco' }" class="fas fa-users"></i>
    </router-link>
    <!-- <button type="button" class="float-right ml-2" @click="$emit('editar', serie)">
      <i v-tooltip="{ content: 'Editar' }" class="fas fa-edit"></i>
    </button> -->
    <router-link class="float-right ml-2" :to="{ name: 'serieDetalhe', params: {id: serie.id}}">
      <i v-tooltip="{ content: 'Detalhes' }" class="fas fa-info-circle"></i>
    </router-link>
  </li>
</template>

<script>
export default {
  props: {
    serie: {
      type: Object,
      required: true
    }
  }
};
</script>