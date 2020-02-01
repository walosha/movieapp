import styled from "styled-components";

export const HeaderStyles = styled.nav`
  grid-column: 1/-1;
  grid-row: 1/2;
  background-color: whitesmoke;
  display: grid;
  grid-template-columns: 1fr 70vw 1fr;
  padding: 2rem;
`;

export const FormInput = styled.form`
  grid-column: 2/3;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;
export const HeaderInput = styled.input.attrs(props => ({
  placeholder: "search for movies"
}))`
  width: 50%;
  height: 5rem;
  border: none;
  border-radius: 1rem;
  transition: width 1s;
  text-align: center;

  &:focus {
    outline: none;
    border: 2px groove black;
  }

  ::placeholder {
    color: green;
    text-transform: uppercase;
  }
`;

export const SubmitButton = styled.button`
  outline: none;
  box-shadow: 0px 2px 7px 0px black;
  border-radius: 3.8rem;
  background-color: #e33812;
  color: white;
  font-size: 2rem;
  padding: 1rem;
  font-weight: 500;
  position: absolute;
  top: 3%;
  right: 22%;
  cursor: pointer;
`;

export const MenuButton = styled.button`
  @media (min-width: 800px) {
    display: none;
  }
`;
