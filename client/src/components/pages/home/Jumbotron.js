import React from 'react'

import './Jumbotron.scss'

function Jumbotron({ onChangeSearchBooks }) {
  return (
    <>
      <section className="home-page-top-section">
        <div className="home-page-top-section__main-text">
          <span>
            Buy &amp; Sell Textbooks from Canada’s <b>35+</b> Universities and
            Colleges
          </span>
        </div>

        <div className="home-page-top-section__small-caption mt-4">
          Buy and sell textbooks with ease and minimal effort using the
          latest technology!
        </div>

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
