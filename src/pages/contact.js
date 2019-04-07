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
        <Link to="/contact">
          <h3>eric.bayasgalan@protonmail.com</h3>
        </Link>
      </div>
    </StyledComponent>
  </Layout>
);

export default ContactPage;
