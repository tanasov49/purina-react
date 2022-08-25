//npm модуль для получения данных из таблиц
import useGoogleSheets from 'use-google-sheets';
// класс для получения данных
export class Api {
  constructor(sheetId) {
    this.sheetId = sheetId;
  }
  getSheets() {
    const { data, loading, error } = useGoogleSheets({
      apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
      sheetId: process.env.REACT_APP_GOOGLE_SHEETS_ID,
      sheetsOptions: [{ id: this.sheetId }],
    });
    // Данные получаю я в виде строк, затем парсю в json формат
    if (data) {
      const jsonSheet = JSON.stringify(data);
      return JSON.parse(jsonSheet);
      }
    if (loading) {
      console.log('Loading')
    }
    if (error) {
      console.log(`Error: ${err}`)
    }

  }
} 
