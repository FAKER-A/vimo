<template>
    <div class="ion-modal">
        <Backdrop :enableBackdropDismiss="false"
                  :isActive="isActive"></Backdrop>
        <transition
                :name="transitionClass"
                v-on:before-enter="_beforeEnter"
                v-on:after-enter="_afterEnter"
                v-on:before-leave="_beforeLeave"
                v-on:after-leave="_afterLeave">
            <div class="modal-wrapper" v-show="isActive">
                <!--用户自定义的port位置-->
                <div class="modalPageLoadPort"></div>
            </div>
        </transition>
    </div>
</template>
<style lang="scss">
    @import "./modal";
    @import "./modal.ios";
    @import "./modal.md";
</style>
<script type="text/ecmascript-6">
  import { BackdropComponent } from '../backdrop'
  export default{
    name: 'Modal',
    data(){
      return {
        enabled: false,
        bdDismiss: false,
        isActive: false,
        mode: window.VM && window.VM.config.get('mode', 'ios') || 'ios',

        // promise
        presentCallback: null,
        dismissCallback: null,
      }
    },
    computed: {
      transitionClass(){
        return `modal-${this.mode}`
      }
    },
    methods: {
      /**
       * Animate Hooks
       * */
      _beforeEnter () {
        this.enabled = false; // 不允许过渡中途操作
        this.$app.setEnabled(false, 400)
      },
      _afterEnter (el) {
        this.enabled = true;
        this.presentCallback(el);
      },
      _beforeLeave () {
        this.enabled = false;
        this.$app.setEnabled(false, 400)
      },
      _afterLeave (el) {
        this.enabled = true;
        this.dismissCallback(el);
        // 删除DOM
        this.$el.remove();
      },

      /**
       * 开启关闭值操作当前的组件
       * */
      _present(){
        const _this = this
        _this.isActive = true
        return new Promise((resolve) => {this.presentCallback = resolve})
      },
      _dismiss(){
        this.isActive = false
        return new Promise((resolve) => {this.dismissCallback = resolve})
      },
    },
    mounted(){
//      console.debug('modal mounted')
//      console.debug(this.position)
    },
    beforeUpdate(){
//      console.debug('modal beforeUpdate')
//      console.debug(this.position)
    },
    updated(){
//      console.debug('modal updated')
//      console.debug(this.position)
    },
    components: {
      'Backdrop': BackdropComponent
    }
  }
</script>
