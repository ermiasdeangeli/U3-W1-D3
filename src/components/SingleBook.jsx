import React from 'react';
import Card from 'react-bootstrap/Card';
import {Component} from 'react';

class SingleBook extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: false
        };
    }

    handleBookClick = () => {
        this.setState(prevState => ({
            selected: !prevState.selected
        }));
    }

    render() {
        const { book } = this.props;
        const { selected } = this.state;

        return(
            <Card 
                style={{ 
                    width: '18rem', 
                    transform: selected ? 'rotateY(180deg)' : 'none',
                    transition: 'transform 0.6s'
                }}
                onClick={this.handleBookClick}
            >
                <Card.Img variant="top" src={book.img} />
                <Card.Body>
                    <Card.Title>{book.title}</Card.Title>
                </Card.Body>
            </Card>
        )
    }
}

export default SingleBook;