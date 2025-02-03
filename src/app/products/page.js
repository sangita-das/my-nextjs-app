

const AllProductsPage = async() => {
    const res = await fetch('http://localhost:5000/products', {
        cache: 'no-store'
    }
            );
    const products = await res.json();
    console.log(products)
    return (
        <div>
            <h2 className="text-center text-3xl">All Products page</h2>
        </div>
    );
};

export default AllProductsPage;