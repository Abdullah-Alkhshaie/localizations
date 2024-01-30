import "./App.css";
import Welcome from "./Weclome";
import i18n from "./i18n";
import { Suspense, useEffect, useState } from "react";
import LocalContext from "./LocalContext";

function Loading() {
  return (
    <>
      <p>Loading...</p>
    </>
  );
}

function App() {
  const [locale, setLoacle] = useState("en");

  i18n.on("languageChanged", (lng) => setLoacle(i18n.language));

  const handleChange = (e) => {
    i18n.changeLanguage(e.target.value);
  };
  useEffect(() => {
    if (locale === "ar") {
      document.documentElement.dir = "rtl";
    } else {
      document.documentElement.dir = "ltr";
    }
  }, [locale]);

  return (
    <div className="container">
      <div className="d-flex  flex-colum align-items-start">
        <LocalContext.Provider value={{ locale, setLoacle }}>
          <Suspense fallback={<Loading />}>
            <div>
              <label>locale cahnge</label>
              <select value={locale} onChange={handleChange}>
                <option value="en">english</option>
                <option value="fr">french</option>
                <option value="ar">العربية</option>
              </select>
            </div>
            <Welcome />
          </Suspense>
        </LocalContext.Provider>
      </div>
    </div>
  );
}

export default App;
