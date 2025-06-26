// Словник перекладів
const translations = {
  en: {
    title: "Vavada Casino",
    text: "Welcome to the world of Vavada! Get your bonus and enjoy.",
    bonus: "Get bonus",
    bonusTitle: "Free bonus",
    login: "Log In",
    signup: "Sign Up",
    forgot: "Forgot Password?",
    "nav.home": "Home",
    "nav.review": "Review",
    "nav.bonus": "Bonus",
    "nav.spins": "Spins",
    "footer.contacts": "Contacts",
    "footer.rules": "Rules",
    "footer.faq": "FAQ",
  },
  ua: {
    title: "Казино Вавада",
    text: "Ласкаво просимо у світ Вавада! Отримай бонус та грай.",
    bonus: "Отримати бонус",
    bonusTitle: "Безкоштовний бонус",
    login: "Увійти",
    signup: "Реєстрація",
    forgot: "Забули пароль?",
    "nav.home": "Головна",
    "nav.review": "Огляд",
    "nav.bonus": "Бонус",
    "nav.spins": "Фріспіни",
    "footer.contacts": "Контакти",
    "footer.rules": "Правила",
    "footer.faq": "Питання",
  },
  pl: {
    title: "Kasyno Vavada",
    text: "Witamy w świecie Vavada! Odbierz bonus i graj.",
    bonus: "Odbierz bonus",
    bonusTitle: "Darmowy bonus",
    login: "Zaloguj się",
    signup: "Rejestracja",
    forgot: "Nie pamiętasz hasła?",
    "nav.home": "Start",
    "nav.review": "Recenzja",
    "nav.bonus": "Bonus",
    "nav.spins": "Spiny",
    "footer.contacts": "Kontakt",
    "footer.rules": "Zasady",
    "footer.faq": "FAQ",
  }
};

// Застосування перекладу
function setLanguage(lang) {
  const elements = document.querySelectorAll("[data-i18n]");
  elements.forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  localStorage.setItem("lang", lang);
}

// Завантажити вибрану мову при старті
document.addEventListener("DOMContentLoaded", () => {
  const select = document.querySelector(".lang-select");
  const savedLang = localStorage.getItem("lang") || "en";
  select.value = savedLang;
  setLanguage(savedLang);

  select.addEventListener("change", (e) => {
    setLanguage(e.target.value);
  });
});
