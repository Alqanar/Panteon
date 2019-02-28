'use strict'

const checkboxes = document.querySelectorAll(`.questions__cell-checkbox`);
const answer = document.querySelector(`.questions__answer`);

const Texts = {
  survive: {
    headline: `Жить или выживать?`,
    text: [
      `Чем отличаются Земля и Марс? Какие условия встретят новых поселенцев?`,
      `Марс холодная и засушливая планета, на которой есть своя атмосфера, на 96% состоящая из углекислых
      газов,
      а минимальная температура опускается до -140 градусов по Цельсию. Каждый год по весне на планете
      случаются пылевые бури, длящиеся от нескольких часов до нескольких месяцев.`,
      `На планете отсутствует магнитное поле, поэтому радиационный фон повышен. А низкая гравитация
      при&nbsp;длительном пребывании на Марсе сделает возвращение на Землю невозможным. Полёт на Марс —
      билет в один конец с целью создать новую цивилизацию.`
    ]
  },
  technology: {
    headline: `Готовы ли технологии?`,
    text: [`Конечно`]
  },
  fantastic: {
    headline: `Путешествие на грани фантастики`,
    text: [`Наши бабушки и дедушки могли лишь фантазировать на тему полетов на Марс. А мы осуществляем это!`]
  },
  live: {
    headline: `Жизнь на Марсе`,
    text: [`Будет сложно, но мы справимся!`]
  }
};

const getPElements = (texts) => {
  let PElements = '';
  for (let text of texts) {
    PElements += 
    `<p class="questions__text">
      ${text}
    </p>`
  }
  return PElements;
}

const createTextTemplate = (obj) =>
  `<p class="questions__headline">
    ${obj.headline}
  </p>
  ${getPElements(obj.text)}`;


const createCardElement = () =>{
  answer.innerHTML = createTextTemplate(Texts[event.target.value])};
  
const addEventListeners = () => {
  for (let checkbox of checkboxes) {
    checkbox.addEventListener(`click`, createCardElement);
  }
}

addEventListeners();


