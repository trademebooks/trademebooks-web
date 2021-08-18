import React from 'react'
import { MDBRow, MDBCol, MDBContainer } from 'mdbreact'
import metags from '../../../config/metags'
import MetaDecorator from '../../utils/MetaDecorator'
import yichenImage from './images/yichen.png'
import cedricImage from './images/cedric.png'

const About = () => {
  return (
    <>
      <MetaDecorator
        description={metags.aboutPage.description}
        title={metags.aboutPage.title}
      />
      <div className="header-container text-center">
        <h1 className="font-weight-bold">About Us</h1>
      </div>
      <MDBContainer className="mt-4">
        <MDBRow className="justify-content-center">
          <MDBCol xs="4" sm="2" className="text-center m-2">
            <div>
              <img
                src={yichenImage}
                alt="Yichen Zhu"
                className="img-thumbnail"
              />
            </div>
            <div className="mt-2">
              <span>
                Yichen Zhu (
                <a
                  href="https://www.linkedin.com/in/yichenzhu1337/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
                )
              </span>
            </div>
          </MDBCol>
          <MDBCol xs="4" sm="2" className="text-center m-2">
            <div>
              <img
                src={cedricImage}
                alt="Cedric Mosdell"
                className="img-thumbnail"
              />
            </div>
            <div className="mt-2">
              <span>
                Cedric Mosdell (
                <a
                  href="https://www.linkedin.com/in/cedricmosdell/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
                )
              </span>
            </div>
          </MDBCol>
        </MDBRow>
        <MDBRow className="justify-content-center mt-2">
          <MDBCol md="8">
            <section>
              <p>
                It was the summer of 2013, Cedric had just finished his first
                year of Engineering at McMaster University. He wanted to sell
                his old textbooks and course materials from the previous year,
                but found the other platforms at the time such as{' '}
                <em>Facebook Groups</em>, <em>Craigslist</em>, and{' '}
                <em>Kijiji</em> were all too clunky and hard-to-use. He found
                that those platforms were not only hard to post books to sell,
                they were also hard to search for specific books to buy.
              </p>
              <p>
                Cedric would then go on to search for other online platforms to
                buy and sell his textbooks. Eventually, he found{' '}
                <a
                  href="http://tusbe.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <strong>tusbe.com</strong>
                </a>
                . Unfortunately, tusbe was only for Toronto-based universities
                like <em>UofT</em>, <em>Ryerson</em>, and <em>York</em>.
              </p>
              <p>
                On one hot summer day, Cedric and Yichen had a friendly game of
                ping pong, when Cedric realized that Yichen actually studied at
                UofT - so he told him about his problem.
              </p>
            </section>

            <section className="bg-light">
              <p>
                <strong>Cedric: </strong>"I've been trying to buy used textbooks
                and could never find the best one with the cheapest price, even
                when I do find it, the quality of the book is way below what the
                person listed."
              </p>
              <p>
                <strong>Yichen: </strong>"Yeah, that's why you should just use{' '}
                <a
                  href="http://tusbe.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <strong>tubse</strong>.
                </a>
                "
              </p>
              <p>
                <strong>Cedric: </strong>"I would, but I go to Mac!"
              </p>
              <p>
                <strong>Yichen: </strong>"Oh, right... well... sucks to be you
                then I guess."
              </p>
              <p>
                <strong>Cedric: </strong>"I know! Why don't we get create our
                own version of tusbe, let's call it{' '}
                <a
                  href="https://www.musbe.ca"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <strong>musbe</strong>
                </a>
                !"
              </p>
              <p>
                <strong>Yichen: </strong>"What's in it for me?"
              </p>
              <p>
                <strong>Cedric: </strong>"You can put it on your resume, and
                I'll teach you how to play ping pong!"
              </p>
              <p>
                <strong>Yichen: </strong>"Deal!"
              </p>
            </section>

            <section>
              <p>
                And so began the long journey of creating{' '}
                <a
                  href="https://www.musbe.ca"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <strong>musbe.ca</strong>
                </a>
                ...
              </p>
              <p>
                On August 23rd, 2014, on Yichen's birthday, Cedric and Yichen
                would launch{' '}
                <a
                  href="https://www.musbe.ca"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <strong>musbe</strong>
                </a>
                ; the world of student textbook exchange would never be the same
                ever again.
              </p>
              <p>
                The 2 posted to about a dozen McMaster-based Facebook groups and
                told all of their old high school friends of the new book
                exchange website that they created for McMaster students.
              </p>
              <p>
                <strong>
                  <em>
                    Within the first hour, over 100 students had signed up and
                    over 200 listings were posted. And within the first day,
                    over 1000 users had signed up.
                  </em>
                </strong>
              </p>
              <p>
                Ever since that moment, Cedric and Yichen vowed to create a new
                and improved version of musbe so that no student will ever have
                trouble buying and/or selling textbooks ever again. Thus...{' '}
                <a href="/">
                  <strong>trademebooks.com</strong>
                </a>{' '}
                was born.
              </p>
            </section>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  )
}

export default About
