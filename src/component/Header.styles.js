import styled from "styled-components";

export const HeaderStyles = styled.nav`
  grid-column: 1/-1;
  grid-row: 1/2;
  background-color: whitesmoke;
  display: grid;
  grid-template-columns: 1fr 70vw 1fr;
`;

export const FormInput = styled.form`
  grid-column: 2/3;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const HeaderInput = styled.input.attrs(props => ({
  placeholder: "search for movies"
}))`
  width: 50%;
  height: 3rem;
  border: none;
  border-radius: 1rem;
  transition: width 1s;
  text-align: center;

  &:focus {
    width: 60%;
    outline: none;
    border-bottom: 2px solid black;
  }

  ::placeholder {
    color: green;
    text-transform: uppercase;
  }
`;

export const SubmitButton = styled.button`
  outline: none;
  border: none;
  border-radius: 0.8rem;
  background-color: black;
  color: white;
  font-size: 2rem;
  padding: 1rem;
  font-weight: 500;
  transform: translateX(-3rem);
`;
