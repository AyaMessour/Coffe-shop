<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\ContactRequest;
use App\Mail\ContactMail;
use Illuminate\Support\Facades\Mail;
use Inertia\Inertia;

class ContactController extends Controller
{
    // Method to handle sending contact form data
    public function send(ContactRequest $request)
    {
        // Get validated form data
        $data = $request->validated();
        
        // Send the email using ContactMail
        Mail::to('ayamessour35@gmail.com')->send(new ContactMail($data));

        // Redirect back with success flash message
        return back()->with('success', 'Votre message a été envoyé avec succès !');
    }

    // Optionally require authentication, if needed
    public function __construct()
    {
        $this->middleware('auth'); // Uncomment if authentication is required
    }

    // Show contact form page
    public function showContactForm()
    {
        return Inertia::render('Contact');
    }
}
