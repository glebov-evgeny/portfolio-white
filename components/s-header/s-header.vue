<template>
  <header class="s-header">
    <div class="s-header__container l-wide">
      <nuxt-link to="/" class="s-header__logo" aria-label="Перейти на главную">
        <a-icon-logo @click="closeMenu" />
      </nuxt-link>
      <div class="s-header__nav" :class="[{ active: isOpen && store.isMobile }]" @click="closeMenu">
        <m-menu />
        <button v-if="store.isMobile && !currentUser.uid" class="s-header__login" @click="loginPopup">
          {{ $t('header.login') }}
        </button>
        <button v-else-if="store.isMobile && currentUser.uid" class="s-header__login" @click="loginClean">
          {{ $t('header.logout') }}
        </button>
      </div>
      <div class="s-header__actions">
        <a href="tel:+79162176557" class="s-header__phone">
          <a-icon-phone />
          <span class="s-header__phone-number" aria-label="Позвоните нам: +7 916 217 65 57">+7 916 217 65 57</span>
        </a>
        <button class="s-header__theme" type="button" @click="changeThemes">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="s-header__theme-icon"
          >
            <g clip-path="url(#clip0_578_178)">
              <path
                d="M12 18C10.4087 18 8.88258 17.3679 7.75736 16.2426C6.63214 15.1174 6 13.5913 6 12C6 10.4087 6.63214 8.88258 7.75736 7.75736C8.88258 6.63214 10.4087 6 12 6C13.5913 6 15.1174 6.63214 16.2426 7.75736C17.3679 8.88258 18 10.4087 18 12C18 13.5913 17.3679 15.1174 16.2426 16.2426C15.1174 17.3679 13.5913 18 12 18ZM11 1H13V4H11V1ZM11 20H13V23H11V20ZM3.515 4.929L4.929 3.515L7.05 5.636L5.636 7.05L3.515 4.93V4.929ZM16.95 18.364L18.364 16.95L20.485 19.071L19.071 20.485L16.95 18.364ZM19.071 3.514L20.485 4.929L18.364 7.05L16.95 5.636L19.071 3.515V3.514ZM5.636 16.95L7.05 18.364L4.929 20.485L3.515 19.071L5.636 16.95ZM23 11V13H20V11H23ZM4 11V13H1V11H4Z"
              />
            </g>
            <defs>
              <clipPath id="clip0_578_178">
                <rect width="24" height="24" />
              </clipPath>
            </defs>
          </svg>
        </button>
        <button class="s-header__lang" @click="changeLanguage($i18n)">
          <span>{{ $t('header.language') }}</span>
        </button>
        <button v-if="!store.isMobile && !currentUser.uid" class="s-header__login" @click="loginPopup">
          {{ $t('header.login') }}
        </button>
        <button v-else-if="!store.isMobile && currentUser.uid" class="s-header__login" @click="loginClean">
          {{ $t('header.logout') }}
        </button>
      </div>
      <div v-if="store.isMobile" class="s-header__menu" @click="toggleIsOpenField">
        <svg class="s-header__menu-burger" viewBox="0 0 100 100" width="40" :class="[{ active: isOpen }]">
          <path
            class="line top"
            d="m 70,33 h -40 c 0,0 -8.5,-0.149796 -8.5,8.5 0,8.649796 8.5,8.5 8.5,8.5 h 20 v -20"
          />
          <path class="line middle" d="m 70,50 h -40" />
          <path
            class="line bottom"
            d="m 30,67 h 40 c 0,0 8.5,0.149796 8.5,-8.5 0,-8.649796 -8.5,-8.5 -8.5,-8.5 h -20 v 20"
          />
        </svg>
      </div>
    </div>
    <a-popup :visible="showPopup" class="s-header__popup" @close="showPopup = false">
      <m-popup-auth @on-send="showPopup = false" />
    </a-popup>
  </header>
</template>

<script setup>
import { useDeviceStore } from '~/store/device';
import { useUserStore } from '~/store/user';
const currentUser = useUserStore();

const emit = defineEmits(['handler-change-themes']);
const store = useDeviceStore();
const router = useRouter();
const userInformation = useCookie('userInformation');

const showPopup = ref(false);
const isOpen = ref(false);

const toggleIsOpenField = () => (isOpen.value = !isOpen.value);
const changeThemes = () => {
  emit('handler-change-themes');
};

const closeMenu = () => {
  isOpen.value = false;
};

const loginPopup = () => {
  showPopup.value = true;
};

const loginClean = () => {
  /* удаление информации о пользователе из стора и кук, редирект на главную страницу */
  currentUser.$reset();
  userInformation.value = null;
  router.push({ path: '/' });
};

const changeLanguage = (lang) => {
  lang.locale = lang.locale === 'ru' ? 'en' : 'ru';
};

const getInformationFromCookie = () => {
  if (userInformation.value) {
    currentUser.setUser(userInformation.value.email, userInformation.value.id);
  }
};

watch(
  () => {
    const htmlWrapper = document.querySelector('html');
    const bodyWrapper = document.querySelector('body');
    if (showPopup.value === true) {
      // bodyOverflow();
      htmlWrapper.style.overflowY = 'hidden';
      bodyWrapper.style.overflowY = 'hidden';
    } else {
      htmlWrapper.style.overflowY = 'initial';
      bodyWrapper.style.overflowY = 'initial';
    }
  },
  { immediate: true },
);

onMounted(() => {
  getInformationFromCookie();
});
</script>

<style lang="scss">
@import './s-header.scss';
</style>
