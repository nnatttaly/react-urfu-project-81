# Генератор форм на Typescript

[![hexlet-check](https://github.com/nnatttaly/react-urfu-project-81/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/nnatttaly/react-urfu-project-81/actions)

[![CI](https://github.com/nnatttaly/react-urfu-project-81/actions/workflows/ci.yml/badge.svg)](https://github.com/nnatttaly/react-urfu-project-81/actions/workflows/ci.yml)

Библиотека, с помощью которой удобно создавать формы в шаблонах сайтов. Она заметно сокращает код описания формы за счет автоматической обработки ошибок и различных контролов.

Учебный проект Хекслета: https://ru.hexlet.io/
Как это должно работать: https://files.hexlet.app/a/100lcl

## Стек

- JavaScript

## Установка

Понадобятся Node.js и npm.

Склонируйте репозиторий и перейдите в папку проекта:

```bash
git clone https://github.com/nnatttaly/react-urfu-project-81.git
cd react-urfu-project-81
```

Установите зависимости:

```bash
npm install
```

Запустите тесты:

```bash
npm test
```

Проверьте код линтером и форматирование:

```bash
npm run lint
npm run format:check
```

## Использование

```javascript
import HexletCode from "@hexlet/code";

const template = { name: "rob", job: "hexlet", gender: "m" };
const form = HexletCode.formFor(template, { url: "/users", method: "post" }, (f) => {
  f.input("name", { class: "user-input" });
  f.input("job", { as: "textarea", rows: 50, cols: 50 });
});

console.log(form);
```

Результат (переносы строк добавлены для удобства чтения):

```html
<form action="/users" method="post">
  <input name="name" type="text" value="rob" class="user-input" />
  <textarea cols="50" rows="50" name="job">hexlet</textarea>
</form>
```

По умолчанию форма отправляется на `#` методом `post`. Вызов `input()` создаёт
текстовое поле, а опция `as: 'textarea'` — многострочное поле с размерами
`cols="20"` и `rows="40"`. Дополнительные атрибуты можно передать вторым аргументом
`input()`. Если поля нет в шаблоне, генератор выбрасывает ошибку.

---

<details>
<summary>Автоматические тесты Хекслета</summary>

Тесты запускаются на каждый коммит. За запуск отвечает файл `.github/workflows/hexlet-check.yml` — не удаляйте и не переименовывайте ни его, ни репозиторий.

</details>

## О Хекслете

[Хекслет](https://ru.hexlet.io/) — школа программирования: авторские программы обучения с практикой, поддержкой наставников и реальными проектами, которые остаются в резюме. Этот репозиторий — один из таких проектов.
