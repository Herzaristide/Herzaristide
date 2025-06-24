import i18n from 'i18next';
import i18next from 'i18next';

const Languages = () => {
  return (
    <div className="flex gap-2 items-center mt-2">
      {i18next.languages.map((language) => (
        <button
          key={language}
          onClick={() => i18n.changeLanguage(language)}
          className={
            'rounded-full border-2 border-green px-4 py-2 text-green font-bold transition-colors duration-200 hover:bg-green hover:text-white' +
            (i18next.language === language ? ' bg-green text-white' : ' bg-transparent')
          }
        >
          {language.toUpperCase()}
        </button>
      ))}
    </div>
  );
};

export default Languages;
