import Error404 from "containers/errors/error_404";
import Blogpost from "containers/pages/blog/blogpost";
import Blog from "containers/pages/blog/blog";
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import store from "store";
import BlogCategory from "containers/pages/blog/category/BlogCategory";
import Search from "containers/pages/Search";
import Contacto from "containers/pages/contacto/contacto";
import Privacy from 'containers/pages/Privacy';
import Terms from 'containers/pages/Terms';
import Home from 'containers/pages/Home'
import Nosotros from "containers/pages/nosotros/Nosotros";


function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="*" element={<Error404/>}></Route>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/blog" element={<Blog/>}></Route>
          <Route path="/blog/post/:slug" element={<Blogpost/>}></Route>
          <Route path="/blog/categories/:category_id" element={<BlogCategory/>}></Route>
          <Route path="/search/:term" element={<Search/>}></Route>
          <Route path="/contact" element={<Contacto/>}/>
          <Route path="/privacidad" element={<Privacy/>}/>
          <Route path="/terminos" element={<Terms/>}/>
          <Route path="/about" element={<Nosotros/>}/>

          

        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
