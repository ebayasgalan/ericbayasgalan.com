import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import styled from "styled-components";

const StyledIntro = styled.div`
  h1,
  p {
    text-align: center;
    font-size: 64px;
  }
`;

const IndexPage = () => (
  <Layout>
    {/* <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} /> */}
    <StyledIntro>
      <h1>Hi, my name is Enkhtaivan Bayasgalan</h1>
    </StyledIntro>
  </Layout>
);

export default IndexPage;
