import { defineStore } from 'pinia';

export const useUserStore = defineStore({
  id: 'user-store',
  state: () => {
    return {
      email: '',
      uid: '',
    };
  },

  actions: {
    setUser(email, uid) {
      this.email = email;
      this.uid = uid;
    },
  },
});
