import React, { Component } from 'react'
import API from '../utils/API';
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'

class Search extends Component {
    state = {

    }

    handleClick = (query)=>{
        API.search(query)
            .then((res)=>{
                
            })
    }

    render() {
        return (
            <div>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="search ml-5" />
                    <Button onClick={this.handleClick} variant="outline-primary">Search</Button>
                </Form>

            </div>
        );
    }
}

export default Search;