<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HomeController extends Controller
{
    //redirect to home after validated users
    public function index(){
        return view('home.index');
    }
}
