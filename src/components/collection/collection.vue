<template>
  <div class="collection" @click="toggleCollection($event)">
    <span class="icon-collection" :class="{'active':collection}"></span>
    <span class="text">{{collectionText}}</span>
  </div>
</template>

<script>
  export default {
    props: {
      BS: {
        type: Boolean,
        default: true
      }
    },
    data() {
      return {
        collection: false
      };
    },
    computed: {
      collectionText() {
        return this.collection ? '已收藏' : '收藏';
      }
    },
    methods: {
      toggleCollection(event) {
        if (this.BS === false) {
          this.collection = !this.collection;
        } else {
          if (!event._constructed) {
            return;
          }
          this.collection = !this.collection;
        }
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl"

  .collection
    padding-left: 10px
    .icon-collection
      display: block
      margin-top: 10px
      width: 36px
      height: 36px
      bg-image('star36_off')
      background-repeat: no-repeat
      &.active
        bg-image('star36_on')
    .text
      padding-left: 2px
      line-height: 16px
      font-size: 14px
      text-align: center
</style>
