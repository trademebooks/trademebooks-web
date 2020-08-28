import React, { Component } from 'react';
import { connect } from 'react-redux';

import { MDBAutocomplete } from 'mdbreact';

import './PostBook.scss';

import SearchBook from './SearchBook';
import PostBookForm from './PostBookForm';

class PostBook extends Component {
    constructor(props) {
        super(props);

        this.state = {
            quantity: "",
            books: [{}],
            courses: [""]
        };

        this.onClick = this.onClick.bind(this);
        this.addCourse = this.addCourse.bind(this);
        this.removeCourse = this.removeCourse.bind(this);
        this.addBook = this.addBook.bind(this);
        this.onChangeCourse = this.onChangeCourse.bind(this);
    }

    onClick(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    addBook(e) {
        this.setState({
            books: [...this.state.books, {}]
        });
    }

    addCourse(e) {
        e.preventDefault();
        this.setState({
            courses: [...this.state.courses, ""]
        });
    }

    removeCourse(i) {
        let dupe = Array.from(this.state.courses);
        dupe.splice(i, 1);
        console.log(dupe);
        this.setState({
            courses: dupe
        });
    }
    onChangeCourse(i, event) {
        let courses = this.state.courses.slice(); 
        courses[i] = event.target.value;
        this.setState({courses: courses}); 
    }

    render() {
        let courses = this.state.courses.map((course, i) => {
            let currBtn = i !== 0 ?
                <button type="button" className="manip-course-btn" onClick={() =>this.removeCourse(i)}>X</button> :
                <button type="button" className="manip-course-btn" onClick={this.addCourse}>Add Another Course</button>

            return <tr>
                <td >{i !== 0 ? '' :'Course(s):'}</td>
                <td >
                    <input type="text" name="course" value={course} onChange={(e) => this.onChangeCourse(i, e)} />
                    
                    {currBtn}
                </td>
            </tr>
        });

        let addBookBtn;

        if (this.state.quantity === "GROUP") {
            addBookBtn = <button type="button" onClick={() =>this.addBook()}>Add Another Book</button>
            
        }
        let postBookForms = this.state.books.map((book, i) => {
            return <PostBookForm key={i}></PostBookForm>
        });

        return (
            <div className="post-book">
                <div id="header-container">
                    <h1>Post Your Book</h1>
                </div>

                <div className="section select-quantity">
                    <p className="section-header">SELECT A QUANITITY</p>
                    <div id="select-quantity-options">
                        <button name="quantity" value="IND" onClick={this.onClick} className={this.state.quantity === 'IND' ? 'selected'  : ''}>Individual Book</button>
                        <button name="quantity" value="GROUP" onClick={this.onClick} className={this.state.quantity === 'GROUP' ? 'selected' : ''}>Group of Books</button>
                    </div>
                </div>

                <div className="section search-book-container">
                    <div className="section-header">
                        <p>SEARCH FROM OVER 10,000 BOOKS</p>
                    </div>
                    <div className="search-box">
                        <SearchBook></SearchBook>
                    </div>
                    <div className="create-new-listing">
                        <p>Can't find your book? <a href="/">Create Listing Manually</a></p>
                    </div>
                </div>

                {/* <div id="post-book-form-container" >
                    {postBookForms}
                    {addBookBtn}
                </div> */}

                {/* <form className="section university-form-container">
                    <table>
                        <tbody>
                            <tr>
                                <td >School:</td>
                                <td ><input type="text" name="school" className="full-width" /></td>
                            </tr>

                            {courses}
                            <tr>
                                <td >Price:</td>
                                <td ><input type="number" name="price" /></td>
                            </tr>
                            <tr>
                                <td >Description:</td>
                                <td ><textarea rows="5" name="desc" className="full-width" /></td>
                            </tr>
                            <tr>
                                <td >Location:</td>
                                <td ><input type="text" name="location" className="full-width" /></td>
                            </tr>
                        </tbody>
                    </table>
                </form> */}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {};
}

export default connect(
    mapStateToProps,
)(PostBook);
