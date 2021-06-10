/* eslint-disable array-callback-return */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import Api from './Api';

import './Styles/SearchBar.css';
import logo from './Styles/img/brand.svg'

function SearchBar (){
    useEffect(() => {
        GET()
    }, []);

    const [
        contryName, setContriesNames
    ] = useState([])
    const [
        Value, setValue
    ] = useState("");
    const [
        iFilter, setFilter
    ] = useState("");
    const [
        character, setCharacter
    ] = useState(0);
    const [
        input, setInput
    ] = useState(false);
    const wrapper = React.useRef(null);

    const GET = async () => {
        const Data = await fetch('https://restcountries.eu/rest/v2/all')
        const ArrayData = await Data.json()
        setContriesNames(ArrayData)
    }

    //barSearchitem
    const handleEraseKeyPress = event => {
        if (event.keyCode === 5){
            setCharacter( 1 )
        }else {
            setCharacter(Value.length)
        }
    }

    //selector items
    function handleClickOverList (itemName) {
        setValue(itemName)
        setInput(false)
    }

    function refreshPage(){ 
        window.location.reload(); 
    }

    return(
        <div >
            <header className="header" >
                <nav className="navbar navbar-light bg-light">
                    <div className="container-fluid" ref={wrapper}> 
                        <Link className="navbar-brand" to="/" type="button" onClick={ refreshPage }>
                            <img className="navbar-brand-img" src={logo} alt="Logo" />
                        </Link>
                        <form className="d-flex">
                            <input 
                            type="text"
                                className="form-control mr-15"
                                placeholder="Search"
                                value={Value}
                                onChange={event => {setValue(event.target.value)} }
                                onKeyDown={handleEraseKeyPress}
                                onFocus={() => {setInput(true)} }
                            />

                            <Link to="/"
                                className="btn btn-primary" 
                                onClick={event => {setFilter(Value)}  }
                                type="button">Search
                            </Link>
                        </form>

                        {
                        character > 2 && input && (
                            <div className="dropdown">
                                <ul className="list-group">
                                    {contryName.filter( (value) => {
                                        if ( Value === "" ) {
                                            return value
                                        } else if ( value.name.toLowerCase().includes(Value.toLowerCase() ) ) {
                                            return value
                                        }
                                    }).map((elment, key) => {
                                        return <li key={key} value={elment.name}
                                            className="list-group-item"
                                            onClick={() => handleClickOverList(elment.name)}
                                            >
                                            {elment.name}
                                        </li>
                                    })}
                                </ul>
                            </div>
                        )}
                    </div>
                </nav>
                <Api filter={iFilter} ></Api>
            </header>
          
        </div> 
    )
}

export default SearchBar;