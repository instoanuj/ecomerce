


import { Routes, Navigate, Route } from 'react-router-dom';
import './App.css';
//import Product from './Products/Product';
//import About from './About/About';
import Home from './Home/Home';
import Root from './MainNavigation/Root';
import { lazy, Suspense, useContext } from 'react';
import Econtext from './store/ecom-context';
import Header from './Layout/Header';
import Footer from './Layout/Footer';
const NotFound = lazy(() => import('./NotFound/NotFound'));
const SignupForm = lazy(() => import('./Signup/SignUpForm'));
const Account = lazy(() => import('./UserAccount/Account'));
const About = lazy(() => import('./About/About'));
const Product = lazy(() => import('./Products/Product'))
const ContactUs = lazy(() => import('./Contact/ContactUs'))
const Login = lazy(() => import('./Login/Login'))
const ProductDetailsPage = lazy(() => import('./Products/ProductsDetailsPage'))
const Cart = lazy(() => import('./Cart/Cart'))

const App = () => {
  const ctx = useContext(Econtext);
  return (
    <>
      <Suspense fallback={<p>Loading...</p>}>
        <Root>
          <Routes>
            <Route path='/'
              element={<Navigate to='/home' replace />}
            />
            <Route path='/home' element={
              <> <Header />
                <Home />
                <Footer />
              </>
            } />

            {ctx.isLogedin && <Route path='/Login/Product/:email' element={<> <Header />
              <Product />
              <Footer />
            </>} />}

            {ctx.isLogedin && <Route path='/Product/:id' element={
              <>
                <Header />
                <ProductDetailsPage />
                <Footer />
              </>
            } />
            }
            {ctx.isLogedin && <Route path='/Login/Cart/:userId' element={
              <>
                <Header />
                <Cart />
                <Footer />
              </>
            } />}
            <Route path='/About' element={
              <>
                <Header />
                <About />
                <Footer />

              </>
            } />
            <Route path='/ContactUs' element={
              <>
                <Header />
                <ContactUs />
                <Footer />

              </>
            } />
            <Route path='/Login' element={
              <>
                <Header />
                <Login />
                <Footer />

              </>
            } />
            <Route path='/Signup' element={
              <>
                <Header />
                <SignupForm />
                <Footer />
              </>
            } />
            {ctx.isLogedin && <Route path='/Login/:emailId' element={
              <>
                <Header />
                <Account />
                <Footer />
              </>
            } />}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Root>
      </Suspense>
    </>

  );
}

export default App;