import React from 'react'
import { Link } from 'react-router-dom'

const NavQuotes = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-warning">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Quotes</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/search">AddQuotes</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/search">SearchQuotes</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/delete">Deletequotes</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/viewAll">Viewquotes</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
        </div>
    )
}

export default NavQuotes