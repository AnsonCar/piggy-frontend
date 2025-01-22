import { useAuthStore } from '../stores/authStore';
export async function isLoggedIn() {
    const authStore = useAuthStore();
    const isLoggedIn = await authStore.isLogin();
    return isLoggedIn;
}