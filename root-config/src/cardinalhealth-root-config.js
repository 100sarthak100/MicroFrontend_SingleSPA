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

// const loading1Function = () => import('./app1/app1.js')
// const activity1Function = location => location.hash.startsWith('#/app1')

// const loading2Function = () => import('./app2/app2.js')
// const activity2Function = location => location.hash.startsWith('#/app2')

registerApplication('@cardinalhealth/card1',
  () => System.import("@cardinalhealth/card1"),
  (location) => (
    location.pathname.startsWith('') && !location.pathname.startsWith('/products') && !location.pathname.startsWith('/cart')
  ),
  { domElement: document.getElementById("card1") }
)

// registerApplication({
//   name: '@cardinalhealth/card1',
//   app: () => System.import('@cardinalhealth/card1'),
//   activeWhen: ['' && ! '/products/:id'],
//   customProps(appName, location) {
//     return {
//       domElement: document.getElementById("card1"),
//       // activeWhen: '' | '/as'
//     }
//   }
//   // customProps: {
//   //   domElement: document.getElementById("card1")
//   // }
// })
// singleSpa.registerApplication('app2', loading2Function, activity2Function)

// registerApplication(
//   "@cardinalhealth/card1",
//   () => System.import("@cardinalhealth/card1"),
//   isActive.card1,
//   { domElement: document.getElementById("card1") }
// );

registerApplication(
  "@cardinalhealth/card2",
  () => System.import("@cardinalhealth/card2"),
  // isActive.card2,
  (location) => (
    location.pathname.startsWith('') && !location.pathname.startsWith('/products') && !location.pathname.startsWith('/cart')
  ),
  { domElement: document.getElementById("card2") }
);

// registerApplication(
//   "@thawkin3/single-spa-demo-page-2",
//   () => System.import("@thawkin3/single-spa-demo-page-2"),
//   isActive.page2,
//   { domElement: document.getElementById("page-2-container") }
// );

start();

// import * as singleSpa from 'single-spa'

// const loading1Function = () => import('./app1/app1.js')
// const activity1Function = location => location.hash.startsWith('#/app1')

// const loading2Function = () => import('./app2/app2.js')
// const activity2Function = location => location.hash.startsWith('#/app2')

// singleSpa.registerApplication('app1', loading1Function, activity1Function)
// singleSpa.registerApplication('app2', loading2Function, activity2Function)

// singleSpa.start()