import React, {useState, useEffect} from "react";
import { NativeSelect, FormControl } from "@material-ui/core";
import {fetchCountries} from "../../api";

const CountryPicker = ({handleCountryChange}) => {

    const [fetchedCountries, setCountries] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            setCountries(await fetchCountries());
        }

        fetchAPI();
    }, [setCountries])

    //console.log(fetchedCountries);

    return (
        <div>
         <FormControl className = "container" style={{width : "100%", marginBottom : "30px !important", paddingTop : "30px" }}>
             <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
                 <option value="">Globall</option>
                {fetchedCountries.map((country, i) => <option key={i} value={country} >{country}</option>)}
             </NativeSelect>
         </FormControl>
        </div>
    )
}

export default CountryPicker;