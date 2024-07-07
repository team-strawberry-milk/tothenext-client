"use client";
import styled from "styled-components";

const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 45px;
  background-color: #f8f8f8;
  border-top: 1px solid #ddd;
`;

const Logo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  padding-right: 40vw;
`;

const LogoImage = styled.img`
  height: 40px;
  margin-right: 10px;
`;

const Introduction = styled.div`
  font-size: 0.9rem;
  margin-left: 8px;
`;

const Navigation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const NavLink = styled.a`
  color: #666;
  text-decoration: none;
  margin: 2px 0;
`;

const Address = styled.div`
  text-align: right;
  color: #666;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <Logo>
        <LogoImage src="/tothenext_logo.png" alt="ToTheNext logo" />
        <Introduction>
          대학 생활부터 취업까지 함께하는 맞춤형 서포터
        </Introduction>
      </Logo>
      <Navigation>
        <NavLink href="/">Services</NavLink>
        <NavLink href="/">About Us</NavLink>
        <NavLink href="/">Terms and Conditions</NavLink>
      </Navigation>
      <Address>
        <div>서울시</div>
        <div>서대문구</div>
        <div>대현동</div>
      </Address>
    </FooterContainer>
  );
};

export default Footer;
