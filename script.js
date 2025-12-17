document.addEventListener('DOMContentLoaded', function () {

const questions = [
  { id: 1, text: "Как в вашей компании обычно реализуются новые проекты или стратегические инициативы?", options: [
    { value: "1A", text: "По четкому годовому плану — отклонения минимальны, приоритеты определены надолго" },
    { value: "1B", text: "Мы пробуем много идей, но не все \"взлетают\" — сложно доводить до результата" },
    { value: "1C", text: "Есть четкий фокус на 2-3 главных направления — гибко распределяем ресурсы между ними" },
    { value: "1D", text: "Точечные решения под задачи — нет единой системы управления проектами" }
  ]},
  { id: 2, text: "Как строится взаимодействие с ключевыми клиентами или партнерами?", options: [
    { value: "2A", text: "В основном транзакционно — обсуждаем конкретные сделки и условия" },
    { value: "2B", text: "Стараемся выстраивать долгосрочные отношения — но нет системного подхода" },
    { value: "2C", text: "Совместно планируем развитие — есть партнерские программы и общие цели" },
    { value: "2D", text: "Каждый менеджер строит отношения по-своему — зависит от личности" }
  ]},
  { id: 3, text: "Где больше всего времени теряют ваши сотрудники (включая руководство)?", options: [
    { value: "3A", text: "В согласованиях и ожидании решений — много встреч, но мало действий" },
    { value: "3B", text: "В рутинной работе с документами — поиск, проверка, перенос данных" },
    { value: "3C", text: "В решении внезапных проблем — \"тушим пожары\" вместо развития" },
    { value: "3D", text: "В сборе информации для отчетов — данные разрознены" }
  ]},
  { id: 4, text: "Когда вы в последний раз кардинально меняли подход к работе с клиентами?", options: [
    { value: "4A", text: "В этом году — постоянно тестируем новое" },
    { value: "4B", text: "Несколько лет назад — работаем по проверенной схеме" },
    { value: "4C", text: "Планируем изменения — но не знаем с чего начать" },
    { value: "4D", text: "Клиенты разные — подход индивидуальный" }
  ]},
  { id: 5, text: "Как вы принимаете решения о развитии продуктов или услуг?", options: [
    { value: "5A", text: "На основе данных и экспериментов — тестируем гипотезы" },
    { value: "5B", text: "По решению руководства — опыт и интуиция" },
    { value: "5C", text: "Изучаем конкурентов — повторяем успешное" },
    { value: "5D", text: "По запросам ключевых клиентов" }
  ]},
  { id: 6, text: "Что происходит, когда проект сталкивается с серьезным препятствием?", options: [
    { value: "6A", text: "Быстро перестраиваемся — пробуем другой подход" },
    { value: "6B", text: "Собираем совещания — ищем виноватых" },
    { value: "6C", text: "Эскалируем руководству — ждем решения" },
    { value: "6D", text: "Анализируем системно — устраняем причину" }
  ]},
  { id: 7, text: "Как вы оцениваете эффективность бизнеса?", options: [
    { value: "7A", text: "По финансовым показателям — прибыль, выручка" },
    { value: "7B", text: "По выполнению планов — KPI сотрудников" },
    { value: "7C", text: "По динамике ключевых процессов — автоматические дашборды" },
    { value: "7D", text: "По удовлетворенности клиентов — NPS, лояльность" }
  ]},
  { id: 8, text: "Как вы получаете информацию для принятия ключевых управленческих решений (инвестиции, развитие продуктов, сокращение затрат)?", options: [
    { value: "8A", text: "Из регулярных управленческих отчетов (ОПУ, ДДС, прогнозы), которые готовятся ежемесячно." },
    { value: "8B", text: "Запрашиваем данные у бухгалтерии или финансового отдела по мере необходимости — иногда приходится ждать." },
    { value: "8C", text: "Полагаемся на операционные данные (продажи) и интуицию, точных финансовых моделей нет." },
    { value: "8D", text: "Используем единую BI-систему или дашборды, где видна полная картина в реальном времени." }
  ]},
  { id: 9, text: "Как организовано управление денежными потоками (казначейство) в вашей компании?", options: [
    { value: "9A", text: "Есть платежный календарь и система прогнозирования, кассовые разрывы планируем заранее." },
    { value: "9B", text: "Контролируем по факту, иногда возникают срочные потребности в деньгах." },
    { value: "9C", text: "Это забота бухгалтера/гендиректора, общего понимания будущих платежей нет." },
    { value: "9D", text: "Автоматизировано через интеграцию 1С/банк-клиентов, процессы почти не требуют ручного вмешательства." }
  ]},
  { id: 10, text: "Насколько ваша финансовая команда (или бухгалтер) загружена рутинной работой?", options: [
    { value: "10A", text: "Есть время на анализ — автоматизировали основные процессы (счета, акты, первичка)." },
    { value: "10B", text: "Постоянно заняты обработкой документов и ответами на вопросы из других отделов." },
    { value: "10C", text: "Справляются, но все в ручном режиме (Excel, пересылка файлов), ошибки случаются." },
    { value: "10D", text: "Нет отдельной финансовой команды, бухгалтер на аутсорсе, управленческих данных не хватает." }
  ]},
  { id: 11, text: "Когда вы в последний раз проводили аудит финансовых процессов на предмет потерь, рисков или неэффективности?", options: [
    { value: "11A", text: "В последние 6-12 месяцев — это регулярная практика." },
    { value: "11B", text: "Несколько лет назад, при внедрении 1С или смене бухгалтера." },
    { value: "11C", text: "Никогда не проводили системно, но чувствуем, что есть проблемные места." },
    { value: "11D", text: "Постоянно видим точечные проблемы, но нет ресурса на их системное решение." }
  ]},
  { id: 12, text: "Как вы оцениваете, готовы ли финансы компании к масштабированию, привлечению инвестиций или due diligence?", options: [
    { value: "12A", text: "Уверены — учет прозрачен, процессы задокументированы, отчетность соответствует стандартам." },
    { value: "12B", text: "Есть сомнения — инвесторы могут задать неудобные вопросы по данным." },
    { value: "12C", text: "Это станет проблемой — финансы не структурированы для такого скачка." },
    { value: "12D", text: "Не задумывались — этот вопрос встанет по факту." }
  ]}
];

const products = {
  "OGSM": {
    title: "Адаптивная система стратегического управления OGSM",
    short: "OGSM — это не просто методология, а «живая» система управления компанией",
    full: `OGSM — это не просто методология, а «живая» система управления компанией. Её суть — в создании эффективной связки между долгосрочным видением (3-5 лет) и ежедневными действиями каждого сотрудника через прозрачные стратегические инициативы, KPI и регулярный трекинг. Это подход, обеспечивающий фокус, гибкость и полную управляемость на пути к амбициозным целям.\n\n**Результат:**\nПревращение компании в «Команду Победителей», которая верит в цели и умеет их достигать. Операционные потери снижаются не менее чем на 20%, успешность стратегических проектов вырастает с 10% до 50%.`
  },
  "Agile": {
    title: "Инновации в бизнесе через Agile & Change",
    short: "Комплексный подход к управлению изменениями и разработке продуктов",
    full: `Мы предлагаем комплексный подход к управлению изменениями и разработке продуктов, который сочетает создание специализированного подразделения Change и внедрение методологии Agile/Scrum. Это позволяет безопасно тестировать новые идеи и масштабировать их в соответствии с потребностями рынка.\n\n**Эффект:**\nСнижение рисков, фокус на прибыль, конкурентное преимущество, гибкость и скорость вывода продуктов. Успешный выход на рынок с нуля и достижение лидерских позиций за 3 года.`
  },
  "Academy": {
    title: "Академия Развития Клиентов и Партнеров",
    short: "От транзакций к стратегическому партнёрству",
    full: `Подход направлен на создание устойчивых и взаимовыгодных отношений, превращая обычные транзакции в долгосрочные стратегические союзы. Мы предлагаем системные решения, которые обеспечивают рост прибыльности и предсказуемость вашего бизнеса.\n\n**Результаты:**\nСтруктурированное управление отношениями, максимизация маржинальности (прибыльность ↑ в 3,5 раза), предсказуемость бизнеса.`
  },
  "F2": {
    title: "Финансовый Диагноз и Дорожная Карта",
    short: "От хаоса в финансах — к прозрачной системе за 4 недели",
    full: `Экспресс-аудит финансовой функции и бизнес-процессов компании с разработкой пошагового плана трансформации (дорожной карты). Это не просто отчет, а готовая стратегия действий.\n\n**Для кого:** Собственники и гендиректоры (50–500 сотрудников), когда решения принимаются «на глазок». Вы получаете отчет + дорожную карту + 2 сопроводительных созвона.`
  },
  "F1": {
    title: "Запуск финансового менеджмента с нуля",
    short: "Создаем ваш финансовый отдел «под ключ»: процессы, команда, системы",
    full: `Комплексный проект по построению или полной реорганизации финансово-экономической службы компании. От найма команды до внедрения работающих процессов и систем.\n\n**Формат:** Проект 3–6 месяцев. Модули: архитектура, учет, бюджетирование, автоматизация. Результат — работающий финансовый отдел, готовящий ежемесячные отчеты.`
  },
  "F3": {
    title: "AI-интеллект для финансового директора",
    short: "Освободите до 30% времени команды от рутины с помощью AI",
    full: `Пилотный проект по внедрению AI-решений в рутинные финансовые процессы. Не абстрактные разговоры, а конкретные инструменты, которые начинают работать в вашей компании.\n\n**Что делаем:** Автоматизация документов, чат-бот для запросов («Сколько в кассе?»), прогнозирование ДДС. УТП: Наталья — эксперт и по финансам, и по AI.`
  }
};

const weights = {
  "1A": { agility: 0, partnership: 0, automation: 1, system: 2 },
  "1B": { agility: 3, partnership: 1, automation: 0, system: 0 },
  "1C": { agility: 2, partnership: 2, automation: 0, system: 3 },
  "1D": { agility: 1, partnership: 0, automation: 2, system: 1 },
  "2A": { agility: 0, partnership: 0, automation: 1, system: 1 },
  "2B": { agility: 1, partnership: 2, automation: 0, system: 1 },
  "2C": { agility: 2, partnership: 3, automation: 1, system: 2 },
  "2D": { agility: 0, partnership: 1, automation: 0, system: 0 },
  "3A": { agility: 0, partnership: 0, automation: 3, system: 2 },
  "3B": { agility: 0, partnership: 0, automation: 3, system: 1 },
  "3C": { agility: 1, partnership: 0, automation: 0, system: 3 },
  "3D": { agility: 0, partnership: 0, automation: 3, system: 2 },
  "4A": { agility: 3, partnership: 1, automation: 0, system: 1 },
  "4B": { agility: 0, partnership: 0, automation: 0, system: 1 },
  "4C": { agility: 1, partnership: 3, automation: 0, system: 2 },
  "4D": { agility: 0, partnership: 1, automation: 0, system: 0 },
  "5A": { agility: 3, partnership: 1, automation: 2, system: 2 },
  "5B": { agility: 0, partnership: 0, automation: 0, system: 1 },
  "5C": { agility: 1, partnership: 2, automation: 0, system: 1 },
  "5D": { agility: 1, partnership: 3, automation: 0, system: 1 },
  "6A": { agility: 3, partnership: 1, automation: 0, system: 2 },
  "6B": { agility: 0, partnership: 0, automation: 1, system: 0 },
  "6C": { agility: 0, partnership: 0, automation: 1, system: 0 },
  "6D": { agility: 1, partnership: 1, automation: 2, system: 3 },
  "7A": { agility: 0, partnership: 0, automation: 2, system: 2 },
  "7B": { agility: 1, partnership: 1, automation: 1, system: 2 },
  "7C": { agility: 2, partnership: 1, automation: 3, system: 2 },
  "7D": { agility: 1, partnership: 3, automation: 0, system: 1 },
  "8A": { F_SYS: 3, F_AUTO: 2, F_GROW: 2 },
  "8B": { F_SYS: 1, F_AUTO: 0, F_GROW: 1 },
  "8C": { F_SYS: 0, F_AUTO: 0, F_GROW: 0 },
  "8D": { F_SYS: 3, F_AUTO: 3, F_GROW: 2 },
  "9A": { F_SYS: 3, F_AUTO: 2, F_GROW: 3 },
  "9B": { F_SYS: 1, F_AUTO: 0, F_GROW: 1 },
  "9C": { F_SYS: 0, F_AUTO: 0, F_GROW: 0 },
  "9D": { F_SYS: 3, F_AUTO: 3, F_GROW: 2 },
  "10A": { F_SYS: 2, F_AUTO: 3, F_GROW: 1 },
  "10B": { F_SYS: 1, F_AUTO: 0, F_GROW: 0 },
  "10C": { F_SYS: 0, F_AUTO: 1, F_GROW: 0 },
  "10D": { F_SYS: 0, F_AUTO: 0, F_GROW: 0 },
  "11A": { F_SYS: 3, F_AUTO: 2, F_GROW: 3 },
  "11B": { F_SYS: 1, F_AUTO: 1, F_GROW: 1 },
  "11C": { F_SYS: 0, F_AUTO: 0, F_GROW: 0 },
  "11D": { F_SYS: 1, F_AUTO: 0, F_GROW: 1 },
  "12A": { F_SYS: 3, F_AUTO: 2, F_GROW: 3 },
  "12B": { F_SYS: 1, F_AUTO: 1, F_GROW: 1 },
  "12C": { F_SYS: 0, F_AUTO: 0, F_GROW: 0 },
  "12D": { F_SYS: 0, F_AUTO: 0, F_GROW: 0 }
};

function calculateProfile(answers) {
  let scores = { agility: 0, partnership: 0, automation: 0, system: 0, F_SYS: 0, F_AUTO: 0, F_GROW: 0 };
  answers.forEach(ans => {
    const w = weights[ans];
    if (w) for (let key in w) scores[key] += w[key];
  });

  const businessKeys = ['agility', 'partnership', 'automation', 'system'];
  const businessScores = businessKeys.reduce((obj, key) => ({...obj, [key]: scores[key]}), {});
  const maxBusiness = Math.max(...Object.values(businessScores));
  let businessProfile = Object.keys(businessScores).find(k => businessScores[k] === maxBusiness);

  let financeProfile = "F2";
  if (scores.F_SYS <= 2 && scores.F_AUTO <= 1 && scores.F_GROW <= 1) financeProfile = "F1";
  if (scores.F_AUTO >= 3 && scores.F_SYS >= 2) financeProfile = "F3";

  return { businessProfile, financeProfile };
}

function generateReport(businessProfile, financeProfile) {
  if (financeProfile === "F1") return { diagnosis: "Отсутствует системный финансовый менеджмент. Решения принимаются интуитивно, высокие риски кассовых разрывов.", recommendation: "срочное построение финансовой функции с нуля.", productKey: "F1" };
  if (financeProfile === "F2") return { diagnosis: "Финансы не стали инструментом для роста. Непрозрачность блокирует масштабирование.", recommendation: "проведение аудита и оптимизация процессов.", productKey: "F2" };
  if (financeProfile === "F3") return { diagnosis: "Квалифицированные сотрудники тонут в рутине. Высоки операционные риски.", recommendation: "внедрение AI и цифровых инструментов для автоматизации.", productKey: "F3" };

  const map = { agility: "Agile", partnership: "Academy", automation: "F3", system: "OGSM" };
  const key = map[businessProfile] || "OGSM";
  return {
    diagnosis: "Выявлен профиль: " + (businessProfile === "agility" ? "Гибкость и скорость" :
              businessProfile === "partnership" ? "Партнерство" :
              businessProfile === "automation" ? "Автоматизация" : "Системность"),
    recommendation: "Рекомендуем продукт: " + products[key].title,
    productKey: key
  };
}

let currentStep = 0;
const answers = {};

function showQuestion(step) {
  const q = questions[step];
  let html = `<p><strong>${q.text}</strong></p><div style="margin-top:12px;">`;
  q.options.forEach(opt => {
    const checked = answers[q.id] === opt.value ? 'checked' : '';
    html += `<label><input type="radio" name="q${q.id}" value="${opt.value}" ${checked}> ${opt.text}</label>`;
  });
  html += `</div>`;
  document.getElementById('quizContainer').innerHTML = html;
  
  document.getElementById('prevBtn').style.display = step === 0 ? 'none' : 'inline-block';
  document.getElementById('nextBtn').textContent = step === questions.length - 1 ? 'Получить рекомендации' : 'Далее';
  document.getElementById('quizIntro').style.display = 'none';
}

function saveAnswer() {
  const q = questions[currentStep];
  const sel = document.querySelector(`input[name="q${q.id}"]:checked`);
  if (sel) { answers[q.id] = sel.value; return true; }
  alert('Пожалуйста, выберите вариант ответа.'); return false;
}

document.getElementById('nextBtn').addEventListener('click', () => {
  if (!saveAnswer()) return;
  if (currentStep < questions.length - 1) {
    currentStep++;
    showQuestion(currentStep);
  } else {
    const arr = Object.values(answers);
    const { businessProfile, financeProfile } = calculateProfile(arr);
    const rep = generateReport(businessProfile, financeProfile);
    document.getElementById('resultText').innerHTML = `
      <p>${rep.diagnosis}</p>
      <p><strong>Рекомендация:</strong> ${rep.recommendation}</p>
    `;
    document.getElementById('recommendations').style.display = 'block';
    document.getElementById('recommendations').scrollIntoView({ behavior: 'smooth' });
  }
});

document.getElementById('prevBtn').addEventListener('click', () => {
  if (currentStep > 0) {
    currentStep--;
    showQuestion(currentStep);
  }
});

// === БУРГЕР-МЕНЮ + ЗАКРЫТИЕ ПРИ КЛИКЕ НА ССЫЛКУ ===
const burger = document.querySelector('.burger-menu');
const navMenu = document.querySelector('.nav-menu');

function closeMenu() {
  if (navMenu) navMenu.classList.remove('active');
  if (burger) burger.setAttribute('aria-expanded', 'false');
}

// Открытие/закрытие по кнопке
if (burger) {
  burger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    burger.setAttribute('aria-expanded', navMenu.classList.contains('active'));
  });
}

// Закрытие при клике на любую ссылку в меню
if (navMenu) {
  navMenu.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
      closeMenu();
    }
  });
}

});                          
