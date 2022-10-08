<template>
  <button>
    <span class="text">{{text}}</span>
    <span class="hover-text">{{hoverText}}</span>
  </button>
</template>

<script>
export default {
  name: 'ChangeOnHoverButton',
  props: {
    text: {
      type: String,
      default: 'Follow'
    },
    hoverText: {
      type: String,
      default: 'Unfollow'
    }
  }
}
</script>

<style lang="scss" scoped>
  button {
    border: none;
    border-radius: 5px;
    padding: 10px;
    width: 100%;
  }
button:not(:hover) {
  background: #31AE54;

  .text {
    display: inline;
  }
  .hover-text {
    display: none;
  }
}
button:hover {
  background: #9E9E9E;
  .text {
    display: none;
  }
  .hover-text {
    display: inline;
  }
}
span {
  color: white;
  font-weight: bold;
}
</style>
