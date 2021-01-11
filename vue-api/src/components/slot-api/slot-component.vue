<template lang="pug">
    div
        slot defalutSlotComponent
</template>

<script>

export default {
  name: 'SlotComponent',
  data() {
    return ({
        header: 'slot-component: header',
        cl: 'slot-component: class'
    });
  }
};

</script>

<style>
</style>

