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
        this.selectCondition = this.selectCondition.bind(this);


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

    selectCondition(cond) {
        this.setState({
            condition: cond
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

        let conds = [
                        {name: "Poor", img: require("../../../images/assets/Poor_condition_default.png"), desc: "No damage, lightly used, no markings", imgSelected: require("../../../images/assets/Poor_condition.png")},
                        {name: "Fair", img: require("../../../images/assets/Fair_condition_default.png"), desc: "No damage, lightly used, no markings", imgSelected: require("../../../images/assets/Fair_condition.png")},
                        {name: "Good", img: require("../../../images/assets/Good_condition_default.png"), desc: "No damage, lightly used, no markings", imgSelected: require("../../../images/assets/Good_condition.png")},
                        {name: "Very Good", img: require("../../../images/assets/Verygood_condition_default.png"), desc: "No damage, lightly used, no markings", imgSelected: require("../../../images/assets/Verygood_condition.png")},
                        {name: "Like New", img: require("../../../images/assets/Likenew_condition_default.png"), desc: "No damage, lightly used, no markings", imgSelected: require("../../../images/assets/Likenew_condition.png")},
                    ];

        let condEl = [];
        conds.map((cond,i) => {
            condEl.push(
            <div class="condition">
                <p className="condition-title">{cond.name}</p>
                <img className="condition-img" src={this.state.condition === cond.name ? cond.imgSelected : cond.img } alt="" onClick={() => this.selectCondition(cond.name)}/>
                <p className="condition-desc">{cond.desc}</p>
            </div>
            )
        } )

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

                <div id="book-condition">
                    <p>Condition</p>

                    {condEl}
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
