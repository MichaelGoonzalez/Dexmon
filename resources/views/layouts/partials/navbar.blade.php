@auth
<nav class="navbar fixed-top bg-dark">
    <div class="container-fluid">
        <button class="btn btn-outline-success" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDark"
            aria-controls="offcanvasDark">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-person-fill"
                viewBox="0 0 16 16">
                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
            </svg>
        </button>
        <blockquote class="blockquote text-light">
            <p>Dexmon</p>
        </blockquote>
    </div>
</nav>

<div class="offcanvas offcanvas-start text-bg-dark" tabindex="-1" id="offcanvasDark"
    aria-labelledby="offcanvasDarkLabel">
    <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasDarkLabel">
            <figure class="text-center">
                <blockquote class="blockquote">
                    <p>{{auth()->user()->name ?? auth()->user()->username}}</p>
                </blockquote>
                <figcaption class="blockquote-footer">
                    Gotta Catch <cite title="Source Title">‘Em All!</cite>
                </figcaption>
            </figure>
        </h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
        <div>
            <a class="btn btn-outline-success" href="/logout" role="button">Logout</a>
        </div>
    </div>
</div>

@endauth
