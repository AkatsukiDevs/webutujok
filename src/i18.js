import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    fallbackLng: "ru",
    resources: {
      ru: {
        translation: {
          h1: "ул. Ленина 585",
          h2: "Режим работы",
          i1: "Услуги декатировки ткани в Бишкеке",
          i2: "Декатировка – это вид тепловой обработки ткани. Декатировку выполняют для того, чтобы во время пошива материал не деформировался",
          i3: "Получить консультацию",
          e: "Пример декатировки",
          e1: "Многие ткани дают усадку после первой, а порой и после второй стирки. Садятся ткани по разному – от 1 до 20 см в среднем. Пропустив такой важный шаг как декатировка, на выходе можно получить изделие на 2 размера меньше (после первой стирки).",
          e2: "Кроме усадки ткань может деформироваться – вытянуться или растянуться. Для производства тканей используют сильное натяжение нити. Декатировка снимает напряжение нитей (ослабевает натяжение) и стабилизирует волокна. В ходе стирки, увлажнения нити полотна становятся более упругими и меняют свою длину.",
          s1: "В наши услуги входят",
          s2: "Консультация",
          s3: "Быстрая и качественная пропарка",
          s4: "Бесплатная доставка при заказе от 500 метров",
          s5: "Загрузка и выгрузка товара",
          s6: "Возможна онлайн оплата",
          c1: "Посчитать",
          p1: "Сделать предзаказ",
          p2: "Примечание : цена одного метра 4 сома, при заказе от 500 метровдоставка бесплатная",
          p3: "ФИО",
          p4: "Номер телефона",
          p5: "Метраж ткани",
          p6: "Желаемая дата",
          p7: "Оформить предзаказ",
          f1: "Контакты",
          m1: "Оформить предзаказ",
        },
      },
      kg: {
        translation: {
          h1: "Ленин көч. 585",
          h2: "Иш тартиби",
          i1: "Бишкек шаарында кездеме декаттоо кызматы",
          i2: "Декаттоо — кездемени жылуулук менен иштетүүнүн бир түрү. Декаттоо материал тигүү учурунда деформацияланбашы үчүн жүргүзүлөт.",
          i3: "Консультация алуу",
          e: "Декаттоонун мисалы",
          e1: "Көптөгөн кездемелер биринчи жуугандан кийин, кээде экинчи жуугандан кийин да кичирейет. Кездемелер ар кандай жолдор менен отурушат - орточо 1ден 20 смге чейин. Декаттоо сыяктуу маанилүү кадамды өткөрүп жиберүү менен, сиз продуктуну 2 өлчөмгө кичирээк (биринчи жуугандан кийин) ала аласыз.",
          e2: "Жыйыруудан тышкары, кездеме деформацияланышы мүмкүн - сунуу же сунуу. кездемелерди өндүрүү үчүн, күчтүү жип чыңалуу колдонулат. Декат жиптердин чыңалуусун жеңилдетет (чыңалуу алсыратат) жана жипчелерди турукташтырат. Жуу учурунда кездеменин жиптери ийкемдүү болуп, узундугу өзгөрөт.",
          s1: "биздин кызматыбызга кирет",
          s2: "Консультация",
          s3: "Тез жана жогорку сапаттагы буулоо",
          s4: "500 метрден өйдө заказ бергенде акысыз жеткирүү",
          s5: "Кездемени жүктөө жана түшүрүү",
          s6: "Oнлайн төлөм",
          c1: "Саноо",
          p1: "предзаказ кылуу",
          p2: "Эскертүү: бир метрдин баасы 4 сом, 500 метрден өйдө заказ кылганда жеткирүү бекер",
          p3: "Аты жону",
          p4: "Телефон номери",
          p5: "Кездеменин узундугу(метр)",
          p6: "Каалаган дата",
          p7: "Предзаказ кылуу",
          f1: "байланыш",
          m1: "Предзаказ кылуу",
        },
      },
    },
  });
