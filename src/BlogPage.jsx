import styled from "styled-components";
import { WebsiteHeader} from "./HomePage";
import {useParams, useLocation, useHistory} from "react-router-dom";
import {citiesArray} from "./citesData";
import React from "react";
import { Autocomplete } from "./Autocomplete";

const BlogContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

const BlogImg = styled.img`
  align-self: flex-start;
  width: 420px;
  height: 350px;
  margin-top: 200px;
  margin-left: 200px;
  float: left;
  position: absolute;
  z-index: -1;
  border-radius: 5px;
`;

const CityTitle = styled.div`
  font-family: 'Bellefair', serif;
  font-size: 72px;
  align-self: flex-end;
  margin: 30px 100px 0 0;
`;

const CityText = styled.div`
  font-family: "Al Bayan";
  font-size: 24px;
  width: 750px;
  align-self: flex-end;
  margin: 30px 100px 0 0;
`;

function useQuery() {
    const { search } = useLocation();

    return React.useMemo(() => new URLSearchParams(search), [search]);
}

export const BlogPage = () => {

    const history = useHistory();
    const myId = parseInt(useQuery().get("id"));
    const currentCity = citiesArray.find( city => city.id === myId);

    return (
        <BlogContainer>
            <WebsiteHeader onClick={() => history.push(`/Home`)}>כיפת השמיים</WebsiteHeader>
            <Autocomplete />
            <BlogImg src={currentCity.imgSrc} />
            <CityTitle>{currentCity.nameHebrew}</CityTitle>
            <CityText>{currentCity.article}</CityText>
        </BlogContainer>

    )
}