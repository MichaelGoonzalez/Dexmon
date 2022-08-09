@extends('layouts.app-master')

@section('content')

@auth
<div id="main"></div>
<script src="{{ asset('js/app.js') }}" defer></script>
@endauth

@guest
<div class="card p-5 text-center" style="width: 25rem; margin-left: auto; margin-right: auto; margin-top: 50px;">
    <div class="card-body">
        <h5 class="card-title">DexMon</h5>
        <p class="card-text">welcome to the best page to see your favorite pokemons</p>
        <a href="/login" class="btn btn-primary">Sign Up</a> <a href="/register" class="btn btn-primary">Sign In</a>
    </div>
</div>
@endguest
@endsection
