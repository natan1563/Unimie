<template>
  <div>
    <div class="cards">
      <h4 class="title">Últimas URLs encurtadas por você</h4>
      <div class="card" v-for="item in resource" :key="item.id">    
        <small class="date">
          <i class="far fa-calendar-minus"></i>{{ item.created_at | DateTime }}
        </small>
        <p>
          {{ item.link }}
        </p>
        <div>
          <button class="btn btn-url"><i class="fas fa-external-link-alt"></i>{{ urlFixa }}{{ item.hash }}</button>
          <button class="btn btn-remove"><i class="far fa-trash-alt"></i>Remover</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UrlService from '@/features/url/UrlService';

export default {
  name: 'Card',
  data() {
    return {
      urlFixa: 'https://unimine.com.br/',
      urlServices: new UrlService(),
      resource: [],
    }
  },
  created() {
    this.urlServices.get().then((response) => {
      this.resource = response;
    });
  },
}
</script>

<style lang="scss">

.cards {
  display: inline-block;
  justify-content: center;

  .title {
    font-weight: bold;
    font-size: 24px;
    color: #454347;
  }

  .card {
    margin-top: 40px;
    max-width: 768px;
    padding: 17px 26px;
    font-size: 24px;
    text-align: justify;
    background-color: #FFF;
    box-shadow: 0 0 10px #CCC;
    border-radius: 12px;
    word-wrap: break-word;

    .date {
      font-size: 15px;
      color: #c2c2c2;
      margin-bottom: 18px;
    }

    .btn-url {
      background-color: #198754;
      border-color: #198754;
      margin-right: 14px;
    }

    .btn-remove {
      background-color: #E60004;
      border-color: #E60004;
      margin-top: 20px;
    }
  }
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

.fa-external-link-alt,
.fa-trash-alt,
.fa-calendar-minus {
  margin-right: 13px;
  width: 16px;
  height: 16px;
}

</style>