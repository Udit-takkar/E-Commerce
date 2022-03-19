/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable no-unused-expressions */
/* eslint-disable arrow-body-style */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable no-nested-ternary */
/* eslint-disable no-underscore-dangle */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
// import { useDispatch, useSelector } from 'react-redux';
// import { useSnackbar } from 'notistack';
// import {
//   clearErrors,
//   deleteOrder,
//   getAllOrders,
// } from '../../actions/orderAction';
// import { DELETE_ORDER_RESET } from '../../constants/orderConstants';
import Actions from './Actions';
import { formatDate } from '../../../utils/functions';
import { ordersData } from '../../../utils/constantsData';
import MetaData from '../../../components/Dashboard/MetaData';
import BackdropLoader from '../../../components/Dashboard/BackdropLoader';
import Dashboard from '../Dashboard';

function OrderTable() {
  // const dispatch = useDispatch();
  // const { enqueueSnackbar } = useSnackbar();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setOrders(ordersData);
    setLoading(false);
  }, []);

  // const { orders, error } = useSelector(state => state.allOrders);
  // const {
  //   loading,
  //   isDeleted,
  //   error: deleteError,
  // } = useSelector(state => state.order);

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
  //     enqueueSnackbar('Deleted Successfully', { variant: 'success' });
  //     dispatch({ type: DELETE_ORDER_RESET });
  //   }
  //   dispatch(getAllOrders());
  // }, [dispatch, error, deleteError, isDeleted, enqueueSnackbar]);

  const deleteOrderHandler = id => {
    // dispatch(deleteOrder(id));
    console.log('Deleteing Order :', id);
  };

  const columns = [
    {
      field: 'id',
      headerName: 'Order ID',
      minWidth: 200,
      flex: 1,
    },
    {
      field: 'status',
      headerName: 'Status',
      minWidth: 150,
      flex: 0.2,
      renderCell: params => {
        return (
          <>
            {params.row.status === 'Delivered' ? (
              <span className="text-sm bg-green-100 p-1 px-2 font-medium rounded-full text-green-800">
                {params.row.status}
              </span>
            ) : params.row.status === 'Shipped' ? (
              <span className="text-sm bg-yellow-100 p-1 px-2 font-medium rounded-full text-yellow-800">
                {params.row.status}
              </span>
            ) : (
              <span className="text-sm bg-purple-100 p-1 px-2 font-medium rounded-full text-purple-800">
                {params.row.status}
              </span>
            )}
          </>
        );
      },
    },
    {
      field: 'itemsQty',
      headerName: 'Items Qty',
      type: 'number',
      minWidth: 100,
      flex: 0.1,
    },
    {
      field: 'amount',
      headerName: 'Amount',
      type: 'number',
      minWidth: 200,
      flex: 0.2,
      renderCell: params => {
        return <span>₹{params.row.amount}</span>;
      },
    },
    {
      field: 'orderOn',
      headerName: 'Order On',
      type: 'date',
      minWidth: 200,
      flex: 0.5,
    },
    {
      field: 'actions',
      headerName: 'Actions',
      minWidth: 100,
      flex: 0.3,
      type: 'number',
      sortable: false,
      renderCell: params => {
        return (
          <Actions
            editRoute={'order'}
            deleteHandler={deleteOrderHandler}
            id={params.row.id}
          />
        );
      },
    },
  ];

  const rows = [];

  orders &&
    orders.forEach(order => {
      rows.unshift({
        id: order._id,
        // itemsQty: order.orderItems.length,
        itemsQty: order.itemsQty,
        amount: order.amount,
        orderOn: formatDate(order.createdAt),
        status: order.orderStatus,
      });
    });

  return (
    <Dashboard>
      <MetaData title="Admin Orders | Flipkart" />

      {loading && <BackdropLoader />}

      <h1 className="text-lg font-medium uppercase">orders</h1>
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
}

export default OrderTable;
