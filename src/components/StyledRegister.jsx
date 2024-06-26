import styled from "styled-components";
import Union from "../assets/Union.svg";

export const RegisterContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-default);
  margin-bottom: var(--gap-spacious);
  align-items: center;

  @media (min-width: 651px) {
    padding: 0 var(--gap-huge);
  }
`;

export const UnionContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: var(--gap-medium);
  margin-bottom: var(--gap-default);
`;

export const UnionStyled = styled(Union)`
  width: 146.87px;
  height: 71.87px;
  display: flex;
`;

export const TitleReg = styled.div`
  display: flex;
  justify-content: center;
`;
