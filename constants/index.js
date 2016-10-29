/**
 * HTML attribute container directive.
 *
 * @type {string}
 */
export const CONTAINER_ATTRIBUTE = 'data-brk-container';

/**
 * HTML attribute key directive.
 *
 * For tagging a component that appears multiple times.
 *
 * @type {string}
 */
export const KEY_ATTRIBUTE = 'data-brk-key';

/**
 * Event attribute prefixer.
 *
 * @param {string} name - Event name.
 * @returns {string} HTML attribute
 */
const prefix = name => `data-brk-${name}`;

/**
 * HTML attribute event directives.
 *
 * @type {Object}
 */
export const EVENT_ATTRIBUTES = {
    click: prefix('onclick'),
    focus: prefix('onfocus'),
    input: prefix('oninput'),
    change: prefix('onchange'),
    keydown: prefix('onkeydown'),
    keyup: prefix('onkeyup'),
    keypress: prefix('onkeypress'),
    cut: prefix('oncut'),
    paste: prefix('onpaste')
};
