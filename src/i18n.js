// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next) // pass the i18n instance to react-i18next.
  .init({
    resources: {
      en: {
        translation: {
           AllBooks: "All Books",
           AboutUs: "About Us",
           Contact: "Contact",
           News:"News",
           SearchPlaceholder: ""
        },
      },
      vn: {
        translation: {
          AllBooks: 'Tất cả sách',
          AboutUs: "Về chúng tôi",
          Contact: "Liên hệ",
          News: "Bài viết",
          SearchPlaceholder: "Nhập từ khoá tìm kiếm"
        },
      },
    },
    lng: localStorage.getItem("language") ? localStorage.getItem("language") : 'vi', // Default language
    fallbackLng: localStorage.getItem("language") ? localStorage.getItem("language") :'vi', // Fallback language if a translation is missing
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
