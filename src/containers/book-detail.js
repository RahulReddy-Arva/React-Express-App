import React, { Component } from 'react';
import { connect } from 'react-redux';


class BookDetail extends Component {
    render(){
        if(!this.props.book){
            return <div className='detail'> Select a book to get started. </div>
        }
        return (
            <div className = 'detail col-sm-8'>
                <h3>
                    Details for:
                </h3>
                <div> Title: {this.props.book.title} </div>
                <div> Pages: {this.props.book.pages} </div>
                <div className='polaroid'> <img src={this.props.book.imageURL} class="img-rounded" height='350' width='350'/>
                    <div className='container cont'> {this.props.book.title} </div>
                </div>
        </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        book: state.activeBook
    };
}

export default connect(mapStateToProps)(BookDetail);