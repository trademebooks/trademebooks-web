import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { toastr } from 'react-redux-toastr'

import { MDBTooltip } from 'mdbreact'

import './Book.scss'

import defaultBookImage from '../common/icons/sample-book.png'

import very_good_condition_green_image from './icons/Verygood_condition.png'
import Message_icon from './icons/Message_user.png'
import Location_icon from './icons/Location_icon.png'
import bookstoreIcon from './icons/bookstoreIcon.png'
import edit_icon from './icons/edit_icon.png'
import delete_icon from './icons/delete_icon.png'

import { deleteBookById } from '../../../actions/bookstore'

const Book = ({ book, editFlag, deleteBookById }) => {
  const date = new Date(book.createdAt)
  const datePosted = date.toLocaleDateString('en-CA', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  })

  const deleteBook = () => {
    const toastrConfirmOptions = {
      onOk: () => {
        console.log('OK: clicked')
        deleteBookById(book._id)
      },
      onCancel: () => console.log('CANCEL: clicked'),
      okText: 'Yes',
      cancelText: 'No'
    }
    toastr.confirm('Are you sure about that?', toastrConfirmOptions)
  }

  const conditions = {
    POOR: require('../../../img/condition_icons/Poor_condition.png'),
    FAIR: require('../../../img/condition_icons/Fair_condition.png'),
    GOOD: require('../../../img/condition_icons/Good_condition.png'),
    VERY_GOOD: require('../../../img/condition_icons/Verygood_condition.png'),
    LIKE_NEW: require('../../../img/condition_icons/Likenew_condition.png')
  }

  console.log()

  // console.log(
  //   conditions.find(condition => {
  //     return condition.type === [book.condition]
  //   })
  // )
  return (
    <div className="single-card mt-3">
      <div className="single-card-container">
        {/* Column 1 - Image --- start */}
        <div className="single-card-column-section-1">
          <div className="single-card__image-section">
            <img
              className="single-card-image"
              src={book.imageUrl ? book.imageUrl : defaultBookImage}
              alt="single card book"
            />
          </div>
        </div>
        {/* Column 1 - Image --- end   */}

        {/* Column 2 - start */}
        <div className="single-card-column-section-2">
          <div className="single-card-column-section-2__row-1">
            <span className="single-card__book-title">{book.title}</span>
            <span>&nbsp;</span>
            {book.edition ? (
              <span className="single-card__book-edition-container">
                <span className="single-card__book-edition">Edition</span>
                <span>&nbsp;</span>
                <span className="single-card__book-edition-number">
                  {book.edition}
                </span>
              </span>
            ) : (
              ''
            )}
          </div>

          <div className="single-card-column-section-2__row-2">
            <div>
              <span className="single-card__book-condition">
                <img
                  height="25px"
                  src={conditions[book.condition]}
                  alt={conditions[book.condition]}
                />
              </span>
            </div>

            {/* <div className="single-card__tags">
                            <span><a href="#tag">MCMASTER UNIVERSITY</a></span>
                            <span><a href="#tag">CIV358</a></span>
                            <span><a href="#tag">CIV5481</a></span>
                        </div> */}
          </div>

          <div className="single-card-column-section-2__row-3">
            {book.authors.length > 0 && (
              <span className="author-by">
                By <i>{book.authors.join(', ')}</i>
              </span>
            )}
          </div>

          <div className="single-card-column-section-2__row-4">
            <p>{book.description}</p>
          </div>

          {/*Card footer*/}
          <div className="single-card-column-section-2__row-5">
            {book.location && (
              <span>
                <img src={Location_icon} width="20px" alt="contact info card" />
                <span>&nbsp;</span>
                <span className="location"> {book.location}</span>
              </span>
            )}
          </div>
        </div>
        {/* Column 2 - end   */}

        <div className="flex-grow-1">&nbsp;</div>

        {/* Column 3 - start */}
        <div className="single-card-column-section-3">
          <div className="money">
            <small>$</small>
            <span className="">{book.price}</span>
          </div>
          <div>
            {editFlag ? (
              <a href={`/books/edit/${book._id}`}>
                <img src={edit_icon} alt="test" className="chat-image" />
              </a>
            ) : (
              <MDBTooltip domElement tag="span" placement="left">
                <span>
                  <a href={`/messages/${book.username}`}>
                    <img src={Message_icon} alt="test" className="chat-image" />
                  </a>
                </span>
                <span>{`Message ${book.username}`}</span>
              </MDBTooltip>
            )}
          </div>
          <div>
            {editFlag ? (
              <span onClick={deleteBook}>
                <a href="#">
                  <img
                    src={delete_icon}
                    alt="test"
                    className="bookstore-image"
                  />
                </a>
              </span>
            ) : (
              <div className="bookstore-username">
                <MDBTooltip domElement tag="span" placement="left">
                  <span>
                    <a href={`/bookstore/${book.username}`}>
                      <img
                        src={bookstoreIcon}
                        alt={`/bookstore/${book.username}`}
                        className="bookstore-image"
                      />
                    </a>
                  </span>
                  <span>{`${book.username}'s Bookstore`}</span>
                </MDBTooltip>
              </div>
            )}
          </div>
          <div>{datePosted}</div>
        </div>
        {/* Column 3 - end */}
      </div>
    </div>
  )
}

Book.propTypes = {
  book: PropTypes.object.isRequired,
  editFlag: PropTypes.bool.isRequired,
  deleteBookById: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {
  deleteBookById
}

export default connect(mapStateToProps, mapDispatchToProps)(Book)
