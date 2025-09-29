import "./App.css";
import Header from "./components/UI/Dashboard/header";
import Sidebar from "./components/UI/Dashboard/sidebar";

function App() {
  return (
    <>
      <Sidebar />
      <div className="wrapper">
        <Header />
        <main className="main"></main>
      </div>
    </>
  );
}

export default App;
