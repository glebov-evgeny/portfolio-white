<template>
  <div class="m-form">
    <div v-if="title" class="m-form__title">{{ title }}</div>
    <div class="m-form__inputs" :class="classes">
      <slot name="inputs" />
      <a-button
        class="m-form__button"
        :type="formOptions.type"
        :label="buttonText"
        :disabled="isSubmitDisabled"
        @click="submitForm"
      />
    </div>
    <div class="m-form__checkbox">
      <a-control v-model="personalData" :text-type="formOptions.type">
        {{ $t('form.confirm') }}
      </a-control>
    </div>
    <p v-if="error" class="m-form__error">- {{ error }} -</p>
  </div>
</template>

<script setup>
const emit = defineEmits(['onSubmit']);
const props = defineProps({
  title: {
    type: String,
    default: '',
  },
  error: {
    type: String,
    default: '',
  },
  buttonText: {
    type: String,
    default: 'Отправить',
  },
  submitDisabled: {
    type: Boolean,
    default: true,
  },
  direction: {
    type: String,
    default: 'vertical',
  },
  formOptions: {
    type: Object,
    required: false,
    default() {
      return {
        type: 'accent',
      };
    },
  },
});

const personalData = ref(true);

const submitForm = () => {
  emit('onSubmit');
};

const isSubmitDisabled = computed(() => !personalData.value || props.submitDisabled);

const classes = computed(() => ({
  [`m-form__inputs--${props.direction}`]: true,
}));
</script>

<style lang="scss">
@import './m-form.scss';
</style>
