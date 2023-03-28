<template>
  <label class="a-control">
    <input
      v-model="valueThis"
      class="a-control__input"
      :type="typeControl"
      :checked="checked"
      :disabled="disabled"
      @change="handleChange"
      @click="handleClick"
    />
    <div class="a-control__container">
      <div class="a-control__trigger" :class="triggerClasses" />
      <div v-if="text || $slots.default" class="a-control__text" :class="textClasses">
        <slot>
          {{ text }}
        </slot>
      </div>
    </div>
  </label>
</template>

<script setup>
const props = defineProps({
  text: {
    type: String,
    default: '',
  },
  typeControl: {
    type: String,
    validator(value) {
      return ['checkbox', 'radio'].indexOf(value) !== -1;
    },
    default: 'checkbox',
  },
  checked: {
    type: Boolean,
    required: false,
  },
  disabled: {
    type: Boolean,
    required: false,
  },
  modelValue: {
    type: Boolean,
    default: false,
  },
  textType: {
    type: String,
    validator(value) {
      return ['primary', 'contrast'].indexOf(value) !== -1;
    },
    default: 'primary',
  },
});

const emit = defineEmits(['update:modelValue']);

const valueThis = computed({
  get() {
    return props.modelValue;
  },
  set(newValue) {
    emit('update:modelValue', newValue);
  },
});

const triggerClasses = computed(() => ({
  'a-control__trigger--checked': valueThis.value,
}));

const textClasses = computed(() => ({
  [`a-control__text--${props.textType}`]: true,
}));
</script>

<style lang="scss">
@import './a-control.scss';
</style>
