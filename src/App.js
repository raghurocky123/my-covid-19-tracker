import React, { Component, Suspense } from 'react';
import Cards from "./components/Cards/Cards";
import Chart from "./components/Chart/Chart";
import CountryPicker from "./components/CountryPicker/CountryPicker";
import styles from "./App.module.css";
import {fetchData, fetchDailyData} from "./api";
import coronaImage from "./images/coronaimage.png"; 

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            data : {},
            country : ""
        }
    }
    

    async componentDidMount() {
        const fetchedData = await fetchData();

        this.setState({
            data : fetchedData
        })

        //console.log(this.state.data);
    }

    handleCountryChange = async (country) => {
        console.log(country);
        const fetchedData = await fetchData(country);

        this.setState({
            data : fetchedData,
            country
        })

        console.log(fetchedData);
    }

    render(){
        const {data, country} = this.state;

        return(
            <div className="container">
                <img src={coronaImage} style={{width : "370px", marginTop : "50px" , paddingBottom : "30px"}}alt="COVID-19"/>
                <Cards data={data}/>
                <CountryPicker handleCountryChange={this.handleCountryChange} />
                <Chart data={data} country={country}/>
            </div>
        )
    }

}


export default App;