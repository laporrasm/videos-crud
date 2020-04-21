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
  font-family: inherit;
  font-size: 1.1rem;
  border: none;
  outline: none;
  cursor: pointer;

  &--primary {
    background-color: #3aafa9;
    color: #def2f1;
  }

  &--secondary {
    background-color: #def2f1;
    color: #3aafa9;
  }
}
</style>
