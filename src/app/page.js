import ProductsCart from "@/components/Products/ProductsCart";


const HomePage = async () => {
  const res = await fetch('http://localhost:5000/products', {
    // cache: "force-cache",
    // or
    next: {
      revalidate:5,
    }
  });
  const products = await res.json();
  console.log(products)
  return (
    <div>
       <h1 className="text-center text-4xl my-5">Data Fetching, Catching, and Revalidating</h1>
       <div className="grid grid-cols-3 gap-8 w-[90%] mx-auto my-10">
        {
            products.slice(0,3).map((product) => (
            <ProductsCart
            key = {product.id} product = {product} ></ProductsCart>
          ) )
          }
        
       </div>
    </div>
  );
};

export default HomePage;