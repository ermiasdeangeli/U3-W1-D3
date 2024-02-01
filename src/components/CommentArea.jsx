
import CommentsList from './CommentsList';
import AddComment from './AddComment';
import React, { Component } from 'react'

class CommentArea extends Component {
    state = {
        comments: []
    }

    componentDidMount() {
        fetch(`https://striveschool-api.herokuapp.com/api/comments`)
            .then(response => response.json())
            .then(data => this.setState({ comments: data }));
    }

    render() {
        return (
            <div>
                <CommentsList comments={this.state.comments} />
                <AddComment bookId={this.props.bookId} />
            </div>
        );
    }
}

export default CommentArea;
