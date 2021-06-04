import styled from "styled-components"


export default function StyledHome () { 

const HomeContainer = styled.div`
  width: 400px;
  height: 600px;
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  border: 4px solid black;
  border-radius: 15px;
  margin-left: 500px;
  * {
    box-sizing: border-box;
  }

    h1{
      color: blue;
    }

      @media only screen and (max-width: 768px){
        width: 90%;
        display:flex;
        flex-direction: column;
        margin:0;
        padding:0;
}

`
}
