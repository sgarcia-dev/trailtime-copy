import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
//import TextArea from '../../../app/common/form/TextArea';


class TrailCommentsForm extends Component {
    handleCommentSubmit = values => {
        /*const { addEventComment, reset, eventId, closeForm, parentId } = this.props;
        addEventComment(eventId, values, parentId);
        reset();
        if (parentId !== 0) {
            closeForm();
        }*/
    };

    render() {
        return (
            <form onSubmit={this.props.handleSubmit(this.handleCommentSubmit)}>
                <Field name="comment" type="text" component='textarea' rows={5} />
                <button>Add Comment</button>
            </form>
        );
    }
}

export default reduxForm({ form: 'comment' })(TrailCommentsForm);