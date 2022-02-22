import logo from './logo.svg';
import './App.css';
import styled from "styled-components";

const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const SearchBar = styled.input`
  justify-content: center;
  width: 80%;
  height: 55px;
  margin-top: 55px;
  display: inline-block;
  border: 4px solid #658ccb;
  border-radius: 7px;
  box-sizing: border-box;
  padding: 7px 0;
  background-color: #ffffff;

  :focus {
    background-color: rgb(195, 221, 255);
    box-shadow: 0px 3px 5px 0px rgba(69, 42, 167, 0.5);
  }
`;

const App = () => {
  return (
      <div>
        <SearchContainer>
          <SearchBar />
        </SearchContainer>
      </div>
  );
}

export default App;
