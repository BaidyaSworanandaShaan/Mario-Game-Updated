import marioLogoSvg from "../../dist/images/mario-logo.png";
import { menuScreenContainer } from "./htmlElements";
import { createImage } from "./utils";

export function showMenuScreen() {
  const marioLogo = createImage(marioLogoSvg);
  menuScreenContainer.appendChild(marioLogo);
  marioLogo.height = 300;
}
