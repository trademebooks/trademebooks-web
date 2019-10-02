import React, {Component} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
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

        // this approach is called binding in the constructor
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const course = {
            ...this.state.course,
            title: event.target.value // with object spread, values on the right override those on the left
        }; // why do this? b.c we should treat react state as immutable

        this.setState({
            course // ES6 Syntax for object shorthand syntax
        });
    }

    handleSubmit(event) {
        event.preventDefault(); // keep it from posting back - tells browser to not go with the default behaviour

        // 1. debugger; -- test here

        // we have to call this.props.dispatch to dispatch an action, else else just calling
        // courseActions.createCourse is NOT enough
        this.props.createCourse(this.state.course);

        // Connect Container Component - video
        // https://app.pluralsight.com/course-player?clipId=894f080d-8786-4c09-ba83-5ceb355924f3
        //  -- this is the ugly way
        // this.props.dispatch(courseActions.createCourse(this.state.course))
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
                        <input type="submit" value="Save"/>
                    </form>

                    <div>
                        {this.props.courses.map(course => ( // why is it no this.state?
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
    //actions: PropTypes.object.isRequired,
};

// this function determines what state is passed to our component via props
function mapStateToProps(state, ownProps) {
    // be specific. Request only the data your components needs

    // 4. debugger; -- test here

    return {
        courses: state.courses
    }
}

// this lets us declare what actions to declare to our component on props
const mapDispatchToProps = {
    createCourse: courseActions.createCourse
};

/**
 * function mapDispatchToProps(dispatch) {
 *     return {
 *         createCourse: course => dispatch(courseActions.createCourse(course))
 *     }
 * }
 *
 * function mapDispatchToProps(dispatch) {
 *     return {
 *         actions: bindActionCreators(courseActions, dispatch) // we pass in all the actions from the courseActions.js
 *     }
 * }
 */

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CoursesPage);