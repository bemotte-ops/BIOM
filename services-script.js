document.addEventListener('DOMContentLoaded', function () {

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
    title: "Финансовый анализ и дорожная карта",
    short: "От хаоса в финансах — к прозрачной системе за 4 недели",
    full: `Экспресс-аудит финансовой функции и бизнес-процессов компании с разработкой пошагового плана трансформации (дорожной карты). Это не просто отчет, а готовая стратегия действий.\n\n**Для кого:** Собственники и гендиректоры (50–500 сотрудников), когда решения принимаются «на глазок». Вы получаете отчет + дорожную карту + 2 сопроводительных созвона.`
  },
  "F1": {
    title: "Запуск финансового менеджмента с нуля",
    short: "Создаем ваш финансовый отдел «под ключ»: процессы, команда, системы",
    full: `Комплексный проект по построению или полной реорганизации финансово-экономической службы компании. От найма команды до внедрения работающих процессов и систем.\n\n**Формат:** Проект 3–6 месяцев. Модули: архитектура, учет, бюджетирование, автоматизация. Результат — работающий финансовый отдел, готовящий ежемесячные отчеты.`
  },
  "F3": {
    title: "AI-решения для финансового директора",
    short: "Освободите до 30% времени команды от рутины с помощью AI",
    full: `Пилотный проект по внедрению AI-решений в рутинные финансовые процессы. Не абстрактные разговоры, а конкретные инструменты, которые начинают работать в вашей компании.\n\n**Что делаем:** Автоматизация документов, чат-бот для запросов («Сколько в кассе?»), прогнозирование ДДС. УТП: Наталья — эксперт и по финансам, и по AI.`
  }
};

function renderAllProducts() {
  const container = document.getElementById('productsList');
  if (!container) return;
  container.innerHTML = '';

  const productKeys = Object.keys(products);
  
  for (let i = 0; i < productKeys.length; i++) {
    const key = productKeys[i];
    const p = products[key];
    const isFirst = i === 0; // Первый продукт открыт по умолчанию
    
    const card = document.createElement('div');
    card.className = 'product-item';
    card.innerHTML = `
      <div class="product-header" style="display: flex; align-items: center; justify-content: space-between; cursor: pointer;" data-key="${key}">
        <h3 style="margin: 0; flex: 1;">${p.title}</h3>
        <button class="product-toggle-btn" data-key="${key}" style="background: #0A5466; border: none; cursor: pointer; padding: 0; border-radius: 50%; width: 48px; height: 48px; display: flex; align-items: center; justify-content: center; transition: all 0.2s; box-shadow: 0 2px 8px rgba(10, 84, 102, 0.3);">
          <span class="toggle-icon" style="font-size: 24px; color: white; transition: transform 0.3s; font-weight: bold;">
            ${isFirst ? '−' : '+'}
          </span>
        </button>
      </div>
      <p style="margin: 16px 0;">${p.short}</p>
      <div class="product-full" id="full-${key}" style="margin-top:16px; padding-top:16px; border-top:1px solid #eee; ${isFirst ? 'display: block;' : 'display: none;'}">
        <div style="white-space: pre-line; line-height: 1.6;">
          ${p.full}
        </div>
      </div>
    `;
    container.appendChild(card);
  }

  // Добавляем обработчики для кнопок после создания всех элементов
  setTimeout(() => {
    document.querySelectorAll('.product-toggle-btn').forEach(btn => {
      btn.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        const key = this.getAttribute('data-key');
        console.log('Toggle button clicked for key:', key);
        toggleProduct(key);
      });
    });
  }, 100);
}

function toggleProduct(key) {
  console.log('toggleProduct called with key:', key);
  const fullDiv = document.getElementById(`full-${key}`);
  const toggleBtn = document.querySelector(`button[data-key="${key}"] .toggle-icon`);
  
  if (!fullDiv || !toggleBtn) {
    console.error('Elements not found for key:', key);
    return;
  }
  
  console.log('Current display:', fullDiv.style.display);
  
  if (fullDiv.style.display === 'none' || fullDiv.style.display === '') {
    // Открываем продукт
    fullDiv.style.display = 'block';
    toggleBtn.textContent = '−';
    console.log('Opened product:', key);
  } else {
    // Закрываем продукт
    fullDiv.style.display = 'none';
    toggleBtn.textContent = '+';
    console.log('Closed product:', key);
  }
}

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

renderAllProducts();

});
