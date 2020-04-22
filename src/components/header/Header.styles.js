import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderImage = styled.img`
  height: 100%;
`;

export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  vertical-align: middle;
`;
export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 0 25px;
`;

export const LinkContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  align-self: center;
`;

export const LinkOption = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
  text-transform: uppercase;
`;
