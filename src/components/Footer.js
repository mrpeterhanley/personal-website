import React from "react";
import styled from 'styled-components';

const FooterStyles = styled.nav`
    background-color: var(--black);
    color: white;
    border-top: 5px solid var(--blue);
    text-align: center;
    padding: 10px;
    font-size: 0.8rem;
`;

export default function Footer() {

  return (
    <FooterStyles id="pageBottom">
      <p>Built with &hearts; in Melbourne, Australia by Peter Hanley</p>
    </FooterStyles>
  )
}