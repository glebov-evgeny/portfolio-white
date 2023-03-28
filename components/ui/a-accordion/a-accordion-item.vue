<template>
  <div class="a-accordion__item">
    <div v-if="$slots.preview && isOpen" class="a-accordion__preview">
      <slot name="preview" :preview="item.preview" />
    </div>
    <div
      class="a-accordion__top"
      @mouseenter="isHover = true"
      @mouseleave="isHover = false"
      @click="handleClick"
      @keypress="handleClick"
    >
      <div class="a-accordion__title">
        <slot name="title" :is-hovered="isHover">
          <span class="a-accordion__number">{{ index }}</span>
          {{ item.title }}
        </slot>
      </div>
      <div v-show="item" class="a-accordion__arrow"></div>
    </div>
    <div v-if="isOpen" class="a-accordion__content">
      {{ item.text }}
    </div>
    <div v-if="$slots.actions && isOpen" class="a-accordion__actions">
      <slot name="actions" :attributes="item" />
    </div>
  </div>
</template>

<script setup>
defineProps({
  item: {
    type: Object,
    default() {
      return {};
    },
  },
});

let isOpen = ref(false);
let isHover = ref(false);

const handleClick = () => {
  isOpen.value = !isOpen.value;
};
</script>
