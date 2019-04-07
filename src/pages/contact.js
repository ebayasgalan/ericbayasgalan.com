import React from "react";
import Layout from "../components/layout";
import styled from "styled-components";
import { Link } from "gatsby";

const StyledComponent = styled.div`
  .info {
    text-align: center;
  }
  a {
    text-decoration: none;
    color: black;
    font-size: 24px;
  }
  a:hover {
    color: white;
  }
`;

const ContactPage = () => (
  <Layout>
    <StyledComponent>
      <div className="info">
        <h1>Send me an email, let's chat</h1>
        <a href="mailto:eric.bayasgalan@protonmail.com">
          eric.bayasgalan@protonmail.com
        </a>
      </div>
    </StyledComponent>
  </Layout>
);

export default ContactPage;
