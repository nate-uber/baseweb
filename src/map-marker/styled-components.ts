/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import { styled } from '../styles';
import { BADGE_ENHANCER_STYLES, FLOATING_MARKER_ANCHOR_POSITIONS, LABEL_SIZES } from './constants';

import type {
  AnchorPositions,
  LabelEnhancerPosition,
  BadgeEnhancerSize,
  BadgePosition,
  PinHeadSize,
} from './types';
import type { StyleObject } from 'styletron-react';

export const getAnchorTransform = (anchor: AnchorPositions, anchorSize: number) =>
  ({
    [FLOATING_MARKER_ANCHOR_POSITIONS.none]: ``,
    [FLOATING_MARKER_ANCHOR_POSITIONS.topLeft]: `translate(${anchorSize}px, ${anchorSize}px)`,
    [FLOATING_MARKER_ANCHOR_POSITIONS.topRight]: `translate(-100%, ${anchorSize}px)`,
    [FLOATING_MARKER_ANCHOR_POSITIONS.bottomLeft]: `translate(${anchorSize}px, -100%)`,
    [FLOATING_MARKER_ANCHOR_POSITIONS.bottomRight]: `translate(-100%, -100%)`,
  }[anchor]);

export const StyledDragShadowContainer = styled<
  'div',
  {
    $height: number;
    $width: number;
    $dragging: boolean;
  }
>('div', ({ $theme, $height, $width, $dragging }) => ({
  width: `${$width}px`,
  height: `${$height}px`,
  opacity: $dragging ? 1 : 0,
  visibility: $dragging ? 'visible' : 'hidden',
  transition: `${$theme.animation.timing300} ${$theme.animation.easeOutCurve} all`,
  position: 'relative',
  boxShadow: $theme.lighting.shadow600,
}));

StyledDragShadowContainer.displayName = 'StyledDragShadowContainer';

export const StyledDragShadow = styled<
  'div',
  {
    $background: string;
    $width: number;
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
>('div', ({ $theme, $background, $width }) => ({
  backgroundColor: $background,
  borderRadius: '50%',
  width: `${$width}px`,
  height: '4px',
  position: 'absolute',
  bottom: 0,
}));

StyledDragShadow.displayName = 'StyledDragShadow';

export const StyledNeedle = styled<
  'div',
  {
    $background?: string;
    $height: number;
  }
>('div', ({ $theme, $background, $height }) => ({
  backgroundColor: $background,
  width: '4px',
  height: `${$height}px`,
  boxShadow: $theme.lighting.shadow600,
}));

StyledNeedle.displayName = 'StyledNeedle';

export const StyledFloatingMarkerRoot = styled<
  'div',
  {
    $size: number;
  }
>('div', ({ $size }) => ({
  position: 'relative',
  height: `${$size}px`,
  width: `${$size}px`,
}));

StyledFloatingMarkerRoot.displayName = 'StyledFloatingMarkerRoot';

export const StyledFloatingMarkerPinHeadContainer = styled<
  'div',
  {
    $anchor: AnchorPositions;
    $anchorSize: number;
  }
>('div', ({ $theme, $anchor, $anchorSize }) => ({
  position: 'absolute',
  transition: `${$theme.animation.timing300} ${$theme.animation.easeOutCurve} all`,
  transform: getAnchorTransform($anchor, $anchorSize),
}));

StyledFloatingMarkerPinHeadContainer.displayName = 'StyledFloatingMarkerPinHeadContainer';

export const StyledFloatingMarkerAnchorContainer = styled('div', () => ({
  position: 'absolute',
}));

StyledFloatingMarkerAnchorContainer.displayName = 'StyledFloatingMarkerAnchorContainer';

export const StyledFixedMarkerRoot = styled('div', () => ({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
}));

StyledFixedMarkerRoot.displayName = 'StyledFixedMarkerRoot';

export const StyledFixedMarkerDragContainer = styled<
  'div',
  {
    $translateAmount: number;
    $performTranslate: boolean;
  }
>('div', ({ $theme, $translateAmount, $performTranslate }) => {
  return {
    transform: `translateY(${$performTranslate ? `${$translateAmount}px` : '0px'})`,
    transition: `${$theme.animation.timing300} ${$theme.animation.easeOutCurve} all`,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  };
});

StyledFixedMarkerDragContainer.displayName = 'StyledFixedMarkerDragContainer';

export const StyledOuterXXSmallAnchor = styled<
  'div',
  {
    $round: boolean;
    $background: string;
    $size: number;
  }
>('div', ({ $theme, $round, $background, $size }) => ({
  backgroundColor: $background,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: `${$size}px`,
  width: `${$size}px`,
  borderRadius: $round ? '50%' : 0,
  boxShadow: $theme.lighting.shadow600,
}));

StyledOuterXXSmallAnchor.displayName = 'StyledOuterXXSmallAnchor';

export const StyledInnerXXSmallAnchor = styled<
  'div',
  {
    $round: boolean;
    $color: string;
    $size: number;
  }
>('div', ({ $round, $color, $size }) => ({
  backgroundColor: $color,
  height: `${$size}px`,
  width: `${$size}px`,
  borderRadius: $round ? '50%' : 0,
}));

StyledInnerXXSmallAnchor.displayName = 'StyledInnerXXSmallAnchor';

export const StyledOuterXSmallAnchor = styled<
  'div',
  {
    $round: boolean;
    $background: string;
    $size: number;
  }
>('div', ({ $theme, $round, $background, $size }) => ({
  backgroundColor: $background,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: `${$size}px`,
  width: `${$size}px`,
  borderRadius: $round ? '50%' : 0,
  boxShadow: $theme.lighting.shadow600,
}));

StyledOuterXSmallAnchor.displayName = 'StyledOuterXSmallAnchor';

export const StyledInnerXSmallAnchor = styled<
  'div',
  {
    $round: boolean;
    $color: string;
    $size: number;
  }
>('div', ({ $round, $color, $size }) => ({
  backgroundColor: $color,
  height: `${$size}px`,
  width: `${$size}px`,
  borderRadius: $round ? '50%' : 0,
}));

StyledInnerXSmallAnchor.displayName = 'StyledInnerXSmallAnchor';

export const StyledPinHead = styled<
  'div',
  {
    $height: number;
    $background: string;
    $gridTemplateColumns: string;
    $type: string;
    $forceCircle: boolean;
  }
>('div', ({ $theme, $height, $background, $gridTemplateColumns, $type, $forceCircle }) => {
  const sharedStyles = {
    fixed: {
      padding: '0px 12px',
      borderRadius: `${$height}px`,
    },
    floating: {
      padding: '0px 8px',
    },
  };

  return {
    backgroundColor: $background,
    height: `${$height}px`,
    display: 'grid',
    gridTemplateColumns: $gridTemplateColumns,
    gap: '8px',
    boxShadow: $theme.lighting.shadow600,
    whiteSpace: 'nowrap',
    ...sharedStyles[$type],
    ...($forceCircle && {
      width: `${$height}px`,
      display: 'flex',
      justifyContent: 'center',
      boxSizing: 'border-box',
    }),
  };
});

StyledPinHead.displayName = 'StyledPinHead';

export const StyledStrokedLabelContainer = styled<
  'div',
  {
    $position: LabelEnhancerPosition;
    $labelOffset: number;
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
>('div', ({ $position, $theme, $labelOffset }) => {
  const staticLabelOffset = 4;
  const positions: Record<string, StyleObject> = {
    top: {
      left: `calc(50% + ${staticLabelOffset}px)`,
      bottom: '100%',
      alignItems: 'flex-end',
      justifyContent: 'center',
      textAlign: 'center',
    },
    bottom: {
      left: '50%',
      top: `calc(100% + ${staticLabelOffset}px + ${$labelOffset}px)`,
      alignItems: 'flex-start',
      justifyContent: 'center',
      textAlign: 'center',
    },
    right: {
      left: `calc(100% + ${staticLabelOffset}px)`,
      top: '50%',
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
    left: {
      right: `calc(100% + ${staticLabelOffset}px)`,
      top: '50%',
      alignItems: 'center',
      justifyContent: 'flex-end',
      textAlign: 'right',
    },
    none: {},
  };
  return {
    position: 'absolute',
    width: '0px',
    height: '0px',
    pointerEvents: 'none',
    display: 'flex',
    ...positions[$position],
  };
});

StyledStrokedLabelContainer.displayName = 'StyledStrokedLabelContainer';

export const StyledStrokedLabel = styled<
  'div',
  {
    $stroked: boolean;
    $position: LabelEnhancerPosition;
    $size: PinHeadSize;
  }
>('div', ({ $theme, $size }) => {
  const strokeWidth = 1.5;
  const strokeColor = $theme.colors.backgroundPrimary;

  const textShadow = `-${strokeWidth}px -${strokeWidth}px 0 ${strokeColor},
    0 -${strokeWidth}px 0 ${strokeColor},
    ${strokeWidth}px -${strokeWidth}px 0 ${strokeColor},
    ${strokeWidth}px 0 0 ${strokeColor},
    ${strokeWidth}px ${strokeWidth}px 0 ${strokeColor},
    0 ${strokeWidth}px 0 ${strokeColor},
   -${strokeWidth}px ${strokeWidth}px 0 ${strokeColor},
   -${strokeWidth}px 0 0 ${strokeColor}`;

  return {
    display: 'flex',
    ...$theme.typography[LABEL_SIZES[$size]],
    color: $theme.colors.primaryA,
    transition: `${$theme.animation.timing300} ${$theme.animation.easeOutCurve} all`,
    textShadow,
    pointerEvents: 'auto',
    width: 'max-content',
    maxWidth: '200px',
  };
});

StyledStrokedLabel.displayName = 'StyledStrokedLabel';

export const StyledBadgeEnhancerRoot = styled<
  'div',
  {
    $size: BadgeEnhancerSize;
    $position: BadgePosition;
  }
>('div', ({ $theme, $size, $position }) => {
  const { x, y } = $position;
  return {
    position: 'absolute',
    ...$theme.typography.LabelSmall,
    backgroundColor: $theme.colors.backgroundAccent,
    color: $theme.colors.primaryB,
    boxSizing: 'border-box',
    right: 0,
    transform: `translate(calc(100% + ${x}px), ${y}px)`,

    transition: `${$theme.animation.timing300} ${$theme.animation.easeOutCurve} all`,
    ...BADGE_ENHANCER_STYLES[$size],
  };
});

StyledBadgeEnhancerRoot.displayName = 'StyledBadgeEnhancerRoot';

export const RelativeContainer = styled('div', () => {
  return {
    position: 'relative',
  };
});

RelativeContainer.displayName = 'RelativeContainer';

export const StyledContentItem = styled<
  'div',
  {
    $color: string;
    $height: number;
    $size: PinHeadSize;
  }
>('div', ({ $theme, $color, $height, $size }) => {
  return {
    ...$theme.typography[LABEL_SIZES[$size]],
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    lineHeight: `${$height}px`,
    height: `${$height}px`,
    color: $color,
  };
});
StyledContentItem.displayName = 'StyledContentItem';
