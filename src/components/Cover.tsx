import React from "react";
import { StaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import PropTypes from "prop-types";

import Title from "./Title";
import { Wrapper } from "./Base";

const Image = styled.img`
  width: 100vw;
  height: 100vh;

  background-position: 50% 50%;
  background-image: url("./assets/cover.jpg");
  background-size: cover;

  position: absolute;
  z-index: -1;
`;

const Cover = ({ data: { coverImage } }) => {
  return (
    <Wrapper>
      <Image alt={coverImage.name} src={coverImage.publicURL} />
      <Title />
    </Wrapper>
  );
};

export default props => (
  <StaticQuery
    query={graphql`
      query CoverImageQuery {
        coverImage: file(relativePath: { eq: "images/cover.jpg" }) {
          name
          publicURL
        }
      }
    `}
    render={data => <Cover data={data} {...props} />}
  />
);

Cover.propTypes = {
  data: PropTypes.shape({
    file: PropTypes.shape({
      name: PropTypes.string.isRequired,
      publicURL: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};
