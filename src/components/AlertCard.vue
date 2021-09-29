<template>
   <div class="box-response">
         <div class="box">  
         <p class="link-shortned">
            http://unimine.com.br/xt451a
         </p>
         <div class="socials-network">
               <div class="sociais-network-icons">
                  <p class="text-share">COMPARTILHAR:</p>
                  <div id="icons">
                     <div class="icon_border_red"><i class="fab fa-whatsapp "></i></div>
                     <div class="icon_border_red"><i class="fab fa-twitter "></i></div>
                     <div class="icon_border_red"><i class="fab fa-facebook-f "></i></div>
                     <div class="icon_border_red"><i class="fab fa-telegram-plane "></i></div>
                  </div>
                  <button class="btn btn-copy"><i class="far fa-copy"></i>Copiar</button>
            </div>
         </div>
         </div>
      </div>
</template>

<script>
export default {
  name: "AlertCard"
}
</script>

<style scoped>

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
    width: 768px;
    height: 241px;
    margin-bottom: 70px;
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
}

.sociais-network-icons {
    display: flex;
    align-items: center;
    margin: auto;
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
    margin: auto;
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
}

#icons {
    display: flex;
    width: 186px;
    justify-content: space-between;
}

#icons i {
    margin: auto;
}
</style>