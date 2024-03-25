import {
  compose,
  createCss,
  animations,
  backgrounds,
  borders,
  effects,
  flexboxes,
  flexboxGrids,
  grids,
  interactivity,
  layout,
  sizing,
  space,
  svg,
  tables,
  transforms,
  transitions,
  typography,
  style,
} from '@xstyled/styled-components';

const opacity = style({
  prop: 'opacity',
  key: 'opacity',
});

const strokeWidth = style({
  prop: 'strokeWidth',
  key: 'strokeWidth',
});

const top = style({
  prop: 'top',
  key: 'space',
});

const bottom = style({
  prop: 'bottom',
  key: 'space',
});

const left = style({
  prop: 'left',
  key: 'space',
});

const right = style({
  prop: 'right',
  key: 'space',
});

export const { css, styled, x, createGlobalStyle } = createCss(
  compose(
    animations,
    backgrounds,
    borders,
    effects,
    flexboxes,
    flexboxGrids,
    grids,
    interactivity,
    layout,
    sizing,
    space,
    svg,
    tables,
    transforms,
    transitions,
    typography,
    opacity,
    strokeWidth,
    top,
    bottom,
    left,
    right,
  ),
);

export const t = x;
export const tet = x;
export const tetrisly = x;
