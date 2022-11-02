/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import { styled } from '../../styles';

import { BottomSheet } from '../bottom-sheet';
import map from './map-san-francisco.jpg';

const StyledIphone6 = styled('div', {
  width: '375px',
  height: '667px',
  border: '1px solid #ECECEC',
  borderRadius: '12px',
  position: 'relative',
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column',
});

export function Scenario() {
  return (
    <StyledIphone6>
      <div
        style={{
          overflow: 'auto',
          // position: 'absolute',
          // height: '100%',
          // width: '100%',
        }}
      >
        <img src={map} alt="map of San Francisco" />
      </div>
      <BottomSheet title="Title" description="Description">
        <div style={{ padding: '0px 12px' }}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.
          </p>
        </div>
      </BottomSheet>
    </StyledIphone6>
  );
}
