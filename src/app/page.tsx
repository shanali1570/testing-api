'use client';
import { products } from '@/lib/data';
import { useCart } from '@/context/CartContext';

export default function Home() {
  const { addToCart } = useCart();

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map(product => (
          <div key={product.id} className="border p-4 rounded shadow">
            <img src={product.image} alt={product.name} className="mb-2" />
            <h2 className="text-lg font-semibold">{product.name}</h2>
            <p className="text-gray-600">Rs. {product.price}</p>
            <button
              onClick={() => addToCart(product)}
              className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}
