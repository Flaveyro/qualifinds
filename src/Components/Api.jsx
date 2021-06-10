/* eslint-disable array-callback-return */
import React from 'react'

import './Styles/Api.css'


function Api(props) {
    const [
        Country, setCountry
    ] = React.useState([])

    React.useEffect(() => {
        GET()
    }, [])

    const GET = async () => {
        const Data = await fetch('https://restcountries.eu/rest/v2/all')
        const ArrayData = await Data.json()
        setCountry(ArrayData)
    }

    return (
        <div className="row cardsContainer">
            { 
            Country.filter( (value) => {
                if (props.filter === " ") {
                    return value
                } else if ( 
                    value.name.toLowerCase().includes(props.filter.toLowerCase() 
                    ) ) {
                    return value
                }
            }).map(element => (
                <div className="col-sm-4" key={element.name}>
                    <div  className="card text-center cardMargin">
                        <div className="card-header">
                            <h5><strong>
                                  Country: 
                                </strong>{element.name}</h5>
                        </div>
                        <div className="card-body text-left">
                            <p className="region">
                                <strong>Region:</strong> {element.region}.
                            </p>

                            { ( typeof( element.currencies ) == 'object' )
                                ? 
                                    <p className="">
                                        <strong>Currency:</strong>
                                        {
                                            element.currencies.map(subItem => 
                                                <label key={subItem.code} className="card-info">
                                                    {subItem.name}.
                                                </label>
                                            )
                                        }
                                    </p>
                                :
                                null
                            }

                            { ( typeof( element.languages ) == 'object' )
                                ? 
                                    <p className="">
                                        <strong>Language:</strong>
                                        {
                                            element.languages.map(subItem => 
                                                <label key={subItem.iso639_1} className="card-info">
                                                    {subItem.name}.
                                                </label>
                                            )
                                        }
                                    </p>
                                :
                                null
                            }
 
                            <p className="">
                                <strong>
                                    Population:
                                </strong>  {element.population}
                            </p>

                    
                        </div>
                    </div>
                </div>
                ))
            }
        </div>
    )
}

export default Api;