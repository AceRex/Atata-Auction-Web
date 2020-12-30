import "./App.css";
import Header from "./Component/Header/header";
import ItemSlider from "./Component/Items/ItemsSlider";
import Others from './Component/others/others'
import Category from './Component/category/category'
import Footer from './Component/footer/footer.js'


function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <ItemSlider />
        <Others />
        <Category />
        <Footer />
      </div>
    </div>
  );
}

export default App;
