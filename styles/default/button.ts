const button = `button {
  display: inline-flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;

  box-sizing: border-box;

  width: auto%;
  height: auto;

  font-size: 1rem;
  font-family: inherit;

  text-transform: none; 

  margin: 0;
  padding: 0;

  &:focus {
    outline-style: none;
  }
}`;

export default button;

/*
  overflow: visible; //  Show the overflow in Edge/IE.


  font-size: 1rem;
  font-family: inherit; // Change the font styles in all browsers
  // font-family: 'Noto Sans KR', sans-serif;
*/
