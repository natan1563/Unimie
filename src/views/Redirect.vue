<template>
    <div>
        Redirecionando...
    </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Redirect',
  data() {
    return {
    }
  },
   mounted() {
    const hash = this.$route.params.token
    axios.get(`/url/${hash}`).then(response => {
        window.location = response.data.data.link
    })
  }
}
</script>
