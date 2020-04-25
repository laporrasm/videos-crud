<template>
  <button
    :type="btnType"
    :class="btnClass"
    class="btn"
    @click="clicked"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    btnType: String,
    btnClass: String,
  },
  methods: {
    clicked() { this.$emit('btnClick'); },
  },
};
</script>

<style lang="scss" scoped>
.btn {
  padding: .75em 1em;
  font-family: 'Work Sans';
  font-size: 1rem;
  color: #3b3b3b;
  background-color: white;
  border: .085em solid #EDEDF0;
  border-radius: .25em;
  cursor: pointer;

  &--primary {
    background-color: #2a52be;
    border-color: #2a52be;
    color: white;
  }
}
</style>
