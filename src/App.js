import './App.css';
import Navbar from './components/navbar';
import Header from './components/header';
import Cover from './components/cover';
import Sections from './components/sections';
import Footer from './components/footer';
import Form from './components/form';
import List from './components/list';
import { Routes,Route,BrowserRouter } from 'react-router-dom';
import { Fragment } from 'react';
import NGO_page from './components/NGO_page';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header/>
      <Navbar/>
      <Routes>
      <Route path="/"element={
        <Fragment>
          <Cover/>
          <Sections/>
          <Footer/>
        </Fragment>      
      }/>
      <Route path="/Form"element={
        <Fragment>
          <Form/>
        </Fragment>      
      }/>
      <Route path="/list"element={
        <Fragment>
          <List/>
        </Fragment>      
      }/>
      <Route path="/Ngo_page"element={
        <Fragment>
          <NGO_page/>
        </Fragment>      
      }/>
      </Routes>
      <Footer/>
     </div> 
    </BrowserRouter>
  );
}

export default App;
