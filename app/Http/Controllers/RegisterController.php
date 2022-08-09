<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\RegisterRequest;
use App\Models\User;
use Illuminate\Support\Facades\Auth;


class RegisterController extends Controller

{
    //
    public function show(){
        //autenticated users for session
        if(Auth::check()){
            return redirect('/home');
        }

        return view('auth.register');
    }

    public function register(RegisterRequest $request){
        $user = User::create($request->validated());

        return redirect('/login')->with('success', 'Account created successfully');
    }
}
