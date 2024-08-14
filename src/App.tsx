import React from 'react';
import { useTranslation } from "react-i18next";
import './i18n';

function App() {

  const { t, i18n } = useTranslation();

  const handleChangeLanguage = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLanguage = event.target.value;
    i18n.changeLanguage(selectedLanguage);
  };

  return (
    <div className="App">
      <h2>{t('lang')}</h2>

      <select onChange={handleChangeLanguage} value={i18n.language}>
        <option value="vi">VI</option>
        <option value="en">ENG</option>
      </select>
    </div>
  );
}

export default App;
