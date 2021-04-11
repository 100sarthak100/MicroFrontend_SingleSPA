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
  isActive.main,
  { domElement: document.getElementById("main") }
);

registerApplication(
  "@cardinalhealth/card1",
  () => System.import("@cardinalhealth/card1"),
  isActive.card1,
  { domElement: document.getElementById("card1") }
);

registerApplication(
  "@cardinalhealth/card2",
  () => System.import("@cardinalhealth/card2"),
  isActive.card2,
  { domElement: document.getElementById("card2") }
);

// registerApplication(
//   "@thawkin3/single-spa-demo-page-2",
//   () => System.import("@thawkin3/single-spa-demo-page-2"),
//   isActive.page2,
//   { domElement: document.getElementById("page-2-container") }
// );

start();
