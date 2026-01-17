import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import PopBrowse from "./components/Popups/PopBrowse/PopBrowse";
import PopNewCard from "./components/Popups/PopNewCard/PopNewCard";
import PopUser from "./components/Popups/PopUser/PopUser";

import "./App.css";

function App() {
  return (
    <div className="wrapper">
		{/* Модальные окна */}
      <PopUser />
      <PopNewCard />
      <PopBrowse />

        {/* Основная разметка */}
      <Header />
      <Main />
    </div>
  )
}

export default App;
