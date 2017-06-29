import React, { Component } from 'react';
import styled from 'styled-components';

const Image = styled.img`
  max-height: 80vh;
  max-width: 80vw;
`;

export default class AppImage extends Component {
  render() {
    return (
      <Image src='./images/mc.png' alt='a decorative circle' />
    );
  }
}