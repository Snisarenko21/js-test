//  Получаем все нужные элементы
var parent = document.querySelector(".buttons"),
  buttons = parent.querySelectorAll(".button"),
  active = parent.querySelector(".active");

// Создаём функцию для переключения фокуса
var setActive = function (element) {
  // Получаем ширину и положение слева ссылки
  var newLeft =
      element.getBoundingClientRect().left -
      parent.getBoundingClientRect().left, // Отнимает положение слева ссылки от положения слева родителя
    newWidth = element.getBoundingClientRect().width; // Получаем полную ширину ссылки

  // Применяем ширину и тступ слева для фокуса
  active.style["left"] = newLeft + "px";
  active.style["width"] = newWidth + "px";

  // Переключаем класс "is-active" на нужную нам ссылку
  Array.prototype.forEach.call(buttons, function (button) {
    // Промеряем, не является ли элемент нужной нам ссылкой
    if (button !== element)
      button.classList.remove("is-active"); // Если нет, то удаляем у него класс
    else button.classList.add("is-active"); // Если да, то добавляем ему класс
  });

  // Как дополнительная функция, добавляем значение выделенной ссылке к общему переключателю
  parent.dataset.value = element.dataset.name || null;
};

// Перебираем все ссылки
Array.prototype.forEach.call(buttons, function (button) {
  // Изначально присваиваем фокусу нужные там размеры
  if (button.classList.contains("is-active")) setActive(button);

  // Добавляем событие нажатия на ссылку
  button.addEventListener("click", function (e) {
    e.preventDefault(); // Отключаем все стандартные действия при нажатии

    // Если элемент уже не активен, то добавляем к нему фокус
    if (!this.classList.contains("is-active")) setActive(this);
  });
});

// Теперь мы можем получить у переключателя значение, которое установлено в выбранной ссылке
document.querySelector("#link").onclick = function (e) {
  e.preventDefault();

  console.log(parent.dataset.value);
};
