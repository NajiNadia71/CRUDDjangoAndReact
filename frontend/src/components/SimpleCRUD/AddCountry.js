import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const AddCountry = () => {
    const navigate = useNavigate();
    const initialCountryState = {
        id: null,
        title: "",
        description: "",
        continent:"",
    };
    const [Country, setCountry] = useState(initialCountryState);
    const [submitted, setSubmitted] = useState(false);

    const handleInputChange = event => {
        const { name, value } = event.target;
        setCountry({ ...Country, [name]: value });
    };

    const saveCountry = () => {
        var data = {
            title: Country.title,
            description: Country.description,
            continent:Country.continent,
        };
        console.log(data);
        axios.post('http://localhost:8000/api/Countrys/',

            {
                
                title: Country.title,
                continent: Country.continent,
                description: Country.description
            }

        )
            .then(response => {
                console.log(response);
                navigate("/CountryIndex");
            });   
    };

    const newCountry  = () => {
        setCountry(initialCountryState);
        setSubmitted(false);
    };
    return (
        <>
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
                            <label htmlFor="title">title</label>
                            <input
                                type="text"
                                className="form-control"
                                id="title"
                                required
                                defaultValue={Country.title}
                                onChange={handleInputChange}
                                name="title"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="country_description">country_description</label>
                            <input
                                type="text"
                                className="form-control"
                                id="country_description"
                                required
                                value={Country.description}
                                onChange={handleInputChange}
                                name="description"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="country_continent">country_continent</label>
                            <input
                                type="text"
                                className="form-control"
                                id="country_continent"
                                required
                                value={Country.continent}
                                onChange={handleInputChange}
                                name="continent"
                            />
                        </div>

                        <button onClick={saveCountry} className="btn btn-success">
                            Submit
                        </button>
                    </div>
                )}

            </div>
        </>
    );
};

export default AddCountry;
