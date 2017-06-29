import React, { Component } from 'react';
import styled from 'styled-components';
import AppImage from './AppImage';

const BackgroundDiv = styled.div`
  width: 100vw;
	height: 100vh;
	background-image:
		linear-gradient(
			black 50vh,
			white 50vh
		);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export default class Background extends Component {
  render() {
    return (
      <BackgroundDiv>
        <AppImage />
      </BackgroundDiv>
    );
  }
}