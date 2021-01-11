<template lang="pug">
    div(
        class="card"
    )
        each name in ['header', 'default', 'footer']
            div(class=name)
                slot(
                    name=name
                    :header="header"
                )
</template>

<script>

export default {
    name: 'SlotApi',

    data() {
      return ({
          header: 'ccc'
      });
    },

    mounted() {
        console.log('$slots', this.$slots);
        console.log('$scopedSlots', this.$scopedSlots);
    }
};

</script>

<style>
.card {
    width: 400px;
    min-height: 100px;
    background-color: #FFF;
    box-shadow: 0 2px 1px -1px rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 1px 3px 0 rgba(0,0,0,.12);
    border-radius: 10px;
}
</style>
