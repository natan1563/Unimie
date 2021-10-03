<template>
    <div class="box-response">
        <div class="box">
            <i id="sadFace" class="far fa-frown-open fa-5x"></i>
            <h3>Não foi possível encurtar essa URL</h3>
            <h3>Tente novamente mais tarde</h3>
        </div>
    </div> 
</template>

<script>
export default {
  name: "AlertCardFail",
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
  margin-bottom: 70px;
}

#icons i {
  margin: auto;
}

h3 {
    font-size: 34px;
}

</style>