import React, {useEffect, useState} from 'react';
import './App.scss';
import {useHttp} from '../Common/hooks/http.hook'
import {Input} from "./componets/Input";
import {CountriesList} from "./componets/CountriesList";
import {Loader} from "../Common/components/loader/loader";
import {Alert} from "../Common/components/Alert/Alert";
import {Title} from "./componets/Title";

const url = 'https://restcountries.eu/rest/v2/all'

function App() {
  const {loading, error, request, clearError} = useHttp()
  const [countryValue, setCountryValue] = useState('')
  const [filterCountry, setFilterCountry] = useState([])

  const loadCountries = async () => {
    try {
      const data = await request(url)
      filterCountries(data)
    } catch (e) {
      console.log(e)
    }
  }

  const filterCountries = (data) => {
    if(countryValue) {
      const value = countryValue.toLowerCase()
      const filter =  data.filter((country) => !country.name.toLowerCase().indexOf(value))
      setFilterCountry(filter)
    }
  }

  useEffect(() => {
    if(countryValue) {
      loadCountries()
    }
  }, [countryValue])

  const inputChange = (e) => {
    setCountryValue(e)
  }

  const contentResult = () => {
    return (
      <div>
        {filterCountry.length && countryValue
          ? <CountriesList filterCountry={filterCountry}/>
          : ''}

        {!filterCountry.length && countryValue && !error
          ?<div className='component-wrapper'>
            <Alert text='Country not found' className='primary'/>
          </div>
          : null}

        {error
          ? <div className='component-wrapper'>
              <Alert text={error} className='warning'/>
            </div>
          : null}
      </div>
    )
  }

  return (
    <div className="App">
      <Title/>
      <Input inputChange={inputChange}/>
      {loading
        ? <div className='component-wrapper'>
            <Loader/>
          </div>
        : contentResult()
      }
    </div>
  );
}


export default App;
