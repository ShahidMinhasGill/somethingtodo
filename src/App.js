import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./pages/frontEnd/header/Header";
import MainRoutes from "./routes/MainRoutes";

const App = () => {
  return (
    <>
      <Header />
      <MainRoutes />
    </>
  );
};

export default App;
