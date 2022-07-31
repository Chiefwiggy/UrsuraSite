import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ReferenceHome from './sites/reference-site/pages/ReferenceHome';
import SpellsHome from './sites/spell-site/pages/SpellsHome';
import NotFound from './shared/pages/NotFound';
import BuilderHome from './sites/character-builder/pages/BuilderHome';
import AccountHome from './sites/account-management/pages/AccountHome';
import LoginPage from './sites/account-management/pages/LoginPage';
import UserProvider from './shared/hooks/user-hook/UserProvider';
import LogoutPage from './sites/account-management/pages/LogoutPage';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider
} from "@apollo/client";

import PageWrapper from './shared/pages/PageWrapper';
import { useEffect, useState } from 'react';
import ProviderWrapper from './shared/pages/ProviderWrapper';


function App() {


  

  

  return (
    <div className="App">
        <UserProvider>
          <ProviderWrapper />
        </UserProvider>
    </div>
  );
}

export default App;
