import React, {Component} from 'react';
import {connect} from 'react-redux';

import './PostBook.scss';
import '../../css/global.css'

import PostBookForm from './PostBookForm/PostBookForm';

class PostBook extends Component {
    constructor(props) {
        super(props);

        this.state = {
            quantity: "",
        };

        this.onClick = this.onClick.bind(this);
    }

    onClick(e) {
        console.log("clicking");
        this.setState({
            [e.target.name]: e.target.value
        });
    }


    render() {

        return (
            <div id="post-book">
                <div id="header-container">
                    <h1>Post Your Book</h1>
                </div>

                <div id="select-quantity" className="section">
                    <p className="section-header">SELECT A QUANITITY</p>
                    <div id="select-quantity-options">
                        <button name="quantity" value="IND" onClick={this.onClick} className={this.state.quantity === 'IND' ? 'selected'  : ''}>Individual Book</button>
                        <button name="quantity" value="GROUP" onClick={this.onClick} className={this.state.quantity === 'GROUP' ? 'selected' : ''}>Group of Books</button>
                    </div>
                </div>

                <div id="search-book" className="section">
                    <p className="section-header">SEARCH FROM OVER 25 MILLION BOOKS</p>
                    
                    <div id="search-box">
                        {// replace this with s search component
                        }
                        <input type="text"/>
                    </div>
                    <p>Can't find your book? <a href="">Create Listing Manually</a></p>
                </div>

                <div id="post-book-form-container" className="section">
                    <PostBookForm></PostBookForm>
                </div>

                <form id="university-form-container" className="section">

                    <table>
                        <tbody>
                            <tr>
                                <td >School:</td>
                                <td ><input type="text" name="school" className="full-width" /></td>
                            </tr>
                            <tr>
                                <td >Course:</td>
                                <td ><input type="text" name="course" /></td>
                            </tr>
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
                </form>

                
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
