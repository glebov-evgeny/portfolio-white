<template>
  <section class="s-experience">
    <div class="s-experience__container l-wide">
      <h2 class="s-experience__title s-title">{{ $t('experience.title') }}</h2>
      <div class="s-experience__block">
        <div v-for="(item, key) in $tm('experience.info')" :key="key" class="s-experience__item">
          <div class="s-experience__item-top">
            <p class="s-experience__item-title">{{ $rt(item.name) }}</p>
            <p class="s-experience__item-date">{{ $rt(item.date) }}</p>
          </div>
          <a :href="$rt(item.company.link)" target="_blank" class="s-experience__item-company">
            {{ $rt(item.company.name) }}
          </a>
          <div class="s-experience__item-content">
            <div class="s-experience__item-middle">
              <div
                v-if="$tm(`experience.info[${key}].duties`).length"
                class="s-experience__item-duties s-experience__item-margin"
              >
                <p class="s-experience__item-subtitle">
                  {{ $t('experience.responsibilities') }}
                </p>
                <ul class="s-experience__item-list">
                  <li
                    v-for="(elem, index) in $tm(`experience.info[${key}].duties`)"
                    :key="index"
                    class="s-experience__item-point"
                  >
                    {{ $rt(elem) }}
                  </li>
                </ul>
              </div>
              <div
                v-if="$tm(`experience.info[${key}].stack`).length"
                class="s-experience__item-stack s-experience__item-margin"
              >
                <p class="s-experience__item-subtitle">{{ $t('experience.stack') }}</p>
                <ul class="s-experience__item-list">
                  <li
                    v-for="(elem, index) in $tm(`experience.info[${key}].stack`)"
                    :key="index"
                    class="s-experience__item-point"
                  >
                    {{ $rt(elem) }}
                  </li>
                </ul>
              </div>
            </div>
            <div
              v-if="$tm(`experience.info[${key}].links`).length"
              class="s-experience__item-examples s-experience__item-margin"
            >
              <p class="s-experience__item-subtitle">{{ $t('experience.example') }}</p>
              <div class="s-experience__item-examples-block">
                <a
                  v-for="(elem, index) in $tm(`experience.info[${key}].links`)"
                  :key="index"
                  :href="$rt(elem.item)"
                  target="_blank"
                  class="s-experience__item-examples-link"
                  :style="{ backgroundImage: `url(/portfolio-white/images/portfolio/${elem.image}.png)` }"
                ></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss">
@import './s-experience.scss';
</style>
