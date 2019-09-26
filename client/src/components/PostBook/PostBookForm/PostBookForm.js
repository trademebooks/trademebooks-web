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
            authors: [""],
            edition: "",
            isbn10: "",
            isbn13: "",
            condition: "",

            editable: true,

        };

        this.onChangeBook = this.onChangeBook.bind(this);
        this.toggleEditable = this.toggleEditable.bind(this);
        this.selectCondition = this.selectCondition.bind(this);
        this.addAuthor = this.addAuthor.bind(this);
        this.onChangeAuthor = this.onChangeAuthor.bind(this);
        this.removeAuthor = this.removeAuthor.bind(this);
    }

    onChangeBook(e) {
        console.log("asdasd");
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

    addAuthor(e) {
        e.preventDefault();
        this.setState({
            authors: [...this.state.authors, ""]
        });
    }

    removeAuthor(i) {
        let dupe = Array.from(this.state.authors);
        dupe.splice(i, 1);
        this.setState({
            authors: dupe
        });
    }

    onChangeAuthor(i, event) {
        let authors = this.state.authors.slice();
        authors[i] = event.target.value;
        this.setState({authors: authors});
    }


    render() {
        let authors = this.state.authors.map((author, i) => {
            let currBtn = i !== 0 ?
                <button type="button" className="add-remove-author" onClick={() => this.removeAuthor(i)}>X</button> :
                <button type="button" className="add-remove-author" onClick={this.addAuthor}>Add Another Author</button>;

            return <tr>
                <td>{i !== 0 ? '' : 'Author(s):'}</td>
                <td>
                    <input type="text" name="author" value={author} onChange={(e) => this.onChangeAuthor(i, e)}/>

                    {currBtn}
                </td>
            </tr>
        });

        let form;
        if (this.state.editable) {
            form =
                <table>
                    <tbody>
                    <tr>
                        <td>Title:</td>
                        <td><input type="text" name="title" onChange={this.onChangeBook} value={this.state.title}
                                   className="full-width"/></td>
                    </tr>
                    {authors}

                    <tr>
                        <td>ISBN-10:</td>
                        <td><input type="text" name="isbn10" onChange={this.onChangeBook} value={this.state.isbn10}
                                   className="full-width"/></td>
                    </tr>
                    <tr>
                        <td>ISBN-13:</td>
                        <td><input type="text" name="isbn13" onChange={this.onChangeBook} value={this.state.isbn13}
                                   className="full-width"/></td>
                    </tr>
                    <tr>
                        <td>Edition:</td>
                        <td><input type="text" name="edition" onChange={this.onChangeBook} value={this.state.edition}
                                   className="full-width"/></td>
                    </tr>
                    </tbody>
                </table>
        } else {
            form =
                <table>
                    <tbody>
                    <tr>
                        <td>Title:</td>
                        <td><p type="text" className="book-title" name="title">{this.state.title}</p></td>
                    </tr>
                    <tr>
                        <td>Author(s):</td>
                        <td><p type="text" className="book-author" name="author">{this.state.authors}</p></td>
                    </tr>
                    <tr>
                        <td>ISBN-10:</td>
                        <td><p type="text" className="isbn10" name="isbn10">{this.state.isbn10}</p></td>
                    </tr>
                    <tr>
                        <td>ISBN-13:</td>
                        <td><p type="text" className="isbn13" name="isbn13">{this.state.isbn13}</p></td>
                    </tr>
                    <tr>
                        <td>Edition:</td>
                        <td><p type="text" className="edition" name="edition">{this.state.edition}</p></td>
                    </tr>
                    </tbody>
                </table>

        }

        let editOpt = !this.state.editable ?
            <p>Information does not look correct? <span onClick={this.toggleEditable}>Manually Edit</span></p> :
            <span></span>

        let conds = [
            {
                name: "Poor",
                img: require("../../../images/assets/Poor_condition_default.png"),
                desc: "No damage, lightly used, no markings",
                imgSelected: require("../../../images/assets/Poor_condition.png")
            },
            {
                name: "Fair",
                img: require("../../../images/assets/Fair_condition_default.png"),
                desc: "No damage, lightly used, no markings",
                imgSelected: require("../../../images/assets/Fair_condition.png")
            },
            {
                name: "Good",
                img: require("../../../images/assets/Good_condition_default.png"),
                desc: "No damage, lightly used, no markings",
                imgSelected: require("../../../images/assets/Good_condition.png")
            },
            {
                name: "Very Good",
                img: require("../../../images/assets/Verygood_condition_default.png"),
                desc: "No damage, lightly used, no markings",
                imgSelected: require("../../../images/assets/Verygood_condition.png")
            },
            {
                name: "Like New",
                img: require("../../../images/assets/Likenew_condition_default.png"),
                desc: "No damage, lightly used, no markings",
                imgSelected: require("../../../images/assets/Likenew_condition.png")
            },
        ];

        let condEl = [];
        conds.map((cond, i) => {
            condEl.push(
                <div key={i} className="condition">
                    <p className="condition-title">{cond.name}</p>
                    <img className="condition-img"
                         src={this.state.condition === cond.name ? cond.imgSelected : cond.img}
                         alt={cond.name} name="condition" cond={cond.name}
                         onClick={() => this.selectCondition(cond.name)}/>
                    <p className="condition-desc">{cond.desc}</p>
                </div>
            )
        });

        return (
            <div className="post-book-form">
                <div className="main-form">
                    <div className="post-book-img">
                        <img className="book-img" src="" alt=""/>
                        <label htmlFor="upload-img" id="upload-btn">Upload Image</label>
                        <input id="upload-img" type="file"/>
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
