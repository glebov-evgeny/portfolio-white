import { useUserStore } from '~/store/user';

// eslint-disable-next-line no-shadow
export default defineNuxtRouteMiddleware(() => {
  const currentUser = useUserStore();
  if (!currentUser.uid) {
    return navigateTo('/authorization');
  }
});
