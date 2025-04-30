'use client';
import { useCart } from '@/context/CartContext';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function CheckoutPage() {
  const { cart, clearCart } = useCart();
  const router = useRouter();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  useEffect(() => {
    // Clear the cart only when user leaves the page
    const handleBeforeUnload = () => {
      clearCart(); // Immediately clear cart when page is exited
    };

    // Add event listener for page unload (when user navigates away)
    window.addEventListener('beforeunload', handleBeforeUnload);

    // Clean up on component unmount (or user leaves)
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [clearCart]);

  useEffect(() => {
    // If cart is empty, redirect to home page
    if (cart.length === 0) {
      router.push('/');
    }
  }, [cart, router]);

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>

      <p className="mb-4">Thank you for shopping with us! 🎉</p>

      <div className="bg-white shadow-md p-4 rounded border">
        <h2 className="font-semibold mb-2">Order Summary:</h2>
        <ul className="mb-4">
          {cart.map((item, index) => (
            <li key={index} className="text-gray-800">
              {item.name} (x{item.quantity}) - Rs. {item.price * item.quantity}
            </li>
          ))}
        </ul>
        <p className="font-bold">Total Paid: Rs. {total}</p>
      </div>

      <p className="mt-4 text-green-600">🚚 Your order will be delivered soon.</p>
    </main>
  );
}
