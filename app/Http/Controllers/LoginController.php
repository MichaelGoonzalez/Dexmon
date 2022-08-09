<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    public function show(){
        if(Auth::check()){
            return redirect('/home');
        }
        return view('auth.login');
    }
    //validate credentials for redirect to login
    public function login(LoginRequest $request){
        $credentials = $request->getcredentials();

        if(!Auth::validate($credentials)){
            return redirect()->to('/login')->withErrors('Username and/or password is incorrect');
        }
        $user = Auth::getProvider()->retrieveByCredentials($credentials);

        Auth::login($user);

        return $this->authenticated($request, $user);
    }

    public function authenticated(Request $request, $user){
        return redirect('/home');
    }
}
