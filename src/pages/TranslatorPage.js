import React, { useState, useEffect } from 'react';
import './TranslatorPage.css';

const countries = {
  "am-ET": "Amharic",
    "ar-SA": "Arabic",
    "be-BY": "Bielarus",
    "bem-ZM": "Bemba",
    "bi-VU": "Bislama",
    "bjs-BB": "Bajan",
    "bn-IN": "Bengali",
    "bo-CN": "Tibetan",
    "br-FR": "Breton",
    "bs-BA": "Bosnian",
    "ca-ES": "Catalan",
    "cop-EG": "Coptic",
    "cs-CZ": "Czech",
    "cy-GB": "Welsh",
    "da-DK": "Danish",
    "dz-BT": "Dzongkha",
    "de-DE": "German",
    "dv-MV": "Maldivian",
    "el-GR": "Greek",
    "en-GB": "English",
    "es-ES": "Spanish",
    "et-EE": "Estonian",
    "eu-ES": "Basque",
    "fa-IR": "Persian",
    "fi-FI": "Finnish",
    "fn-FNG": "Fanagalo",
    "fo-FO": "Faroese",
    "fr-FR": "French",
    "gl-ES": "Galician",
    "gu-IN": "Gujarati",
    "ha-NE": "Hausa",
    "he-IL": "Hebrew",
    "hi-IN": "Hindi",
    "hr-HR": "Croatian",
    "hu-HU": "Hungarian",
    "id-ID": "Indonesian",
    "is-IS": "Icelandic",
    "it-IT": "Italian",
    "ja-JP": "Japanese",
    "kk-KZ": "Kazakh",
    "km-KM": "Khmer",
    "kn-IN": "Kannada",
    "ko-KR": "Korean",
    "ku-TR": "Kurdish",
    "ky-KG": "Kyrgyz",
    "la-VA": "Latin",
    "lo-LA": "Lao",
    "lv-LV": "Latvian",
    "men-SL": "Mende",
    "mg-MG": "Malagasy",
    "mi-NZ": "Maori",
    "ms-MY": "Malay",
    "mt-MT": "Maltese",
    "my-MM": "Burmese",
    "ne-NP": "Nepali",
    "niu-NU": "Niuean",
    "nl-NL": "Dutch",
    "no-NO": "Norwegian",
    "ny-MW": "Nyanja",
    "ur-PK": "Pakistani",
    "pau-PW": "Palauan",
    "pa-IN": "Panjabi",
    "ps-PK": "Pashto",
    "pis-SB": "Pijin",
    "pl-PL": "Polish",
    "pt-PT": "Portuguese",
    "rn-BI": "Kirundi",
    "ro-RO": "Romanian",
    "ru-RU": "Russian",
    "sg-CF": "Sango",
    "si-LK": "Sinhala",
    "sk-SK": "Slovak",
    "sm-WS": "Samoan",
    "sn-ZW": "Shona",
    "so-SO": "Somali",
    "sq-AL": "Albanian",
    "sr-RS": "Serbian",
    "sv-SE": "Swedish",
    "sw-SZ": "Swahili",
    "ta-LK": "Tamil",
    "te-IN": "Telugu",
    "tet-TL": "Tetum",
    "tg-TJ": "Tajik",
    "th-TH": "Thai",
    "ti-TI": "Tigrinya",
    "tk-TM": "Turkmen",
    "tl-PH": "Tagalog",
    "tn-BW": "Tswana",
    "to-TO": "Tongan",
    "tr-TR": "Turkish",
    "uk-UA": "Ukrainian",
    "uz-UZ": "Uzbek",
    "vi-VN": "Vietnamese",
    "wo-SN": "Wolof",
    "xh-ZA": "Xhosa",
    "yi-YD": "Yiddish",
    "zu-ZA": "Zulu"
};

function TranslatorPage() {
  const [fromText, setFromText] = useState('');
  const [toText, setToText] = useState('');
  const [fromLang, setFromLang] = useState('en-GB');
  const [toLang, setToLang] = useState('hi-IN');

  useEffect(() => {
    if (fromText) {
      translateText();
    } else {
      setToText('');
    }
  }, [fromText, fromLang, toLang]);

  const translateText = async () => {
    if (!fromText.trim()) return;
    setToText('Translating...');
    try {
      const response = await fetch(`https://api.mymemory.translated.net/get?q=${fromText.trim()}&langpair=${fromLang}|${toLang}`);
      const data = await response.json();
      setToText(data.responseData.translatedText);
    } catch (error) {
      console.error('Error translating text:', error);
      setToText('Error');
    }
  };

  const handleExchange = () => {
    setFromText(toText);
    setToText(fromText);
    setFromLang(toLang);
    setToLang(fromLang);
  };

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
  };

  const handleSpeech = (text, lang) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang;
    window.speechSynthesis.speak(utterance);
  };

  return (
    <>
    <div className="containerTrans">
     
      <div className="wrapper">
      <h1>Translater</h1>
      <hr></hr>
        <div className="text-input">
          <textarea
            spellCheck="false"
            className="from-text"
            style={{color:"white"}}
            placeholder="Enter text"
            value={fromText}
            onChange={(e) => setFromText(e.target.value)}
          />
          <textarea
            spellCheck="false"
            className="to-text"
            style={{color:"white"}}
            placeholder="Translation"
            value={toText}
            readOnly
          />
        </div>
        <ul className="controls">
          <li className="row from">
            <div className="icons">
              <i
                id="from"
                className="fas fa-volume-up"
                style={{marginLeft:"120px",marginTop:"90px",color:"yellow",fontSize:"25px"}}
                onClick={() => handleSpeech(fromText, fromLang)}
              />
              <i
                id="from"
                className="fas fa-copy"
                style={{marginTop:"90px",marginLeft:"70px",color:"yellow",fontSize:"25px"}}

                onClick={() => handleCopy(fromText)}
              />
            </div>
            <select value={fromLang} onChange={(e) => setFromLang(e.target.value)}>
              {Object.entries(countries).map(([code, name]) => (
                <option key={code} value={code}>
                  {name}
                </option>
              ))}
            </select>
          </li>
          <li className="exchange">
            <i className="fas fa-exchange-alt" onClick={handleExchange} />
          </li>
          <li className="row to">
            <select value={toLang} onChange={(e) => setToLang(e.target.value)}>
              {Object.entries(countries).map(([code, name]) => (
                <option key={code} value={code}>
                  {name}
                </option>
              ))}
            </select>
            <div className="icons">
              <i
                id="to"
                className="fas fa-volume-up"
                style={{marginLeft:"-40px",marginTop:"90px",color:"yellow",fontSize:"25px"}}
                onClick={() => handleSpeech(toText, toLang)}
              />
              <i
                id="to"
                className="fas fa-copy"
                style={{marginTop:"90px",marginLeft:"-90px",color:"yellow",fontSize:"25px"}}
                onClick={() => handleCopy(toText)}
              />
            </div>
          </li>
        </ul>
        <button onClick={translateText} className='btnTrans'>Translate Text</button>
      </div>
    </div>
    </>
  );
}

export default TranslatorPage;
