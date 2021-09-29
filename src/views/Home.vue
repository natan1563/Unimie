<template>
  <div class="home">
    <AlertCard/>
    <Card/>
    <button id="loadMore" class="btn btn-load">
      <i class="fas fa-plus"></i>Carregar Mais
    </button>
  </div>
</template>

<script>
// @ is an alias to /src
import Card from '@/components/Card.vue'
import AlertCard from '@/components/AlertCard.vue';

export default {
  name: 'Home',
  components: {
    Card,
    AlertCard
  },
  data() {
    return {
      resource: [],
    }
  },
}
</script>

<style>
#loadMore{
    margin-top: 40px;
    margin-bottom: 40px;
}

.btn {
    font-size: 22px;
    color: #FFF;
    display: inline-block;
    padding: 10px 13px;
    font-weight: 500;
    text-align: center;
    text-decoration: none;
    cursor: pointer;
    border: 1px solid transparent;
    border-radius: 8px;
}

.btn-load {
    background-color: #E60004;
    border-color: #E60004;
    margin-top: 20px;
}

.fa-plus {
    margin-right: 13px;
    width: 16px;
    height: 16px;
}
</style>
