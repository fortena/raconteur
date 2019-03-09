// IE support see: https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key

// Default keys
const ENTER = 'Enter';
const TAB = 'Tab';
const PAGE_UP = 'PageUp';
const PAGE_DOWN = 'PageDown';
const BACKSPACE = 'Backspace';
const ESCAPE = 'Escape';
const ARROW_RIGHT = 'ArrowRight';
const ARROW_LEFT = 'ArrowLeft';
const ARROW_UP = 'ArrowUp';
const ARROW_DOWN = 'ArrowDown';

// IE keys
const ESC = 'Esc';
const RIGHT = 'Right';
const LEFT = 'Left';
const UP = 'Up';
const DOWN = 'Down';

export const enter = key => key === ENTER;
export const tab = key => key === TAB;
export const pageUp = key => key === PAGE_UP;
export const pageDown = key => key === PAGE_DOWN;
export const backspace = key => key === BACKSPACE;
export const escape = key => [ESCAPE, ESC].indexOf(key) !== -1;
export const arrowRight = key => [ARROW_RIGHT, RIGHT].indexOf(key) !== -1;
export const arrowLeft = key => [ARROW_LEFT, LEFT].indexOf(key) !== -1;
export const arrowUp = key => [ARROW_UP, UP].indexOf(key) !== -1;
export const arrowDown = key => [ARROW_DOWN, DOWN].indexOf(key) !== -1;
export const arrowKey = key =>
  [
    ARROW_RIGHT,
    RIGHT,
    ARROW_LEFT,
    LEFT,
    ARROW_UP,
    UP,
    ARROW_DOWN,
    DOWN
  ].indexOf(key) !== -1;
