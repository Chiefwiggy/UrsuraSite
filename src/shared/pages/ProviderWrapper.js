
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
import TalentsPage from '../../sites/character-builder/pages/dev/TalentsPage'
import { ThemeProvider } from '@emotion/react';
import AdminHome from '../../sites/admin-site/pages/AdminHome'
import CreateSpellPage from '../../sites/admin-site/pages/CreateSpellPage';
import KeywordManagerPage from '../../sites/admin-site/pages/KeywordManagerPage';

import {GenericTheme} from '../styles/mui/generic_styles'



const ProviderWrapper = ({children}) => {

    const [clientOverride, setClientOverride] = useState(undefined);
    const {loggedIn, accessLevel} = useUser();

   

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
            <ThemeProvider theme={GenericTheme}>
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
                                <Route path="dev">
                                    <Route path="talents" element={<TalentsPage />}/>
                                </Route>
                            </Route>
                            <Route path="account">
                                <Route index element={<AccountHome />}/>
                                <Route path="login" element={<LoginPage />} />
                                <Route path="logout" element={<LogoutPage/>}/>
                            </Route>
                            <Route path="admin">
                                <Route index element={<AdminHome />} />
                                <Route path="create-spell" element={<CreateSpellPage />} />
                                <Route path="keyword-manager" element={<KeywordManagerPage />} />
                            </Route>
                            <Route path="*" element={<NotFound />}/>
                        </Routes>
                    </PageWrapper>
                </BrowserRouter>
            </ThemeProvider>
        </ApolloProvider>
    )
}

export default ProviderWrapper