import axios from 'axios';
import React, { useState, useEffect } from 'react';
///import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';\

const CountryIndex = () => {
    // we want to call countries and do a Crud on them 
// so first we initialize the array of countries to an empty array
// which every thing going to happend on this array by a function named setCountries
        const [Countries, setCountries] = useState([])
   /// at first we fill the Countries from api
        const fetchCountries = async () => {
            const result = await axios.get('http://localhost:8000/api/Countrys/');
   // call the setCountries function to fill the Countries array with the data from api
            setCountries(result.data)
        }
    //we want to call the fetchCountries function when the page is loaded
        useEffect(() => {
            fetchCountries();
        }, [])
    // we want to delete a country from the Countries array
        function deleteCountries(id) {
            setCountries(Countries.map(x => {
                if (x.id === id) {
                    // isdeleting is a boolean to check if the country is deleted or not
                    x.isDeleting = true; }
                return x;
            }));
            // we want to delete the country from the api
            axios.delete(`http://localhost:8000/api/Countrys/${id}/`)
                .then(response => {
                    console.log(response);
                      // aftee delete we call this function to fill the Countries array again
                    fetchCountries();
                });
            }
    
    return (
        <div>
            <h1>Countries</h1>
            <Link to="/AddCountry" className="btn btn-sm btn-success mb-2">Add Country</Link>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th style={{ width: '30%' }}>Title</th>
                        <th style={{ width: '30%' }}>Description </th>
                        <th style={{ width: '30%' }}>continent </th>
                        <th style={{ width: '10%' }}></th>
                    </tr>
                </thead>
                <tbody>
                    {/* /// we want to loop on the Countries array and display the data */}
                    {Countries && Countries.map(c =>
                        <tr key={c.id}>
                            <td>{c.title}</td>
                            <td>{c.description}</td>
                            <td>{c.continent}</td>
                            <td style={{ whiteSpace: 'nowrap' }}>
{/* ///for every country we want to edit it we want ti send the id of Country to another page to edit it  */}
                                <Link to={`/EditCountry/${c.id}`} className="btn btn-sm btn-primary mr-1">Edit</Link>
                                {<button onClick={() => deleteCountries(c.id)} className="btn btn-sm btn-danger btn-delete-Country" disabled={c.isDeleting}>

                                    <span>Delete</span>

                                </button>}
                            </td>
                        </tr>
                    )}
                  
                    {Countries && !Countries.length &&
                        <tr>
                            <td colSpan="4" className="text-center">
                                <div className="p-2">No Countries To Display</div>
                            </td>
                        </tr>
                    }
                </tbody>
            </table>
        </div>

    );
};

export default CountryIndex;