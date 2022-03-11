import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ReferenceHome from './sites/reference-site/pages/ReferenceHome';
import SpellsHome from './sites/spell-site/pages/SpellsHome';
import NotFound from './shared/pages/NotFound';
import BuilderHome from './sites/character-builder/pages/BuilderHome';
import AccountHome from './sites/account-management/pages/AccountHome';
import LoginPage from './sites/account-management/pages/LoginPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<ReferenceHome />} />
          <Route path="spells" element={<SpellsHome />}/>
          <Route path="builder" element={<BuilderHome />}/>
          <Route path="account">
              <Route index element={<AccountHome />}/>
              <Route path="login" element={<LoginPage />} />
              <Route path="logout" element={<></>}/>
          </Route>



          <Route path="*" element={<NotFound />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
