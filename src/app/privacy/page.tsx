import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "개인정보처리방침 — 이어서",
  description: "이어서(Ieoseo)가 어떤 정보를 어떻게 수집·이용·보관하는지 설명하는 개인정보처리방침입니다.",
};

export default function PrivacyPage() {
  return (
    <>
      <SiteHeader variant="doc" />
      <main className="doc-page">
        <div className="doc-hero">
          <div className="inner">
            <div className="kicker">Privacy Policy</div>
            <h1>개인정보처리방침</h1>
            <p>
              이어서(Ieoseo)는 이용자의 개인정보를 소중히 다루며, 「개인정보 보호법」 등 관련 법령을 준수합니다. 본
              방침은 이어서가 어떤 정보를 어떻게 수집·이용·보관하는지 설명합니다.
            </p>
            <div className="meta-row">
              <span>
                <b>시행일</b> 2026. 6. 1.
              </span>
              <span>
                <b>최종 개정</b> 2026. 6. 8.
              </span>
              <span>
                <b>버전</b> v1.0
              </span>
            </div>
          </div>
        </div>

        <div className="doc">
          <nav className="toc">
            <h2>목차</h2>
            <ol>
              <li>
                <a href="#a1">수집하는 개인정보 항목</a>
              </li>
              <li>
                <a href="#a2">개인정보의 수집·이용 목적</a>
              </li>
              <li>
                <a href="#a3">보유 및 이용 기간</a>
              </li>
              <li>
                <a href="#a4">제3자 제공</a>
              </li>
              <li>
                <a href="#a5">처리 위탁</a>
              </li>
              <li>
                <a href="#a6">외부 서비스 연동</a>
              </li>
              <li>
                <a href="#a7">이용자의 권리와 행사 방법</a>
              </li>
              <li>
                <a href="#a8">개인정보의 파기</a>
              </li>
              <li>
                <a href="#a9">안전성 확보 조치</a>
              </li>
              <li>
                <a href="#a10">개인정보 보호책임자</a>
              </li>
              <li>
                <a href="#a11">고지 의무</a>
              </li>
            </ol>
          </nav>

          <section className="art" id="a1">
            <h2>
              <span className="no">1</span>수집하는 개인정보 항목
            </h2>
            <p>이어서는 회원가입과 서비스 제공을 위해 아래의 최소한의 정보를 수집합니다.</p>
            <table className="tbl">
              <tbody>
                <tr>
                  <th>구분</th>
                  <th>수집 항목</th>
                  <th>수집 방법</th>
                </tr>
                <tr>
                  <td>필수</td>
                  <td>이메일 주소, 비밀번호(암호화 저장), 닉네임</td>
                  <td>회원가입 시 이용자 입력</td>
                </tr>
                <tr>
                  <td>소셜 로그인</td>
                  <td>이메일, 프로필 식별자(카카오·Google·Apple)</td>
                  <td>소셜 인증 시 제공받음</td>
                </tr>
                <tr>
                  <td>서비스 이용</td>
                  <td>D-Day·할 일·집중 기록, 카테고리, 설정값</td>
                  <td>서비스 이용 과정에서 생성</td>
                </tr>
                <tr>
                  <td>선택</td>
                  <td>외부 캘린더 일정(Google·Apple·Notion)</td>
                  <td>이용자가 연동을 허용한 경우</td>
                </tr>
                <tr>
                  <td>자동 수집</td>
                  <td>기기 정보, 접속 로그, 푸시 토큰</td>
                  <td>서비스 이용 시 자동 생성</td>
                </tr>
              </tbody>
            </table>
            <div className="callout">
              <p>
                <b>로컬 우선 저장.</b> 이어서는 가능한 한 이용자의 데이터를 기기 내 로컬에 우선 저장하며, 서버
                동기화는 이용자가 계정에 로그인한 경우에만 이루어집니다.
              </p>
            </div>
          </section>

          <section className="art" id="a2">
            <h2>
              <span className="no">2</span>개인정보의 수집·이용 목적
            </h2>
            <ul>
              <li>
                <b>회원 식별 및 인증</b> — 가입, 로그인, 본인 확인, 계정 관리
              </li>
              <li>
                <b>서비스 제공</b> — D-Day 카운트다운, 할 일 관리, 시간 빌려쓰기(이월), 집중 타이머, 통합 캘린더
                기능 제공
              </li>
              <li>
                <b>알림 발송</b> — D-Day·할 일 알림, 미룬 시간 발생 안내, 스트릭 갱신 등(이용자 동의 시)
              </li>
              <li>
                <b>서비스 개선</b> — 이용 통계 분석을 통한 기능 개선 및 오류 진단
              </li>
              <li>
                <b>고객 지원</b> — 문의 응대 및 공지사항 전달
              </li>
            </ul>
          </section>

          <section className="art" id="a3">
            <h2>
              <span className="no">3</span>보유 및 이용 기간
            </h2>
            <p>
              이어서는 원칙적으로 개인정보의 수집·이용 목적이 달성되면 해당 정보를 지체 없이 파기합니다. 다만
              아래의 경우는 명시한 기간 동안 보관합니다.
            </p>
            <table className="tbl">
              <tbody>
                <tr>
                  <th>항목</th>
                  <th>보유 기간</th>
                </tr>
                <tr>
                  <td>회원 정보</td>
                  <td>회원 탈퇴 시까지 (탈퇴 즉시 파기)</td>
                </tr>
                <tr>
                  <td>서비스 이용 기록</td>
                  <td>회원 탈퇴 시까지</td>
                </tr>
                <tr>
                  <td>접속 로그</td>
                  <td>3개월 (통신비밀보호법)</td>
                </tr>
                <tr>
                  <td>부정 이용 기록</td>
                  <td>1년</td>
                </tr>
              </tbody>
            </table>
          </section>

          <section className="art" id="a4">
            <h2>
              <span className="no">4</span>제3자 제공
            </h2>
            <p>
              이어서는 이용자의 개인정보를 본 방침에 명시한 범위를 넘어 외부에 제공하지 않습니다. 다만 아래의
              경우는 예외로 합니다.
            </p>
            <ul>
              <li>이용자가 사전에 동의한 경우</li>
              <li>법령에 의하거나, 수사기관이 적법한 절차에 따라 요청한 경우</li>
            </ul>
          </section>

          <section className="art" id="a5">
            <h2>
              <span className="no">5</span>처리 위탁
            </h2>
            <p>
              이어서는 원활한 서비스 제공을 위해 아래와 같이 개인정보 처리 업무를 위탁할 수 있으며, 위탁 시 관련
              법령에 따라 안전하게 관리되도록 필요한 사항을 규정합니다.
            </p>
            <table className="tbl">
              <tbody>
                <tr>
                  <th>수탁자</th>
                  <th>위탁 업무</th>
                </tr>
                <tr>
                  <td>클라우드 인프라 제공사</td>
                  <td>데이터 저장 및 서버 운영</td>
                </tr>
                <tr>
                  <td>푸시 알림 서비스</td>
                  <td>모바일 알림 발송</td>
                </tr>
              </tbody>
            </table>
          </section>

          <section className="art" id="a6">
            <h2>
              <span className="no">6</span>외부 서비스 연동
            </h2>
            <p>
              이용자가 외부 캘린더 연동을 허용하면, 이어서는 해당 서비스의 일정 정보를 <b>읽기 전용</b>으로 가져와
              통합 캘린더에 표시합니다.
            </p>
            <ul>
              <li>
                <b>Google · Apple · Notion 캘린더</b> — OAuth 인증을 통해 일정 조회 권한만 사용하며, 외부 일정을
                수정하지 않습니다.
              </li>
              <li>연동은 이용자가 설정에서 언제든 해제할 수 있으며, 해제 시 가져온 외부 일정 정보는 삭제됩니다.</li>
            </ul>
          </section>

          <section className="art" id="a7">
            <h2>
              <span className="no">7</span>이용자의 권리와 행사 방법
            </h2>
            <p>이용자는 언제든지 본인의 개인정보에 대해 다음 권리를 행사할 수 있습니다.</p>
            <ul>
              <li>개인정보 열람, 정정, 삭제 요청</li>
              <li>개인정보 처리 정지 요청</li>
              <li>동의 철회 및 회원 탈퇴</li>
            </ul>
            <p>
              권리 행사는 앱 내 설정 또는 개인정보 보호책임자 이메일을 통해 요청할 수 있으며, 이어서는 지체 없이
              조치합니다.
            </p>
          </section>

          <section className="art" id="a8">
            <h2>
              <span className="no">8</span>개인정보의 파기
            </h2>
            <ul>
              <li>
                <b>파기 절차</b> — 목적이 달성된 개인정보는 내부 방침에 따라 안전하게 파기합니다.
              </li>
              <li>
                <b>파기 방법</b> — 전자적 파일은 복구 불가능한 방식으로 영구 삭제하며, 출력물은 분쇄하거나
                소각합니다.
              </li>
              <li>
                <b>탈퇴 시</b> — 회원 탈퇴를 요청하면 보관 의무가 있는 정보를 제외한 모든 데이터를 즉시 삭제합니다.
              </li>
            </ul>
          </section>

          <section className="art" id="a9">
            <h2>
              <span className="no">9</span>안전성 확보 조치
            </h2>
            <ul>
              <li>
                <b>비밀번호 암호화</b> — 비밀번호는 복호화되지 않는 일방향 암호화로 저장합니다.
              </li>
              <li>
                <b>전송 구간 암호화</b> — 모든 데이터는 HTTPS(TLS)로 암호화하여 전송합니다.
              </li>
              <li>
                <b>접근 통제</b> — 개인정보 접근 권한을 최소한의 인원으로 제한합니다.
              </li>
            </ul>
          </section>

          <section className="art" id="a10">
            <h2>
              <span className="no">10</span>개인정보 보호책임자
            </h2>
            <p>개인정보 처리에 관한 문의·불만·피해 구제는 아래로 연락해 주세요.</p>
            <table className="tbl">
              <tbody>
                <tr>
                  <th>구분</th>
                  <th>내용</th>
                </tr>
                <tr>
                  <td>책임자</td>
                  <td>이어서</td>
                </tr>
                <tr>
                  <td>이메일</td>
                  <td>gdpark.dev@gmail.com</td>
                </tr>
              </tbody>
            </table>
            <p>
              그 밖의 개인정보 침해 신고·상담은 개인정보침해신고센터(privacy.kisa.or.kr / 국번없이 118)로
              문의하실 수 있습니다.
            </p>
          </section>

          <section className="art" id="a11">
            <h2>
              <span className="no">11</span>고지 의무
            </h2>
            <p>
              본 개인정보처리방침은 법령·서비스 정책의 변경에 따라 개정될 수 있으며, 변경 시 앱 내 공지 또는 본
              페이지를 통해 시행 7일 전부터 고지합니다. 중대한 변경의 경우 30일 전에 고지합니다.
            </p>
          </section>
        </div>
      </main>
      <SiteFooter showHome />
    </>
  );
}
