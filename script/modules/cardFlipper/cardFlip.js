import { moreLinkHandler } from "./moreLinkHandler.js";
import { backLinkHandler } from './backLinkHandler.js';

export const cardFlipper = () => {
const moreLinkNodes = document.querySelectorAll('.card__link');
const backLinkNodes = document.querySelectorAll('.card__link--back');

moreLinkHandler(moreLinkNodes);
backLinkHandler(backLinkNodes);
}