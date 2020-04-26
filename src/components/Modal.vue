<template>
<div class="modal">
  <div class="modal__inner">
    <div class="modal__header">
      <h3 class="modal__title">{{title}}</h3>
      <span class="modal__close" @click="emitCancelation">
        <i class="fas fa-times"></i>
      </span>
    </div>
    <p class="modal__body">{{body}}</p>
    <p class="modal__instructions">Press Confirm to continue, or Cancel to stop action.</p>
    <div class="modal__footer">
      <Button class="btn--primary" @btnClick="emitConfirmation">Confirm</Button>
      <Button class="btn--secondary" @btnClick="emitCancelation">Cancel</Button>
    </div>
  </div>
</div>
</template>

<script>
import Button from './Button.vue';

export default {
  name: 'Modal',
  components: {
    Button,
  },
  props: {
    title: String,
    body: String,
  },
  methods: {
    emitConfirmation() { this.$emit('handleDecision', true); },
    emitCancelation() { this.$emit('handleDecision', false); },
  },
};
</script>

<style lang="scss" scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: grid;
  place-content: center;
  padding: .5em;
  background-color: rgba(0, 0, 0, .25);

  &__inner {
    max-width: 600px;
    width: 95%;
    padding: 1em;
    background-color: white;
    text-align: center;
    border-radius: .5em;
  }

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: .5em;
    color: #cccccc;
    border-bottom: .075em solid #f0f0f0;
  }

  &__close { cursor: pointer; }

  &__body {
    margin: 1em 4em;
  }

  &__instructions {
    color: #cccccc;
    font-size: .9rem;
  }

  &__footer {
    display: flex;
    justify-content: center;
    gap: .5em;
  }

  Button + Button {
    margin-left: 1em;
  }
}
</style>
