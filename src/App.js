import Header from "./components/NavBar";
import Logo from "./components/logo";
import ItemList from "./containers/ItemList";
import './App.css';

export default function App() {
  return (
    <div>
      <Logo />
      <Header></Header>
      <ItemList />
    </div>
  );
}
