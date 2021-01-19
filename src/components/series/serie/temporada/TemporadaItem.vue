<template>
  <li>
    <span>Temporada {{ temporada.numeroTemporada }}</span>
    <router-link 
        class="btn-info btn-sm float-right" 
        :to="{ name: 'episodios', params: { id: temporada.id }}">
            Episódios            
    </router-link>
  </li>
</template>

<script>
export default {
  props: {
    temporada: { 
      type: Object,
      required: true
    }
  }
};
</script>