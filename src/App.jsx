function App() {
  return (
      <>
          <div>
              <div className="container-fluid bg-dark px-0">
                  <div className="row gx-0">
                      <div className="col-lg-3 bg-dark d-none d-lg-block">
                          <a
                              className="navbar-brand w-100 h-100 m-0 p-0 d-flex align-items-center justify-content-center"
                              href="index.html"
                          >
                              <h1 className="m-0 display-4 text-primary text-uppercase">
                                  Gymster
                              </h1>
                          </a>
                      </div>
                      <div className="col-lg-9">
                          <div className="row gx-0 bg-secondary d-none d-lg-flex">
                              <div className="col-lg-7 px-5 text-start">
                                  <div className="h-100 d-inline-flex align-items-center py-2 me-4">
                                      <i className="fa fa-envelope text-primary me-2" />
                                      <h6 className="mb-0">info@example.com</h6>
                                  </div>
                                  <div className="h-100 d-inline-flex align-items-center py-2">
                                      <i className="fa fa-phone-alt text-primary me-2" />
                                      <h6 className="mb-0">+012 345 6789</h6>
                                  </div>
                              </div>
                              <div className="col-lg-5 px-5 text-end">
                                  <div className="d-inline-flex align-items-center py-2">
                                      <a
                                          className="btn btn-light btn-square rounded-circle me-2"
                                          href=""
                                      >
                                          <i className="fab fa-facebook-f" />
                                      </a>
                                      <a
                                          className="btn btn-light btn-square rounded-circle me-2"
                                          href=""
                                      >
                                          <i className="fab fa-twitter" />
                                      </a>
                                      <a
                                          className="btn btn-light btn-square rounded-circle me-2"
                                          href=""
                                      >
                                          <i className="fab fa-linkedin-in" />
                                      </a>
                                      <a
                                          className="btn btn-light btn-square rounded-circle me-2"
                                          href=""
                                      >
                                          <i className="fab fa-instagram" />
                                      </a>
                                      <a
                                          className="btn btn-light btn-square rounded-circle"
                                          href=""
                                      >
                                          <i className="fab fa-youtube" />
                                      </a>
                                  </div>
                              </div>
                          </div>
                          <nav className="navbar navbar-expand-lg bg-dark navbar-dark p-3 p-lg-0 px-lg-5">
                              <a
                                  className="navbar-brand d-block d-lg-none"
                                  href="index.html"
                              >
                                  <h1 className="m-0 display-4 text-primary text-uppercase">
                                      Gymster
                                  </h1>
                              </a>
                              <button
                                  className="navbar-toggler"
                                  data-bs-target="#navbarCollapse"
                                  data-bs-toggle="collapse"
                                  type="button"
                              >
                                  <span className="navbar-toggler-icon" />
                              </button>
                              <div
                                  className="collapse navbar-collapse justify-content-between"
                                  id="navbarCollapse"
                              >
                                  <div className="navbar-nav mr-auto py-0">
                                      <a
                                          className="nav-item nav-link active"
                                          href="index.html"
                                      >
                                          Home
                                      </a>
                                      <a
                                          className="nav-item nav-link"
                                          href="about.html"
                                      >
                                          About
                                      </a>
                                      <a
                                          className="nav-item nav-link"
                                          href="class.html"
                                      >
                                          Classes
                                      </a>
                                      <a
                                          className="nav-item nav-link"
                                          href="team.html"
                                      >
                                          Trainers
                                      </a>
                                      <div className="nav-item dropdown">
                                          <a
                                              className="nav-link dropdown-toggle"
                                              data-bs-toggle="dropdown"
                                              href="#"
                                          >
                                              Pages
                                          </a>
                                          <div className="dropdown-menu rounded-0 m-0">
                                              <a
                                                  className="dropdown-item"
                                                  href="blog.html"
                                              >
                                                  Blog Grid
                                              </a>
                                              <a
                                                  className="dropdown-item"
                                                  href="detail.html"
                                              >
                                                  Blog Detail
                                              </a>
                                              <a
                                                  className="dropdown-item"
                                                  href="testimonial.html"
                                              >
                                                  Testimonial
                                              </a>
                                          </div>
                                      </div>
                                      <a
                                          className="nav-item nav-link"
                                          href="contact.html"
                                      >
                                          Contact
                                      </a>
                                  </div>
                                  <a
                                      className="btn btn-primary py-md-3 px-md-5 d-none d-lg-block"
                                      href=""
                                  >
                                      Join Us
                                  </a>
                              </div>
                          </nav>
                      </div>
                  </div>
              </div>
              <div className="container-fluid p-0 mb-5">
                  <div
                      className="carousel slide"
                      data-bs-ride="carousel"
                      id="header-carousel"
                  >
                      <div className="carousel-inner">
                          <div className="carousel-item active">
                              <img
                                  alt="Image"
                                  className="w-100"
                                  src="src/public/img/carousel-1.jpg"
                              />
                              <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                  <div
                                      className="p-3"
                                      style={{
                                          maxWidth: "900px",
                                      }}
                                  >
                                      <h5 className="text-white text-uppercase">
                                          Best Gym Center
                                      </h5>
                                      <h1 className="display-2 text-white text-uppercase mb-md-4">
                                          Build Your Body Strong With Gymster
                                      </h1>
                                      <a
                                          className="btn btn-primary py-md-3 px-md-5 me-3"
                                          href=""
                                      >
                                          Join Us
                                      </a>
                                      <a
                                          className="btn btn-light py-md-3 px-md-5"
                                          href=""
                                      >
                                          Contact Us
                                      </a>
                                  </div>
                              </div>
                          </div>
                          <div className="carousel-item">
                              <img
                                  alt="Image"
                                  className="w-100"
                                  src="src/public/img/carousel-2.jpg"
                              />
                              <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                  <div
                                      className="p-3"
                                      style={{
                                          maxWidth: "900px",
                                      }}
                                  >
                                      <h5 className="text-white text-uppercase">
                                          Best Gym Center
                                      </h5>
                                      <h1 className="display-2 text-white text-uppercase mb-md-4">
                                          Grow Your Strength With Our Trainers
                                      </h1>
                                      <a
                                          className="btn btn-primary py-md-3 px-md-5 me-3"
                                          href=""
                                      >
                                          Join Us
                                      </a>
                                      <a
                                          className="btn btn-light py-md-3 px-md-5"
                                          href=""
                                      >
                                          Contact Us
                                      </a>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <button
                          className="carousel-control-prev"
                          data-bs-slide="prev"
                          data-bs-target="#header-carousel"
                          type="button"
                      >
                          <span
                              aria-hidden="true"
                              className="carousel-control-prev-icon"
                          />
                          <span className="visually-hidden">Previous</span>
                      </button>
                      <button
                          className="carousel-control-next"
                          data-bs-slide="next"
                          data-bs-target="#header-carousel"
                          type="button"
                      >
                          <span
                              aria-hidden="true"
                              className="carousel-control-next-icon"
                          />
                          <span className="visually-hidden">Next</span>
                      </button>
                  </div>
              </div>
              <div className="container-fluid p-5">
                  <div className="row gx-5">
                      <div
                          className="col-lg-5 mb-5 mb-lg-0"
                          style={{
                              minHeight: "500px",
                          }}
                      >
                          <div className="position-relative h-100">
                              <img
                                  className="position-absolute w-100 h-100 rounded"
                                  src="src/public/img/about.jpg"
                                  style={{
                                      objectFit: "cover",
                                  }}
                              />
                          </div>
                      </div>
                      <div className="col-lg-7">
                          <div className="mb-4">
                              <h5 className="text-primary text-uppercase">
                                  About Us
                              </h5>
                              <h1 className="display-3 text-uppercase mb-0">
                                  Welcome to Gymster
                              </h1>
                          </div>
                          <h4 className="text-body mb-4">
                              Diam dolor diam ipsum tempor sit. Clita erat ipsum
                              et lorem stet no labore lorem sit clita duo justo
                              magna dolore
                          </h4>
                          <p className="mb-4">
                              Nonumy erat diam duo labore clita. Sit magna ipsum
                              dolor sed ea duo at ut. Tempor sit lorem sit magna
                              ipsum duo. Sit eos dolor ut sea rebum, diam sea
                              rebum lorem kasd ut ipsum dolor est ipsum. Et stet
                              amet justo amet clita erat, ipsum sed at ipsum
                              eirmod labore lorem.
                          </p>
                          <div className="rounded bg-dark p-5">
                              <ul className="nav nav-pills justify-content-between mb-3">
                                  <li className="nav-item w-50">
                                      <a
                                          className="nav-link text-uppercase text-center w-100 active"
                                          data-bs-toggle="pill"
                                          href="#pills-1"
                                      >
                                          About Us
                                      </a>
                                  </li>
                                  <li className="nav-item w-50">
                                      <a
                                          className="nav-link text-uppercase text-center w-100"
                                          data-bs-toggle="pill"
                                          href="#pills-2"
                                      >
                                          Why Choose Us
                                      </a>
                                  </li>
                              </ul>
                              <div className="tab-content">
                                  <div
                                      className="tab-pane fade show active"
                                      id="pills-1"
                                  >
                                      <p className="text-secondary mb-0">
                                          Tempor erat elitr at rebum at at clita
                                          aliquyam consetetur. Diam dolor diam
                                          ipsum et, tempor voluptua sit
                                          consetetur sit. Aliquyam diam amet
                                          diam et eos sadipscing labore. Clita
                                          erat ipsum et lorem et sit, sed stet
                                          no labore lorem sit. Sanctus clita duo
                                          justo et tempor consetetur takimata
                                          eirmod, dolores takimata consetetur
                                          invidunt magna dolores aliquyam
                                          dolores dolore. Amet erat amet et
                                          magna
                                      </p>
                                  </div>
                                  <div className="tab-pane fade" id="pills-2">
                                      <p className="text-secondary mb-0">
                                          Tempor erat elitr at rebum at at clita
                                          aliquyam consetetur. Diam dolor diam
                                          ipsum et, tempor voluptua sit
                                          consetetur sit. Aliquyam diam amet
                                          diam et eos sadipscing labore. Clita
                                          erat ipsum et lorem et sit, sed stet
                                          no labore lorem sit. Sanctus clita duo
                                          justo et tempor consetetur takimata
                                          eirmod, dolores takimata consetetur
                                          invidunt magna dolores aliquyam
                                          dolores dolore. Amet erat amet et
                                          magna
                                      </p>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div
                  className="container-fluid programe position-relative px-5 mt-5"
                  style={{
                      marginBottom: "135px",
                  }}
              >
                  <div className="row g-5 gb-5">
                      <div className="col-lg-4 col-md-6">
                          <div className="bg-light rounded text-center p-5">
                              <i className="flaticon-six-pack display-1 text-primary" />
                              <h3 className="text-uppercase my-4">
                                  Body Building
                              </h3>
                              <p>
                                  Sed amet tempor amet sit kasd sea lorem dolor
                                  ipsum elitr dolor amet kasd elitr duo vero
                                  amet amet stet
                              </p>
                              <a className="text-uppercase" href="">
                                  Read More <i className="bi bi-arrow-right" />
                              </a>
                          </div>
                      </div>
                      <div className="col-lg-4 col-md-6">
                          <div className="bg-light rounded text-center p-5">
                              <i className="flaticon-barbell display-1 text-primary" />
                              <h3 className="text-uppercase my-4">
                                  Weight Lefting
                              </h3>
                              <p>
                                  Sed amet tempor amet sit kasd sea lorem dolor
                                  ipsum elitr dolor amet kasd elitr duo vero
                                  amet amet stet
                              </p>
                              <a className="text-uppercase" href="">
                                  Read More <i className="bi bi-arrow-right" />
                              </a>
                          </div>
                      </div>
                      <div className="col-lg-4 col-md-6">
                          <div className="bg-light rounded text-center p-5">
                              <i className="flaticon-bodybuilding display-1 text-primary" />
                              <h3 className="text-uppercase my-4">
                                  Muscle Building
                              </h3>
                              <p>
                                  Sed amet tempor amet sit kasd sea lorem dolor
                                  ipsum elitr dolor amet kasd elitr duo vero
                                  amet amet stet
                              </p>
                              <a className="text-uppercase" href="">
                                  Read More <i className="bi bi-arrow-right" />
                              </a>
                          </div>
                      </div>
                      <div className="col-lg-12 col-md-6 text-center">
                          <h1 className="text-uppercase text-light mb-4">
                              30% Discount For This Summer
                          </h1>
                          <a className="btn btn-primary py-3 px-5" href="">
                              Become A Member
                          </a>
                      </div>
                  </div>
              </div>
              <div className="container-fluid p-5">
                  <div className="mb-5 text-center">
                      <h5 className="text-primary text-uppercase">
                          Class Schedule
                      </h5>
                      <h1 className="display-3 text-uppercase mb-0">
                          Working Hours
                      </h1>
                  </div>
                  <div className="tab-class text-center">
                      <ul className="nav nav-pills d-inline-flex justify-content-center bg-dark text-uppercase rounded-pill mb-5">
                          <li className="nav-item">
                              <a
                                  className="nav-link rounded-pill text-white active"
                                  data-bs-toggle="pill"
                                  href="#tab-1"
                              >
                                  Monday
                              </a>
                          </li>
                          <li className="nav-item">
                              <a
                                  className="nav-link rounded-pill text-white"
                                  data-bs-toggle="pill"
                                  href="#tab-2"
                              >
                                  Tuesday
                              </a>
                          </li>
                          <li className="nav-item">
                              <a
                                  className="nav-link rounded-pill text-white"
                                  data-bs-toggle="pill"
                                  href="#tab-3"
                              >
                                  Wednesday
                              </a>
                          </li>
                          <li className="nav-item">
                              <a
                                  className="nav-link rounded-pill text-white"
                                  data-bs-toggle="pill"
                                  href="#tab-4"
                              >
                                  Thursday
                              </a>
                          </li>
                          <li className="nav-item">
                              <a
                                  className="nav-link rounded-pill text-white"
                                  data-bs-toggle="pill"
                                  href="#tab-5"
                              >
                                  Friday
                              </a>
                          </li>
                          <li className="nav-item">
                              <a
                                  className="nav-link rounded-pill text-white"
                                  data-bs-toggle="pill"
                                  href="#tab-6"
                              >
                                  Saturday
                              </a>
                          </li>
                          <li className="nav-item">
                              <a
                                  className="nav-link rounded-pill text-white"
                                  data-bs-toggle="pill"
                                  href="#tab-7"
                              >
                                  Sunday
                              </a>
                          </li>
                      </ul>
                      <div className="tab-content">
                          <div
                              className="tab-pane fade show p-0 active"
                              id="tab-1"
                          >
                              <div className="row g-5">
                                  <div className="col-lg-3 col-md-4 col-sm-6">
                                      <div className="bg-dark rounded text-center py-5 px-3">
                                          <h6 className="text-uppercase text-light mb-3">
                                              6.00am - 8.00am
                                          </h6>
                                          <h5 className="text-uppercase text-primary">
                                              Power Lifting
                                          </h5>
                                          <p className="text-uppercase text-secondary mb-0">
                                              John Deo
                                          </p>
                                      </div>
                                  </div>
                                  <div className="col-lg-3 col-md-4 col-sm-6">
                                      <div className="bg-dark rounded text-center py-5 px-3">
                                          <h6 className="text-uppercase text-light mb-3">
                                              8.00am - 10.00am
                                          </h6>
                                          <h5 className="text-uppercase text-primary">
                                              Body Building
                                          </h5>
                                          <p className="text-uppercase text-secondary mb-0">
                                              James Taylor
                                          </p>
                                      </div>
                                  </div>
                                  <div className="col-lg-3 col-md-4 col-sm-6">
                                      <div className="bg-dark rounded text-center py-5 px-3">
                                          <h6 className="text-uppercase text-light mb-3">
                                              10.00am - 12.00pm
                                          </h6>
                                          <h5 className="text-uppercase text-primary">
                                              Cardio Program
                                          </h5>
                                          <p className="text-uppercase text-secondary mb-0">
                                              Jack Sparrow
                                          </p>
                                      </div>
                                  </div>
                                  <div className="col-lg-3 col-md-4 col-sm-6">
                                      <div className="bg-dark rounded text-center py-5 px-3">
                                          <h6 className="text-uppercase text-light mb-3">
                                              12.00pm - 2.00pm
                                          </h6>
                                          <h5 className="text-uppercase text-primary">
                                              Weight Loose
                                          </h5>
                                          <p className="text-uppercase text-secondary mb-0">
                                              Robert Smith
                                          </p>
                                      </div>
                                  </div>
                                  <div className="col-lg-3 col-md-4 col-sm-6">
                                      <div className="bg-dark rounded text-center py-5 px-3">
                                          <h6 className="text-uppercase text-light mb-3">
                                              2.00pm - 4.00pm
                                          </h6>
                                          <h5 className="text-uppercase text-primary">
                                              Fitness Program
                                          </h5>
                                          <p className="text-uppercase text-secondary mb-0">
                                              Adam Phillips
                                          </p>
                                      </div>
                                  </div>
                                  <div className="col-lg-3 col-md-4 col-sm-6">
                                      <div className="bg-dark rounded text-center py-5 px-3">
                                          <h6 className="text-uppercase text-light mb-3">
                                              4.00pm - 6.00pm
                                          </h6>
                                          <h5 className="text-uppercase text-primary">
                                              Crossfit Class
                                          </h5>
                                          <p className="text-uppercase text-secondary mb-0">
                                              James Alien
                                          </p>
                                      </div>
                                  </div>
                                  <div className="col-lg-3 col-md-4 col-sm-6">
                                      <div className="bg-dark rounded text-center py-5 px-3">
                                          <h6 className="text-uppercase text-light mb-3">
                                              6.00pm - 8.00pm
                                          </h6>
                                          <h5 className="text-uppercase text-primary">
                                              Muscle Building
                                          </h5>
                                          <p className="text-uppercase text-secondary mb-0">
                                              Petter John
                                          </p>
                                      </div>
                                  </div>
                                  <div className="col-lg-3 col-md-4 col-sm-6">
                                      <div className="bg-dark rounded text-center py-5 px-3">
                                          <h6 className="text-uppercase text-light mb-3">
                                              8.00pm - 10.00pm
                                          </h6>
                                          <h5 className="text-uppercase text-primary">
                                              Yoga Class
                                          </h5>
                                          <p className="text-uppercase text-secondary mb-0">
                                              Jessy Reo
                                          </p>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div className="tab-pane fade p-0" id="tab-2">
                              <div className="row g-5">
                                  <div className="col-lg-3 col-md-4 col-sm-6">
                                      <div className="bg-dark rounded text-center py-5 px-3">
                                          <h6 className="text-uppercase text-light mb-3">
                                              6.00am - 8.00am
                                          </h6>
                                          <h5 className="text-uppercase text-primary">
                                              Power Lifting
                                          </h5>
                                          <p className="text-uppercase text-secondary mb-0">
                                              John Deo
                                          </p>
                                      </div>
                                  </div>
                                  <div className="col-lg-3 col-md-4 col-sm-6">
                                      <div className="bg-dark rounded text-center py-5 px-3">
                                          <h6 className="text-uppercase text-light mb-3">
                                              8.00am - 10.00am
                                          </h6>
                                          <h5 className="text-uppercase text-primary">
                                              Body Building
                                          </h5>
                                          <p className="text-uppercase text-secondary mb-0">
                                              James Taylor
                                          </p>
                                      </div>
                                  </div>
                                  <div className="col-lg-3 col-md-4 col-sm-6">
                                      <div className="bg-dark rounded text-center py-5 px-3">
                                          <h6 className="text-uppercase text-light mb-3">
                                              10.00am - 12.00pm
                                          </h6>
                                          <h5 className="text-uppercase text-primary">
                                              Cardio Program
                                          </h5>
                                          <p className="text-uppercase text-secondary mb-0">
                                              Jack Sparrow
                                          </p>
                                      </div>
                                  </div>
                                  <div className="col-lg-3 col-md-4 col-sm-6">
                                      <div className="bg-dark rounded text-center py-5 px-3">
                                          <h6 className="text-uppercase text-light mb-3">
                                              12.00pm - 2.00pm
                                          </h6>
                                          <h5 className="text-uppercase text-primary">
                                              Weight Loose
                                          </h5>
                                          <p className="text-uppercase text-secondary mb-0">
                                              Robert Smith
                                          </p>
                                      </div>
                                  </div>
                                  <div className="col-lg-3 col-md-4 col-sm-6">
                                      <div className="bg-dark rounded text-center py-5 px-3">
                                          <h6 className="text-uppercase text-light mb-3">
                                              2.00pm - 4.00pm
                                          </h6>
                                          <h5 className="text-uppercase text-primary">
                                              Fitness Program
                                          </h5>
                                          <p className="text-uppercase text-secondary mb-0">
                                              Adam Phillips
                                          </p>
                                      </div>
                                  </div>
                                  <div className="col-lg-3 col-md-4 col-sm-6">
                                      <div className="bg-dark rounded text-center py-5 px-3">
                                          <h6 className="text-uppercase text-light mb-3">
                                              4.00pm - 6.00pm
                                          </h6>
                                          <h5 className="text-uppercase text-primary">
                                              Crossfit Class
                                          </h5>
                                          <p className="text-uppercase text-secondary mb-0">
                                              James Alien
                                          </p>
                                      </div>
                                  </div>
                                  <div className="col-lg-3 col-md-4 col-sm-6">
                                      <div className="bg-dark rounded text-center py-5 px-3">
                                          <h6 className="text-uppercase text-light mb-3">
                                              6.00pm - 8.00pm
                                          </h6>
                                          <h5 className="text-uppercase text-primary">
                                              Muscle Building
                                          </h5>
                                          <p className="text-uppercase text-secondary mb-0">
                                              Petter John
                                          </p>
                                      </div>
                                  </div>
                                  <div className="col-lg-3 col-md-4 col-sm-6">
                                      <div className="bg-dark rounded text-center py-5 px-3">
                                          <h6 className="text-uppercase text-light mb-3">
                                              8.00pm - 10.00pm
                                          </h6>
                                          <h5 className="text-uppercase text-primary">
                                              Yoga Class
                                          </h5>
                                          <p className="text-uppercase text-secondary mb-0">
                                              Jessy Reo
                                          </p>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div className="tab-pane fade p-0" id="tab-3">
                              <div className="row g-5">
                                  <div className="col-lg-3 col-md-4 col-sm-6">
                                      <div className="bg-dark rounded text-center py-5 px-3">
                                          <h6 className="text-uppercase text-light mb-3">
                                              6.00am - 8.00am
                                          </h6>
                                          <h5 className="text-uppercase text-primary">
                                              Power Lifting
                                          </h5>
                                          <p className="text-uppercase text-secondary mb-0">
                                              John Deo
                                          </p>
                                      </div>
                                  </div>
                                  <div className="col-lg-3 col-md-4 col-sm-6">
                                      <div className="bg-dark rounded text-center py-5 px-3">
                                          <h6 className="text-uppercase text-light mb-3">
                                              8.00am - 10.00am
                                          </h6>
                                          <h5 className="text-uppercase text-primary">
                                              Body Building
                                          </h5>
                                          <p className="text-uppercase text-secondary mb-0">
                                              James Taylor
                                          </p>
                                      </div>
                                  </div>
                                  <div className="col-lg-3 col-md-4 col-sm-6">
                                      <div className="bg-dark rounded text-center py-5 px-3">
                                          <h6 className="text-uppercase text-light mb-3">
                                              10.00am - 12.00pm
                                          </h6>
                                          <h5 className="text-uppercase text-primary">
                                              Cardio Program
                                          </h5>
                                          <p className="text-uppercase text-secondary mb-0">
                                              Jack Sparrow
                                          </p>
                                      </div>
                                  </div>
                                  <div className="col-lg-3 col-md-4 col-sm-6">
                                      <div className="bg-dark rounded text-center py-5 px-3">
                                          <h6 className="text-uppercase text-light mb-3">
                                              12.00pm - 2.00pm
                                          </h6>
                                          <h5 className="text-uppercase text-primary">
                                              Weight Loose
                                          </h5>
                                          <p className="text-uppercase text-secondary mb-0">
                                              Robert Smith
                                          </p>
                                      </div>
                                  </div>
                                  <div className="col-lg-3 col-md-4 col-sm-6">
                                      <div className="bg-dark rounded text-center py-5 px-3">
                                          <h6 className="text-uppercase text-light mb-3">
                                              2.00pm - 4.00pm
                                          </h6>
                                          <h5 className="text-uppercase text-primary">
                                              Fitness Program
                                          </h5>
                                          <p className="text-uppercase text-secondary mb-0">
                                              Adam Phillips
                                          </p>
                                      </div>
                                  </div>
                                  <div className="col-lg-3 col-md-4 col-sm-6">
                                      <div className="bg-dark rounded text-center py-5 px-3">
                                          <h6 className="text-uppercase text-light mb-3">
                                              4.00pm - 6.00pm
                                          </h6>
                                          <h5 className="text-uppercase text-primary">
                                              Crossfit Class
                                          </h5>
                                          <p className="text-uppercase text-secondary mb-0">
                                              James Alien
                                          </p>
                                      </div>
                                  </div>
                                  <div className="col-lg-3 col-md-4 col-sm-6">
                                      <div className="bg-dark rounded text-center py-5 px-3">
                                          <h6 className="text-uppercase text-light mb-3">
                                              6.00pm - 8.00pm
                                          </h6>
                                          <h5 className="text-uppercase text-primary">
                                              Muscle Building
                                          </h5>
                                          <p className="text-uppercase text-secondary mb-0">
                                              Petter John
                                          </p>
                                      </div>
                                  </div>
                                  <div className="col-lg-3 col-md-4 col-sm-6">
                                      <div className="bg-dark rounded text-center py-5 px-3">
                                          <h6 className="text-uppercase text-light mb-3">
                                              8.00pm - 10.00pm
                                          </h6>
                                          <h5 className="text-uppercase text-primary">
                                              Yoga Class
                                          </h5>
                                          <p className="text-uppercase text-secondary mb-0">
                                              Jessy Reo
                                          </p>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div className="tab-pane fade p-0" id="tab-4">
                              <div className="row g-5">
                                  <div className="col-lg-3 col-md-4 col-sm-6">
                                      <div className="bg-dark rounded text-center py-5 px-3">
                                          <h6 className="text-uppercase text-light mb-3">
                                              6.00am - 8.00am
                                          </h6>
                                          <h5 className="text-uppercase text-primary">
                                              Power Lifting
                                          </h5>
                                          <p className="text-uppercase text-secondary mb-0">
                                              John Deo
                                          </p>
                                      </div>
                                  </div>
                                  <div className="col-lg-3 col-md-4 col-sm-6">
                                      <div className="bg-dark rounded text-center py-5 px-3">
                                          <h6 className="text-uppercase text-light mb-3">
                                              8.00am - 10.00am
                                          </h6>
                                          <h5 className="text-uppercase text-primary">
                                              Body Building
                                          </h5>
                                          <p className="text-uppercase text-secondary mb-0">
                                              James Taylor
                                          </p>
                                      </div>
                                  </div>
                                  <div className="col-lg-3 col-md-4 col-sm-6">
                                      <div className="bg-dark rounded text-center py-5 px-3">
                                          <h6 className="text-uppercase text-light mb-3">
                                              10.00am - 12.00pm
                                          </h6>
                                          <h5 className="text-uppercase text-primary">
                                              Cardio Program
                                          </h5>
                                          <p className="text-uppercase text-secondary mb-0">
                                              Jack Sparrow
                                          </p>
                                      </div>
                                  </div>
                                  <div className="col-lg-3 col-md-4 col-sm-6">
                                      <div className="bg-dark rounded text-center py-5 px-3">
                                          <h6 className="text-uppercase text-light mb-3">
                                              12.00pm - 2.00pm
                                          </h6>
                                          <h5 className="text-uppercase text-primary">
                                              Weight Loose
                                          </h5>
                                          <p className="text-uppercase text-secondary mb-0">
                                              Robert Smith
                                          </p>
                                      </div>
                                  </div>
                                  <div className="col-lg-3 col-md-4 col-sm-6">
                                      <div className="bg-dark rounded text-center py-5 px-3">
                                          <h6 className="text-uppercase text-light mb-3">
                                              2.00pm - 4.00pm
                                          </h6>
                                          <h5 className="text-uppercase text-primary">
                                              Fitness Program
                                          </h5>
                                          <p className="text-uppercase text-secondary mb-0">
                                              Adam Phillips
                                          </p>
                                      </div>
                                  </div>
                                  <div className="col-lg-3 col-md-4 col-sm-6">
                                      <div className="bg-dark rounded text-center py-5 px-3">
                                          <h6 className="text-uppercase text-light mb-3">
                                              4.00pm - 6.00pm
                                          </h6>
                                          <h5 className="text-uppercase text-primary">
                                              Crossfit Class
                                          </h5>
                                          <p className="text-uppercase text-secondary mb-0">
                                              James Alien
                                          </p>
                                      </div>
                                  </div>
                                  <div className="col-lg-3 col-md-4 col-sm-6">
                                      <div className="bg-dark rounded text-center py-5 px-3">
                                          <h6 className="text-uppercase text-light mb-3">
                                              6.00pm - 8.00pm
                                          </h6>
                                          <h5 className="text-uppercase text-primary">
                                              Muscle Building
                                          </h5>
                                          <p className="text-uppercase text-secondary mb-0">
                                              Petter John
                                          </p>
                                      </div>
                                  </div>
                                  <div className="col-lg-3 col-md-4 col-sm-6">
                                      <div className="bg-dark rounded text-center py-5 px-3">
                                          <h6 className="text-uppercase text-light mb-3">
                                              8.00pm - 10.00pm
                                          </h6>
                                          <h5 className="text-uppercase text-primary">
                                              Yoga Class
                                          </h5>
                                          <p className="text-uppercase text-secondary mb-0">
                                              Jessy Reo
                                          </p>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div className="tab-pane fade p-0" id="tab-5">
                              <div className="row g-5">
                                  <div className="col-lg-3 col-md-4 col-sm-6">
                                      <div className="bg-dark rounded text-center py-5 px-3">
                                          <h6 className="text-uppercase text-light mb-3">
                                              6.00am - 8.00am
                                          </h6>
                                          <h5 className="text-uppercase text-primary">
                                              Power Lifting
                                          </h5>
                                          <p className="text-uppercase text-secondary mb-0">
                                              John Deo
                                          </p>
                                      </div>
                                  </div>
                                  <div className="col-lg-3 col-md-4 col-sm-6">
                                      <div className="bg-dark rounded text-center py-5 px-3">
                                          <h6 className="text-uppercase text-light mb-3">
                                              8.00am - 10.00am
                                          </h6>
                                          <h5 className="text-uppercase text-primary">
                                              Body Building
                                          </h5>
                                          <p className="text-uppercase text-secondary mb-0">
                                              James Taylor
                                          </p>
                                      </div>
                                  </div>
                                  <div className="col-lg-3 col-md-4 col-sm-6">
                                      <div className="bg-dark rounded text-center py-5 px-3">
                                          <h6 className="text-uppercase text-light mb-3">
                                              10.00am - 12.00pm
                                          </h6>
                                          <h5 className="text-uppercase text-primary">
                                              Cardio Program
                                          </h5>
                                          <p className="text-uppercase text-secondary mb-0">
                                              Jack Sparrow
                                          </p>
                                      </div>
                                  </div>
                                  <div className="col-lg-3 col-md-4 col-sm-6">
                                      <div className="bg-dark rounded text-center py-5 px-3">
                                          <h6 className="text-uppercase text-light mb-3">
                                              12.00pm - 2.00pm
                                          </h6>
                                          <h5 className="text-uppercase text-primary">
                                              Weight Loose
                                          </h5>
                                          <p className="text-uppercase text-secondary mb-0">
                                              Robert Smith
                                          </p>
                                      </div>
                                  </div>
                                  <div className="col-lg-3 col-md-4 col-sm-6">
                                      <div className="bg-dark rounded text-center py-5 px-3">
                                          <h6 className="text-uppercase text-light mb-3">
                                              2.00pm - 4.00pm
                                          </h6>
                                          <h5 className="text-uppercase text-primary">
                                              Fitness Program
                                          </h5>
                                          <p className="text-uppercase text-secondary mb-0">
                                              Adam Phillips
                                          </p>
                                      </div>
                                  </div>
                                  <div className="col-lg-3 col-md-4 col-sm-6">
                                      <div className="bg-dark rounded text-center py-5 px-3">
                                          <h6 className="text-uppercase text-light mb-3">
                                              4.00pm - 6.00pm
                                          </h6>
                                          <h5 className="text-uppercase text-primary">
                                              Crossfit Class
                                          </h5>
                                          <p className="text-uppercase text-secondary mb-0">
                                              James Alien
                                          </p>
                                      </div>
                                  </div>
                                  <div className="col-lg-3 col-md-4 col-sm-6">
                                      <div className="bg-dark rounded text-center py-5 px-3">
                                          <h6 className="text-uppercase text-light mb-3">
                                              6.00pm - 8.00pm
                                          </h6>
                                          <h5 className="text-uppercase text-primary">
                                              Muscle Building
                                          </h5>
                                          <p className="text-uppercase text-secondary mb-0">
                                              Petter John
                                          </p>
                                      </div>
                                  </div>
                                  <div className="col-lg-3 col-md-4 col-sm-6">
                                      <div className="bg-dark rounded text-center py-5 px-3">
                                          <h6 className="text-uppercase text-light mb-3">
                                              8.00pm - 10.00pm
                                          </h6>
                                          <h5 className="text-uppercase text-primary">
                                              Yoga Class
                                          </h5>
                                          <p className="text-uppercase text-secondary mb-0">
                                              Jessy Reo
                                          </p>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div className="tab-pane fade p-0" id="tab-6">
                              <div className="row g-5">
                                  <div className="col-lg-3 col-md-4 col-sm-6">
                                      <div className="bg-dark rounded text-center py-5 px-3">
                                          <h6 className="text-uppercase text-light mb-3">
                                              6.00am - 8.00am
                                          </h6>
                                          <h5 className="text-uppercase text-primary">
                                              Power Lifting
                                          </h5>
                                          <p className="text-uppercase text-secondary mb-0">
                                              John Deo
                                          </p>
                                      </div>
                                  </div>
                                  <div className="col-lg-3 col-md-4 col-sm-6">
                                      <div className="bg-dark rounded text-center py-5 px-3">
                                          <h6 className="text-uppercase text-light mb-3">
                                              8.00am - 10.00am
                                          </h6>
                                          <h5 className="text-uppercase text-primary">
                                              Body Building
                                          </h5>
                                          <p className="text-uppercase text-secondary mb-0">
                                              James Taylor
                                          </p>
                                      </div>
                                  </div>
                                  <div className="col-lg-3 col-md-4 col-sm-6">
                                      <div className="bg-dark rounded text-center py-5 px-3">
                                          <h6 className="text-uppercase text-light mb-3">
                                              10.00am - 12.00pm
                                          </h6>
                                          <h5 className="text-uppercase text-primary">
                                              Cardio Program
                                          </h5>
                                          <p className="text-uppercase text-secondary mb-0">
                                              Jack Sparrow
                                          </p>
                                      </div>
                                  </div>
                                  <div className="col-lg-3 col-md-4 col-sm-6">
                                      <div className="bg-dark rounded text-center py-5 px-3">
                                          <h6 className="text-uppercase text-light mb-3">
                                              12.00pm - 2.00pm
                                          </h6>
                                          <h5 className="text-uppercase text-primary">
                                              Weight Loose
                                          </h5>
                                          <p className="text-uppercase text-secondary mb-0">
                                              Robert Smith
                                          </p>
                                      </div>
                                  </div>
                                  <div className="col-lg-3 col-md-4 col-sm-6">
                                      <div className="bg-dark rounded text-center py-5 px-3">
                                          <h6 className="text-uppercase text-light mb-3">
                                              2.00pm - 4.00pm
                                          </h6>
                                          <h5 className="text-uppercase text-primary">
                                              Fitness Program
                                          </h5>
                                          <p className="text-uppercase text-secondary mb-0">
                                              Adam Phillips
                                          </p>
                                      </div>
                                  </div>
                                  <div className="col-lg-3 col-md-4 col-sm-6">
                                      <div className="bg-dark rounded text-center py-5 px-3">
                                          <h6 className="text-uppercase text-light mb-3">
                                              4.00pm - 6.00pm
                                          </h6>
                                          <h5 className="text-uppercase text-primary">
                                              Crossfit Class
                                          </h5>
                                          <p className="text-uppercase text-secondary mb-0">
                                              James Alien
                                          </p>
                                      </div>
                                  </div>
                                  <div className="col-lg-3 col-md-4 col-sm-6">
                                      <div className="bg-dark rounded text-center py-5 px-3">
                                          <h6 className="text-uppercase text-light mb-3">
                                              6.00pm - 8.00pm
                                          </h6>
                                          <h5 className="text-uppercase text-primary">
                                              Muscle Building
                                          </h5>
                                          <p className="text-uppercase text-secondary mb-0">
                                              Petter John
                                          </p>
                                      </div>
                                  </div>
                                  <div className="col-lg-3 col-md-4 col-sm-6">
                                      <div className="bg-dark rounded text-center py-5 px-3">
                                          <h6 className="text-uppercase text-light mb-3">
                                              8.00pm - 10.00pm
                                          </h6>
                                          <h5 className="text-uppercase text-primary">
                                              Yoga Class
                                          </h5>
                                          <p className="text-uppercase text-secondary mb-0">
                                              Jessy Reo
                                          </p>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div className="tab-pane fade p-0" id="tab-7">
                              <div className="row g-5">
                                  <div className="col-lg-3 col-md-4 col-sm-6">
                                      <div className="bg-dark rounded text-center py-5 px-3">
                                          <h6 className="text-uppercase text-light mb-3">
                                              6.00am - 8.00am
                                          </h6>
                                          <h5 className="text-uppercase text-primary">
                                              Power Lifting
                                          </h5>
                                          <p className="text-uppercase text-secondary mb-0">
                                              John Deo
                                          </p>
                                      </div>
                                  </div>
                                  <div className="col-lg-3 col-md-4 col-sm-6">
                                      <div className="bg-dark rounded text-center py-5 px-3">
                                          <h6 className="text-uppercase text-light mb-3">
                                              8.00am - 10.00am
                                          </h6>
                                          <h5 className="text-uppercase text-primary">
                                              Body Building
                                          </h5>
                                          <p className="text-uppercase text-secondary mb-0">
                                              James Taylor
                                          </p>
                                      </div>
                                  </div>
                                  <div className="col-lg-3 col-md-4 col-sm-6">
                                      <div className="bg-dark rounded text-center py-5 px-3">
                                          <h6 className="text-uppercase text-light mb-3">
                                              10.00am - 12.00pm
                                          </h6>
                                          <h5 className="text-uppercase text-primary">
                                              Cardio Program
                                          </h5>
                                          <p className="text-uppercase text-secondary mb-0">
                                              Jack Sparrow
                                          </p>
                                      </div>
                                  </div>
                                  <div className="col-lg-3 col-md-4 col-sm-6">
                                      <div className="bg-dark rounded text-center py-5 px-3">
                                          <h6 className="text-uppercase text-light mb-3">
                                              12.00pm - 2.00pm
                                          </h6>
                                          <h5 className="text-uppercase text-primary">
                                              Weight Loose
                                          </h5>
                                          <p className="text-uppercase text-secondary mb-0">
                                              Robert Smith
                                          </p>
                                      </div>
                                  </div>
                                  <div className="col-lg-3 col-md-4 col-sm-6">
                                      <div className="bg-dark rounded text-center py-5 px-3">
                                          <h6 className="text-uppercase text-light mb-3">
                                              2.00pm - 4.00pm
                                          </h6>
                                          <h5 className="text-uppercase text-primary">
                                              Fitness Program
                                          </h5>
                                          <p className="text-uppercase text-secondary mb-0">
                                              Adam Phillips
                                          </p>
                                      </div>
                                  </div>
                                  <div className="col-lg-3 col-md-4 col-sm-6">
                                      <div className="bg-dark rounded text-center py-5 px-3">
                                          <h6 className="text-uppercase text-light mb-3">
                                              4.00pm - 6.00pm
                                          </h6>
                                          <h5 className="text-uppercase text-primary">
                                              Crossfit Class
                                          </h5>
                                          <p className="text-uppercase text-secondary mb-0">
                                              James Alien
                                          </p>
                                      </div>
                                  </div>
                                  <div className="col-lg-3 col-md-4 col-sm-6">
                                      <div className="bg-dark rounded text-center py-5 px-3">
                                          <h6 className="text-uppercase text-light mb-3">
                                              6.00pm - 8.00pm
                                          </h6>
                                          <h5 className="text-uppercase text-primary">
                                              Muscle Building
                                          </h5>
                                          <p className="text-uppercase text-secondary mb-0">
                                              Petter John
                                          </p>
                                      </div>
                                  </div>
                                  <div className="col-lg-3 col-md-4 col-sm-6">
                                      <div className="bg-dark rounded text-center py-5 px-3">
                                          <h6 className="text-uppercase text-light mb-3">
                                              8.00pm - 10.00pm
                                          </h6>
                                          <h5 className="text-uppercase text-primary">
                                              Yoga Class
                                          </h5>
                                          <p className="text-uppercase text-secondary mb-0">
                                              Jessy Reo
                                          </p>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="container-fluid bg-dark facts p-5 my-5">
                  <div className="row gx-5 gy-4 py-5">
                      <div className="col-lg-3 col-md-6">
                          <div className="d-flex">
                              <div
                                  className="bg-primary rounded-circle d-flex align-items-center justify-content-center mb-3"
                                  style={{
                                      height: "60px",
                                      width: "60px",
                                  }}
                              >
                                  <i className="fa fa-star fs-4 text-white" />
                              </div>
                              <div className="ps-4">
                                  <h5 className="text-secondary text-uppercase">
                                      Experience
                                  </h5>
                                  <h1
                                      className="display-5 text-white mb-0"
                                      data-toggle="counter-up"
                                  >
                                      12345
                                  </h1>
                              </div>
                          </div>
                      </div>
                      <div className="col-lg-3 col-md-6">
                          <div className="d-flex">
                              <div
                                  className="bg-primary rounded-circle d-flex align-items-center justify-content-center mb-3"
                                  style={{
                                      height: "60px",
                                      width: "60px",
                                  }}
                              >
                                  <i className="fa fa-users fs-4 text-white" />
                              </div>
                              <div className="ps-4">
                                  <h5 className="text-secondary text-uppercase">
                                      Our Trainers
                                  </h5>
                                  <h1
                                      className="display-5 text-white mb-0"
                                      data-toggle="counter-up"
                                  >
                                      12345
                                  </h1>
                              </div>
                          </div>
                      </div>
                      <div className="col-lg-3 col-md-6">
                          <div className="d-flex">
                              <div
                                  className="bg-primary rounded-circle d-flex align-items-center justify-content-center mb-3"
                                  style={{
                                      height: "60px",
                                      width: "60px",
                                  }}
                              >
                                  <i className="fa fa-check fs-4 text-white" />
                              </div>
                              <div className="ps-4">
                                  <h5 className="text-secondary text-uppercase">
                                      Complete Project
                                  </h5>
                                  <h1
                                      className="display-5 text-white mb-0"
                                      data-toggle="counter-up"
                                  >
                                      12345
                                  </h1>
                              </div>
                          </div>
                      </div>
                      <div className="col-lg-3 col-md-6">
                          <div className="d-flex">
                              <div
                                  className="bg-primary rounded-circle d-flex align-items-center justify-content-center mb-3"
                                  style={{
                                      height: "60px",
                                      width: "60px",
                                  }}
                              >
                                  <i className="fa fa-mug-hot fs-4 text-white" />
                              </div>
                              <div className="ps-4">
                                  <h5 className="text-secondary text-uppercase">
                                      Happy Clients
                                  </h5>
                                  <h1
                                      className="display-5 text-white mb-0"
                                      data-toggle="counter-up"
                                  >
                                      12345
                                  </h1>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="container-fluid p-5">
                  <div className="mb-5 text-center">
                      <h5 className="text-primary text-uppercase">The Team</h5>
                      <h1 className="display-3 text-uppercase mb-0">
                          Expert Trainers
                      </h1>
                  </div>
                  <div className="row g-5">
                      <div className="col-lg-4 col-md-6">
                          <div className="team-item position-relative">
                              <div className="position-relative overflow-hidden rounded">
                                  <img
                                      alt=""
                                      className="img-fluid w-100"
                                      src="src/public/img/team-1.jpg"
                                  />
                                  <div className="team-overlay">
                                      <div className="d-flex align-items-center justify-content-start">
                                          <a
                                              className="btn btn-light btn-square rounded-circle mx-1"
                                              href="#"
                                          >
                                              <i className="fab fa-twitter" />
                                          </a>
                                          <a
                                              className="btn btn-light btn-square rounded-circle mx-1"
                                              href="#"
                                          >
                                              <i className="fab fa-facebook-f" />
                                          </a>
                                          <a
                                              className="btn btn-light btn-square rounded-circle mx-1"
                                              href="#"
                                          >
                                              <i className="fab fa-linkedin-in" />
                                          </a>
                                      </div>
                                  </div>
                              </div>
                              <div
                                  className="position-absolute start-0 bottom-0 w-100 rounded-bottom text-center p-4"
                                  style={{
                                      background: "rgba(34, 36, 41, .9)",
                                  }}
                              >
                                  <h5 className="text-uppercase text-light">
                                      John Deo
                                  </h5>
                                  <p className="text-uppercase text-secondary m-0">
                                      Trainer
                                  </p>
                              </div>
                          </div>
                      </div>
                      <div className="col-lg-4 col-md-6">
                          <div className="team-item position-relative">
                              <div className="position-relative overflow-hidden rounded">
                                  <img
                                      alt=""
                                      className="img-fluid w-100"
                                      src="src/public/img/team-2.jpg"
                                  />
                                  <div className="team-overlay">
                                      <div className="d-flex align-items-center justify-content-start">
                                          <a
                                              className="btn btn-light btn-square rounded-circle mx-1"
                                              href="#"
                                          >
                                              <i className="fab fa-twitter" />
                                          </a>
                                          <a
                                              className="btn btn-light btn-square rounded-circle mx-1"
                                              href="#"
                                          >
                                              <i className="fab fa-facebook-f" />
                                          </a>
                                          <a
                                              className="btn btn-light btn-square rounded-circle mx-1"
                                              href="#"
                                          >
                                              <i className="fab fa-linkedin-in" />
                                          </a>
                                      </div>
                                  </div>
                              </div>
                              <div
                                  className="position-absolute start-0 bottom-0 w-100 rounded-bottom text-center p-4"
                                  style={{
                                      background: "rgba(34, 36, 41, .9)",
                                  }}
                              >
                                  <h5 className="text-uppercase text-light">
                                      James Taylor
                                  </h5>
                                  <p className="text-uppercase text-secondary m-0">
                                      Trainer
                                  </p>
                              </div>
                          </div>
                      </div>
                      <div className="col-lg-4 col-md-6">
                          <div className="team-item position-relative">
                              <div className="position-relative overflow-hidden rounded">
                                  <img
                                      alt=""
                                      className="img-fluid w-100"
                                      src="src/public/img/team-3.jpg"
                                  />
                                  <div className="team-overlay">
                                      <div className="d-flex align-items-center justify-content-start">
                                          <a
                                              className="btn btn-light btn-square rounded-circle mx-1"
                                              href="#"
                                          >
                                              <i className="fab fa-twitter" />
                                          </a>
                                          <a
                                              className="btn btn-light btn-square rounded-circle mx-1"
                                              href="#"
                                          >
                                              <i className="fab fa-facebook-f" />
                                          </a>
                                          <a
                                              className="btn btn-light btn-square rounded-circle mx-1"
                                              href="#"
                                          >
                                              <i className="fab fa-linkedin-in" />
                                          </a>
                                      </div>
                                  </div>
                              </div>
                              <div
                                  className="position-absolute start-0 bottom-0 w-100 rounded-bottom text-center p-4"
                                  style={{
                                      background: "rgba(34, 36, 41, .9)",
                                  }}
                              >
                                  <h5 className="text-uppercase text-light">
                                      Adam Phillips
                                  </h5>
                                  <p className="text-uppercase text-secondary m-0">
                                      Trainer
                                  </p>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="container-fluid p-0 my-5">
                  <div className="row g-0">
                      <div
                          className="col-lg-6"
                          style={{
                              minHeight: "500px",
                          }}
                      >
                          <div className="position-relative h-100">
                              <img
                                  className="position-absolute w-100 h-100"
                                  src="src/public/img/testimonial.jpg"
                                  style={{
                                      objectFit: "cover",
                                  }}
                              />
                          </div>
                      </div>
                      <div className="col-lg-6 bg-dark p-5">
                          <div className="mb-5">
                              <h5 className="text-primary text-uppercase">
                                  Testimonial
                              </h5>
                              <h1 className="display-3 text-uppercase text-light mb-0">
                                  Our Client Say
                              </h1>
                          </div>
                          <div className="owl-carousel testimonial-carousel">
                              <div className="testimonial-item">
                                  <p className="fs-4 fw-normal text-light mb-4">
                                      <i className="fa fa-quote-left text-primary me-3" />
                                      Dolores sed duo clita tempor justo dolor
                                      et stet lorem kasd labore dolore lorem
                                      ipsum. At lorem lorem magna ut et, nonumy
                                      et labore et tempor diam tempor erat dolor
                                      rebum sit ipsum.
                                  </p>
                                  <div className="d-flex align-items-center">
                                      <img
                                          alt=""
                                          className="img-fluid rounded-circle"
                                          src="src/public/img/testimonial-1.jpg"
                                      />
                                      <div className="ps-4">
                                          <h5 className="text-uppercase text-light">
                                              Client Name
                                          </h5>
                                          <span className="text-uppercase text-secondary">
                                              Profession
                                          </span>
                                      </div>
                                  </div>
                              </div>
                              <div className="testimonial-item">
                                  <p className="fs-4 fw-normal text-light mb-4">
                                      <i className="fa fa-quote-left text-primary me-3" />
                                      Dolores sed duo clita tempor justo dolor
                                      et stet lorem kasd labore dolore lorem
                                      ipsum. At lorem lorem magna ut et, nonumy
                                      et labore et tempor diam tempor erat dolor
                                      rebum sit ipsum.
                                  </p>
                                  <div className="d-flex align-items-center">
                                      <img
                                          alt=""
                                          className="img-fluid rounded-circle"
                                          src="src/public/img/testimonial-2.jpg"
                                      />
                                      <div className="ps-4">
                                          <h5 className="text-uppercase text-light">
                                              Client Name
                                          </h5>
                                          <span className="text-uppercase text-secondary">
                                              Profession
                                          </span>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="container-fluid p-5">
                  <div className="mb-5 text-center">
                      <h5 className="text-primary text-uppercase">Our Blog</h5>
                      <h1 className="display-3 text-uppercase mb-0">
                          Latest Blog Post
                      </h1>
                  </div>
                  <div className="row g-5">
                      <div className="col-lg-4">
                          <div className="blog-item">
                              <div className="position-relative overflow-hidden rounded-top">
                                  <img
                                      alt=""
                                      className="img-fluid"
                                      src="src/public/img/blog-1.jpg"
                                  />
                              </div>
                              <div className="bg-dark d-flex align-items-center rounded-bottom p-4">
                                  <div className="flex-shrink-0 text-center text-secondary border-end border-secondary pe-3 me-3">
                                      <span>01</span>
                                      <h6 className="text-light text-uppercase mb-0">
                                          January
                                      </h6>
                                      <span>2045</span>
                                  </div>
                                  <a
                                      className="h5 text-uppercase text-light"
                                      href=""
                                  >
                                      Sed amet tempor amet sit kasd sea lorem
                                  </a>
                              </div>
                          </div>
                      </div>
                      <div className="col-lg-4">
                          <div className="blog-item">
                              <div className="position-relative overflow-hidden rounded-top">
                                  <img
                                      alt=""
                                      className="img-fluid"
                                      src="src/public/img/blog-2.jpg"
                                  />
                              </div>
                              <div className="bg-dark d-flex align-items-center rounded-bottom p-4">
                                  <div className="flex-shrink-0 text-center text-secondary border-end border-secondary pe-3 me-3">
                                      <span>01</span>
                                      <h6 className="text-light text-uppercase mb-0">
                                          January
                                      </h6>
                                      <span>2045</span>
                                  </div>
                                  <a
                                      className="h5 text-uppercase text-light"
                                      href=""
                                  >
                                      Sed amet tempor amet sit kasd sea lorem
                                  </a>
                              </div>
                          </div>
                      </div>
                      <div className="col-lg-4">
                          <div className="blog-item">
                              <div className="position-relative overflow-hidden rounded-top">
                                  <img
                                      alt=""
                                      className="img-fluid"
                                      src="src/public/img/blog-3.jpg"
                                  />
                              </div>
                              <div className="bg-dark d-flex align-items-center rounded-bottom p-4">
                                  <div className="flex-shrink-0 text-center text-secondary border-end border-secondary pe-3 me-3">
                                      <span>01</span>
                                      <h6 className="text-light text-uppercase mb-0">
                                          January
                                      </h6>
                                      <span>2045</span>
                                  </div>
                                  <a
                                      className="h5 text-uppercase text-light"
                                      href=""
                                  >
                                      Sed amet tempor amet sit kasd sea lorem
                                  </a>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="container-fluid bg-dark text-secondary px-5 mt-5">
                  <div className="row gx-5">
                      <div className="col-lg-8 col-md-6">
                          <div className="row gx-5">
                              <div className="col-lg-4 col-md-12 pt-5 mb-5">
                                  <h4 className="text-uppercase text-light mb-4">
                                      Get In Touch
                                  </h4>
                                  <div className="d-flex mb-2">
                                      <i className="bi bi-geo-alt text-primary me-2" />
                                      <p className="mb-0">
                                          123 Street, New York, USA
                                      </p>
                                  </div>
                                  <div className="d-flex mb-2">
                                      <i className="bi bi-envelope-open text-primary me-2" />
                                      <p className="mb-0">info@example.com</p>
                                  </div>
                                  <div className="d-flex mb-2">
                                      <i className="bi bi-telephone text-primary me-2" />
                                      <p className="mb-0">+012 345 67890</p>
                                  </div>
                                  <div className="d-flex mt-4">
                                      <a
                                          className="btn btn-primary btn-square rounded-circle me-2"
                                          href="#"
                                      >
                                          <i className="fab fa-twitter" />
                                      </a>
                                      <a
                                          className="btn btn-primary btn-square rounded-circle me-2"
                                          href="#"
                                      >
                                          <i className="fab fa-facebook-f" />
                                      </a>
                                      <a
                                          className="btn btn-primary btn-square rounded-circle me-2"
                                          href="#"
                                      >
                                          <i className="fab fa-linkedin-in" />
                                      </a>
                                      <a
                                          className="btn btn-primary btn-square rounded-circle"
                                          href="#"
                                      >
                                          <i className="fab fa-instagram" />
                                      </a>
                                  </div>
                              </div>
                              <div className="col-lg-4 col-md-12 pt-0 pt-lg-5 mb-5">
                                  <h4 className="text-uppercase text-light mb-4">
                                      Quick Links
                                  </h4>
                                  <div className="d-flex flex-column justify-content-start">
                                      <a
                                          className="text-secondary mb-2"
                                          href="#"
                                      >
                                          <i className="bi bi-arrow-right text-primary me-2" />
                                          Home
                                      </a>
                                      <a
                                          className="text-secondary mb-2"
                                          href="#"
                                      >
                                          <i className="bi bi-arrow-right text-primary me-2" />
                                          About Us
                                      </a>
                                      <a
                                          className="text-secondary mb-2"
                                          href="#"
                                      >
                                          <i className="bi bi-arrow-right text-primary me-2" />
                                          Class Schedule
                                      </a>
                                      <a
                                          className="text-secondary mb-2"
                                          href="#"
                                      >
                                          <i className="bi bi-arrow-right text-primary me-2" />
                                          Our Trainers
                                      </a>
                                      <a
                                          className="text-secondary mb-2"
                                          href="#"
                                      >
                                          <i className="bi bi-arrow-right text-primary me-2" />
                                          Latest Blog
                                      </a>
                                      <a className="text-secondary" href="#">
                                          <i className="bi bi-arrow-right text-primary me-2" />
                                          Contact Us
                                      </a>
                                  </div>
                              </div>
                              <div className="col-lg-4 col-md-12 pt-0 pt-lg-5 mb-5">
                                  <h4 className="text-uppercase text-light mb-4">
                                      Popular Links
                                  </h4>
                                  <div className="d-flex flex-column justify-content-start">
                                      <a
                                          className="text-secondary mb-2"
                                          href="#"
                                      >
                                          <i className="bi bi-arrow-right text-primary me-2" />
                                          Home
                                      </a>
                                      <a
                                          className="text-secondary mb-2"
                                          href="#"
                                      >
                                          <i className="bi bi-arrow-right text-primary me-2" />
                                          About Us
                                      </a>
                                      <a
                                          className="text-secondary mb-2"
                                          href="#"
                                      >
                                          <i className="bi bi-arrow-right text-primary me-2" />
                                          Class Schedule
                                      </a>
                                      <a
                                          className="text-secondary mb-2"
                                          href="#"
                                      >
                                          <i className="bi bi-arrow-right text-primary me-2" />
                                          Our Trainers
                                      </a>
                                      <a
                                          className="text-secondary mb-2"
                                          href="#"
                                      >
                                          <i className="bi bi-arrow-right text-primary me-2" />
                                          Latest Blog
                                      </a>
                                      <a className="text-secondary" href="#">
                                          <i className="bi bi-arrow-right text-primary me-2" />
                                          Contact Us
                                      </a>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="col-lg-4 col-md-6">
                          <div className="d-flex flex-column align-items-center justify-content-center text-center h-100 bg-primary p-5">
                              <h4 className="text-uppercase text-white mb-4">
                                  Newsletter
                              </h4>
                              <h6 className="text-uppercase text-white">
                                  Subscribe Our Newsletter
                              </h6>
                              <p className="text-light">
                                  Amet justo diam dolor rebum lorem sit stet sea
                                  justo kasd
                              </p>
                              <form action="">
                                  <div className="input-group">
                                      <input
                                          className="form-control border-white p-3"
                                          placeholder="Your Email"
                                          type="text"
                                      />
                                      <button className="btn btn-dark">
                                          Sign Up
                                      </button>
                                  </div>
                              </form>
                          </div>
                      </div>
                  </div>
              </div>
              <div
                  className="container-fluid py-4 py-lg-0 px-5"
                  style={{
                      background: "#111111",
                  }}
              >
                  <div className="row gx-5">
                      <div className="col-lg-8">
                          <div className="py-lg-4 text-center">
                              <p className="text-secondary mb-0">
                                  ©{" "}
                                  <a className="text-light fw-bold" href="#">
                                      Your Site Name
                                  </a>
                                  . All Rights Reserved.
                              </p>
                          </div>
                      </div>
                      <div className="col-lg-4">
                          <div className="py-lg-4 text-center credit">
                              <p className="text-light mb-0">
                                  Designed by{" "}
                                  <a
                                      className="text-light fw-bold"
                                      href="https://htmlcodex.com"
                                  >
                                      HTML Codex
                                  </a>
                              </p>
                          </div>
                      </div>
                  </div>
              </div>
              <a className="btn btn-dark py-3 fs-4 back-to-top" href="#">
                  <i className="bi bi-arrow-up" />
              </a>
          </div>
      </>
  );
}

export default App;
