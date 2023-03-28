<template>
  <footer class="s-footer">
    <div class="s-footer__container l-wide">
      <div class="s-footer__block">
        <div class="s-footer__box">
          <p class="s-footer__title">{{ $t('footer.contacts') }}</p>
          <div class="s-footer__box-content">
            <a href="tel:+79162176557" class="s-footer__link">
              <span>+7 916 217 65 57</span>
            </a>
            <a href="mailto:egoji@mail.ru" class="s-footer__link">
              <span>egoji@mail.ru</span>
            </a>
          </div>
        </div>
        <div class="s-footer__box">
          <p class="s-footer__title">{{ $t('footer.useful') }}</p>
          <div class="s-footer__social">
            <a href="https://github.com/glebov-evgeny?tab=repositories" class="s-footer__social-link" target="_blank">
              <img class="s-footer__social-image" src="/images/icons/social/gh.svg" alt="social-link" />
            </a>
            <a href="https://t.me/eaglebov" class="s-footer__social-link" target="_blank">
              <img class="s-footer__social-image" src="/images/icons/social/tg.svg" alt="social-link" />
            </a>
            <a href="https://wa.me/79162176557" class="s-footer__social-link" target="_blank">
              <img class="s-footer__social-image" src="/images/icons/social/wa.svg" alt="social-link" />
            </a>
          </div>
        </div>
      </div>
      <p class="s-footer__rights">{{ getYear }} © {{ $t('footer.rights') }}</p>
    </div>
  </footer>
</template>

<script setup>
const getYear = computed(() => {
  const currentYear = new Date();
  return currentYear.getFullYear();
});
</script>

<style lang="scss">
@import './s-footer.scss';
</style>
