<template>
    <div class="dropdown dropdown-hover">
        <TPButton tabindex="0" size="sm" role="button" icon="language" class="btn-circle btn-ghost" />
        <ul tabindex="0" class="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
            <li @click="changeLocale('en')"><a>English</a></li>
            <li @click="changeLocale('zh')"><a>繁體中文</a></li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import TPButton from './TPButton.vue';

const { locale } = useI18n();

// 定义一个辅助函数来设置语言
const changeLocale = (lang: string) => {
    locale.value = lang;
};
</script>
