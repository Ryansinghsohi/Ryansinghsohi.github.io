let header = document.getElementsByTagName('header')[0].innerHTML= `
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container">
    <a class="navbar-brand" href="Index.html">Chef Tingeling</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navMenu" aria-controls="navMenu" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navMenu">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item"><a class="nav-link" href="index.html">Hem</a></li>
        <li class="nav-item"><a class="nav-link" href="Menu.html">Meny</a></li>
        <li class="nav-item"><a class="nav-link" href="About.html">Om</a></li>
      </ul>
      <div class="d-flex align-items-center">
        <a href="Index.html#booking" class="btn btn-warning text-dark">Boka bord</a>
      </div>
    </div>
  </div>
</nav>`;

  let footer = document.getElementsByTagName('footer')[0].innerHTML = `
    <div class="footer bg-dark text-light py-4 border-top">
      <div class="container">
        <div class="row">
          <div class="col-md-4 mb-3">
            <h5>Chef Tingeling</h5>
            <p class="mb-0">Grev Turegatan 15, 114 46 Stockholm</p>
            <p class="mb-0">Telefon: 08-123 45 67</p>
            <p class="mb-0">E-post: info@cheftingeling.se</p>
          </div>
          <div class="col-md-4 mb-3">
            <h6>Öppettider</h6>
            <p class="mb-0">Tisdag - Torsdag: 17:00 - 23:00</p>
            <p class="mb-0">Fredag - Lördag: 16:00 - 01:00</p>
            <p class="mb-0">Söndag - Måndag: Stängt</p>
          </div>
          <div class="col-md-4 mb-3">
            <h6>Följ</h6>
            <p class="mb-0">Följ min resa på Instagram och Facebook</p>
            <p class="small mt-2 mb-0">Organisationsnummer: 559412-3456</p>
          </div>
        </div>
      </div>
    </div>`;