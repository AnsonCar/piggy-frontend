import { createI18n } from 'vue-i18n';
import { basis as en } from './en/index';
import { basis as zh_cn } from './zh-CN/index';
import { basis as zh_tw } from './zh-TW/index';

const defineI18nConfig = {
    legacy: false,
    defaultLocale: 'zh',
    fallbackLocale: 'zh',
    locales: [
        { code: 'en', iso: 'en-US' },
        { code: 'zh-TW', iso: 'zh-TW' },
        { code: 'zh-CN', iso: 'zh-CN' }
    ],
    messages: {
        en: en,
        zh: zh_tw,
        'zh-CN': zh_cn
    }
};

export const i18n = createI18n(defineI18nConfig);