const list = `

  ul, ol, menu, dir {
    padding-inline-start: 0;
  }

  ul, ol {
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    align-items: center;

    box-sizing: border-box;
  }

  li {
    display: inline-flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;

    box-sizing: border-box;
  }
`;
export default list;
