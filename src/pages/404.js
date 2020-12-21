import React from "react"
import Layout from "../components/Layout"
import styled from 'styled-components';

const ErrorPageStyles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 90vh;

  > * {
    margin: 10px;
  }

  h2 {
    text-align: center;
  }

  .icon {
    font-size: 3rem;
  }
`;

const ErrorPage = () => {
  return (
    <Layout>
        <ErrorPageStyles>
          <span className="icon" role="img" aria-label="concerned face">🙁</span>
          <h2>Sorry, this page does not exist!</h2>
        </ErrorPageStyles>
    </Layout>
  )
}

export default ErrorPage