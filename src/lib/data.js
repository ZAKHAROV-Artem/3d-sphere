import { getCoordinates } from "./utils";

const documents = [
  {
    isTitle: true,
    text: "Документи",
    position: getCoordinates(0, 0),
    url: "https://zahist.ua/ourServices.html",
  },
  {
    text: "Податки",
    position: getCoordinates(-0.3, 0),
    url: "https://zahist.ua/ourServices.html",
  },
  {
    text: "Комунальні послуги",
    position: getCoordinates(0, 0.2),
    url: "https://zahist.ua/ourServices.html",
  },
  {
    text: "Міграція",
    position: getCoordinates(0.3, 0),
    url: "https://zahist.ua/ourServices.html",
  },
  // ---
  {
    text: "Виконавчі справи",
    position: getCoordinates(-0.15, -0.2),
    url: "https://zahist.ua/ourServices.html",
  },
  {
    text: "Знаття арешту",
    position: getCoordinates(-0.15, -0.4),
    url: "https://zahist.ua/ourServices.html",
  },
  // ---
  {
    text: "Оскарження дій",
    position: getCoordinates(0.15, -0.2),
    url: "https://zahist.ua/ourServices.html",
  },
  {
    text: "Оскарження дій\nпосадових осіб",
    position: getCoordinates(0.15, -0.4),
    url: "https://zahist.ua/ourServices.html",
  },
  {
    text: "Захист прав споживача",
    position: getCoordinates(3),
    url: "https://zahist.ua/ourServices.html",
  },
];

const family = [
  {
    isTitle: true,
    text: "Сім'я",
    position: getCoordinates(0, 0),
    url: "https://zahist.ua/simeyni-spravy-news.html",
  },
  {
    text: "Позбавлення\nбатьківства",
    position: getCoordinates(-0.3, 0),
    url: "https://zahist.ua/pozbavlennya-batkivskykh-prav-.html",
  },
  {
    text: "Усиновлення",
    position: getCoordinates(-0.15, 0.2),
    url: "https://zahist.ua/urydychnyi-suprovid-usynovlennya-.html,",
  },
  {
    text: "Опіка та піклування",
    position: getCoordinates(0.15, 0.2),
    url: "https://zahist.ua/vstanovlennya-opiky-ta-pikluvannya-.html",
  },
  {
    text: "Спадщина",
    position: getCoordinates(0.3, 0),
    url: "https://zahist.ua/podil-maina--shcho-ye-ob-yektom-prava-spilnoyi-sumisnoyi-vlasnosti-.html",
  },
  // ---
  {
    text: "Розлучення",
    position: getCoordinates(0, -0.2),
    url: "https://zahist.ua/rozirvannya-shlubu-bez-zhody-cholovika-chy-drujyny-.html",
  },
  {
    text: "Поділ майна",
    position: getCoordinates(-0.3, -0.4),
    url: "https://zahist.ua/rozpodil-maina-pry-rozirvanni-shlubu-.html",
  },
  {
    text: "Аліменти",
    position: getCoordinates(0, -0.4),
    url: "https://zahist.ua/posluhy-advokata-pry-styahnenni-alimentiv--.html",
  },
  {
    text: "Діти",
    position: getCoordinates(0.3, -0.4),
    url: "https://zahist.ua/rozirvannya-shclubu--yakshcho-ye-dity-.html",
  },
];

const activity = [
  {
    isTitle: true,
    text: "Діяльність",
    position: getCoordinates(0, 0),
    url: "https://zahist.ua/ourServices.html",
  },
  {
    text: "Соцзабезпечення",
    position: getCoordinates(-0.15, 0.2),
    url: "https://zahist.ua/ourServices.html",
  },
  {
    text: "Субсидії",
    position: getCoordinates(-0.3, 0.4),
    url: "https://zahist.ua/ourServices.html",
  },
  {
    text: "Робота",
    position: getCoordinates(0.15, 0.2),
    url: "https://zahist.ua/ourServices.html",
  },
  {
    text: "Звільнення",
    position: getCoordinates(0, 0.4),
    url: "https://zahist.ua/ourServices.html",
  },
  {
    text: "Виробнича травма",
    position: getCoordinates(0.3, 0.4),
    url: "https://zahist.ua/ourServices.html",
  },
  {
    text: "Не виплата ЗП",
    position: getCoordinates(0.6, 0.4),
    url: "https://zahist.ua/ourServices.html",
  },
  {
    text: "Війна",
    position: getCoordinates(-0.3, 0),
    url: "https://zahist.ua/ourServices.html",
  },
  {
    text: "Пенсія",
    position: getCoordinates(0.3, 0),
    url: "https://zahist.ua/ourServices.html",
  },
  {
    text: "Бізнес",
    position: getCoordinates(0, -0.2),
    url: "https://zahist.ua/ourServices.html",
  },

  {
    text: "Реєстрація СПД",
    position: getCoordinates(-0.45, -0.4),
    url: "https://zahist.ua/ourServices.html",
  },
  {
    text: "Господарські справи",
    position: getCoordinates(-0.15, -0.4),
    url: "https://zahist.ua/ourServices.html",
  },
  {
    text: "Аутсорсинг бізнесу",
    position: getCoordinates(0.15, -0.4),
    url: "https://zahist.ua/ourServices.html",
  },
  {
    text: "Ліквідація СПД",
    position: getCoordinates(0.45, -0.4),
    url: "https://zahist.ua/ourServices.html",
  },
];

const property = [
  {
    isTitle: true,
    text: "Майно",
    position: getCoordinates(0, 0),
    url: "https://zahist.ua/ourServices.html",
  },
  {
    text: "Авто",
    position: getCoordinates(-0.3, 0),
    url: "https://zahist.ua/ourServices.html",
  },
  {
    text: "Авторське право",
    position: getCoordinates(0.3, 0),
    url: "https://zahist.ua/ourServices.html",
  },
  {
    text: "Гроші",
    position: getCoordinates(0, 0.2),
    url: "https://zahist.ua/ourServices.html",
  },
  {
    text: "Депозит",
    position: getCoordinates(-0.3, 0.3),
    url: "https://zahist.ua/ourServices.html",
  },
  {
    text: "Кредит",
    position: getCoordinates(0, 0.4),
    url: "https://zahist.ua/ourServices.html",
  },
  {
    text: "Борг",
    position: getCoordinates(0.3, 0.3),
    url: "https://zahist.ua/ourServices.html",
  },
  {
    text: "Нерухомість",
    position: getCoordinates(0, -0.2),
    url: "https://zahist.ua/ourServices.html",
  },

  {
    text: "Земля",
    position: getCoordinates(-0.15, -0.4),
    url: "https://zahist.ua/ourServices.html",
  },
  {
    text: "Узакодення\nнерухомості",
    position: getCoordinates(-0.3, -0.6),
    url: "https://zahist.ua/ourServices.html",
  },
  {
    text: "Приватизація",
    position: getCoordinates(0, -0.6),
    url: "https://zahist.ua/ourServices.html",
  },
  {
    text: "Житло",
    position: getCoordinates(0.15, -0.4),
    url: "https://zahist.ua/ourServices.html",
  },
  {
    text: "Виселення",
    position: getCoordinates(0.35, -0.25),
    url: "https://zahist.ua/ourServices.html",
  },
  {
    text: "ОСББ",
    position: getCoordinates(0.45, -0.4),
    url: "https://zahist.ua/ourServices.html",
  },
  {
    text: "Затоплення",
    position: getCoordinates(0.35, -0.55),
    url: "https://zahist.ua/ourServices.html",
  },
];
const offense = [
  {
    isTitle: true,
    text: "Правопорушення",
    position: getCoordinates(0, 0),
    url: "https://zahist.ua/ourServices.html",
  },
  {
    text: "Кримінальні справи",
    position: getCoordinates(-0.3, -0.2),
    url: "https://zahist.ua/kryminalni-spravy-news.html",
  },
  {
    text: "Військові злочини",
    position: getCoordinates(-0.3, -0.4),
    url: "https://zahist.ua/viyskovy-spravy-news.html",
  },
  {
    text: "ДТП",
    position: getCoordinates(0, -0.3),
    url: "https://zahist.ua/dtp-spravy-news.html",
  },
  {
    text: "Адміністративні\nсправи",
    position: getCoordinates(0.3, -0.2),
    url: "https://zahist.ua/administrativni-spravy-news.html",
  },
  {
    text: "Ст. 130 КУпАП",
    position: getCoordinates(0.3, -0.4),
    url: "https://zahist.ua/oskarjennya-protokolu-po-st--130-kupap-.html",
  },
  {
    text: "Нещасні випадки",
    position: getCoordinates(0, 0.2),
    url: "https://zahist.ua/ourServices.html",
  },
  {
    text: "Медичні помилки",
    position: getCoordinates(-0.15, 0.4),
    url: "https://zahist.ua/ourServices.html",
  },
  {
    text: "Аварії",
    position: getCoordinates(0.15, 0.4),
    url: "https://zahist.ua/ourServices.html",
  },
];

export const categories = [documents, family, activity, property, offense];
