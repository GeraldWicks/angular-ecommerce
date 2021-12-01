export interface Product {
  id: number;
  name: String;
  price: number;
  description: string;
  imgUrl: String;
}

export const products = [
  {
    id: 1,
    name: "White T-shirt",
    price: 35,
    description: "Confortable",
    type: "T-Shirts",
    imgUrl:
      "https://http2.mlstatic.com/D_NQ_NP_875910-MLB42034148035_062020-O.webp",
    cart: {
      quantity: 0
    }
  },
  {
    id: 2,
    name: "Black T-shirt",
    price: 40,
    description: "Light",
    type: "T-Shirts",
    imgUrl:
      "https://images.thdstatic.com/productImages/46dd549e-fb25-4ff1-bc51-ccd844c2c71f/svn/black-berne-t-shirts-bsm16bkt480-64_1000.jpg",
    cart: {
      quantity: 0
    }
  },
  {
    id: 3,
    name: "Yellow T-shirt",
    price: 45,
    description: "100% cotton",
    type: "T-Shirts",
    imgUrl:
      "https://static3.tcdn.com.br/img/img_prod/398440/camisa_brasil_cbf_48187_1_20211018212550.jpg",
    cart: {
      quantity: 0
    }
  },
  {
    id: 4,
    name: "Blue T-shirt",
    price: 38,
    description: "You can wear it anywhere",
    type: "T-Shirts",
    imgUrl:
      "https://5.imimg.com/data5/IE/WF/YB/SELLER-48743708/blue-tshirt--500x500.jpg",
    cart: {
      quantity: 0
    }
  },
  {
    id: 5,
    name: "Green T-Shirt",
    price: 45,
    description: "Nature",
    type: "T-Shirts",
    imgUrl: "https://cf.shopee.ph/file/5c3e81fe49bcb6edc92dbe327093d56e",
    cart: {
      quantity: 0
    }
  },
  {
    id: 6,
    name: "Grey T-Shirt",
    price: 40,
    description: "Simple",
    type: "T-Shirts",
    imgUrl:
      "https://www.bluemint.com/content/images/thumbs/001/0011180_atil_1200.jpeg",
    cart: {
      quantity: 0
    }
  },
  {
    id: 7,
    name: "Purple T-Shirt",
    price: 48,
    description: "Exothic",
    type: "T-Shirts",
    imgUrl:
      "https://imgprd19.hobbylobby.com/6/94/15/69415127cf48703230f6b46912ae893738bdf0ac/700Wx700H-422907-0320.jpg",
    cart: {
      quantity: 0
    }
  },
  {
    id: 8,
    name: "Brown T-Shirt",
    price: 45,
    description: "Simple",
    type: "T-Shirts",
    imgUrl:
      "https://cdn.shopify.com/s/files/1/1994/3161/products/PIC_3655_clipped_rev_2_530x@2x.jpeg?v=1520532353",
    cart: {
      quantity: 0
    }
  },
  {
    id: 9,
    name: "Navy T-Shirt",
    price: 40,
    description: "Ocean",
    type: "T-Shirts",
    imgUrl:
      "https://5.imimg.com/data5/LI/FF/YK/SELLER-13776090/mens-casual-wear-cotton-t-shirt-500x500.jpg",
    cart: {
      quantity: 0
    }
  },
  {
    id: 10,
    name: "Orange T-Shirt",
    price: 38,
    description: "Exothic",
    type: "T-Shirts",
    imgUrl: "https://www.babyshop.com/images/833813/card_xlarge.jpg",
    cart: {
      quantity: 0
    }
  },
  {
    id: 11,
    name: "Red T-Shirt",
    price: 50,
    description: "Exothic",
    type: "T-Shirts",
    imgUrl:
      "https://assets.burberry.com/is/image/Burberryltd/2d6345e1d1fe0353ef7f95098c4d890c0a76ebb1.jpg?$BBY_V2_SL_1x1$&wid=2800&hei=2800",
    cart: {
      quantity: 0
    }
  },
  {
    id: 12,
    name: "Pink T-Shirt",
    price: 40,
    description: "Exothic",
    type: "T-Shirts",
    imgUrl:
      "https://imgprd19.hobbylobby.com/3/7d/79/37d79e89dfc9b9948dbe7357e04dfb04402d6d84/700Wx700H-601666-0320.jpg",
    cart: {
      quantity: 0
    }
  },
  {
    id: 13,
    name: "White Shoes",
    price: 34,
    description: "The best option for the summer",
    type: "Shoes",
    imgUrl:
      "https://i.pinimg.com/originals/35/fc/04/35fc049f532a650f0ddd9a1bfdd3003f.jpg",
    cart: {
      quantity: 0
    }
  },
  {
    id: 14,
    name: "Black Shoes",
    price: 38,
    description: "Classic",
    type: "Shoes",
    imgUrl:
      "http://cdn.shopify.com/s/files/1/0046/5069/6817/products/EverydayAllBlack-3_4SideView-WithBG-WithShadow.jpg?v=1627328937",
    cart: {
      quantity: 0
    }
  },
  {
    id: 15,
    name: "Yellow Shoes",
    price: 36,
    description: "Light",
    type: "Shoes",
    imgUrl:
      "https://cdn.shopclues.com/images1/thumbnails/111939/320/320/151397120-111939911-1604810209.jpg",
    cart: {
      quantity: 0
    }
  },
  {
    id: 16,
    name: "Blue Shoes",
    price: 40,
    description: "Comfortable",
    type: "Shoes",
    imgUrl:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/c4a608ef-6707-4579-a846-2fa7248371a1/star-runner-3-big-kids-road-running-shoes-N3tJlT.png",
    cart: {
      quantity: 0
    }
  },
  {
    id: 17,
    name: "Green Shoes",
    price: 30,
    description: "Nature",
    type: "Shoes",
    imgUrl:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/ec0edc40-a34a-468e-aee5-34e55432ab6d/waffle-one-little-kids-shoes-V6MCqK.png",
    cart: {
      quantity: 0
    }
  },
  {
    id: 18,
    name: "Grey Shoes",
    price: 36,
    description: "Simple",
    type: "Shoes",
    imgUrl:
      "https://target.scene7.com/is/image/Target/GUEST_742b35da-d73b-46b1-ae53-c9f46e20e27d",
    cart: {
      quantity: 0
    }
  },
  {
    id: 19,
    name: "Red Shoes",
    price: 40,
    description: "Exothic",
    type: "Shoes",
    imgUrl:
      "https://images-na.ssl-images-amazon.com/images/I/71iS7jKcpZL._UL1500_.jpg",
    cart: {
      quantity: 0
    }
  },
  {
    id: 20,
    name: "Brown Shoes",
    price: 40,
    description: "Simple",
    type: "Shoes",
    imgUrl:
      "https://mnjshoes.com/wp-content/uploads/2019/07/ROB02-BRW-Brown-Mens-Shoes-5.jpg",
    cart: {
      quantity: 0
    }
  },
  {
    id: 21,
    name: "Navy Shoes",
    price: 34,
    description: "Ocean",
    type: "Shoes",
    imgUrl:
      "https://i.pinimg.com/474x/b6/c7/3c/b6c73c0a4c6bea95612231b2e6f7dda8--mens-brogues-brogue-shoe.jpg",
    cart: {
      quantity: 0
    }
  },
  {
    id: 22,
    name: "Orange Shoes",
    price: 42,
    description: "Exothic",
    type: "Shoes",
    imgUrl:
      "https://assets.reebok.com/images/w_600,f_auto,q_auto/51238542ebb7456795d7ab890001b141_9366/Mita_Zig_Kinetica_Shoes_Orange_FW6037.jpg",
    cart: {
      quantity: 0
    }
  },
  {
    id: 23,
    name: "Purple Shoes",
    price: 40,
    description: "Exothic",
    type: "Shoes",
    imgUrl: "https://images.journeys.com/images/products/1_246037_FS.JPG",
    cart: {
      quantity: 0
    }
  },
  {
    id: 24,
    name: "Pinks Shoes",
    price: 38,
    description: "Exothic",
    type: "Shoes",
    imgUrl: "https://ae01.alicdn.com/kf/HTB16AJZU7voK1RjSZFDq6xY3pXay.jpg",
    cart: {
      quantity: 0
    }
  }
];

export const product = {
  index: 0,
  id: 1,
  name: "White T-shirt",
  price: 35,
  description: "Confortable",
  type: "T-Shirts",
  imgUrl:
    "https://http2.mlstatic.com/D_NQ_NP_875910-MLB42034148035_062020-O.webp",
  cart: {
    quantity: 0
  },
  firstProduct: 4
};

export const productSubpage = {
  name: "All Products",
  page: 1,
  firstPage: 0,
  lastPage: 8
};

export const cart = {
  quantity: 0,
  totalPrice: 0
};

export const currentRoute = {
  name: "/"
};

export const productsSearched = {
  products: [],
  inputValue: ""
};

export const mobileSidebar = {
  show: false
};
