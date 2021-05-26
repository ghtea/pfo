
const input = `input, select {

  box-sizing: border-box;
  cursor: pointer;
  &:focus {
    outline-style: none;
  }

}`
export default input;



/*


export const Input = styled.input`
  color: ${(props) => props.theme.color_strong};
  background-color: ${(props) => props.theme.COLOR_normal};
  width: auto;
  height: 2.4rem;
  font-size: 1rem;
  padding-right: 0.8rem;
  padding-left: 0.8rem;
  margin-top: 5px;
  margin-bottom: 5px;
  margin-right: 2px;
  margin-left: 2px;
  border-radius: 0.5rem;
  box-sizing: border-box;
  &::placeholder {
    color: ${(props) => props.theme.color_weak} !important;
  }
  border: 2px solid transparent;

  &:focus,
  &:active {
    outline: none;
    border: 2px solid ${(props) => props.theme.color_weak};
  }
`;


*/