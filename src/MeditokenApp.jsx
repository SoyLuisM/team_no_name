export const MeditokenApp = ()=>{
    return (
        <>
            <nav class="navbar navbar-expand-lg bg-dark" >
                <img src="/icono.png" class="d-block img_prueba" alt="..." />
                <div class="container-fluid ">
                
                    
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon text-white"></span>
                    </button>
                    <div class="collapse navbar-collapse " id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0 ">
                            <li class="nav-item">
                            <a class="nav-link text-white " aria-current="page" href="#">Inicio</a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link text-white" aria-current="page" href="#">Conocenos</a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link text-white" aria-current="page" href="#">Demo</a>
                            </li>
                        </ul>
                    
                    </div>
                </div>
            </nav>

            <div id="carouselExampleAutoplaying" class="carousel slide carousel-dark" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active opacity-75">
                    <img src="/foto_1.jpg" class="d-block w-100" alt="..." />
                    <div class="carousel-caption d-none d-md-block">
                    <h5>MediToken</h5>
                    <p>Some representative placeholder content for the first slide.
                    Some representative placeholder content for the first slide.
                    </p>
                    </div>
                    </div>
                    <div class="carousel-item opacity-75">
                    <img src="/foto_2.jpg" class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item opacity-75">
                    <img src="/foto_3.jpg" class="d-block w-100" alt="..." />
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>

    
        </>
    );
}