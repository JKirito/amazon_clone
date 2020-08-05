export const initialState = {
  basket: [
    // {
    //   id: "12345",
    //   title: "EDEN",
    //   price: 10,
    //   rating: 4,
    //   image:
    //     "https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/02/Anatomy_book_cover.png?auto=format&q=60&fit=max&w=930",
    // },
    // {
    //   id: "54321",
    //   title: "NEED",
    //   price: 12,
    //   rating: 5,
    //   image:
    //     "https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/02/Anatomy_book_cover.png?auto=format&q=60&fit=max&w=930",
    // },
  ],
  user: {
    email: "Guest",
  },
};

export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price, 0);

export const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      // Logic to Add Basket
      return { ...state, basket: [...state.basket, action.item] };

    case "REMOVE_FROM_BASKET":
      //Logic to Remove from Basket
      let newBasket = [...state.basket];
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      if (index >= 0) {
        console.log("Item Exist in basket");
        newBasket.splice(index, 1);
      } else console.warn("Can't Remove Id");
      return { ...state, basket: newBasket };
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
};
