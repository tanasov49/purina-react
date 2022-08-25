# Проект Пурина

Данный проект создан при помощи React.
Используются следующий стек технологий:
-Webpack
-NodeJs
-Класс JS для вытягивая данных из таблицы
-React
-Хуки реакта
-react-Router-dom
-flex
-БЭМ, именование блоков согласно методологии
-Адаптивная и мобильная верстка под все разрешения (от 320px до 1920px)

## Задача проекта
Данный проект служит для увелечения продаж в отделе, т.к. имеется огромный массив данных (много адресов и кодов товара). Сначала выбираем город, затем выбирается адрес клиента. Для торговой команды, это дает преимущество в увелечении продаж. Проект выглядит довольно примитивно, т.к. при его создании я использовал собственное воображение для его стилизации, поэтому проект может выглядить не совсем красиво, но при этом он имеет понятный интерфейс

## ссылка на страницу в gh-pages [purina](https://tanasov49.github.io/purina-react/)

## Использование гугл таблиц

При парсинге данных на сайт, я использовал следующий модуль [use-google-sheets](https://www.npmjs.com/package/use-google-sheets)
Ниже пример с данного модуля
import useGoogleSheets from 'use-google-sheets';

const App = () => {
  const { data, loading, error } = useGoogleSheets({
    apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
    sheetId: process.env.REACT_APP_GOOGLE_SHEETS_ID,
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error!</div>;
  }

  return <div>{JSON.stringify(data)}</div>;
};

В env файл я поместил следующие данные: api ключ и номер таблицы, его в репозитории нет
api ключ получил при помощи google console [googleconsole](https://console.cloud.google.com/)

### Создание проекта при помощи react-router-dom

При создании данного проекта использовался модуль [react-router-dom](https://reactrouter.com/). Его я использовал для создания Routes, для работы страницы без перезагрузок

