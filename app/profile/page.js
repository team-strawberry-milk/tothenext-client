"use client";
import { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { FaRegEdit } from "react-icons/fa";

const GlobalStyle = createGlobalStyle`
    body{
        background-color: #F2F5FA;
        margin: 0;
    }
`;
const ProfilePageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 5vh;
  gap: 3vh;
`;

const IntroduceContainer = styled.div`
  display: flex;
  width: 90vw;
  padding: 1vw;
  border-radius: 5px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
  flex-direction: column;
  background-color: #ffffff;
`;

const IntroduceTopWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1vh;
`;
const IntroduceText = styled.div`
  font-size: 2rem;
  padding-left: 1vw;
`;
const AddBTN = styled.button`
  font-size: 1rem;
  background-color: #4b58a5;
  width: 70px;
  height: 30px;
  border-radius: 5px;
  color: #ffffff;
`;

const SelfIntroductionContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const SelfIntroduction = styled.div`
  padding: 0px 10px;
`;

const ToggleAndCompany = styled.div`
  display: flex;

  height: 6vh;
  border-radius: 5px;
  padding: 10px;
  align-items: center;
  background-color: ${(props) => (props.index % 2 === 0 ? "white" : "#f2f5fa")};
`;

const EditBTN = styled(FaRegEdit)`
  font-size: 1rem;
  cursor: pointer;
`;

const ToggleAndEdit = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Toggles = styled.div`
  display: flex;
  gap: 10px;
`;

const ToggleBTN = styled.button``;

const CompanyName = styled.div``;

const SelfIntroductionContent = styled.div`
  padding: 15px 25px;
`;

const CheckInformation = styled.div`
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
  display: flex;
  width: 90vw;
  padding-top: 1vw;

  border-radius: 5px;
  flex-direction: column;
  background-color: #ffffff;
`;

const CheckInformationText = styled.div`
  font-size: 2rem;
  padding-left: 2vw;
`;

const CertificateInformationBar = styled.div`
  display: flex;
  padding: 0.8vw;
  border-top: 1px solid #eeeeef;
  justify-content: space-between;
`;

const CertificationBar = styled.div`
  display: flex;
  width: 30vw;
  justify-content: space-around;
`;

const CertificateNameBar = styled.div`
  display: flex;
  justify-content: center;
  width: 10vw;
`;

const CertificateIssuanceDateBar = styled.div`
  display: flex;
  justify-content: center;
  width: 10vw;
`;

const CertificateExpirationDateBar = styled.div`
  display: flex;
  justify-content: center;
  width: 10vw;
`;

const CertificateSerialNumberBar = styled.div`
  display: flex;
  justify-content: center;
  width: 10vw;
`;

const CertificateCopyBar = styled.div`
  display: flex;
  justify-content: center;
  width: 7vw;
  margin-right: 50px;
`;

const CertificateInformation = styled.div`
  display: flex;
  padding: 0.8vw;
  background-color: ${(props) => (props.index % 2 === 0 ? "white" : "#f2f5fa")};
  justify-content: space-between;
`;

const Certification = styled.div`
  display: flex;
  width: 30vw;
  justify-content: space-around;
`;

const CertificateName = styled.div`
  display: flex;
  justify-content: center;
  width: 10vw;
`;

const CertificateIssuanceDate = styled.div`
  display: flex;
  justify-content: center;
  width: 10vw;
`;

const CertificateExpirationDate = styled.div`
  display: flex;
  justify-content: center;
  width: 10vw;
`;

const CertificateSerialNumber = styled.div`
  display: flex;
  justify-content: center;
  width: 10vw;
`;

const CertificateSerialNumberWrapper = styled.div`
  display: flex;
`;

const CertificateCopy = styled.button`
  display: flex;
  justify-content: center;
  width: 7vw;
  margin-right: 50px;
  cursor: pointer;
`;

export default function Profile() {
  const [openIndexes, setOpenIndexes] = useState([]);

  const toggleClick = (index) => {
    setOpenIndexes((prev) => {
      if (prev.includes(index)) {
        return prev.filter((i) => i !== index);
      } else {
        return [...prev, index];
      }
    });
  };

  return (
    <ProfilePageWrapper>
      <GlobalStyle />
      <IntroduceContainer>
        <IntroduceTopWrapper>
          <IntroduceText>자기소개서, 이력서</IntroduceText>
          <AddBTN>Add</AddBTN>
        </IntroduceTopWrapper>
        <SelfIntroductionContainer>
          <SelfIntroduction>
            <ToggleAndCompany index={0}>
              <ToggleAndEdit>
                <Toggles>
                  <ToggleBTN onClick={() => toggleClick(0)}>
                    {openIndexes.includes(0) ? "▼" : "▶"}
                  </ToggleBTN>
                  <CompanyName>현대중공업 2024 상반기 지원</CompanyName>
                </Toggles>
                <EditBTN />
              </ToggleAndEdit>
            </ToggleAndCompany>

            {openIndexes.includes(0) && (
              <SelfIntroductionContent>자기소개 내용1</SelfIntroductionContent>
            )}
          </SelfIntroduction>
          <SelfIntroduction>
            <ToggleAndCompany index={1}>
              <ToggleAndEdit>
                <Toggles>
                  <ToggleBTN onClick={() => toggleClick(1)}>
                    {openIndexes.includes(1) ? "▼" : "▶"}
                  </ToggleBTN>
                  <CompanyName>현대중공업 2024 상반기 지원</CompanyName>
                </Toggles>
                <EditBTN />
              </ToggleAndEdit>
            </ToggleAndCompany>

            {openIndexes.includes(1) && (
              <SelfIntroductionContent>자기소개 내용1</SelfIntroductionContent>
            )}
          </SelfIntroduction>
          <SelfIntroduction>
            <ToggleAndCompany index={2}>
              <ToggleAndEdit>
                <Toggles>
                  <ToggleBTN onClick={() => toggleClick(2)}>
                    {openIndexes.includes(0) ? "▼" : "▶"}
                  </ToggleBTN>
                  <CompanyName>현대중공업 2024 상반기 지원</CompanyName>
                </Toggles>
                <EditBTN />
              </ToggleAndEdit>
            </ToggleAndCompany>

            {openIndexes.includes(2) && (
              <SelfIntroductionContent>자기소개 내용1</SelfIntroductionContent>
            )}
          </SelfIntroduction>
        </SelfIntroductionContainer>
      </IntroduceContainer>

      <CheckInformation>
        <CheckInformationText>스펙 정보 확인</CheckInformationText>
        <CertificateInformationBar>
          <CertificationBar>
            <CertificateNameBar>종류</CertificateNameBar>
            <CertificateIssuanceDateBar>발급일</CertificateIssuanceDateBar>
            <CertificateExpirationDateBar>만료일</CertificateExpirationDateBar>
          </CertificationBar>
          <CertificateSerialNumberWrapper>
            <CertificateSerialNumberBar>일련번호</CertificateSerialNumberBar>
            <CertificateCopyBar />
          </CertificateSerialNumberWrapper>
        </CertificateInformationBar>
        <CertificateInformation>
          <Certification>
            <CertificateName>TOEIC</CertificateName>
            <CertificateIssuanceDate>2024.07.04</CertificateIssuanceDate>
            <CertificateExpirationDate>2025.07.04</CertificateExpirationDate>
          </Certification>
          <CertificateSerialNumberWrapper>
            <CertificateSerialNumber>abcdeffdksfl11</CertificateSerialNumber>
            <CertificateCopy>복사하기</CertificateCopy>
          </CertificateSerialNumberWrapper>
        </CertificateInformation>
      </CheckInformation>
    </ProfilePageWrapper>
  );
}
