import React, { useState, useEffect } from "react";
import { useNavigate, useParams, useLocation } from 'react-router-dom'
import axios from "axios";
const EditCountry = () => {
    ///here we want to get the id of the country from the url that send to this page
    const { id } = useParams();
    const navigate = useNavigate();
    ///we need this for the form to fill the data of the country
    const initialCountryState = {
        id: null,
        title: "",
        description: "",
        continent:"",
    };
    ///again we to initialize the country bc we only have the id
    const [Countries, setCountries] = useState(initialCountryState);
    const [submitted, setSubmitted] = useState(false);
    ///we want to call the fetchCountries function when the page is loaded
    useEffect(() => { fetchCountries(); }, [])
/// the function that get the data of the country from api
    const fetchCountries = async () => {

        let url = 'http://localhost:8000/api/Countrys/' + id;
        const result = await axios.get(url);
        setCountries(result.data)
    }
//// the function that get the data from the form on each input change we call this to get the data
    const handleInputChange = event => {
        const { name, value } = event.target;
        console.log(name, value);
        /// then we set the new data to the country
        setCountries({ ...Countries, [name]: value });
    };
/// we want to call the updateCountries function when the form is submitted
    const updateCountries = async () => {
        const config = {
            headers: {
                'Access-Control-Request-Headers': 'accept,accept-encoding, authorization, content-type, dnt,origin, user-agent, x-csrftoken,   x-requested-with',
                'Access-Control-Allow-Credentials': true,
                'Access-Control-Allow-Headers':
                'accept,accept-encoding, authorization, content-type, dnt,origin, user-agent, x-csrftoken,   x-requested-with'            }
        }
        var data = {
            title: Countries.title,
            description: Countries.description,
            continent:Countries.continent,
        };
        console.log(data);
        let url = 'http://localhost:8000/api/Countrys/' + id;
        /// console.log(data);
        await axios({
            method: 'PUT',
            url: `http://localhost:8000/api/Countrys/${id}/`,
            data: data,
            config: config
        }).then(response => {
            console.log(response.data);
            navigate("/CountryIndex");

        })


    }

    const newCountry = () => {
        setCountries(initialCountryState);
        setSubmitted(false);
    };
    return (<>
          
            <div className="submit-form">
                {submitted ? (
                    <div>
                        <h4>You submitted successfully!</h4>
                        <button className="btn btn-success" onClick={newCountry}>
                            Add
                        </button>
                    </div>
                ) : (
                    <div>
                        <div className="form-group">
                            <label htmlFor="Countries">Country</label>
                            <input
                                type="text"
                                className="form-control"
                                id="title"
                                required
                                defaultValue={Countries.title}
                                onChange={handleInputChange}
                                name="title"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="Countries_description">Description For Country</label>
                            <input
                                type="text"
                                className="form-control"
                                id="Country_description"
                                required
                                defaultValue={Countries.description}
                                onChange={handleInputChange}
                                name="description"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="Countries_Continent">Continent</label>
                            <input
                                type="text"
                                className="form-control"
                                id="Countries_Continent"
                                required
                                defaultValue={Countries.continent}
                                onChange={handleInputChange}
                                name="continent"
                            />
                        </div>
                        <button onClick={updateCountries} className="btn btn-success">
                            Submit
                        </button>
                    </div>
                )}

            </div>
        </>
    );
};

export default EditCountry;
