<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\CartController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\ProductController;

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Home', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    // Cart Routes (Only for Authenticated Users)
    Route::post('/cart/add/{productId}', [CartController::class, 'addToCart']);

    Route::get('/cart', [CartController::class, 'show'])->name('cart.show');
    Route::post('/cart/remove/{id}', [CartController::class, 'removeFromCart'])->name('cart.remove');
    Route::post('/cart/increase/{id}', [CartController::class, 'increaseQuantity'])->name('cart.increase');
Route::post('/cart/decrease/{id}', [CartController::class, 'decreaseQuantity'])->name('cart.decrease');

});

// Route::get('/Home', function () {
//     return Inertia::render('Home');
// });

Route::get('/About', function () {
    return Inertia::render('About');
});

Route::get('/Menu', function () {
    return Inertia::render('Menu');
});


Route::get('/Contact', function () {
    return Inertia::render('Contact');
});


Route::get('/menu', [ProductController::class, 'indexaa'])->name('menu');

// Product Routes
Route::get('/product/{id}', [ProductController::class, 'show'])->name('product.show');

// Cart Routes

require __DIR__.'/auth.php';
