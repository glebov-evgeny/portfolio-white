<template>
  <div v-if="visible" class="a-popup" :class="classes">
    <div class="a-popup__backdrop" @click="closePopup" @keydown.esc="closePopup" />
    <div class="a-popup__container" :style="`max-width: ${width}`">
      <div class="a-popup__close" @click="closePopup" @keydown.esc="closePopup">
        <svg viewBox="0 0 32 32" class="a-popup__close-img">
          <line class="cls-1" x1="7" x2="25" y1="7" y2="25" />
          <line class="cls-1" x1="7" x2="25" y1="25" y2="7" />
        </svg>
      </div>
      <div v-if="type !== 'iframe'" class="a-popup__content">
        <slot />
      </div>
      <div v-else class="a-popup__iframe">
        <iframe
          title=""
          :src="link"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  visible: {
    type: Boolean,
    default: false,
  },
  type: {
    type: String,
    validator: (value) => ['iframe', 'content'].indexOf(value) !== -1,
    default: 'content',
  },
  link: {
    type: String,
    default: '#',
  },
  width: {
    type: String,
    default: '100%',
  },
  fullscreen: {
    type: Boolean,
    default: false,
    required: false,
  },
});

const emit = defineEmits(['close']);

const closePopup = () => emit('close');

const classes = computed(() => ({
  [`a-popup--fullscreen`]: props.fullscreen,
}));
</script>

<style lang="scss">
@import './a-popup.scss';
</style>
