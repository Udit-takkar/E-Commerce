import { useState } from 'react';
import {
  InformationCircleIcon,
  GiftIcon,
  StarIcon,
  BriefcaseIcon,
} from '@heroicons/react/outline';

const footerLinks = [
  {
    title: 'about',
    links: [
      {
        name: 'Contact Us',
        redirect: '/',
      },
      {
        name: 'About Us',
        redirect: '/',
      },
      {
        name: 'Careers',
        redirect: '/',
      },
      {
        name: 'Artify Stories',
        redirect: '/',
      },
      {
        name: 'Press',
        redirect: '/',
      },
      {
        name: 'Artify Wholesale',
        redirect: '/',
      },
      {
        name: 'Corporate Information',
        redirect: '/',
      },
    ],
  },
  {
    title: 'help',
    links: [
      {
        name: 'Payments',
        redirect: '/',
      },
      {
        name: 'Shipping',
        redirect: '/',
      },
      {
        name: 'Cancellation & Returns',
        redirect: '/',
      },
      {
        name: 'FAQ',
        redirect: '/',
      },
    ],
  },
  {
    title: 'policy',
    links: [
      {
        name: 'Return Policy',
        redirect: '/',
      },
      {
        name: 'Terms Of Use',
        redirect: '/',
      },
      {
        name: 'Security',
        redirect: '/',
      },
      {
        name: 'Privacy',
        redirect: '/',
      },
      {
        name: 'Sitemap',
        redirect: '/',
      },
      {
        name: 'EPR Compliance',
        redirect: '/',
      },
    ],
  },
  {
    title: 'social',
    links: [
      {
        name: 'Facebook',
        redirect: '/',
      },
      {
        name: 'Twitter',
        redirect: '/',
      },
      {
        name: 'YouTube',
        redirect: '/',
      },
    ],
  },
];

function Footer() {
  const [adminRoute, setAdminRoute] = useState(false);

  //   useEffect(() => {
  //     setAdminRoute(location.pathname.split('/', 2).includes('admin'));
  //   }, [location]);

  return (
    !adminRoute && (
      <>
        <footer className="mt-20 w-full py-1 sm:py-4 px-4 sm:px-12 bg-primary-darkBlue text-white text-xs border-b border-gray-600 flex flex-col sm:flex-row overflow-hidden">
          <div className="w-full sm:w-7/12 flex flex-col sm:flex-row">
            {footerLinks.map((el, i) => (
              <div
                className="w-full sm:w-1/5 flex flex-col gap-2 my-3 sm:my-6 ml-5"
                key={i}
              >
                <h2 className="text-primary-grey mb-2 uppercase">{el.title}</h2>
                {el.links.map((item, i) => (
                  <a
                    href={item.redirect}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:underline"
                    key={i}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            ))}
          </div>

          <div className="border-gray-600 h-36 w-1 border-l mr-5 mt-6 hidden sm:block" />
          <div className="w-full sm:w-5/12 my-6 mx-5 sm:mx-0 flex flex-col sm:flex-row gap-2 sm:gap-0 justify-between">
            <div className="w-full sm:w-1/2">
              <h2 className="text-primary-grey">Mail Us:</h2>
              <p className="mt-2 leading-5">
                Artify Internet Private Limited,
                <br />
                Buildings Alyssa, Begonia &<br />
                Clove Embassy Tech Village,
                <br />
                Outer Ring Road, Devarabeesanahalli Village,
                <br />
                Bengaluru, 560103,
                <br />
                Karnataka, India
              </p>
            </div>

            <div className="w-full sm:w-1/2">
              <h2 className="text-primary-grey">Registered Office Address:</h2>
              <p className="mt-2 leading-5">
                Artify Internet Private Limited,
                <br />
                Plot No 1 Rohini,
                <br />
                CH Bhim Singh Nambardar Marg, <br /> Sector 22, PSP Area, Delhi,
                110086
                <br />
                Telephone:
                <a className="text-primary-blue" href="tel:18002029898">
                  09090909
                </a>
              </p>
            </div>
          </div>
        </footer>
        {/* <!-- footer ends --> */}

        <div className="px-16 py-6 w-full bg-primary-darkBlue hidden sm:flex justify-between items-center text-sm text-white">
          <a
            href="/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2"
          >
            <span className="text-yellow-400">
              <BriefcaseIcon className="block h-6 w-6" aria-hidden="true" />
            </span>
            Sell On Artify
          </a>
          <a
            href="/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2"
          >
            <span className="text-yellow-400">
              <StarIcon className="block h-6 w-6" aria-hidden="true" />
            </span>{' '}
            Advertise
          </a>
          <a
            href="/"
            rel="noreferrer"
            target="_blank"
            className="flex items-center gap-2"
          >
            <span className="text-yellow-400">
              <GiftIcon className="block h-6 w-6" aria-hidden="true" />
            </span>{' '}
            Gift Cards
          </a>
          <a
            href="/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2"
          >
            <span className="text-yellow-400">
              <InformationCircleIcon
                className="block h-6 w-6"
                aria-hidden="true"
              />
            </span>
            Help Center
          </a>

          <span>&copy; 2022-{new Date().getFullYear()} artify.com</span>
        </div>
      </>
    )
  );
}

export default Footer;
