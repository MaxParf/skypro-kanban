import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import Main from "./pages/Main/Main";
import Login from "./pages/Login/Login";
import NotFound from "./pages/NotFound/NotFound";
import Exit from "./pages/Exit/Exit"; 
import AddTask from "./pages/AddTask/AddTask";
import CardPage from "./pages/Card/Card";
import Register from "./pages/Register/Register";

export default function AppRoutes({ isAuth, setIsAuth }) {
  return (
    <Routes>
      {/* Публичный маршрут */}
      <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
      <Route path="/register" element={<Register setIsAuth={setIsAuth} />} />

      {/* Защищенные маршруты с использованием Outlet */}
      <Route element={<ProtectedRoute isAuth={isAuth} />}>
        <Route path="/" element={<Main />}>
          {/* Вложенные маршруты для модалок. Без ведущего слэша! */}
          <Route path="exit" element={<Exit setIsAuth={setIsAuth} />} />
          <Route path="add-task" element={<AddTask />} />
          <Route path="card/:id" element={<CardPage />} />
        </Route>
      </Route>

      {/* Маршрут для обработки несуществующих страниц */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
