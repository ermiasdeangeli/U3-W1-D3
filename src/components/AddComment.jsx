import React, { Component } from 'react';

class AddComment extends Component {
    state = {
        text: '',
        rating: 1
    }

    handleInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();

        // Sostituisci con il tuo endpoint API effettivo
        fetch(`https://api.example.com/books/${this.props.bookId}/comments`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
        })
        .then(response => response.json())
        .then(data => console.log(data));
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input 
                    type="text" 
                    name="text" 
                    value={this.state.text} 
                    onChange={this.handleInputChange} 
                    placeholder="Add a comment" 
                />
                <input 
                    type="number" 
                    name="rating" 
                    value={this.state.rating} 
                    onChange={this.handleInputChange} 
                    min="1" 
                    max="5" 
                />
                <button type="submit">Submit</button>
            </form>
        );
    }
}

export default AddComment;