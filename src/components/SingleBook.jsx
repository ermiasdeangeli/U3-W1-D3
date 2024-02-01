import React from 'react';
import Card from 'react-bootstrap/Card';
import CommentArea from './CommentArea';

class SingleBook extends React.Component {
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
            <div onClick={this.handleBookClick}>
                <Card 
                    style={{ 
                        width: '18rem', 
                        border: selected ? '3px solid red' : 'none' 
                    }}
                >
                    <Card.Img variant="top" src={book.img} />
                    <Card.Body>
                        <Card.Title>{book.title}</Card.Title>
                    </Card.Body>
                </Card>
                {selected && <CommentArea bookId={book.id} />}
            </div>
        )
    }
}

export default SingleBook;