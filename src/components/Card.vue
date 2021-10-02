<template>
  <div class="card">    
    <small class="date">
      <i class="far fa-calendar-minus"></i>{{ created_at | DateTime }}
    </small>
    <p>
      {{ link }}
    </p>
    <div class="btn-container">
      <button class="btn btn-url"><i class="fas fa-external-link-alt"></i>{{ urlShort }}</button>
      <button class="btn btn-remove"><i class="far fa-trash-alt"></i>Remover</button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Card',
  props: {
    created_at: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
    urlFixa: {
      type: String,
      required: true,
    },
    hash: {
      type: String,
      required: true,
    }
  },
  computed: {
    urlShort() {
      return this.urlFixa + this.hash;
    }
  }
}
</script>

<style lang="scss" scoped>

.cards {
  .card {
    margin-top: 40px;
    padding: 17px 26px;
    font-size: 24px;
    text-align: justify;
    background-color: #FFF;
    box-shadow: 0 0 10px #CCC;
    border-radius: 12px;
    word-wrap: break-word;

    p {
      margin: 25px 0;
    }

    .btn-container {
      display: flex;
      flex-direction: row;

      .btn-url {
        background-color: #198754;
        border-color: #198754;
        margin-right: 14px;
      }

      .btn-remove {
        background-color: #E60004;
        border-color: #E60004;
      }
    }

    .date {
      font-size: 18px;
      color: #c2c2c2;
      margin-bottom: 18px;
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

@media (max-width: 660px) {
  .cards {
    .card {
      .btn-container {
        flex-direction: column;

        .btn-url {
          margin-right: 0;
        }

        .btn-remove {
          margin-top: 15px;
        }
      }
    }
  }
}

</style>