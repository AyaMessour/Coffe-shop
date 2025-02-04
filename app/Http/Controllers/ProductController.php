<?php
namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class ProductController extends Controller
{
    public function index(): Response
    {
        $products = Product::all();
        return Inertia::render('Products/TopList', ['products' => $products]);
    }

    public function indexaa()
{
    $products = Product::all();
    return Inertia::render('Menu', ['products' => $products]);
}
public function show($id)
    {
        $product = Product::findOrFail($id);
        return Inertia::render('ProductDetail', ['product' => $product]);
    }
    public function show1($id)
    {
        $product = Product::findOrFail($id);
        return response()->json([
            'product' => $product,
            'image_url' => $product->image_url
        ]);
    }
    
}