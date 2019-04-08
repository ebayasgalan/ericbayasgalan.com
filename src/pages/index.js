import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import styled from "styled-components";

const StyledIntro = styled.div`
  .home {
    display: flex;
  }
  .one {
    flex: 1;
  }
  h1 {
    position: relative;
    top: 250px;
  }
`;

const IndexPage = () => (
  <Layout>
    {/* <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} /> */}
    <StyledIntro>
      <div className="home">
        <div className="one" />
        <h1>
          Hi,
          <br />
          I'm Enkhtaivan Bayasgalan and I make excellent websites
        </h1>
        <div className="one" />
      </div>
    </StyledIntro>
  </Layout>
);

export default IndexPage;
