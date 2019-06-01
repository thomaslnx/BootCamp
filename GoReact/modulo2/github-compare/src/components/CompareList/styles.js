import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  margin-top: 50px;

  @media (max-width: 750px) {
    flex-direction: column;
  }
`;

export const Repository = styled.div`
  width: 250px;
  background: #fff;
  border-radius: 3px;

  display: flex;
  flex-direction: column;
  margin: 0 10px;

  @media (max-width: 750px) {
    margin-bottom: 20px;
  }

  header {
    padding: 0px;
    display: flex;
    flex-direction: column;

    align-items: center;

    img {
      width: 64px;
      margin-top: 30px;
      border-radius: 4px;
    }

    strong {
      font-size: 24px;
      margin-top: 10px;
    }

    small {
      font-size: 14px;
      color: #666;
      margin-bottom: 30px;
    }
  }

  ul {
    list-style: none;

    li {
      font-weight: bold;
      padding: 12px 20px;

      small {
        font-weight: normal;
        font-size: 12px;
        color: #999;
        font-style: italic;
      }

      &:nth-child(2n - 1) {
        background: #f5f5f5;
      }
    }
  }

  /*button {
      background: #453e54;
      font-size: 14px;
      width: 100px;
      height: 40px;
      outline: 0;
      border: none;
      border-radius: 4px;
      margin-top: 5px;
      color: #fff;
      cursor: pointer;
    }*/

    .buttons-container {
      display: flex;
      flex-direction: column;
      align-items: center;

      .refresh {
      background: #16f786;
      width: 100px;
      height: 30px;
      border: none;
      border-radius: 4px;
      margin-bottom: 5px;
      font-size: 16px;
      color: #968588;

      &:hover {
        background: #22c171;
      }
      }

      .delete {
      background: #f27b8b;
      width: 100px;
      height: 30px;
      border: none;
      border-radius: 4px;
      font-size: 16px;
      color: #fff;
      margin-bottom: 10px;

      &:hover {
        background: #cc6673;
      }
      }
    }





  /*div.buttons-container {
    padding: 10px 20px;
    display: flex;
    justify-content: space-around;

    button {
      padding: 5px 10px;
      border-radius: 5px;
      font-size: 12px;
      font-weight: bold;

      i {
        margin-right: 3px;
      }

      &:nth-child(even) {
        border: 1px solid #c11927;
        color: #c11927;

        &:hover {
          background: #aa1622;
          color: #fff;
        }
      }

      &:nth-child(odd) {
        border: 1px solid #116088;
        color: #116088;

        &:hover {
          background: #0e5071;
          color: #fff;
        }
      }
    }*/
  }
`;
