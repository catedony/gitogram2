<template>
    <button :class="{loading, disabled}">
      <template v-if="loading">
        <div class="spinner">
          <Spinner sm/>
        </div>
      </template>
      <template v-else>
        <slot></slot>
      </template>
    </button>
</template>

<script>
import Spinner from './Spinner.vue'
export default {
  name: 'BaseButton',
  props: {
    loading: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  components: { Spinner }
}
</script>

<style lang="scss" scoped>
button {
    border: none;
    border-radius: 5px;
    padding: 10px;
    width: 100%;
    background: #31AE54;
    color: white;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    &.loading, &.disabled {
      background: #9E9E9E;
    }
  }
</style>
