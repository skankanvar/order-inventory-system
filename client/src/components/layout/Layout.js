import React from "react";
import styled from "styled-components";
import { Container, Grid, Segment } from "semantic-ui-react";
import Header from "./Header";
import Footer from "./Footer";
import SideNav from "./SideNav";

const StyledContent = styled.div`
  min-height: 96vh;
  overflow-y: auto;
  padding-top: 4em;
`;

const StyledContainer = styled.div`
  /* background-color: lightgray; */
`;

function Layout({ children }) {
  return (
    <StyledContainer fluid>
      <Header />
      <StyledContent>
        <Container>
          <Grid>
            <Grid.Column width={4}>
              <SideNav />
            </Grid.Column>
            <Grid.Column width={12}>
              <Container>{children}</Container>
            </Grid.Column>
          </Grid>
        </Container>
      </StyledContent>
      <Footer />
    </StyledContainer>
  );
}

export default Layout;
