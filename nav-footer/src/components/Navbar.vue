<template>
  <div>
    <nav
      class="navbar navbar-expand-md navbar-light bg-dark main-menu"
      style="box-shadow: none"
    >
      <div class="container">
        <button
          type="button"
          id="sidebarCollapse"
          class="btn btn-link d-block d-md-none"
        >
          <i class="bx bx-menu icon-single"></i>
        </button>

        <a class="navbar-brand" href="/">
          <h4 class="font-weight-bold">
            <span>Cardinal</span><span>Health</span>
          </h4>
        </a>

        <ul class="navbar-nav ml-auto d-block d-md-none">
          <li class="nav-item">
            <a class="btn btn-link" href="#"
              ><i class="bx bxs-cart icon-single"></i>
              <span class="badge badge-danger">3</span></a
            >
          </li>
        </ul>

        <div class="collapse navbar-collapse">
          <form class="form-inline my-2 my-lg-0 mx-auto" style="display: flex">
            <input
              class="form-control"
              type="search"
              placeholder="Search for products..."
              aria-label="Search"
              style="margin-right: 10px"
            />
            <button class="btn btn-warning my-2 my-sm-0" type="submit">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-search"
                viewBox="0 0 16 16"
              >
                <path
                  d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
                />
              </svg>
            </button>
          </form>

          <ul class="navbar-nav">
            <li class="nav-item ml-md-3">
              <a class="btn btn-warning" href="/cart" style="color: black"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="currentColor"
                  class="bi bi-cart"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
                  /></svg
              ></a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <nav class="navbar navbar-expand-md navbar-light bg-dark sub-menu">
      <div class="container">
        <div class="collapse navbar-collapse" id="navbar">
          <ul class="navbar-nav mx-auto">
            <li class="nav-item active">
              <a class="nav-link" href="/"
                >Home <span class="sr-only"></span
              ></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Services</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Professional Products</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Essential Insights</a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Support
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="#">Delivery Information</a>
                <a class="dropdown-item" href="#">Privacy Policy</a>
                <a class="dropdown-item" href="#">Terms & Conditions</a>
              </div>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <div class="search-bar d-block d-md-none">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <form class="form-inline mb-3 mx-auto">
              <input
                class="form-control"
                type="search"
                placeholder="Search for products..."
                aria-label="Search"
              />
              <button class="btn btn-warning" type="submit">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-search"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
                  />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>

    <nav id="sidebar">
      <div class="sidebar-header">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-10 pl-0">
              <a class="btn btn-primary" href="#"
                ><i class="bx bxs-user-circle mr-1"></i>Sign in</a
              >
            </div>

            <div class="col-2 text-left">
              <button type="button" id="sidebarCollapseX" class="btn btn-link">
                <i class="bx bx-x icon-single"></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      <ul class="list-unstyled components links">
        <li class="active">
          <a href="#"><i class="bx bx-home mr-3"></i> Home</a>
        </li>
        <li>
          <a href="#"><i class="bx bx-carousel mr-3"></i> Products</a>
        </li>
        <li>
          <a href="#"><i class="bx bx-book-open mr-3"></i> Schools</a>
        </li>
        <li>
          <a href="#"><i class="bx bx-crown mr-3"></i> Publishers</a>
        </li>
        <li>
          <a
            href="#pageSubmenu"
            data-toggle="collapse"
            aria-expanded="false"
            class="dropdown-toggle"
            ><i class="bx bx-help-circle mr-3"></i> Support</a
          >
          <ul class="collapse list-unstyled" id="pageSubmenu">
            <li>
              <a href="#">Delivery Information</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms & Conditions</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#"><i class="bx bx-phone mr-3"></i> Contact</a>
        </li>
      </ul>

      <h6 class="text-uppercase mb-1">Categories</h6>
      <ul class="list-unstyled components mb-3">
        <li>
          <a href="#">Category 1</a>
        </li>
        <li>
          <a href="#">Category 1</a>
        </li>
        <li>
          <a href="#">Category 1</a>
        </li>
        <li>
          <a href="#">Category 1</a>
        </li>
        <li>
          <a href="#">Category 1</a>
        </li>
        <li>
          <a href="#">Category 1</a>
        </li>
      </ul>

      <ul class="social-icons">
        <li>
          <a href="#" target="_blank" title=""
            ><i class="bx bxl-facebook-square"></i
          ></a>
        </li>
        <li>
          <a href="#" target="_blank" title=""
            ><i class="bx bxl-twitter"></i
          ></a>
        </li>
        <li>
          <a href="#" target="_blank" title=""
            ><i class="bx bxl-linkedin"></i
          ></a>
        </li>
        <li>
          <a href="#" target="_blank" title=""
            ><i class="bx bxl-instagram"></i
          ></a>
        </li>
      </ul>
    </nav>
  </div>
</template>


<style scoped>
.btn .bx {
  vertical-align: inherit;
  margin-top: -3px;
  font-size: 1.15rem;
}

.form-control {
  height: calc(2.5rem + 2px);
  padding: 0.5rem 1.5rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.3rem;
}

.btn {
  font-size: 1rem;
  padding: 0.5rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
}

.bx.icon-single {
  font-size: 1.5rem;
}

.form-inline .form-control {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}

.form-inline .btn {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

/* Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) {
}

/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) {
  .form-inline .form-control {
    width: 210px;
  }
}

/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) {
  .form-inline .form-control {
    width: 440px;
  }
}

/* Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) {
  .form-inline .form-control {
    width: 600px;
  }
}

.sub-menu.navbar-light .navbar-nav .active > .nav-link,
.sub-menu.navbar-light .navbar-nav .nav-link.active,
.sub-menu.navbar-light .navbar-nav .nav-link.show,
.sub-menu.navbar-light .navbar-nav .show > .nav-link {
  border-bottom: 3px solid #007bff;
  color: white;
}

.font-weight-bold {
  color: white;
}

.navbar-light .navbar-nav .nav-link {
  color: #f8f9fa;
}

.navbar .navbar-toggler {
  border: none;
}

.navbar-light .navbar-toggler:focus {
  outline: none;
}

.navbar {
  padding: 1rem;
}

.main-menu {
  position: relative;
  z-index: 3;
}

.sub-menu {
  position: relative;
  z-index: 2;
  padding: 0 1rem;
}

/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) {
  .sub-menu {
    padding: 0 1rem;
  }

  .sub-menu.navbar-expand-md .navbar-nav .nav-link {
    padding: 1rem 1.5rem;
  }
}

.navbar.bg-light {
  background: #fff !important;
  box-shadow: 0px 2px 15px 0px rgba(0, 0, 0, 0.1);
}

.user-dropdown .nav-link {
  padding: 0.15rem 0;
}

#sidebar {
  background: #fff;
  height: 100%;
  left: -100%;
  top: 0;
  bottom: 0;
  overflow: auto;
  position: fixed;
  transition: 0.4s ease-in-out;
  width: 84%;
  z-index: 5001;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.3);
  padding: 1.25rem 1rem 1rem;
}

#sidebar.active {
  left: 0;
}

#sidebar .sidebar-header {
  background: #fff;
  border-bottom: 1px solid #e4e4e4;
  padding-bottom: 1.5rem;
}

#sidebar ul.components {
  padding: 20px 0;
  border-bottom: 1px solid #e4e4e4;
  margin-bottom: 40px;
}

#sidebar ul p {
  color: #fff;
  padding: 10px;
}

#sidebar ul li a {
  padding: 10px 16px;
  font-size: 1.1em;
  display: block;
  color: #000;
}

#sidebar ul li a:hover {
  color: #7386d5;
  background: #fff;
}

#sidebar ul li.active > a,
#sidebar a[aria-expanded="true"] {
  color: #007bff;
  background: #e6f2ff;
  border-radius: 6px;
}

a[data-toggle="collapse"] {
  position: relative;
}

#sidebar .links .dropdown-toggle::after {
  display: block;
  position: absolute;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
}

section {
  padding: 6rem;
  background: #e4e4e4;
  margin-bottom: 30px;
  position: relative;
  z-index: 1;
}

.overlay {
  background: rgba(0, 0, 0, 0.7);
  height: 100vh;
  left: 0;
  position: fixed;
  top: 0;
  -webkit-transition: all 0.5s ease-in-out;
  transition: all 0.5s ease-in-out;
  z-index: -1;
  width: 100%;
  opacity: 0;
}

.overlay.visible {
  opacity: 1;
  z-index: 5000;
}

.mobiHeader .menuActive ~ .overlay {
  opacity: 1;
  width: 100%;
}

ul.social-icons {
  list-style-type: none;
  padding-left: 0;
  margin-bottom: 0;
}

ul.social-icons li {
  display: inline-block;
  margin-right: 0px;
  margin-bottom: 0;
}

#sidebar ul.social-icons li a {
  font-size: 24px;
}

.utility-nav {
  background: #e4e4e4;
  padding: 0.5rem 1rem;
}

.utility-nav p {
  margin-bottom: 0;
}

.search-bar {
  position: relative;
  z-index: 2;
  box-shadow: 0px 2px 15px 0px rgba(0, 0, 0, 0.1);
}

.search-bar .form-control {
  width: calc(100% - 45px);
}

.avatar {
  border-radius: 50%;
  width: 4.5rem;
  height: 4.5rem;
  margin-right: 8px;
}

.avatar.avatar-xs {
  width: 2.25rem;
  height: 2.25rem;
}

.user-dropdown .dropdown-menu {
  left: auto;
  right: 0;
}
</style>