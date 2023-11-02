import { defineStore } from 'pinia';

export const useIntroductionStore = defineStore({
  id: 'introduction',
  state: () => ({
    originalText: "A Magyar Szállodák és Éttermek Szövetsége – amely 1968. március 30-án 17 szálloda részvételével alakult – a magyar turizmus és vendéglátás egyik meghatározó szakmai szervezete. Jelenlegi tagsága közel 640 tagot számlál. Közöttük található 457 szálloda, mintegy 39.241 szállodai szobával - melyek a hazai hotel kapacitás kb. 60%-át képviselik - továbbá 10 szállodalánc, 22 önálló étterem, 17 közép- és felsőfokú oktatási intézmény és 133 társult tag.",
    editedText: "",
  }),
  actions: {
    updateOriginalText(text) {
      this.originalText = text;
    },
  },
});
