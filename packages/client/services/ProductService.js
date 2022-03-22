import apiClient from '../utils/apiClient';

const getProducts = async (fields = {}) => {
  try {
    const url = `/products`;
    console.log('Products Service', fields);
    const { data } = await apiClient.get(url, { params: fields });
    console.log('Product', data.products);

    return data.products;
  } catch (error) {
    throw new Error(error);
  }
};

const getProductById = async id => {
  try {
    const url = `/products/${id}`;
    console.log('Products Service', id);
    const { data } = await apiClient.get(url);
    console.log('Product', data.product);
    return data.product;
  } catch (error) {
    throw new Error(error);
  }
};

const getProductsRecommendation = async id => {
  try {
    // const url =
    //   'https://craft-recommend.herokuapp.com/productRecommendation?productId=12';

    // const { data } = await apiClient.get(url);
    const data = [
      {
        brand: 'Manisha Silk  Weaves',
        category: 'Tussar Silk Dupatta',
        description:
          'Explore the collection of beautifully designed Madhubani hand painted pure tussar silk handloom vidarbha border long 2.5 mtrs dupatta width 36", with silk mark tag. from Manisha Silk Weaves ,this piece is elegantly crafted which will surely add to your wardrobe. Pair this piece with heels or flats for a graceful look .',
        imageURL:
          'https://5.imimg.com/data5/SELLER/Default/2022/2/SX/VE/LN/34273507/img-20220206-wa0001-500x500.jpg',
        name: 'Madhubani Hand Painted Pure Tussar Silk Long Dupatta., Cream,white',
        _id: 7,
        price: 3000,
        sale_price: 1900,
        rating: 4.6,
      },
      {
        brand: 'Pihue Creations',
        category: 'Handloom Carpets',
        description: 'Handloom Carpet Printed in Abstract Design ',
        imageURL:
          'https://5.imimg.com/data5/SELLER/Default/2020/12/JC/VC/DL/4327510/handloom-printed-carpets-500x500.jpeg',
        name: 'For Home Mixed Handloom Printed Carpets',
        _id: 13,
        price: 4000,
        sale_price: 3900,
        rating: 4.7,
      },
      {
        brand: 'Shri Ganesh Fabrics',
        category: 'Cotton Handloom Fabrics',
        description:
          'South cotton handloom fabricg - men shirts, ladies kurties, jents kurtas',
        imageURL:
          'https://5.imimg.com/data5/SELLER/Default/2021/2/ZU/RH/UG/66853948/south-cotton-handloom-fabric-500x500.jpeg',
        name: 'South Cotton Handloom Fabric, Check/stripes, Multicolour',
        _id: 15,
        price: 82,
        sale_price: 70,
        rating: 4.9,
      },
      {
        brand: 'J. Bharat Khadi Bhandar',
        category: 'Handloom Fabrics',
        description:
          'Handloom Fabric  Width  44  amp  GSM  130 \nAdditional Information  Delivery Time  7   Production Capacity  10000 \n',
        imageURL:
          'https://5.imimg.com/data5/SELLER/Default/2021/9/WM/KE/MY/62639270/banaswara-500x500.jpeg',
        name: 'Khadi Banaswara handloom fabric cotton, For Garments',
        _id: 17,
        price: 65,
        sale_price: 50,
        rating: 4,
      },
      {
        brand: 'cotton leaf',
        category: ' Blankets, Quilts & Dohars',
        description:
          'cotton leaf Floral Single Blanket 104 (1 Authentic Solapuri Chaddar)\n  Price: Rs. 599\n\t\t\t\t\n\t\t\tGive authentic look to your bedroom with this Authentic Designed, 100 % Cotton, Handloom Woven Rich Solapuri Chaddar. This will add up to fresh look and comfort of your bedroom.\nGive authentic look to your bedroom with this Authentic Designed, 100 % Cotton, Handloom Woven Rich Solapuri Chaddar. This will add up to fresh look and comfort of your bedroom.',
        imageURL:
          'http://img6a.flixcart.com/image/blanket/k/8/y/chdr-104-cotton-leaf-solapur-chaddar-1100x1100-imaeedxedwd7mbfy.jpeg',
        name: 'cotton leaf Floral Single Blanket 104',
        _id: 57,
        price: 1999,
        sale_price: 1900,
        rating: 4.3,
      },
    ];
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const ProductService = {
  getProducts,
  getProductById,
  getProductsRecommendation,
};
