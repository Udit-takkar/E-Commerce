/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-underscore-dangle */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
// import { useDispatch, useSelector } from 'react-redux';
// import { useSnackbar } from 'notistack';
// import { Link } from 'react-router-dom';
import Link from 'next/link';
import { productsData } from '../../../utils/constantsData';
// import {
//   clearErrors,
//   deleteProduct,
//   getAdminProducts,
// } from '../../actions/productAction';
import Rating from '@mui/material/Rating';
// import { DELETE_PRODUCT_RESET } from '../../constants/productConstants';
import Actions from './Actions';
import MetaData from '../../../components/Dashboard/MetaData';
import BackdropLoader from '../../../components/Dashboard/BackdropLoader';
import Dashboard from '../Dashboard';

const ProductTable = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  // const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    setLoading(true);
    setProducts(productsData);
    setLoading(false);
  }, []);

  const deleteProductHandler = id => {
    console.log('Deleting Product from Product Handler', id);
  };

  // const { products, error } = useSelector(state => state.products);
  // const {
  //   loading,
  //   isDeleted,
  //   error: deleteError,
  // } = useSelector(state => state.product);

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
  //     enqueueSnackbar('Product Deleted Successfully', { variant: 'success' });
  //     dispatch({ type: DELETE_PRODUCT_RESET });
  //   }
  //   dispatch(getAdminProducts());
  // }, [dispatch, error, deleteError, isDeleted, enqueueSnackbar]);

  // const deleteProductHandler = id => {
  //   dispatch(deleteProduct(id));
  // };

  const columns = [
    {
      field: 'id',
      headerName: 'Product ID',
      minWidth: 100,
      flex: 0.5,
    },
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
                src={params.row.image}
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
      field: 'category',
      headerName: 'Category',
      minWidth: 100,
      flex: 0.1,
    },
    {
      field: 'stock',
      headerName: 'Stock',
      type: 'number',
      headerAlign: 'left',
      align: 'left',
      minWidth: 70,
      flex: 0.1,
      renderCell: params => {
        return (
          <>
            {params.row.stock < 10 ? (
              <span className="font-medium text-red-700 rounded-full bg-red-200 p-1 w-6 h-6 flex items-center justify-center">
                {params.row.stock}
              </span>
            ) : (
              <span className="">{params.row.stock}</span>
            )}
          </>
        );
      },
    },
    {
      field: 'price',
      headerName: 'Price',
      type: 'number',
      minWidth: 100,
      headerAlign: 'left',
      align: 'left',
      flex: 0.2,
      renderCell: params => {
        return <span>₹{params.row.price.toLocaleString()}</span>;
      },
    },
    {
      field: 'cprice',
      headerName: 'Cutted Price',
      type: 'number',
      minWidth: 100,
      headerAlign: 'left',
      align: 'left',
      flex: 0.2,
      renderCell: params => {
        return <span>₹{params.row.cprice.toLocaleString()}</span>;
      },
    },
    {
      field: 'rating',
      headerName: 'Rating',
      type: 'number',
      minWidth: 100,
      flex: 0.1,
      align: 'left',
      headerAlign: 'left',
      renderCell: params => {
        return (
          <Rating
            readOnly
            value={params.row.rating}
            size="small"
            precision={0.5}
          />
        );
      },
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
            editRoute={'product'}
            deleteHandler={deleteProductHandler}
            id={params.row.id}
          />
        );
      },
    },
  ];

  const rows = [];

  products &&
    products.forEach(item => {
      rows.unshift({
        id: item._id,
        name: item.name,
        image: item.image,
        category: item.category,
        stock: item.stock,
        price: item.price,
        cprice: item.cprice,
        rating: item.rating,
      });
    });

  return (
    <Dashboard>
      <MetaData title="Admin Products | Flipkart" />

      {loading && <BackdropLoader />}

      <div className="flex justify-between items-center">
        <h1 className="text-lg font-medium uppercase">products</h1>
        <Link
          href="/dashboard/SellerDashboard/NewProduct"
          className="py-2 px-4 rounded shadow font-medium text-white bg-primary-blue hover:shadow-lg"
        >
          New Product
        </Link>
      </div>
      <div
        className="bg-white rounded-xl shadow-lg w-full"
        style={{ height: 670 }}
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

export default ProductTable;
