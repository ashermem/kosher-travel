import './App.css';
import styled from "styled-components";
import {Amsterdam, Athene, London, NewYork, Paris, Rome} from "./citesData";
import {useCallback} from "react";
import { useHistory } from "react-router-dom";
import { Autocomplete } from "./Autocomplete";

export const Credit = styled.div`
  margin-top: 24px;
  font-family: "Academy Engraved LET";
  font-size: 28px;
  text-align: center;
  color: #282c34;
`;

const HomeContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

export const WebsiteHeader = styled.div`
  cursor: pointer;
  top: 0;
  font-size: 56px;
  font-family: monospace;
  width: 100%;
  height: 70px;
  font-weight: 900;
  color: #73cae0;
  text-align: center;
  background-color: #3f3fb3;
  position: fixed;
  box-shadow: 2px 2px 4px gray;
  z-index: 999;
`;

export const CityImg = styled.img`
  width: 100%;
  height: 130px;
`

export const CityName = styled.div`
  float: right;
  margin: 8px 18px 0 0;
  font-size: 22px;
  font-family: 'Bellefair', serif;
  color: #282c34;
`

export const CityDesc = styled.div`
  width: 80%;
  font-size: 16px;
  float: right;
  margin: 10px 18px 0 0;
  font-family: "Al Bayan";
  text-align: right;
  color: tan;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: normal;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
`;

export const CardRow = styled.div`
  margin-top: 30px;
  width: 80%;
  display: flex;
  flex-direction: row;
  flex-flow: row wrap;
  column-gap: 24px;
  row-gap: 40px;
  justify-content: space-between;
`;
export const CityCard = styled.div`
    min-width: 350px;
    max-width: 420px;
    flex-grow: 3;
    flex-shrink: 3;
    height: 300px;
    background-color: #f2fcfe;
    border-radius: 6px 6px;
    box-shadow: 2px 2px 6px #3384af;
    :hover {
      box-shadow: 8px 8px 7px gray;
      transform: translateY(-4px);
    }
`;

export const AddToBlogButton = styled.button`
    float: left;
    display: flex;
    position: absolute;
    align-self: flex-start;
    align-content: center;
    width: 90px;
    font-size: 14px;
    font-weight: 500;
    font-family: "Al Bayan";
    margin: 22px 0 0 30px;
    height: 27px;
    background-color: dodgerblue;
    border-radius: 20px;
`;

const Home = () => {

    const history = useHistory();

    const onCardClick = useCallback((id) => {
        history.push(`/Blog?id=${id}`);
    }, [])

    const onAddToBlogClick = useCallback((id) => {
        history.push(`/AddCity`);
    }, [])

    return (
        <HomeContainer>
            <WebsiteHeader>
                <AddToBlogButton onClick={onAddToBlogClick}>הוסף לבלוג</AddToBlogButton>
                {"כיפת השמיים"}
            </WebsiteHeader>
            <Autocomplete />
            <CardRow>
                <CityCard onClick={() => onCardClick(London.id)}>
                    <CityImg src={London.imgSrc} />
                    <CityName>{London.nameHebrew} ({London.nameEnglish})</CityName>
                    <CityDesc>{London.description}</CityDesc>
                </CityCard>
                <CityCard onClick={() => onCardClick(NewYork.id)}>
                    <CityImg src={NewYork.imgSrc} />
                    <CityName>{NewYork.nameHebrew} ({NewYork.nameEnglish})</CityName>
                    <CityDesc>{NewYork.description}</CityDesc>
                </CityCard>
                <CityCard onClick={() => onCardClick(Paris.id)}>
                    <CityImg src={Paris.imgSrc} />
                    <CityName>{Paris.nameHebrew} ({Paris.nameEnglish})</CityName>
                    <CityDesc>{Paris.description}</CityDesc>
                </CityCard>
                <CityCard onClick={() => onCardClick(Athene.id)}>
                    <CityImg src={Athene.imgSrc} />
                    <CityName>{Athene.nameHebrew} ({Athene.nameEnglish})</CityName>
                    <CityDesc>{Athene.description}</CityDesc>
                </CityCard>
                <CityCard onClick={() => onCardClick(Amsterdam.id)}>
                    <CityImg src={Amsterdam.imgSrc} />
                    <CityName>{Amsterdam.nameHebrew} ({Amsterdam.nameEnglish})</CityName>
                    <CityDesc>{Amsterdam.description}</CityDesc>
                </CityCard>
                <CityCard onClick={() => onCardClick(Rome.id)}>
                    <CityImg src={Rome.imgSrc} />
                    <CityName>{Rome.nameHebrew} ({Rome.nameEnglish})</CityName>
                    <CityDesc>{Rome.description}</CityDesc>
                </CityCard>
            </CardRow>
            <Credit>הפרויקט בשיתוף איציק ויס אליסף גבאי ואהרון ריפס </Credit>
        </HomeContainer>
    );
}

export default Home;