<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CartController extends Controller
{
    // Show the user's cart
    public function show()
    {
        $cartItems = Cart::where('user_id', auth()->id())
            ->with('product') // Eager load associated products
            ->get();
    
        return Inertia::render('CartShow', ['cart' => $cartItems]);
    }

    // Add a product to the cart
    public function addToCart(Request $request, $productId)
    {
        $product = Product::findOrFail($productId);

        // Check if the product is already in the cart
        $cartItem = Cart::where('user_id', auth()->id())
                        ->where('product_id', $productId)
                        ->first();

        if ($cartItem) {
            // If already in the cart, increment the quantity
            $cartItem->increment('quantity');
        } else {
            // Otherwise, create a new cart item
            Cart::create([
                'user_id' => auth()->id(),
                'product_id' => $productId,
                'quantity' => 1
            ]);
        }

        return redirect()->route('cart.show')->with('success', 'Product added to cart!');
    }

    // Remove a product from the cart
    public function removeFromCart($cartId)
    {
        $cartItem = Cart::where('user_id', auth()->id())->find($cartId);
        
        if ($cartItem) {
            $cartItem->delete();
            return redirect()->route('cart.show')->with('success', 'Product removed from cart.');
        }

        return redirect()->route('cart.show')->with('error', 'Cart item not found.');
    }

    public function increaseQuantity($cartId)
{
    $cartItem = Cart::where('user_id', auth()->id())->find($cartId);

    if ($cartItem) {
        $cartItem->increment('quantity');
        return redirect()->route('cart.show')->with('success', 'Quantity increased.');
    }

    return redirect()->route('cart.show')->with('error', 'Cart item not found.');
}

public function decreaseQuantity($cartId)
{
    $cartItem = Cart::where('user_id', auth()->id())->find($cartId);

    if ($cartItem) {
        if ($cartItem->quantity > 1) {
            $cartItem->decrement('quantity');
        } else {
            $cartItem->delete(); // Remove item if quantity becomes zero
        }
        return redirect()->route('cart.show')->with('success', 'Quantity updated.');
    }

    return redirect()->route('cart.show')->with('error', 'Cart item not found.');
}

}
