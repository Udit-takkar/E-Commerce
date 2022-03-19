/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-expressions */
/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
// import { useDispatch, useSelector } from 'react-redux';
// import { useSnackbar } from 'notistack';
// import { clearErrors, deleteUser, getAllUsers } from '../../actions/userAction';
// import { DELETE_USER_RESET } from '../../constants/userConstants';
import { usersData } from '../../../utils/constantsData';
import Actions from './Actions';
import MetaData from '../../../components/Dashboard/MetaData';
import BackdropLoader from '../../../components/Dashboard/BackdropLoader';
import Dashboard from '../Dashboard';

const UserTable = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setUsers(usersData);
      setLoading(false);
    }, 2000);
  }, []);
  // const dispatch = useDispatch();
  // const { enqueueSnackbar } = useSnackbar();

  // const { users, error } = useSelector(state => state.users);
  // const {
  //   loading,
  //   isDeleted,
  //   error: deleteError,
  // } = useSelector(state => state.profile);

  // useEffect(() => {
  //   if (error) {
  //     enqueueSnackbar(error, { variant: 'error' });
  //     dispatch(clearErrors());
  //   }
  //   if (deleteError) {
  //     enqueueSnackbar(deleteError, { variant: 'error' });
  //     dispatch(clearErrors());
  //   }
  //   if (isDeleted) {
  //     enqueueSnackbar('User Deleted Successfully', { variant: 'success' });
  //     dispatch({ type: DELETE_USER_RESET });
  //   }
  //   dispatch(getAllUsers());
  // }, [dispatch, error, deleteError, isDeleted, enqueueSnackbar]);

  const deleteUserHandler = id => {
    console.log('Delete User:', id);
    // dispatch(deleteUser(id));
  };

  const columns = [
    {
      field: 'name',
      headerName: 'Name',
      minWidth: 200,
      flex: 1,
      renderCell: params => {
        return (
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full">
              <img
                draggable="false"
                src={params.row.avatar}
                alt={params.row.name}
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            {params.row.name}
          </div>
        );
      },
    },
    {
      field: 'email',
      headerName: 'Email',
      minWidth: 200,
      flex: 0.2,
    },
    {
      field: 'gender',
      headerName: 'Gender',
      minWidth: 100,
      flex: 0.1,
    },
    {
      field: 'role',
      headerName: 'Role',
      minWidth: 100,
      flex: 0.2,
      renderCell: params => {
        return (
          <>
            {params.row.role === 'admin' ? (
              <span className="text-sm bg-green-100 p-1 px-2 font-medium rounded-full text-green-800 capitalize">
                {params.row.role}
              </span>
            ) : (
              <span className="text-sm bg-purple-100 p-1 px-2 font-medium rounded-full text-purple-800 capitalize">
                {params.row.role}
              </span>
            )}
          </>
        );
      },
    },
    {
      field: 'registeredOn',
      headerName: 'Registered On',
      type: 'date',
      minWidth: 150,
      flex: 0.2,
    },
    {
      field: 'actions',
      headerName: 'Actions',
      minWidth: 200,
      flex: 0.3,
      type: 'number',
      sortable: false,
      renderCell: params => {
        return (
          <Actions
            editRoute={'user'}
            deleteHandler={deleteUserHandler}
            id={params.row.id}
            name={params.row.name}
          />
        );
      },
    },
  ];

  const rows = [];

  users &&
    users.map(item => {
      rows.push({
        id: item._id,
        name: item.name,
        avatar: item.avatar.url,
        email: item.email,
        gender: item.gender.toUpperCase(),
        role: item.role,
        registeredOn: new Date(item.createdAt).toISOString().substring(0, 10),
      });
    });

  return (
    <Dashboard>
      <MetaData title="Admin Users | Flipkart" />

      {loading && <BackdropLoader />}

      <h1 className="text-lg font-medium uppercase">users</h1>
      <div
        className="bg-white rounded-xl shadow-lg w-full"
        style={{ height: 470 }}
      >
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={10}
          disableSelectIconOnClick
          sx={{
            boxShadow: 0,
            border: 0,
          }}
        />
      </div>
    </Dashboard>
  );
};

export default UserTable;
