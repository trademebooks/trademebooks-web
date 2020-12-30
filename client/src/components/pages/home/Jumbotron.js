import React from 'react'

import './Jumbotron.scss'

function Jumbotron({ onChangeSearchBooks }) {
  return (
    <>
      <section className="home-page-top-section">
        {/* <div className="home-page-top-section__main-text">
          <span>
            Buy & Sell Textbooks from Canada’s <b>35+</b> Universities and
            Colleges
          </span>
        </div>

        <div className="home-page-top-section__small-caption mt-4">
          Buying and sell textbooks with ease and with minimal effort using the
          latest technology!
        </div> */}

        <h2>Welcome to <strong style={{color: "var(--primary-dark-color)"}}>YiChen's</strong> Bookstore</h2>
        <i class="fas fa-map-marker-alt" style={{fontSize: "200%", height: "150%", color: "var(--primary-dark-color)"}}></i>
        Located in:
        North York, Toronto

        <i class="fas fa-graduation-cap" style={{fontSize: "200%", height: "150%", color: "var(--primary-dark-color)"}}></i> 
        Selling books for:
        University of Toronto Scarborough

        <div className="home-search-box">
          <form>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Search book titles, authors, ISBN numbers, schools, and course codes..."
                onChange={onChangeSearchBooks}
              />
            </div>
          </form>
        </div>
      </section>
    </>
  )
}

export default Jumbotron
