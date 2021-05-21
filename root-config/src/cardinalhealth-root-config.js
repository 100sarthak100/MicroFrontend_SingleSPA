import { registerApplication, start } from "single-spa";
import * as isActive from "./activity-functions";

registerApplication(
  "@cardinalhealth/nav-footer",
  () => System.import("@cardinalhealth/nav-footer"),
  isActive.nav,
  { domElement: document.getElementById("nav") }
);

registerApplication(
  "@cardinalhealth/main",
  () => System.import("@cardinalhealth/main"),
  // isActive.main,
  (location) => (
    location.pathname.startsWith('')
  ),
  { domElement: document.getElementById("main") }
);


registerApplication('@cardinalhealth/card1',
  () => System.import("@cardinalhealth/card1"),
  (location) => (
    // location.pathname.starsWith('/search?')
    location.pathname.startsWith('') && !location.pathname.startsWith('/#/search?') && !location.pathname.startsWith('/products') && !location.pathname.startsWith('/services') && !location.pathname.startsWith('/cart')
  ),
  { domElement: document.getElementById("card1") }
)

registerApplication(
  "@cardinalhealth/card2",
  () => System.import("@cardinalhealth/card2"),
  // isActive.card2,
  (location) => (
    location.pathname.startsWith('') && !location.pathname.startsWith('/products') && !location.pathname.startsWith('/services') && !location.pathname.startsWith('/cart')
  ),
  { domElement: document.getElementById("card2") }
);

registerApplication(
  "services",
  () => System.import("services"),
  // isActive.card2,
  (location) => (
    // location.pathname.startsWith('/services')
    location.pathname.startsWith('/services') && !location.pathname.startsWith('/cart') && !location.pathname.startsWith('/products')
  ),
  { domElement: document.getElementById("services") }
);

start();
