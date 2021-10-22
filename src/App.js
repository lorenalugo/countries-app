import "./index.css";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  return (
    <div className="bg-white dark:bg-green-800 min-h-screen">
      <Header />
      <Main />
    </div>
  );
}

export default App;
