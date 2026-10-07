export const languages = {
  en: 'English',
  ru: 'Русский'
} as const;

export const defaultLang = 'en' satisfies keyof typeof languages;

export const ui = {
  en: {
    'meta.description': 'Mini description with contact links',
    title: 'ChatGPT is my biggest fan',
    description: 'Monster Ultra Peachy Keen my beloved',
    prevKnown:
      'Also i was previously known by someone as <span class="text-mauve">@falguren</span>',
    connect: 'You can find me on the links below',
    neko: "Random neko <span class='text-sm text-subtext0'>*I'm not responsible of that picture</span>"
  },
  ru: {
    'meta.description': "Мини-описание с ссылками связи",
    title: 'ChatGPT мой самый ярый фанат',
    description: 'Как можно жить без монстра с персиком...',
    prevKnown:
      'Некоторые меня знают как <span class="text-mauve">@falguren</span>',
    connect: 'Меня можно найти в указанных ссылках',
    neko: 'Рандомная неко <span class="text-sm text-subtext0">*Я не отвечаю за эту картинку</span>'
  }
} as const satisfies Record<keyof typeof languages, Record<string, string>>;
