<template>
  <div class="box-response">
    <div class="box">  
      <p>
        <a class="link-shortned" :href="urlShort">{{ urlShort }}</a>
      </p>
      <div class="socials-network">
        <div class="sociais-network-icons">
          <p class="text-share">COMPARTILHAR:</p>
          <div id="icons">
            <a class="icon_border_red" :href="urlWhatsapp"><i class="fab fa-whatsapp "></i></a>
            <a class="icon_border_red" :href="urlTwitter"><i class="fab fa-twitter "></i></a>
            <a class="icon_border_red" :href="urlFacebook"><i class="fab fa-facebook-f "></i></a>
            <a class="icon_border_red" :href="urlTelegram"><i class="fab fa-telegram-plane "></i></a>
          </div>
        </div>
        <button
          class="btn btn-copy"
          v-clipboard="() => urlShort"
          v-clipboard:success="clipboardSuccessHandler"
          v-clipboard:error="clipboardErrorHandler"
        >
          <i class="far fa-copy"></i><span class="text-copy">Copiar</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AlertCard",
  props: {
    urlFixa: {
      type: String,
      required: true,
    },
    hash: {
      type: String,
      required: true,
    },
    whatsapp: {
      type: String,
      required: true,
    },
    twitter: {
      type: String,
      required: true,
    },
    facebook: {
      type: String,
      required: true,
    },
    telegram: {
      type: String,
      required: true,
    }
  },
   methods: {
    clipboardSuccessHandler() {
      this.$toasted.success("Copiado com sucesso");
    },
 
    clipboardErrorHandler() {
      this.$toasted.error("Não foi possível copiar, tente novamente");
    }
  },
  computed: {
    urlShort() {
      return `${this.urlFixa}/${this.hash}`;
    },
    urlWhatsapp() {
      return this.whatsapp + this.urlShort;
    },
    urlTwitter() {
      return this.twitter + this.urlShort;
    },
    urlFacebook() {
      return this.facebook + this.urlShort;
    },
    urlTelegram(){
      return this.telegram + this.urlShort;
    }
  }
}
</script>

<style lang="scss" scoped>

.box {
  margin-top: 40px;
  background-color: #FFF;
  box-shadow: 0 0 10px #CCC;
  border: 5px #F6A6A7 dashed;
  border-radius: 12px;
  padding: 15px 40px;
  word-wrap: break-word;
}

.box-response {
  display: inline-block;
  justify-content: center;
  width: 100%;
}

.link-shortned {
  font-size: 48px;
  color: #E60004;
  font-weight: 500;
  text-decoration: underline;
  margin-top: 30px;
}

.socials-network {
  max-width: 768px;
  display: flex;
  justify-content: space-between;
}

.sociais-network-icons {
  display: flex;
  align-items: center;
  margin-top: 46px;
  margin-bottom: 40px;
}

.text-share {
  font-size: 22px;
  font-weight: bold;
  color: #454347;
  margin-left: 15px;
  padding-right: 10px;
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

.btn-copy {
  background-color: #E60004;
  border-color: #E60004;
  margin-top: 20px;
}

.btn-copy {
  margin: auto 0;
}

.icon_border_red{
  border-radius: 22px;
  color: white;
  background-color: #E60004;
  width: 43px;
  height: 43px;
  text-align: center;
  display: flex;
  vertical-align: middle;
  cursor: pointer;
  text-decoration: none;
}

#icons {
  display: flex;
  width: 186px;
  justify-content: space-between;
}

#icons i {
  margin: auto;
}

.text-copy {
  margin-left: 10px;
}

@media (max-width: 830px) {
  .box-response {
    .link-shortned {
      font-size: 36px;
    }
  }

  .box-response {
    .sociais-network-icons {
      flex-direction: column;
      margin-bottom: 20px;

      .text-share,
      #icons {
        margin-bottom: 15px;
      }
    }
  }

  .socials-network {
    flex-direction: column;
  }

  .btn-copy {
    margin: auto;
    margin-bottom: 40px;
  }
  
}

</style>