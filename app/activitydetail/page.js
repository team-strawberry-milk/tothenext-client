"use client";
import React from "react";
import MDEditor from "@uiw/react-md-editor";

const ActivityDetail = ({ markdown }) => {
  return (
    <div className="px-20 py-6 flex justify-center items-start">
      <div className="w-full bg-white p-8 mr-6 flex-1">
        <div className="mb-6">
          <h1 className="text-4xl font-bold">
            검색 퀄리티 담당자(신입, 계약직 1년)
          </h1>
        </div>
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-4">
            “즐거운 미식생활의 시작, 캐치테이블”
          </h2>
          <p className="mb-4">
            캐치테이블은 많은 사람들이 간편하고 즐거운 미식생활을 누릴 수 있도록
            의식의 전문 통합 플랫폼 ‘캐치테이블’을 운영하며 ‘의식 시장의 전
            여정’을 디지털화하는데 앞장서고 있습니다.
          </p>
          <p className="mb-4">
            국내 레스토랑 예약시장 1위뿐 아니라, 2022년 1월 실시간 대기 서비스
            ‘캐치테이블 웨이팅’을 오픈, 2023년 2월과 3월에 논 의식의 전문
            매장관리 솔루션 캐치테이블 포스와 ‘캐치테이블 웨잇보이스’를 차례로
            선보이며 의식업계 전반을 아우르는 논 의식의 전문 통합 솔루션으로
            자리매김하며 성장하고 있습니다.
          </p>
          <p className="mb-4">
            캐치테이블은 2018년 B2B 매장용 솔루션 론칭을 시작했습니다. 이후 수년
            간의 노하우를 바탕으로 지금의 캐치테이블 B2C 예약앱에 반영하며
            정주와 고객 모두의 입맛에 맞는 서비스를 제공하고자 노력하고
            있습니다. 이를 도전을 멈추지 않고 의식업계의 전 연정을 함께하기 위해
            혁신을 이어가고 있습니다.
          </p>
          <p className="mb-4">
            의식 시장의 모든 것을 캐치테이블 브랜드 하나로 해결할 수 있는 세상,
            의식업 통합 플랫폼 생태계를 함께 나아가는 캐치테이블의 앞으로의
            여정에 지금 바로 함께하세요.
          </p>
        </div>
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">[캐치테이블 합류 여정]</h3>
          <ul className="list-disc list-inside mb-4">
            <li>
              서류 접수 &gt; 통합 인터뷰 &gt; 레퍼런스 체크(경력직) &gt; 처우
              협의 &gt; 최종 합격 및 입사
            </li>
          </ul>
          <h3 className="text-lg font-semibold mb-2">[주요업무]</h3>
          <ul className="list-disc list-inside mb-4">
            <li>캐치테이블 매장정보 검색 및 데이터 관리</li>
            <li>검색 데이터 서칭</li>
          </ul>
          <h3 className="text-lg font-semibold mb-2">[자격요건 및 우대사항]</h3>
          <li>대학 졸업</li>
          <li>건강</li>
        </div>
        {/* 마크다운 뷰어 */}
        <div
          className="markdownDiv"
          data-color-mode="light"
          style={{ padding: 15 }}
        >
          <MDEditor.Markdown style={{ padding: 10 }} source={markdown} />
        </div>
      </div>
      <div className="bg-gray-100 mt-11 p-6 rounded-lg shadow-md mb-6 w-1/5">
        <h4 className="font-semibold mb-2">모집인원</h4>
        <p className="mb-2">0명</p>
        <h4 className="font-semibold mb-2">모집업무</h4>
        <p className="mb-2">풀스택</p>
        <h4 className="font-semibold mb-2">모집기간</h4>
        <p className="mb-2">평생</p>
        <h4 className="font-semibold mb-2">연락처</h4>
        <p className="mb-2">010-0000-0000</p>
        <div className="text-center mt-6">
          <button className="bg-[#305ad9] hover:bg-[#274bbd] text-white px-6 py-2 rounded-lg">
            지원하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default ActivityDetail;
