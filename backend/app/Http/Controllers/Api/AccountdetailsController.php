<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Accountdetails;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class AccountdetailsController extends Controller
{

    public function register(Request $request)
    {
        // Validation
        $validator = Validator::make($request->all(), [
            'first_name'      => 'required|string|max:30',
            'last_name'       => 'required|string|max:30',
            'father'          => 'required|string|max:30',
            'cnic'            => 'required|string|size:14|unique:accountdetails,cnic',
            'date_of_birth'   => 'required|date',
            'occupation'      => 'nullable|string|max:255',
            'city'            => 'required|string|max:255',
            'address'         => 'required|string',
        ]);

        // Validation failed
        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'message'=> 'Validation Error',
                'errors' => $validator->errors()
            ], 422);
        }

        // Create account
        $account = Accountdetails::create($request->all());

        // Success response
        return response()->json([
            'status' => true,
            'message' => 'Account registered successfully',
            'data' => $account,
        ], 201);
    }

     public function index()
    {
        $accounts = Accountdetails::all();
        return response()->json([
            'status' => true,
            'data' => $accounts
        ], 200);
    }



    public function destroy($id)
{
    $account = Accountdetails::find($id);

    if (!$account) {
        return response()->json([
            'status' => false,
            'message' => 'Account not found'
        ], 404);
    }

    $account->delete();

    return response()->json([
        'status' => true,
        'message' => 'Account deleted successfully'
    ], 200);
}

 // 🔹 Show single account for edit
    public function show($id)
    {
        $account = Accountdetails::find($id);

        if (!$account) {
            return response()->json([
                'status' => false,
                'message' => 'Account not found'
            ]);
        }

        return response()->json([
            'status' => true,
            'data' => $account
        ]);
    }
  // 🔹 Update existing account
    public function update(Request $request, $id)
    {
        $account = Accountdetails::find($id);
        if (!$account) {
            return response()->json([
                'status' => false,
                'message' => 'Account not found'
            ]);
        }

        $validator = Validator::make($request->all(), [
            'first_name'    => 'required|string|max:30',
            'last_name'     => 'required|string|max:30',
            'father'        => 'required|string|max:30',
            'cnic'          => 'required|string|size:14|unique:accountdetails,cnic,'.$id,
            'date_of_birth' => 'required|date',
            'occupation'    => 'nullable|string|max:255',
            'city'          => 'required|string|max:255',
            'address'       => 'required|string',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'errors' => $validator->errors()
            ]);
        }

        $account->update($request->all());

        return response()->json([
            'status' => true,
            'message' => 'Account updated successfully',
            'data' => $account
        ]);
    }

}
