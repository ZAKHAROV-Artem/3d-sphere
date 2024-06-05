import { getCoordinates } from "./utils";

const documents = [
  {
    isTitle: true,
    text: "Документи",
    position: getCoordinates(0, 0),
  },
  {
    text: "Податки",
    position: getCoordinates(-0.3, 0),
  },
  {
    text: "Комунальні послуги",
    position: getCoordinates(0, 0.2),
  },
  {
    text: "Міграція",
    position: getCoordinates(0.3, 0),
  },
  // ---
  {
    text: "Виконавчі справи",
    position: getCoordinates(-0.15, -0.2),
  },
  {
    text: "Знаття арешту",
    position: getCoordinates(-0.15, -0.4),
  },
  // ---
  {
    text: "Оскарження дій",
    position: getCoordinates(0.15, -0.2),
  },
  {
    text: "Оскарження дій\nпосадових осіб",
    position: getCoordinates(0.15, -0.4),
  },
  {
    text: "Захист прав споживача",
    position: getCoordinates(3),
  },
];

const family = [
  {
    isTitle: true,
    text: "Сім'я",
    position: getCoordinates(0, 0),
  },
  {
    text: "Позбавлення\nбатьківства",
    position: getCoordinates(-0.3, 0),
  },
  {
    text: "Усиновлення",
    position: getCoordinates(-0.15, 0.2),
  },
  {
    text: "Опіка та піклування",
    position: getCoordinates(0.15, 0.2),
  },
  {
    text: "Спадщина",
    position: getCoordinates(0.3, 0),
  },
  // ---
  {
    text: "Розлучення",
    position: getCoordinates(0, -0.2),
  },
  {
    text: "Поділ майна",
    position: getCoordinates(-0.3, -0.4),
  },
  {
    text: "Аліменти",
    position: getCoordinates(0, -0.4),
  },
  {
    text: "Діти",
    position: getCoordinates(0.3, -0.4),
  },
];

const activity = [
  {
    isTitle: true,
    text: "Діяльність",
    position: getCoordinates(0, 0),
  },
  {
    text: "Соцзабезпечення",
    position: getCoordinates(-0.15, 0.2),
  },
  {
    text: "Субсидії",
    position: getCoordinates(-0.3, 0.4),
  },
  {
    text: "Робота",
    position: getCoordinates(0.15, 0.2),
  },
  {
    text: "Звільнення",
    position: getCoordinates(0, 0.4),
  },
  {
    text: "Виробнича травма",
    position: getCoordinates(0.3, 0.4),
  },
  {
    text: "Не виплата ЗП",
    position: getCoordinates(0.6, 0.4),
  },
  {
    text: "Війна",
    position: getCoordinates(-0.3, 0),
  },
  {
    text: "Пенсія",
    position: getCoordinates(0.3, 0),
  },
  {
    text: "Бізнес",
    position: getCoordinates(0, -0.2),
  },

  {
    text: "Реєстрація СПД",
    position: getCoordinates(-0.45, -0.4),
  },
  {
    text: "Господарські справи",
    position: getCoordinates(-0.15, -0.4),
  },
  {
    text: "Аутсорсинг бізнесу",
    position: getCoordinates(0.15, -0.4),
  },
  {
    text: "Ліквідація СПД",
    position: getCoordinates(0.45, -0.4),
  },
];
const property = [
  {
    isTitle: true,
    text: "Майно",
    position: getCoordinates(0, 0),
  },
  {
    text: "Авто",
    position: getCoordinates(-0.3, 0),
  },
  {
    text: "Авторське право",
    position: getCoordinates(0.3, 0),
  },
  {
    text: "Гроші",
    position: getCoordinates(0, 0.2),
  },
  {
    text: "Депозит",
    position: getCoordinates(-0.3, 0.3),
  },
  {
    text: "Кредит",
    position: getCoordinates(0, 0.4),
  },
  {
    text: "Борг",
    position: getCoordinates(0.3, 0.3),
  },
  {
    text: "Нерухомість",
    position: getCoordinates(0, -0.2),
  },

  {
    text: "Земля",
    position: getCoordinates(-0.15, -0.4),
  },
  {
    text: "Узакодення\nнерухомості",
    position: getCoordinates(-0.3, -0.6),
  },
  {
    text: "Приватизація",
    position: getCoordinates(0, -0.6),
  },
  {
    text: "Житло",
    position: getCoordinates(0.15, -0.4),
  },
  {
    text: "Виселення",
    position: getCoordinates(0.35, -0.25),
  },
  {
    text: "ОСББ",
    position: getCoordinates(0.45, -0.4),
  },
  {
    text: "Затоплення",
    position: getCoordinates(0.35, -0.55),
  },
];
const offense = [
  {
    isTitle: true,
    text: "Правопорушення",
    position: getCoordinates(0, 0),
  },
  {
    text: "Кримінальні справи",
    position: getCoordinates(-0.3, -0.2),
  },
  {
    text: "Військові злочини",
    position: getCoordinates(-0.3, -0.4),
  },
  {
    text: "ДТП",
    position: getCoordinates(0, -0.3),
  },
  {
    text: "Адміністративні\nсправи",
    position: getCoordinates(0.3, -0.2),
  },
  {
    text: "Ст. 130 КУпАП",
    position: getCoordinates(0.3, -0.4),
  },
  {
    text: "Нещасні випадки",
    position: getCoordinates(0, 0.2),
  },
  {
    text: "Медичні помилки",
    position: getCoordinates(-0.15, 0.4),
  },
  {
    text: "Аварії",
    position: getCoordinates(0.15, 0.4),
  },
];

export const categories = [documents, family, activity, property, offense];
