import styled from 'styled-components';

export const BtnList = styled.div`
  display: flex;
  gap: 20px;
  justify-content: left;
  margin-bottom: 20px;
  padding-left: 15px;
`;

export const Btn = styled.button`
  font-weight: 600;
  text-transform: capitalize;
  height: 30px;
  border-radius: 4px;
  padding: 0 15px;
  transition: 300ms;
  border: none;
  background-color: rgb(173, 173, 173);
  cursor: pointer;
  &:hover,
  &:focus {
    color: #555;
    background-color: #99999;
  }
`;