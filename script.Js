let header = document.getElementsByTagName('header')[0].innerHTML = `
<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Tingeling</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="Index.html">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="Menu.html">Menu</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="About.html">About</a>
        </li>
      </ul>
    </div>
  </div>
</nav> `

document.getElementsByTagName('footer')[0].innerHTML = `

    <div class="text-center mt-3">
      <h5>Chef Tingeling</h5>
      <p>Telefon: 08-123 45 67 · E-post: info@cheftingeling.se</p>
      <p>Adress: Grev Turegatan 15, 114 46 Stockholm</p>
      <p>
        <strong>Öppettider:</strong><br>
        Tisdag – Torsdag: 17:00 – 23:00<br>
        Fredag – Lördag: 16:00 – 01:00<br>
        Söndag – Måndag: Stängt
      </p>
      <p>Organisationsnummer: 559412-3456</p>
      <p>Följ min resa på Instagram och Facebook</p>
    </div>
  </div>
</div>
`