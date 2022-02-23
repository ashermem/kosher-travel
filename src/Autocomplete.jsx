import styled from "styled-components";
import {useCallback, useState} from "react";
import {citiesArray} from "./citesData";
import {useHistory} from "react-router-dom";

export const SearchBar = styled.input`
  justify-content: center;
  font-size: 30px;
  font-family: "Academy Engraved LET";
  text-align: right;
  width: 80%;
  height: 55px;
  margin-top: 95px;
  display: inline-block;
  border: 4px solid #658ccb;
  border-radius: 7px;
  box-sizing: border-box;
  padding: 7px 0;
  background-color: rgb(195, 221, 255);
  

  :focus {
    background-color: #ffffff;
    box-shadow: 0px 3px 5px 0px rgba(69, 42, 167, 0.5);
  }
`;

export const Autocomplete = () => {
    const history = useHistory();
    const [selectedCity, setSelectedCity] = useState(null)
    const [inputText, setInputText] = useState(null)
    const onChange = useCallback((e) => {
        if (e.target.value === "") {
            setInputText(null);
        }
        setInputText(e.target.value);
    },[])

    const onEnterClick = useCallback((e) => {
        if (e.keyCode === 13) {
            e.preventDefault();
            const selectedCityID = citiesArray.find(city => city.nameHebrew === inputText)?.id;
            history.push(`/Blog?id=${selectedCityID}`);
        }
    },[inputText]);

    return (
        <>
            <SearchBar dir="rtl" placeholder={"חפש עיר..."} onChange={onChange} onKeyDown={onEnterClick}/>
            {/*{selectedCity && <ul>*/}
            {/*    {citiesArray.map((city) => {*/}
            {/*        if (city.nameHebrew.includes(selectedCity)) {*/}
            {/*            return <li key={city.id}>{city.nameHebrew}</li>*/}
            {/*        }*/}
            {/*    })}*/}
            {/*</ul>}*/}
        </>
    )
}