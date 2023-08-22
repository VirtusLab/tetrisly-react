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
  ),
);

export const t = x;
export const tet = x;
export const tetrisly = x;
