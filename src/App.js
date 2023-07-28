import logo from "./logo.svg";
import "./App.css";
import PrimaryImage from "./components/PrimaryImage";
import PrimarySection from "./components/PrimarySection";

function App() {
  return (
    <div className="w-full h-screen grid place-items-center text-primary-content">
      <div className=" w-3/5 h-fit rounded-3xl overflow-hidden">
        <PrimaryImage />
        <PrimarySection />
      </div>
    </div>
  );
}

export default App;
