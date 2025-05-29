import i18n from 'i18next';
import IconButton from './IconButton';
import i18next from 'i18next';
import { useState } from 'react';

const Languages = () => {
  return (
    <div>
      {i18next.languages}
      {/* {i18next.languages.map((language) => (
        <IconButton
          title={language}
          onClick={() => i18n.changeLanguage(language)}
        />
      ))} */}
    </div>
  );
};

export default Languages;
