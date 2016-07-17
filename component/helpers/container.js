import { CONTAINER_ATTRIBUTE } from '../events';

/**
 * Generates a HTML attribute for a container.
 *
 * @param {string} name - Container name.
 * @returns {string} Container attribute.
 */
export default function container(name) {
    return `${CONTAINER_ATTRIBUTE}="${name}"`;
}