import "./Footer.css";

const Footer = () => {
  return (
    <div className="mx-8 mb-16 text-center">
      <h1 className="text-center" id="brandbottom">
        PALETTE
      </h1>
      <footer
        id="footerbottom"
        className="flex flex-col items-center justify-between px-6 py-4 bg-white dark:bg-gray-800 sm:flex-row"
      >
        <a href="#" className="text-sm font-bold text-black">
          4.3 - 5 <span className="mx-2">Trustpilot</span> WE ARE ON TRUSTPILOT
        </a>

        <p className="py-2 text-gray-800 dark:text-white sm:py-0 flex flex-row">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-brand-paypal"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#000000"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M10 13l2.5 0c2.5 0 5 -2.5 5 -5c0 -3 -1.9 -5 -5 -5h-5.5c-.5 0 -1 .5 -1 1l-2 14c0 .5 .5 1 1 1h2.8l1.2 -5c.1 -.6 .4 -1 1 -1zm7.5 -5.8c1.7 1 2.5 2.8 2.5 4.8c0 2.5 -2.5 4.5 -5 4.5h-2.6l-.6 3.6a1 1 0 0 1 -1 .8l-2.7 0a0.5 .5 0 0 1 -.5 -.6l.2 -1.4" />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-brand-mastercard"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#000000"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <circle cx="14" cy="12" r="3" />
            <path d="M12 9.765a3 3 0 1 0 0 4.47" />
            <rect x="3" y="5" width="18" height="14" rx="2" />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-brand-slack"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#000000"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M12 12v-6a2 2 0 0 1 4 0v6m0 -2a2 2 0 1 1 2 2h-6" />
            <path d="M12 12h6a2 2 0 0 1 0 4h-6m2 0a2 2 0 1 1 -2 2v-6" />
            <path d="M12 12v6a2 2 0 0 1 -4 0v-6m0 2a2 2 0 1 1 -2 -2h6" />
            <path d="M12 12h-6a2 2 0 0 1 0 -4h6m-2 0a2 2 0 1 1 2 -2v6" />
          </svg>
        </p>

        <div className="flex -mx-2">
          <a
            href="#"
            className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 text-sm"
            aria-label="Reddit"
          >
            TERMS OF SERVICE
          </a>

          <a
            href="#"
            className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 text-sm"
            aria-label="Facebook"
          >
            PRIVACY POLICY
          </a>

          <a
            href="#"
            className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 text-sm"
            aria-label="Github"
          >
            LANGUAGE: ENGLISH
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
