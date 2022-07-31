
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ReferenceHome from '../../sites/reference-site/pages/ReferenceHome';
import SpellsHome from '../../sites/spell-site/pages/SpellsHome';
import BuilderHome from '../../sites/character-builder/pages/BuilderHome';
import AccountHome from '../../sites/account-management/pages/AccountHome';
import LoginPage from '../../sites/account-management/pages/LoginPage';
import LogoutPage from '../../sites/account-management/pages/LogoutPage';
import PageWrapper from './PageWrapper';
import NotFound from './NotFound';
import { useEffect, useState } from 'react';
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider
  } from "@apollo/client";
import useUser from '../hooks/user-hook/useUser';
import { createHttpLink } from 'apollo-link-http';
import MyCharacters from '../../sites/character-builder/pages/MyCharacters'
import NewCharacter from '../../sites/character-builder/pages/NewCharacter'



const ProviderWrapper = ({children}) => {

    const [clientOverride, setClientOverride] = useState(undefined);
    const {loggedIn} = useUser();

   

    const client = new ApolloClient({
        uri: 'http://localhost:3333/graphql',
        cache: new InMemoryCache(),
        
    });

    
    const ReinstateClient = () => {
        const newClient = new ApolloClient({
            uri: 'http://localhost:3333/graphql',
            cache: new InMemoryCache(),
            headers: {
                authorization: sessionStorage.getItem('userToken') ? `Bearer ${sessionStorage.getItem("userToken")}` : ""
            }
        });
        setClientOverride(newClient)
    }

    useEffect(() => {
        if (sessionStorage.getItem("userToken")) {
            ReinstateClient();
        } else {
            setClientOverride(new ApolloClient({
                uri: 'http://localhost:3333/graphql',
                cache: new InMemoryCache(),
            }))
        }
    }, [loggedIn])


    return (
        <ApolloProvider client={clientOverride ?? client}>
          <BrowserRouter>
          <PageWrapper>
                <Routes>
                  <Route index element={<ReferenceHome />} />
                  <Route path="reference" >
                      <Route index element={<ReferenceHome />} />
                  </Route>
                  <Route path="spells" element={<SpellsHome />}/>
                  <Route path="builder">
                    <Route index element={<BuilderHome />}/>
                    <Route path="my-characters" element={<MyCharacters/>}/>
                    <Route path="new" element={<NewCharacter />}/>
                  </Route>
                  <Route path="account">
                      <Route index element={<AccountHome />}/>
                      <Route path="login" element={<LoginPage />} />
                      <Route path="logout" element={<LogoutPage/>}/>
                  </Route>
                  <Route path="*" element={<NotFound />}/>
                </Routes>
              </PageWrapper>
            </BrowserRouter>
        </ApolloProvider>
    )
}

export default ProviderWrapper