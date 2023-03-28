<template>
  <button
    class="a-button"
    type="button"
    :class="classes"
    :disabled="disabled"
    :style="[`width: ${width};`]"
    role="button"
    :area-label="label"
  >
    <img v-if="hasIconLink" :src="iconLink" alt="" class="a-button__icon" />
    <span v-if="!hasIconLink" class="a-button__label">{{ label }}</span>
  </button>
</template>

<script setup>
const props = defineProps({
  label: {
    type: String,
    default: '',
  },
  disabled: {
    type: Boolean,
    required: false,
  },
  iconLink: {
    type: String,
    default: '',
    required: false,
  },
  block: {
    type: Boolean,
    default: false,
  },
  size: {
    type: String,
    validator(value) {
      return ['xlarge', 'large', 'medium', 'small'].indexOf(value) !== -1;
    },
    default: 'medium',
  },
  type: {
    type: String,
    validator(value) {
      return (
        ['primary', 'secondary', 'tertiary', 'accent', 'outline', 'outline-grey', 'outline-secondary', 'icon'].indexOf(
          value,
        ) !== -1
      );
    },
    default: 'primary',
  },
  width: {
    type: String,
    default: '',
    required: false,
  },
});

const classes = computed(() => ({
  [`a-button--${props.size}`]: true,
  [`a-button--${props.type}`]: true,
  'a-button--disabled': props.disabled,
  'a-button--block': props.block,
}));

const hasIconLink = computed(() => props.iconLink && props.iconLink.length);
</script>

<style lang="scss">
@import './a-button.scss';
</style>
