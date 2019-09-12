<template lang="pug">
  .main
    .btn.btn-lg.btn-block.btn-info(@click="openPannel") 打开单行ActionPannel
    vue-custom-pannel(ref="pannel")
      div dasqwdewf
      div dasqwdewf
      div dasqwdewf
      div dasqwdewf
      div dasqwdewf
      div dasqwdewf
    <a href="https://github.com/a62527776a/action-pannel" target="_blank" class="btn btn-lg btn-block btn-sm btn-info">View on GitHub</a>
</template>

<script>
  export default {
    data () {
      return {
      }
    },
    methods: {
      openPannel: function () {
        this.$refs.pannel.open = true
      }
    },
    mounted () {
    }
  }
</script>

<style lang="sass" scoped>
.main
  padding: 21px;
</style>
