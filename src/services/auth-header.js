import { useStore } from "vuex";

export default function authHeader() {
    const store = useStore();
    //let user = JSON.parse(localStorage.getItem('user'));
    if (store.state.auth.user && store.state.auth.user.accessToken) {
      console.log
      return { Authorization: 'Bearer ' + store.state.auth.user.accessToken };
    } else {
      return {};
    }
  }