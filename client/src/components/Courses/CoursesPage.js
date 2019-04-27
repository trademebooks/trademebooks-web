import React, {Component} from "react";
import {connect} from "react-redux";
import * as courseActions from "../../redux/actions/courseActions";
import PropTypes from "prop-types";

class CoursesPage extends Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            course: {
                title: ""
            }
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const course = {
            title: event.target.value
        };

        this.setState({
            course
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        // we have to call this.props.dispatch to dispatch an action, else else just calling
        // courseActions.createCourse is NOT enough
        this.props.createCourse(this.state.course);
    }

    render() {
        return (
            <div>
                <div>Courses Page</div>
                <div>Add a Course</div>
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <input type="text"
                               onChange={this.handleChange}
                               value={this.state.course.title}
                        />
                        <input type="Submit" value="Save"/>
                    </form>

                    <div>
                        {this.props.courses.map(course => (
                            <div key={course.title}>{course.title}</div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }

}

CoursesPage.propTypes = {
    courses: PropTypes.array.isRequired,
    createCourse: PropTypes.func.isRequired,
};

function mapStateToProps(state, ownProps) {
    return {
        courses: state.courses
    }
}

const mapDispatchToProps = {
    createCourse: courseActions.createCourse
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CoursesPage);