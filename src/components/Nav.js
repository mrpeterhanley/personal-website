import React, { useState } from "react";
import { Link } from "gatsby";
import styled from 'styled-components';
import HamburgerMenu from 'react-hamburger-menu';
import HomeIcon from '@material-ui/icons/Home';

const NavStyles = styled.nav`

    position: fixed;
    z-index: 2;
    width: 100%;
    background-color: var(--black);
    border-bottom: 5px solid var(--blue);
    font-size: 1.2rem;

    ul {
        list-style: none;
        display: flex;
        width: 100%;
        justify-content: space-around;
        align-items: center;
        
    }

    li {
        margin: 15px;
       
    }

    li:hover {
        color: var(--blue);
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    .hideOnDesktop {
        display: none;
    }

    @media (max-width: 700px) {

        .hideOnDesktop {
            display: block;
        }

        .hideOnMobile {
            display: none;
        }

        ul {
            flex-direction: column;
            justify-content: space-around;
            align-items: flex-start;
        }
    }
`;

export default function Nav() {

  const [menuOpen, setMenuOpen] = useState(false);

  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }

  return (
    <NavStyles>
      <ul>
        <li className="hideOnDesktop">
        <HamburgerMenu
            isOpen={menuOpen}
            menuClicked={toggleMenu}
            width={20}
            height={15}
            strokeWidth={2}
            rotate={0}
            color='white'
            borderRadius={1}
            animationDuration={0.5}
        />
        </li>
        {menuOpen && <>
        <li onClick={toggleMenu} className="hideOnDesktop"><Link to="/"><HomeIcon /></Link></li>
        <li onClick={toggleMenu} className="hideOnDesktop"><Link to="/#personalProjects">Personal Projects</Link></li>
        <li onClick={toggleMenu} className="hideOnDesktop"><Link to="/#freelanceProjects">Freelance Projects</Link></li>
        <li onClick={toggleMenu} className="hideOnDesktop"><Link to="/#pageBottom">Contact Me</Link></li>
        </>}
        <li className="hideOnMobile"><Link to="/"><HomeIcon /></Link></li>
        <li className="hideOnMobile"><Link to="/#personalProjects">Personal Projects</Link></li>
        <li className="hideOnMobile"><Link to="/#freelanceProjects">Freelance Projects</Link></li>
        <li className="hideOnMobile"><Link to="/#pageBottom">Contact Me</Link></li>
      </ul>
    </NavStyles>
  )
}