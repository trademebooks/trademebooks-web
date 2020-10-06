import React from 'react';
import { MDBRow, MDBCol, MDBContainer } from 'mdbreact';

function About() {
  return (
    <>
      <div className="header-container text-center">
        <h2 className="font-weight-bold">About</h2>
      </div>
      <div className="mt-4">
        <MDBContainer>
          <MDBRow center={true}>
            <MDBCol>
              <h3>Our Story</h3>
              <p>
                The summer of 2013, Cedric Mosdell had just finished his first
                year of engineering school at McMaster University. He wanted to
                sell his old textbooks and notes from the previous year, but
                found the other platforms at the time like Facebook Groups,
                Craigslist, and Kijiji all too clunky and user-unfriendly. He
                found that those platforms were not only hard to post books to
                sell, they were also hard to search for specific books to buy.
                Cedric searched online for platforms to buy and sell his
                textbooks and eventually found http://tusbe.com/. Unfortunately,
                tusbe was only for Toronto-based universities and colleges like
                UofT, Ryerson, and York. On one hot summer day, Cedric and
                Yichen had a friendly game of ping pong, when Cedric realized
                that Yichen went to UofT - so he told him about the problem.
                Cedric: "I've been trying to buy used textbooks and could never
                find the best one with the cheapest price, even when I do find
                it, the quality of the book is way below what the person listed"
                Yichen: "Yeah, that's why you should just use tubse.com!"
                Cedric: "I would, but I go to McMaster!" Yichen: "Oh, right...
                well... sucks to be you I guess" Cedric: "I know! Why don't we
                get create our own version of tusbe, let's call it musbe!"
                Yichen: "What's in it for me?" Cedric: "You can put it on your
                resume, and I'll teach you how to play ping pong" Yichen:
                "Deal!" And so began the long journey of creating musbe.ca. On
                August 23rd, 2014, on the day of Yichen's birthday, Cedric and
                Yichen would launch musbe.ca. The 2 posted to about a dozen
                McMaster-based Facebook groups and told all of their old high
                school friends of the new book exchange website that they
                created for McMaster students. Within the first hour, over 100
                students had signed up and over 200 listings were posted. And
                within the first day, over 1000 users had signed up. Ever since
                that moment, Cedric and Yichen vowed to create musbe 2.0.
              </p>

              <p>
                The next was to expand musbe to other diferent sschools, and
                hence trademebooks was created.
              </p>

              <p>
                -Cedric used the platform to sell his calculus book for 100
                bucks
              </p>
            </MDBCol>
          </MDBRow>
          <MDBRow center={true}>
            <MDBCol>
              <h3>Team Team</h3>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    </>
  );
}

export default About;
