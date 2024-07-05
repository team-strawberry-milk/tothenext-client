"use client";

import { useRouter } from "next/router";
import styled from "styled-components";
const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 2px solid blue;
  padding: 0 20px;
`;

const Logoimg = styled.img`
  height: 60px;
  margin: 10px;
`;

const Nav = styled.nav`
  display: flex;
  gap: 20px;
  flex-grow: 1;
  justify-content: center;
`;

const NavLink = styled.a`
  text-decoration: none;
  color: black;
  font-size: calc(1rem + 3px);
  &:hover {
    color: #868e96;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-right: 20px;
  justify-content: center;
`;

const LoginButton = styled.a`
  font-size: 1rem;
  background: white;
  border: 1px solid #ccc;
  padding: 4px 13px;
  cursor: pointer;
  border-radius: 5px;
  &:hover {
    background: #f0f0f0;
  }
`;

const SignUpButton = styled.a`
  font-size: 1rem;
  background: #305ad9;
  border: none;
  color: white;
  padding: 4px 13px;
  cursor: pointer;
  border-radius: 5px;
  &:hover {
    background: #274bbd;
  }
`;

export default function Header() {
  return (
    <HeaderContainer>
      <Logoimg src="/tothenext_logo.png" alt="logo" />
      <Nav>
        <NavLink href="/hub">Hub</NavLink>
        <NavLink href="/teammate">Teammate</NavLink>
        <NavLink href="/activity">Activity</NavLink>
        <NavLink href="/profile">Profile</NavLink>
      </Nav>
      <ButtonContainer>
        <LoginButton href="/signin">Log in</LoginButton>
        <SignUpButton href="/signup">Sign Up</SignUpButton>
      </ButtonContainer>
    </HeaderContainer>
  );
}
