'use client';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';

export default function Navbar() {
  const { cart } = useCart();

  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <Link href="/" className="font-bold text-lg">
        MyShop
      </Link>

      <div className="flex space-x-4">
      <Link href="/login">
        Login
      </Link>
      <Link href="/signup">
        Sign Up
      </Link>
      <Link href="/cart">
        Cart ({cart.length})
      </Link>
      </div>
      
    </nav>
  );
}
