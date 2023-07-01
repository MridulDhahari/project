import React from 'react';
import Home from './pages/Home'
import Popular from './components/Popular';
import Pages from './pages/Pages';
import {BrowserRouter} from 'react-router-dom';
import Cate from './components/Cate';
import styled from 'styled-components';
import Search from './components/Search';
import { Link } from 'react-router-dom';
import {GiKnifeFork} from 'react-icons/gi';
function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Nav>
            <GiKnifeFork/>
            <Logo to={"/"}>KnowYourRecipe</Logo>
          </Nav>
          <Search/>
          <Cate/>
          <Pages/>
        </BrowserRouter>
    </div>
  )
}
const Logo = styled(Link)`
 text-decoration: none;
 font-weight: 1.5rem;
 font-weight: 400;
 font-family: "Lobster Two",cursive;

`
const Nav = styled.div`
 padding : 4rem 0rem;
 display : flex;
 justify-content: flex start;
 align-items: center;
 svg{
  font-size: 2rem;
 }
`
export default App;