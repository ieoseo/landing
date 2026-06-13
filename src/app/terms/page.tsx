import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "서비스 이용약관 — 이어서",
  description: "이어서(Ieoseo) 서비스 이용약관. 서비스와 이용자 간의 권리·의무 및 책임 사항을 규정합니다.",
};

export default function TermsPage() {
  return (
    <>
      <SiteHeader variant="doc" />
      <main className="doc-page">
        <div className="doc-hero">
          <div className="inner">
            <div className="kicker">Terms of Service</div>
            <h1>서비스 이용약관</h1>
            <p>
              본 약관은 이어서(Ieoseo, 이하 "서비스")의 이용과 관련하여 서비스와 이용자 간의 권리·의무 및 책임
              사항을 규정합니다. 서비스를 이용하시기 전에 본 약관을 충분히 읽어주세요.
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
                <a href="#t1">목적</a>
              </li>
              <li>
                <a href="#t2">용어의 정의</a>
              </li>
              <li>
                <a href="#t3">약관의 효력 및 변경</a>
              </li>
              <li>
                <a href="#t4">이용계약의 성립</a>
              </li>
              <li>
                <a href="#t5">서비스의 제공</a>
              </li>
              <li>
                <a href="#t6">서비스의 변경 및 중단</a>
              </li>
              <li>
                <a href="#t7">이용자의 의무</a>
              </li>
              <li>
                <a href="#t8">게시물 및 데이터의 관리</a>
              </li>
              <li>
                <a href="#t9">이용 제한 및 계약 해지</a>
              </li>
              <li>
                <a href="#t10">면책 조항</a>
              </li>
              <li>
                <a href="#t11">손해배상</a>
              </li>
              <li>
                <a href="#t12">준거법 및 분쟁 해결</a>
              </li>
            </ol>
          </nav>

          <section className="art" id="t1">
            <h2>
              <span className="no">1</span>제1조 (목적)
            </h2>
            <p>
              본 약관은 이어서가 제공하는 D-Day·할 일 관리·집중 타이머·통합 캘린더 등 자기관리 서비스의 이용 조건
              및 절차, 서비스와 이용자의 권리·의무 및 책임 사항을 규정함을 목적으로 합니다.
            </p>
          </section>

          <section className="art" id="t2">
            <h2>
              <span className="no">2</span>제2조 (용어의 정의)
            </h2>
            <ol className="clauses">
              <li>"서비스"란 이어서가 제공하는 모든 기능과 콘텐츠를 의미합니다.</li>
              <li>"이용자"란 본 약관에 따라 서비스를 이용하는 회원 및 비회원을 말합니다.</li>
              <li>"회원"이란 이메일 또는 소셜 계정으로 가입하여 지속적으로 서비스를 이용하는 자를 말합니다.</li>
              <li>"콘텐츠"란 이용자가 서비스 내에서 생성한 D-Day·할 일·집중 기록 등 모든 데이터를 의미합니다.</li>
            </ol>
          </section>

          <section className="art" id="t3">
            <h2>
              <span className="no">3</span>제3조 (약관의 효력 및 변경)
            </h2>
            <ol className="clauses">
              <li>본 약관은 서비스 화면에 게시하거나 기타의 방법으로 이용자에게 공지함으로써 효력이 발생합니다.</li>
              <li>서비스는 관련 법령을 위반하지 않는 범위에서 본 약관을 변경할 수 있습니다.</li>
              <li>약관을 변경할 경우 시행일 7일 전부터(이용자에게 불리한 변경은 30일 전부터) 공지합니다.</li>
              <li>변경된 약관의 시행일 이후에도 서비스를 계속 이용하면 변경에 동의한 것으로 봅니다.</li>
            </ol>
          </section>

          <section className="art" id="t4">
            <h2>
              <span className="no">4</span>제4조 (이용계약의 성립)
            </h2>
            <ol className="clauses">
              <li>
                이용계약은 이용자가 본 약관에 동의하고 회원가입을 신청한 뒤, 서비스가 이를 승낙함으로써
                성립합니다.
              </li>
              <li>
                서비스는 다음의 경우 가입 신청을 승낙하지 않거나 사후에 해지할 수 있습니다.
                <br />· 타인의 정보를 도용하거나 허위 정보를 기재한 경우
                <br />· 만 14세 미만이 법정대리인의 동의 없이 신청한 경우
                <br />· 기타 관련 법령 또는 본 약관을 위반한 경우
              </li>
            </ol>
          </section>

          <section className="art" id="t5">
            <h2>
              <span className="no">5</span>제5조 (서비스의 제공)
            </h2>
            <ol className="clauses">
              <li>
                서비스는 다음 기능을 제공합니다.
                <br />· D-Day 이벤트 관리 및 카운트다운
                <br />· 할 일 관리 및 시간 빌려쓰기(자동·수동 이월)
                <br />· 집중(포모도로) 타이머 및 통계
                <br />· 통합 캘린더 및 외부 캘린더 연동
                <br />· 알림, 스트릭, 주간 리뷰 등 부가 기능
              </li>
              <li>서비스는 연중무휴, 1일 24시간 제공함을 원칙으로 합니다.</li>
              <li>서비스의 일부 기능은 무료로 제공되며, 향후 유료 기능이 추가될 경우 사전에 고지합니다.</li>
            </ol>
          </section>

          <section className="art" id="t6">
            <h2>
              <span className="no">6</span>제6조 (서비스의 변경 및 중단)
            </h2>
            <ol className="clauses">
              <li>서비스는 운영상·기술상의 필요에 따라 제공하는 서비스의 전부 또는 일부를 변경할 수 있습니다.</li>
              <li>
                설비 점검·보수, 통신 두절, 천재지변 등 부득이한 사유가 있는 경우 서비스 제공을 일시적으로 중단할
                수 있으며, 가능한 한 사전에 공지합니다.
              </li>
              <li>
                무료로 제공되는 서비스의 변경·중단으로 발생한 손해에 대해서는 관련 법령에 특별한 규정이 없는 한
                책임을 지지 않습니다.
              </li>
            </ol>
          </section>

          <section className="art" id="t7">
            <h2>
              <span className="no">7</span>제7조 (이용자의 의무)
            </h2>
            <p>이용자는 다음 행위를 하여서는 안 됩니다.</p>
            <ol className="clauses">
              <li>타인의 정보를 도용하거나 허위 정보를 등록하는 행위</li>
              <li>서비스의 정상적인 운영을 방해하거나 시스템에 무단으로 접근하는 행위</li>
              <li>서비스를 역설계·복제·배포하거나 영리 목적으로 무단 이용하는 행위</li>
              <li>관련 법령 또는 공서양속에 반하는 행위</li>
            </ol>
          </section>

          <section className="art" id="t8">
            <h2>
              <span className="no">8</span>제8조 (게시물 및 데이터의 관리)
            </h2>
            <ol className="clauses">
              <li>이용자가 서비스 내에서 생성한 콘텐츠에 대한 권리와 책임은 이용자 본인에게 있습니다.</li>
              <li>
                서비스는 이용자의 콘텐츠를 서비스 제공 목적 범위 내에서만 이용하며, 이용자의 동의 없이 외부에
                공개하지 않습니다.
              </li>
              <li>
                이용자는 본인의 데이터를 언제든 조회·수정·삭제할 수 있으며, 회원 탈퇴 시 보관 의무가 있는 정보를
                제외하고 즉시 삭제됩니다.
              </li>
            </ol>
          </section>

          <section className="art" id="t9">
            <h2>
              <span className="no">9</span>제9조 (이용 제한 및 계약 해지)
            </h2>
            <ol className="clauses">
              <li>
                이용자가 본 약관을 위반하거나 서비스의 정상적인 운영을 방해한 경우, 서비스는 이용을 제한하거나
                이용계약을 해지할 수 있습니다.
              </li>
              <li>
                이용자는 언제든지 앱 내 설정을 통해 회원 탈퇴를 신청할 수 있으며, 서비스는 즉시 이를 처리합니다.
              </li>
            </ol>
          </section>

          <section className="art" id="t10">
            <h2>
              <span className="no">10</span>제10조 (면책 조항)
            </h2>
            <ol className="clauses">
              <li>서비스는 천재지변, 통신 장애 등 불가항력으로 인해 서비스를 제공할 수 없는 경우 책임이 면제됩니다.</li>
              <li>서비스는 이용자의 귀책사유로 인한 서비스 이용 장애에 대해 책임을 지지 않습니다.</li>
              <li>
                서비스는 이용자가 게시·등록한 정보·자료의 신뢰도·정확성에 대해 책임을 지지 않으며, 이어서의 시간
                빌려쓰기·알림 기능은 자기관리를 돕기 위한 보조 수단으로, 일정 누락에 대한 최종 책임은 이용자에게
                있습니다.
              </li>
            </ol>
          </section>

          <section className="art" id="t11">
            <h2>
              <span className="no">11</span>제11조 (손해배상)
            </h2>
            <ol className="clauses">
              <li>
                서비스 또는 이용자가 본 약관을 위반하여 상대방에게 손해를 입힌 경우, 그 손해를 배상할 책임이
                있습니다.
              </li>
              <li>
                무료로 제공되는 서비스와 관련하여 서비스는 관련 법령에 특별한 규정이 없는 한 손해배상 책임을 지지
                않습니다.
              </li>
            </ol>
          </section>

          <section className="art" id="t12">
            <h2>
              <span className="no">12</span>제12조 (준거법 및 분쟁 해결)
            </h2>
            <ol className="clauses">
              <li>본 약관 및 서비스 이용과 관련한 사항은 대한민국 법령을 준거법으로 합니다.</li>
              <li>
                서비스와 이용자 간에 분쟁이 발생한 경우 상호 협의하여 해결하며, 협의가 이루어지지 않을 경우 관련
                법령이 정한 절차에 따릅니다.
              </li>
            </ol>
            <p style={{ marginTop: "20px", color: "var(--sub)", fontSize: "14px" }}>
              <b style={{ color: "var(--ink)" }}>부칙</b>
              {"  "}본 약관은 2026년 6월 1일부터 시행합니다. 문의: gdpark.dev@gmail.com
            </p>
          </section>
        </div>
      </main>
      <SiteFooter showHome />
    </>
  );
}
