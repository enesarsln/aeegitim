import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import TopHeader from "./TopHeader";

const Navbar = () => {
  const [currentPath, setCurrentPath] = useState("");
  const router = useRouter();

  useEffect(() => {
    setCurrentPath(router.asPath);
  }, [router]);

  const [menu, setMenu] = React.useState(true);

  const toggleNavbar = () => {
    setMenu(!menu);
  };

  React.useEffect(() => {
    let elementId = document.getElementById("navbar");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId.classList.add("is-sticky");
      } else {
        elementId.classList.remove("is-sticky");
      }
    });
  });

  const classOne = menu
    ? "collapse navbar-collapse"
    : "collapse navbar-collapse show";
  const classTwo = menu
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right";

  return (
    <>
      <header className="header-area fixed-top">
        <TopHeader />

        <div className="nav-area">
          <div id="navbar" className="navbar-area">
            <div className="main-nav">
              <nav className="navbar navbar-expand-md navbar-light">
                <div className="container">
                  <Link href="/" className="navbar-brand">
                    <img src="/img/ae-text.png" alt="logo" />
                  </Link>

                  <button
                    onClick={toggleNavbar}
                    className={classTwo}
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="icon-bar top-bar"></span>
                    <span className="icon-bar middle-bar"></span>
                    <span className="icon-bar bottom-bar"></span>
                  </button>

                  <div className={classOne} id="navbarSupportedContent">
                    <ul className="navbar-nav m-auto">
                      <li className="nav-item">
                        <Link
                          href="/"
                          className={`nav-link ${currentPath == "//" && "active"
                            }`}
                        >
                          Anasayfa
                        </Link>
                      </li>



                      <li className="nav-item">
                        <Link
                          href="/"
                          onClick={(e) => e.preventDefault()}
                          className="nav-link"
                        >
                          Kurslar <i className="bx bx-plus"></i>
                        </Link>

                        <ul className="dropdown-menu">
                          <li className="nav-item">
                            <Link
                              href="/course-1/"
                              className={`nav-link ${currentPath == "/course-1/" && "active"
                                }`}
                            >
                              Porselen Laminate Veneer
                            </Link>
                          </li>

                          <li className="nav-item">
                            <Link
                              href="/course-2/"
                              className={`nav-link ${currentPath == "/course-2/" && "active"
                                }`}
                            >
                              İmplant Destekli Protezler
                            </Link>
                          </li>

                          <li className="nav-item">
                            <Link
                              href="/course-3/"
                              className={`nav-link ${currentPath == "/course-3/" && "active"
                                }`}
                            >
                              Temporomandibular Eklem Rahatsızlıkları, Bruksizm, Splint ve Horlama Apareyi Yapımı
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link
                              href="/course-4/"
                              className={`nav-link ${currentPath == "/course-4/" && "active"
                                }`}
                            >
                              Dental Foto
                            </Link>
                          </li>
                        </ul>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/about/"
                          className={`nav-link ${currentPath == "/about/" && "active"
                            }`}
                        >
                          Özgeçmiş
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/office/"
                          className={`nav-link ${currentPath == "//" && "active"
                            }`}
                        >
                          Ofis Tanıtım
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/blog/"
                          className={`nav-link ${currentPath == "/blog/" && "active"
                            }`}
                        >
                          Blog
                        </Link>
                      </li>


                      <li className="nav-item">
                        <Link
                          href="/contact/"
                          className={`nav-link ${currentPath == "/contact/" && "active"
                            }`}
                        >
                          İletişim
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
