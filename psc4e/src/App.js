import './App.css';
import AllRoutes from "./Components/AllRoutes"
import Navbar from './Components/Navbar';
import Product from './Pages/Product';

//1.create react app
//2. make db.json file and put the api inside
//3.now make the app setup (install chakra ui, react roouter dom and brower router)
//4. now setup the chakra ui (import chkraprovider)
//5. link all the path of pages & impoert the all routes in app.jsx
//6. make the nav bar
//7. link all the item there and give path and map the item
//8. to make it workig navbar we need to import the link form the react router dom
//9. Apeend the data of api on the product page
//10.we will do it using axios


function App() {
  return (
    <div className="App">
       <Navbar />
     <AllRoutes />
     <Product/>
    
    </div>
  );
}

export default App;
