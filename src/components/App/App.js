import './App.css';
import { Route, Routes } from 'react-router-dom';
import NotFound from '../NotFound/NotFound';
import Main from '../Main/Main';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';


function App() {

  return (
    <div className="page">

      <Routes>

        <Route path='/' element={
          <>
            <Header />
            <Main />
            <Footer />
          </>
        }>
        </Route>

        <Route path='/movies' element={
          <>
            <Header />
            <Footer />
          </>
        }>
        </Route>

        <Route path='/saved-movies' element={
          <>
            <Header />
            <Footer />
          </>
        }>
        </Route>

        <Route path='/profile' element={
          <>
            <Header />
          </>
        }>
        </Route>

        <Route path='/*' element={<NotFound />}></Route>

      </Routes>
    </div>

  );
}

export default App;
