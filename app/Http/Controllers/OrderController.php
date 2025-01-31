<?php


namespace App\Http\Controllers;

use App\Models\Order;
use App\Models\Cart;
use Illuminate\Http\Request;

class OrderController extends Controller
{
    public function placeOrder(Request $request)
    {
        $cartItems = Cart::where('user_id', auth()->id())->with('product')->get();
        $totalAmount = $cartItems->sum(function ($item) {
            return $item->quantity * $item->product->price;
        });

        $order = Order::create([
            'user_id' => auth()->id(),
            'total_amount' => $totalAmount,
            'status' => 'pending',
        ]);

        // Clear the cart after placing the order
        Cart::where('user_id', auth()->id())->delete();

        return response()->json(['message' => 'Order placed successfully', 'order' => $order]);
    }
}
