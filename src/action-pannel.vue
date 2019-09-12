<template lang="pug">
  .action-panel-wrapper
    transition(name="fade")
      .oMask(@click="closePannel" v-if="open")
    transition(name="out-in")
      .action-panel-bar(
        ref="action-panel-bar"
        v-if="open")
        .action-panel(:style="{ 'min-height' : mainHeight }")
          slot
</template>

<script>
export default {
  name: 'action-pannel',
  data () {
    return {
      open: false
    }
  },
  props: {
    mainHeight: {
      type: String,
      default: '30px'
    }
  },
  watch: {
    open: function (val) {
      if (val) {
        document.addEventListener('touchmove', this.disableScroll, { passive: false })
      } else {
        document.removeEventListener('touchmove', this.disableScroll)
      }
    }
  },
  methods: {
    closePannel: function () {
      this.open = false
    },
    disableScroll: function (e) {
      e.preventDefault()
    }
  }
}
</script>

<style lang="sass" scoped>
@mixin flex($flex: 1, $justifyContent: center, $alignItems: center, $flexDirection: row)
  display: flex;
  justify-content: $justifyContent;
  align-items: $alignItems;
  flex: $flex;
  flex-direction: $flexDirection
.fade-enter-active, .fade-leave-active
  transition: opacity .2s;
.fade-enter, .fade-leave-to
  opacity: 0
.out-in-enter, .out-in-leave-to
  transform: translateY(360px)
.out-in-enter-to, .out-in-leave
  transform: translateY(0)
$supperColor: #eee;
.action-panel-wrapper
  .oMask
    position: fixed
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    z-index: 98
    background: rgba(0,0,0,0.70);
  .action-panel-bar
    position: fixed
    bottom: 0
    transition: all .3s;
    left: 0;
    z-index: 99
  .action-panel
    border-radius: 3px 3px 0 0
    width: 100vw;
    background: white;
    z-index: 99
    flex-wrap: wrap;
</style>
