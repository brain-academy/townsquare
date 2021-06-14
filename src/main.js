import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import Vue from "vue";
import VueI18n from "vue-i18n";
import App from "./App";
import store from "./store";

const faIcons = [
  "AddressCard",
  "BookOpen",
  "BookDead",
  "BroadcastTower",
  "Chair",
  "CheckSquare",
  "CloudMoon",
  "Cog",
  "Copy",
  "Dice",
  "Dragon",
  "ExchangeAlt",
  "ExclamationTriangle",
  "FileCode",
  "FileUpload",
  "HandPaper",
  "HandPointRight",
  "Heartbeat",
  "Image",
  "Link",
  "MinusCircle",
  "PeopleArrows",
  "PlusCircle",
  "Question",
  "Random",
  "RedoAlt",
  "SearchMinus",
  "SearchPlus",
  "Skull",
  "Square",
  "TheaterMasks",
  "Times",
  "TimesCircle",
  "TrashAlt",
  "Undo",
  "User",
  "UserEdit",
  "UserFriends",
  "Users",
  "VenusMars",
  "VolumeUp",
  "VolumeMute",
  "VoteYea",
  "WindowMaximize",
  "WindowMinimize"
];
const fabIcons = ["Github", "Discord"];
library.add(
  ...faIcons.map(i => fas["fa" + i]),
  ...fabIcons.map(i => fab["fa" + i])
);
Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.config.productionTip = false;
Vue.use(VueI18n);

const i18n = new VueI18n({ formatFallbackMessages: true });

new Vue({
  render: h => h(App),
  i18n: i18n,
  store
}).$mount("#app");

function setI18nLanguage(lang) {
  i18n.locale = lang;
  document.querySelector("html").setAttribute("lang", lang);
  return lang;
}

const loadedLanguages = [];

function loadLanguageAsync(lang) {
  return loadedLanguages.includes(lang)
    ? Promise.resolve(setI18nLanguage(lang))
    : import(`./assets/translations/${lang}.json`).then(messages => {
        i18n.setLocaleMessage(lang, messages.default);
        loadedLanguages.push(lang);
        return setI18nLanguage(lang);
      });
}

loadLanguageAsync(navigator.language || navigator.userLanguage);

loadLanguageAsync("fr");
