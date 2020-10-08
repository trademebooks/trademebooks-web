import React, { useState } from 'react'

import './story.css'

const Story = () => {
  return (
    <div className="centerTexts" style={{ marginTop: '150px' }}>
      <div>
        <h3>WHY DID WE CREATE TMB - OUR STORY</h3>
      </div>
      <div>
        <p>The short story here...</p>
        <p>
          The summer of 2013, Cedric Mosdell had just finished his first year of
          engineering school at McMaster University. He wanted to sell his old
          textbooks and notes from the previous year, but found the other
          platforms at the time like Facebook Groups, Craigslist, and Kijiji all
          too clunky and user-unfriendly. He found that those platforms were not
          only hard to post books to sell, they were also hard to search for
          specific books to buy.
        </p>
        <p>
          Cedric searched online for platforms to buy and sell his textbooks and
          eventually found http://tusbe.com/. Unfortunately, tusbe was only for
          Toronto-based universities and colleges like UofT, Ryerson, and York.
        </p>
        <p>
          On one hot summer day, Cedric and Yichen had a friendly game of ping
          pong, when Cedric realized that Yichen went to UofT - so he told him
          about the problem.
        </p>
        <div className="closeDiv">
          <p className="closeP">
            <strong>Cedric: </strong>"I've been trying to buy used textbooks and
            could never find the best one with the cheapest
          </p>
          <p className="closeP" style={{ marginLeft: '60px' }}>
            price, even when I do find it, the quality of the book is way below
            what the person listed"
          </p>
          <p className="closeP">
            <strong>Yichen: </strong>"Yeah, that's why you should just use
            tubse.com!"
          </p>
          <p className="closeP">
            <strong>Cedric: </strong>"I would, but I go to McMaster!"
          </p>
          <p className="closeP">
            <strong>Yichen: </strong>"Oh, right... well... sucks to be you I
            guess"
          </p>
          <p className="closeP">
            <strong>Cedric: </strong>"I know! Why don't we get create our own
            version of tusbe, let's call it musbe!"
          </p>
          <p className="closeP">
            <strong>Yichen: </strong>"What's in it for me?"
          </p>
          <p className="closeP">
            <strong>Cedric: </strong>"You can put it on your resume, and I'll
            teach you how to play ping pong"
          </p>
          <p className="closeP">
            <strong>Yichen: </strong>"Deal!"
          </p>
        </div>
        <br />
        <p>And so began the long journey of creating musbe.ca. </p>
        <p>
          On August 23rd, 2014, on the day of Yichen's birthday, Cedric and
          Yichen would launch musbe.ca.
        </p>
        <p>
          The 2 posted to about a dozen McMaster-based Facebook groups and told
          all of their old high school friends of the new book exchange website
          that they created for McMaster students.
        </p>
        <p>
          Within the first hour, over 100 students had signed up and over 200
          listings were posted. And within the first day, over 1000 users had
          signed up.
        </p>
        <p>
          Ever since that moment, Cedric and Yichen vowed to create musbe 2.0.
          The next was to expand musbe to other different schools, and hence
          trademebooks were created.
        </p>
        <p>
          Cedric would then use the platform to sell his calculus book for 100
          dollars in a matter days!
        </p>
      </div>
    </div>
  )
}

export default Story
