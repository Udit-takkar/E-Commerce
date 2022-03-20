/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable react/button-has-type */
/* eslint-disable no-undef */
/* eslint-disable import/no-unresolved */
// import { Link, useNavigate } from 'react-router-dom';
import Link from 'next/link';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import InventoryIcon from '@mui/icons-material/Inventory';
import GroupIcon from '@mui/icons-material/Group';
import ReviewsIcon from '@mui/icons-material/Reviews';
import AddBoxIcon from '@mui/icons-material/AddBox';
import LogoutIcon from '@mui/icons-material/Logout';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import CloseIcon from '@mui/icons-material/Close';
import Avatar from '@mui/material/Avatar';
// import { useDispatch, useSelector } from 'react-redux';
// import styles from './Sidebar.module.css';
// import { useSnackbar } from 'notistack';
// import { logoutUser } from '../../../actions/userAction';

const navMenu = [
  {
    icon: <EqualizerIcon />,
    label: 'Dashboard',
    ref: '/dashboard/SellerDashboard/MainData',
  },
  {
    icon: <ShoppingBagIcon />,
    label: 'Orders',
    ref: '/dashboard/SellerDashboard/OrderTable',
  },
  {
    icon: <InventoryIcon />,
    label: 'Products',
    ref: '/dashboard/SellerDashboard/ProductTable',
  },
  {
    icon: <AddBoxIcon />,
    label: 'Add Product',
    ref: '/dashboard/SellerDashboard/NewProduct',
  },
  {
    icon: <GroupIcon />,
    label: 'Users',
    ref: '/dashboard/SellerDashboard/UserTable',
  },
  {
    icon: <ReviewsIcon />,
    label: 'Reviews',
    ref: '/dashboard/SellerDashboard/ReviewsTable',
  },
  // {
  //   icon: <AccountBoxIcon />,
  //   label: 'My Profile',
  //   ref: '/account',
  // },
  {
    icon: <LogoutIcon />,
    label: 'Logout',
  },
];

function Sidebar({ activeTab, setToggleSidebar }) {
  // const dispatch = useDispatch();
  // const navigate = useNavigate();
  // const { enqueueSnackbar } = useSnackbar();

  // const { user } = useSelector(state => state.user);
  const user = {
    avatar: {
      url: 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png',
    },
    name: 'Demo',
    email: 'demo2@gmail.com',
  };

  const handleLogout = () => {
    // dispatch(logoutUser());
    // enqueueSnackbar('Logout Successfully', { variant: 'success' });
    // navigate('/login');
  };

  return (
    <aside className="mt-2 fixed z-10 sm:z-0 min-h-screen left-0 pb-14 max-h-screen bg-gray-800 text-white overflow-x-hidden border-r rounded-xl">
      <div className="flex items-center gap-3 bg-gray-700 p-2 rounded-lg shadow-lg my-4 mx-3.5">
        <Avatar alt="Avatar" src={user.avatar.url} />
        <div className="flex flex-col gap-0">
          <span className="font-medium text-lg">{user.name}</span>
          <span className="text-gray-300 text-sm">{user.email}</span>
        </div>
        <button
          onClick={() => setToggleSidebar(false)}
          className="sm:hidden bg-gray-800 ml-auto rounded-full w-10 h-10 flex items-center justify-center"
        >
          <CloseIcon />
        </button>
      </div>

      <div className="flex flex-col w-full gap-0 my-8">
        {navMenu.map((item, index) => {
          const { icon, label, ref } = item;
          return (
            <>
              {label === 'Logout' ? (
                <button
                  onClick={handleLogout}
                  className="hover:bg-gray-700 flex gap-3 items-center py-3 px-4 font-medium"
                >
                  <span>{icon}</span>
                  <span>{label}</span>
                </button>
              ) : (
                <button className="hover:bg-gray-700 flex gap-3 items-center py-3 px-4 font-medium">
                  <Link
                    href={ref}
                    // className={`${
                    //   activeTab === index ? 'bg-gray-700' : 'hover:bg-gray-700'
                    // }hover:bg-gray-700 flex gap-3 items-center py-3 px-4 font-medium`}
                  >
                    <span className="flex">
                      {icon}
                      <p className="ml-2">{label}</p>
                    </span>
                    {/* <span></span> */}
                  </Link>
                </button>
              )}
            </>
          );
        })}
      </div>

      <div className="flex flex-col gap-1 bg-gray-700 p-3 rounded-lg shadow-lg mb-6 mt-28 mx-3.5 overflow-hidden">
        <h5>Developed with ❤️ by:</h5>
        <div className="flex flex-col gap-0">
          <a
            href="/"
            target="_blank"
            rel="noreferrer"
            className="font-medium text-lg hover:text-blue-500"
          >
            Team Aakriti
          </a>
          <a
            href="mailto:Aakriti@gmail.com"
            className="text-gray-300 text-sm hover:text-blue-500"
          >
            Aakriti@gmail.com
          </a>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
