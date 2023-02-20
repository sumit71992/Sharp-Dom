let cart = { products: [], totalPrice: 0 };
      
      //Analyze the cart ie find existing product
      const existingProductIndex = cart.products.findIndex((prod=>prod.id===id));
      console.log(existingProductIndex,"insdex")