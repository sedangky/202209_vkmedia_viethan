import React from "react";

export default function Navbar({}) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);

  const Nav = [
    {
      name: "giới thiệu",
      linkto: "/intro",
    },
    {
      name: "sản phẩm",
      linkto: "/products",
    },
/*     {
      name: "hỗ trợ kỹ thuật",
      linkto: "/support",
    }, */
    {
      name: "video",
      linkto: "/video",
    },
    {
      name: "tin tức",
      linkto: "/blog",
    },
    {
      name: "liên hệ",
      linkto: "/contact",
    },
  ];

  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between bg-blue-800">
        <div className="w-full flex flex-wrap items-center justify-between">
          <div className="relative flex justify-between w-full lg:w-auto lg:static lg:block lg:justify-start">
            <div className="bg-red-600 p-4 lg:pr-8">
              <h1>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6 inline text-white -mt-3 mr-2"
                  >
                    <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                    <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
                  </svg>
                </span>
                <a
                  href="/"
                  className="whitespace-nowrap uppercase font-bold text-white text-lg sm:text-2xl"
                >
                  xốp việt hàn
                </a>
              </h1>
              <p className="text-white text-sm md:text-base hidden md:block">
                xốp hơi, xốp PE, tấm cách nhiệt
              </p>
            </div>
            <button
              className="text-white cursor-pointer text-xl pr-4 md:pr-8 lg:hidden outline-none focus:outline-none flex items-center justify-center"
              type="button" aria-label="Justify" aria-hidden="true" tabIndex="-1"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M3 6a3 3 0 013-3h2.25a3 3 0 013 3v2.25a3 3 0 01-3 3H6a3 3 0 01-3-3V6zm9.75 0a3 3 0 013-3H18a3 3 0 013 3v2.25a3 3 0 01-3 3h-2.25a3 3 0 01-3-3V6zM3 15.75a3 3 0 013-3h2.25a3 3 0 013 3V18a3 3 0 01-3 3H6a3 3 0 01-3-3v-2.25zm9.75 0a3 3 0 013-3H18a3 3 0 013 3V18a3 3 0 01-3 3h-2.25a3 3 0 01-3-3v-2.25z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>

          <div
            className={
              "lg:flex flex-grow flex-col" + (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul
              className="
                flex flex-col sm:flex-row items-center justify-center 
                list-none 
                lg:ml-auto p-4 lg:p-0
            "
            >
              {Nav.map((item, index) => (
                <li
                  key={index}
                  className="
                    nav-item 
                    border border-white
                    lg:border-0
                    lg:border-r
                    w-full sm:w-auto mb-1
                    lg:last-of-type:border-0
                "
                >
                  <a
                    className="
                    px-4 py-2 flex items-center 
                    text-sm uppercase font-bold text-white 
                    hover:opacity-75
                "
                    href={item.linkto}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
            <div className="px-4 pb-4 lg:pb-0 uppercase font-bold text-yellow-300 text-center lg:text-right">
              hotline:
              <br className="sm:hidden" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4 -mt-1 mx-1 inline"
              >
                <path
                  fillRule="evenodd"
                  d="M19.5 9.75a.75.75 0 01-.75.75h-4.5a.75.75 0 01-.75-.75v-4.5a.75.75 0 011.5 0v2.69l4.72-4.72a.75.75 0 111.06 1.06L16.06 9h2.69a.75.75 0 01.75.75z"
                  clipRule="evenodd"
                />
                <path
                  fillRule="evenodd"
                  d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                  clipRule="evenodd"
                />
              </svg>
              0865 061 388 -
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4 -mt-1 mx-1 inline"
              >
                <path
                  fillRule="evenodd"
                  d="M19.5 9.75a.75.75 0 01-.75.75h-4.5a.75.75 0 01-.75-.75v-4.5a.75.75 0 011.5 0v2.69l4.72-4.72a.75.75 0 111.06 1.06L16.06 9h2.69a.75.75 0 01.75.75z"
                  clipRule="evenodd"
                />
                <path
                  fillRule="evenodd"
                  d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                  clipRule="evenodd"
                />
              </svg>
              0988 837 911
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
