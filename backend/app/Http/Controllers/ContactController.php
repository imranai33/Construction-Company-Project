<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Mail\ContactMail;

class ContactController extends Controller
{
    public function send(Request $request)
    {
        // Validation
        $data = $request->validate([
            'name'    => 'required',
            'email'   => 'required|email',
            'phone'   => 'nullable',
            'message' => 'required',
        ]);

        // Send Email
        Mail::to('imran.ai.pak@gmail.com')->send(new ContactMail($data));

        // Response for React
        return response()->json([
            'message' => 'Email successfully sent ✅'
        ]);
    }
}
