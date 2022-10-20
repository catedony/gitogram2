<template>
    <div class="spinner" :class="{sm}"></div>
</template>

<script>
export default {
  name: 'Spinner',
  props: {
    sm: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
.spinner {
  border: 10px solid #f3f3f3;
  border-top: 10px solid #57595a;
  border-radius: 50%;
  width: 15px;
  height: 15px;
  animation: spin 2s linear infinite;

  &.sm {
    border: 3px solid #f3f3f3;
    border-top: 3px solid #57595a;
    width: 10px;
    height: 10px;
  }
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>
