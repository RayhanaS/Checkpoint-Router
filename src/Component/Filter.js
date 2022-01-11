import React  from 'react'
import Rate from './Rate';
import {InputGroup, FormControl } from 'react-bootstrap'

function Filter({setSearch,setRating,rating}) {
    
    return (
        <div className="filter">
    <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1"><i class="fas fa-search"></i></InputGroup.Text>
        <FormControl
        placeholder="Search Movie by Name"
        aria-label="Username"
        aria-describedby="basic-addon1"

        onChange={(e) => setSearch((e.target.value))}
        />
    </InputGroup>
             <Rate rating={rating} setRating={setRating}/>
        </div>
    )
}

export default Filter
