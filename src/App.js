import React from "react";
import Header from "./components/UI/Header";
import Footer from "./components/UI/Footer";
import Home from "./components/Home";
import Shop from "./components/Shop"; // Updated import
import ProductItem from "./pages/shop/[slug]"; // Updated import
import Blog from "./components/Blog";
import About from "./components/About";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/shop" component={Shop} />
        <Route path="/shop/:slug" component={ProductItem} />
        <Route path="/blog" component={Blog} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/cart" component={Cart} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
