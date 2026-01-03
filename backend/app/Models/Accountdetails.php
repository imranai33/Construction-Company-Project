<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Accountdetails extends Model
{
    // Agar table ka naam alag ho to specify karein
    // protected $table = 'account_details';

    protected $fillable = [
        'first_name',
        'last_name',
        'father',
        'cnic',
        'date_of_birth',
        'occupation',
        'city',
        'address',
    ];
}
