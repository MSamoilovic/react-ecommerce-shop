const INITIAL_STATE = {
  sections: [
    {
      title: "Cactus",
      imageURL:
        "https://images.unsplash.com/photo-1463936575829-25148e1db1b8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1090&q=80",
      id: 1,
      linkUrl: 'shop/hats'
    },
    {
      title: "Succulents",
      imageURL:
        "https://images.unsplash.com/photo-1483794344563-d27a8d18014e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
      id: 2,
      linkUrl: 'shop/sneakers'
    },
    {
      title: "Flowers",
      imageURL:
        "https://images.unsplash.com/photo-1490291268787-39288ca029c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
      id: 3,
      linkUrl: 'shop/jackets'
    },
    {
      title: "Bouquets",
      imageURL:
        "https://images.unsplash.com/photo-1556712691-5c39e0e32a8e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
      id: 4,
      size: "large",
      linkUrl: 'shop/womens'
    },
    {
      title: "Pots and Others",
      imageURL:
        "https://images.unsplash.com/photo-1526319601710-b83bec6bd3d2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
      id: 5,
      size: "large",
      linkUrl: 'shop/mens'
    },
  ],
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer