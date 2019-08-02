import React, {Component} from 'react';
import {connect} from 'react-redux';

import './PostBookForm.scss';
import '../../../css/global.css'

class PostBookForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            image: "",
            title: "",
            authors: "",
            edition: "",
            isbn10: "",
            isbn13: "",
            condition: "",

            editable: true,

        };

        this.onChangeBook = this.onChangeBook.bind(this);
        this.toggleEditable = this.toggleEditable.bind(this);

    }

    onChangeBook(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    toggleEditable(e) {
        this.setState({
            editable: !this.state.editable
        });
    }


    render() {
        let form;
        if (this.state.editable) {
            form = <ul className="flex-outer">
            <li>
                <label for="first-name">Title:</label>
                <input type="text" className="book-title" name="title" onChange={this.onChangeBook} />
            </li>
            <li>
                <label for="last-name">Author(s):</label>
                <input type="text" className="book-author" name="author" onChange={this.onChangeBook} />
            </li>
            <li>
                <label for="email">ISBN-10:</label>
                <input type="text" className="isbn10" name="isbn10" onChange={this.onChangeBook} />
            </li>
            <li>
                <label for="phone">ISBN-13:</label>
                <input type="text" className="isbn13" name="isbn13" onChange={this.onChangeBook} />
            </li>
            <li>
                <label for="phone">Edition:</label>
                <input type="text" className="edition" name="edition" onChange={this.onChangeBook} />
            </li>
        </ul>
        } else {
            form = <ul className="flex-outer">
            <li>
                <label for="first-name">Title:</label>
                <p type="text" className="book-title" name="title">{this.state.title}</p>
            </li>
            <li>
                <label for="last-name">Author(s):</label>
                <p type="text" className="book-author" name="author">{this.state.authors}</p>
            </li>
            <li>
                <label for="email">ISBN-10:</label>
                <p type="text" className="isbn10" name="isbn10">{this.state.isbn10}</p>
            </li>
            <li>
                <label for="phone">ISBN-13:</label>
                <p type="text" className="isbn13" name="isbn13">{this.state.isbn13}</p>
            </li>
            <li>
                <label for="phone">Edition:</label>
                <p type="text" className="edition" name="edition">{this.state.edition}</p>
            </li>
        </ul>
        }

        let editOpt = !this.state.editable ? <p>Information does not look correct? <span onClick={this.toggleEditable}>Manually Edit</span></p> : <span></span>


        return (
            <div className="post-book-form">
                <div className="main-form">
                    <div className="post-book-img">
                        <img className="book-img" src="" alt=""/>
                        <p>Upload Image</p>
                    </div>

                    <form className="post-book-form-fields">
                        {form}
                    </form>

                    
                </div>
                {editOpt}

                <div className="book-condition">
                    
                </div>

                <button onClick={this.toggleEditable}>Save Changes</button>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {};
}

export default connect(
    mapStateToProps,
)(PostBookForm);
