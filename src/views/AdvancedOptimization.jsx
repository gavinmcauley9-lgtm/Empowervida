"use client";

import React from 'react';
import Link from 'next/link';

const categories = [
  {
    id: "established",
    eyebrow: "01 / The foundations",
    title: "Established prevention",
    intro: "These measurements have clear roles in assessing risk or guiding care. Which ones you need depends on your age, history, symptoms and existing conditions.",
    tests: [
      { name: "Blood pressure and overall cardiovascular risk", detail: "Repeated blood-pressure readings, smoking status, family history and a validated risk estimate can guide proven preventive treatment." },
      { name: "Lipids, glucose and HbA1c", detail: "A conventional lipid profile and glucose or HbA1c testing, when appropriate, help identify treatable cardiovascular and diabetes risks. HbA1c is not ‘too late’ to be useful." },
      { name: "Kidney function", detail: "Creatinine-based eGFR and urine albumin-to-creatinine ratio have established roles when chronic kidney disease is suspected or risk factors are present." },
      { name: "Physical function", detail: "Cardiorespiratory fitness, strength and activity are meaningful health indicators. A formal VO₂ max test is optional; it is not necessary for everyone." }
    ]
  },
  {
    id: "selective",
    eyebrow: "02 / When the question calls for more",
    title: "Advanced, selective testing",
    intro: "These tests can add useful information, but should answer a specific clinical question rather than form a compulsory ‘longevity panel’.",
    tests: [
      { name: "ApoB and lipoprotein(a)", detail: "ApoB can refine assessment of atherogenic particle burden, especially when standard lipid measures are discordant. Lp(a) is largely inherited; a once-in-adulthood measurement is supported by several major cardiovascular guidelines. Treatment decisions depend on overall risk." },
      { name: "Coronary artery calcium (CAC)", detail: "In selected asymptomatic adults, CAC scoring may help resolve uncertainty about cardiovascular prevention. It is not a routine scan for everyone, especially younger or already high-risk patients." },
      { name: "Cystatin C", detail: "Useful when creatinine-based eGFR may be misleading, for example with unusual muscle mass. Combining creatinine and cystatin C often improves estimation; neither test measures kidney function perfectly." },
      { name: "Ferritin and iron studies", detail: "Helpful when iron deficiency, overload or inflammation is suspected. Ferritin is affected by inflammatory conditions and cannot be interpreted using one universal ‘optimal’ number." },
      { name: "Thyroid tests", detail: "TSH is usually the first test for suspected primary thyroid dysfunction; free T4 is added when indicated. Free T3 is not a routine test for unexplained fatigue with normal TSH." },
      { name: "Testosterone and SHBG", detail: "Consider when symptoms and clinical context warrant investigation. Morning total testosterone is usually the starting point; SHBG and calculated or measured free testosterone can clarify borderline or discordant results." },
      { name: "hs-CRP", detail: "A nonspecific inflammation marker that can sometimes refine cardiovascular risk assessment. It does not directly measure plaque stability and is not a universal treatment target." }
    ]
  },
  {
    id: "emerging",
    eyebrow: "03 / The frontier",
    title: "Promising, but not yet routine",
    intro: "Some newer technologies are scientifically exciting. The key question is whether acting on their results improves outcomes, not simply whether they generate a number.",
    tests: [
      { name: "Fasting insulin and HOMA-IR", detail: "Can be informative in research and selected clinical settings, but assays and cut-offs vary. Neither replaces validated diabetes testing, and there is no universal optimal fasting-insulin target." },
      { name: "Continuous glucose monitoring without diabetes", detail: "Can reveal individual glucose patterns, but routine use in otherwise healthy people has not been shown to improve long-term health outcomes." },
      { name: "Epigenetic or biological-age clocks", detail: "Useful research tools for studying ageing biology. A commercial ‘biological age’ score is not yet a validated basis for individual treatment decisions." },
      { name: "Whole-body MRI screening", detail: "Can produce incidental findings and downstream investigations. Routine screening of asymptomatic people without specific risk factors is not supported by sufficient evidence of net benefit." },
      { name: "Broad hormone and micronutrient panels", detail: "More measurements do not necessarily produce better care. Testing is most useful when symptoms, risk factors or treatments make a result actionable." }
    ]
  }
];


const biomarkerGroups = [
  {
    title: "Cardiovascular and inflammatory health",
    tests: [
      { name: "Apolipoprotein B (ApoB)", measures: "The number of atherogenic lipoprotein particles.", reason: "Can refine cardiovascular risk when standard cholesterol measurements are discordant.", when: "Especially useful in selected patients with elevated triglycerides, diabetes or uncertain lipid-related risk.", evidence: "Established, risk-dependent" },
      { name: "Lipoprotein(a) — Lp(a)", measures: "A largely inherited lipoprotein-related risk factor.", reason: "Helps identify cardiovascular risk that may not be obvious from routine cholesterol testing.", when: "Several major guidelines support a measurement at least once in adulthood; interpret units and risk in context.", evidence: "Established risk marker" },
      { name: "High-sensitivity CRP (hs-CRP)", measures: "Low concentrations of C-reactive protein, a nonspecific inflammatory marker.", reason: "May add information to cardiovascular risk estimation in selected people.", when: "Consider when the result could alter risk discussions; repeat or defer during acute illness.", evidence: "Selective clinical use" },
      { name: "Homocysteine", measures: "A circulating amino acid affected by folate, B12, kidney function and other factors.", reason: "Can contribute to investigation of nutritional or metabolic issues and is associated with vascular risk.", when: "Useful for particular clinical questions, not a universal cardiovascular prevention target; lowering it has not consistently reduced events.", evidence: "Selective; outcome benefit uncertain" }
    ]
  },
  {
    title: "Metabolic health",
    tests: [
      { name: "Fasting glucose", measures: "Blood glucose after fasting.", reason: "Helps assess dysglycaemia and diagnose diabetes using established criteria.", when: "According to diabetes risk, symptoms and preventive screening guidance.", evidence: "Established" },
      { name: "HbA1c", measures: "Average glycaemic exposure over approximately two to three months.", reason: "An established tool for diagnosing and monitoring diabetes, subject to recognised limitations.", when: "According to diabetes risk and clinical context; interpret cautiously when red-cell turnover is altered.", evidence: "Established" },
      { name: "Fasting insulin", measures: "Insulin concentration after fasting.", reason: "Can offer insight into insulin physiology and possible insulin resistance.", when: "Mainly research or selected clinical contexts; assays and thresholds vary.", evidence: "Emerging for routine screening" },
      { name: "HOMA-IR (calculated)", measures: "An estimate derived from fasting glucose and fasting insulin.", reason: "Used to describe insulin resistance in research and some clinical settings.", when: "Not a separate blood test and not a replacement for validated diabetes screening.", evidence: "Emerging for routine screening" }
    ]
  },
  {
    title: "Nutritional and organ health",
    tests: [
      { name: "Ferritin", measures: "An iron-storage protein that also rises with inflammation.", reason: "Helps investigate iron deficiency or possible overload.", when: "Interpret alongside symptoms, blood count, transferrin saturation and inflammatory context.", evidence: "Established when indicated" },
      { name: "25-hydroxyvitamin D", measures: "The principal blood marker of vitamin D status.", reason: "Useful for assessing suspected deficiency relevant to bone and mineral health.", when: "For clinical risk factors or indications; no proven universal high-level longevity target.", evidence: "Selective clinical use" },
      { name: "Vitamin B12", measures: "Circulating vitamin B12 status.", reason: "Helps investigate neurological symptoms, anaemia and deficiency risk.", when: "For symptoms, dietary or absorption risks, or relevant medications; borderline results may require further assessment.", evidence: "Established when indicated" },
      { name: "Folate", measures: "Circulating folate status.", reason: "Helps assess suspected folate deficiency and contextualise some homocysteine findings.", when: "When diet, anaemia or other clinical findings suggest deficiency.", evidence: "Established when indicated" },
      { name: "Cystatin C", measures: "A filtration marker used to estimate kidney function.", reason: "Can refine eGFR when creatinine is influenced by muscle mass or other factors.", when: "When greater precision is clinically useful; combined creatinine–cystatin C estimates are often preferable.", evidence: "Established in selected cases" }
    ]
  },
  {
    title: "Hormonal health",
    tests: [
      { name: "Total testosterone", measures: "Total circulating testosterone.", reason: "Can help assess suspected androgen deficiency or other endocrine conditions.", when: "When compatible symptoms or indications exist; timing and repeat confirmation matter.", evidence: "Established when indicated" },
      { name: "Sex hormone-binding globulin (SHBG)", measures: "A protein that binds circulating sex hormones.", reason: "Helps interpret testosterone results when binding proteins may be altered.", when: "Especially with borderline total testosterone or discordant clinical findings.", evidence: "Selective clinical use" }
    ]
  }
];

const references = [
  { name: "KDIGO 2024 CKD guideline — creatinine, cystatin C and albuminuria", url: "https://kdigo.org/guidelines/ckd-evaluation-and-management/" },
  { name: "National Kidney Foundation — cystatin C", url: "https://www.kidney.org/kidney-topics/cystatin-c" },
  { name: "American College of Radiology — whole-body MRI screening", url: "https://www.acr.org/Media-Center/ACR-News-Releases/2023/ACR-Statement-on-Screening-Total-Body-MRI" },
  { name: "American Diabetes Association — Standards of Care", url: "https://professional.diabetes.org/standards-of-care" },
  { name: "Endocrine Society — testosterone therapy guideline", url: "https://www.endocrine.org/clinical-practice-guidelines/testosterone-therapy" }
];

export default function AdvancedOptimization() {
  return (
    <main style={{ background: "#F8FAF9", color: "#172B2A", fontFamily: '"Inter", sans-serif' }}>
      <header style={{ background: "linear-gradient(135deg,#102D2B,#173F3A)", color: "white", padding: "clamp(5rem,12vw,9rem) 1.5rem 5rem" }}>
        <div style={{ maxWidth: 920, margin: "0 auto" }}>
          <p style={{ color: "#79DED0", fontWeight: 700, letterSpacing: ".14em", textTransform: "uppercase", fontSize: ".85rem" }}>EmpowerVida / The evidence-led guide</p>
          <h1 style={{ fontFamily: '"Manrope",sans-serif', fontSize: "clamp(2.4rem,7vw,4.8rem)", lineHeight: 1.08, margin: "1.4rem 0" }}>Advanced Diagnostics</h1>
          <p style={{ fontSize: "clamp(1.15rem,2.5vw,1.45rem)", lineHeight: 1.6, maxWidth: 750, color: "#E0F0EB" }}>What longevity clinics measure — and which tests are actually worth considering.</p>
          <p style={{ fontSize: "1rem", lineHeight: 1.8, maxWidth: 750, color: "#D0E2DC" }}>Modern medicine can detect risks earlier than ever. The opportunity is real. So is the temptation to order everything. The most useful test is one that changes a decision for the better.</p>
        </div>
      </header>
      <nav aria-label="Page sections" style={{ maxWidth: 920, margin: "0 auto", padding: "1.5rem", display: "flex", flexWrap: "wrap", gap: "1rem" }}>
        <a href="#biomarker-directory">Biomarker directory</a><a href="#established">Established prevention</a><a href="#selective">Selective testing</a><a href="#emerging">Emerging science</a><a href="#references">References</a>
      </nav>
      <div style={{ maxWidth: 920, margin: "0 auto", padding: "0 1.5rem 4rem" }}>
        <section id="biomarker-directory" style={{ padding: "3rem 0", borderTop: "1px solid #D6E1DD", scrollMarginTop: "100px" }}>
          <p style={{ color: "#16786D", fontWeight: 700, textTransform: "uppercase", letterSpacing: ".1em", fontSize: ".85rem" }}>The EmpowerVida guide</p>
          <h2 style={{ fontFamily: '"Manrope",sans-serif', fontSize: "clamp(1.8rem,4vw,2.6rem)" }}>Advanced Biomarker Directory</h2>
          <p style={{ fontSize: "1.1rem", lineHeight: 1.8 }}>Fifteen commonly discussed longevity biomarkers, with clear distinctions between established clinical uses, selective investigations and emerging applications. This is a reference directory, not a recommended panel for everyone. HOMA-IR is calculated from glucose and insulin, so the list represents fourteen measured biomarkers plus one calculation.</p>
          {biomarkerGroups.map(group => (
            <div key={group.title} style={{ marginTop: "2.5rem" }}>
              <h3 style={{ fontSize: "1.4rem", marginBottom: "1rem" }}>{group.title}</h3>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,290px),1fr))", gap: "1rem" }}>
                {group.tests.map(test => (
                  <article key={test.name} style={{ background: "#FFFFFF", padding: "1.5rem", borderRadius: 12, border: "1px solid #DCE7E2" }}>
                    <h4 style={{ fontSize: "1.13rem", margin: "0 0 .7rem" }}>{test.name}</h4>
                    <p style={{ lineHeight: 1.65 }}><strong>What it measures:</strong> {test.measures}</p>
                    <p style={{ lineHeight: 1.65 }}><strong>Why it matters:</strong> {test.reason}</p>
                    <p style={{ lineHeight: 1.65 }}><strong>When useful:</strong> {test.when}</p>
                    <p style={{ fontSize: ".9rem", color: "#166C62", fontWeight: 700, marginBottom: 0 }}>Evidence: {test.evidence}</p>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </section>
        {categories.map(category => (
          <section key={category.id} id={category.id} style={{ padding: "3rem 0", borderTop: "1px solid #D6E1DD", scrollMarginTop: "100px" }}>
            <p style={{ color: "#16786D", fontWeight: 700, textTransform: "uppercase", letterSpacing: ".1em", fontSize: ".85rem" }}>{category.eyebrow}</p>
            <h2 style={{ fontFamily: '"Manrope",sans-serif', fontSize: "clamp(1.8rem,4vw,2.6rem)", margin: "0.6rem 0 1rem" }}>{category.title}</h2>
            <p style={{ fontSize: "1.1rem", lineHeight: 1.8, maxWidth: 780 }}>{category.intro}</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,290px),1fr))", gap: "1rem", marginTop: "2rem" }}>
              {category.tests.map(test => (
                <article key={test.name} style={{ background: "#FFFFFF", padding: "1.5rem", borderRadius: 12, border: "1px solid #DCE7E2" }}>
                  <h3 style={{ fontSize: "1.13rem", lineHeight: 1.4, margin: "0 0 .8rem" }}>{test.name}</h3>
                  <p style={{ fontSize: "1rem", lineHeight: 1.7, margin: 0 }}>{test.detail}</p>
                </article>
              ))}
            </div>
          </section>
        ))}
        <section style={{ background: "#E7F1ED", padding: "clamp(1.5rem,4vw,2.5rem)", borderRadius: 12 }}>
          <h2 style={{ marginTop: 0 }}>A smarter question than “What else can I test?”</h2>
          <p style={{ lineHeight: 1.8 }}>Ask: What risk are we investigating? How reliable is this result? Would an abnormal finding change treatment? What are the possible harms of follow-up? And is there a proven intervention available?</p>
          <p style={{ lineHeight: 1.8, marginBottom: 0 }}>This is an educational guide, not an individual testing plan. Decisions should reflect personal history, symptoms and discussion with a qualified clinician.</p>
        </section>
        <section id="references" style={{ paddingTop: "3rem", scrollMarginTop: "100px" }}>
          <h2>Further reading and clinical guidance</h2>
          <ul style={{ lineHeight: 2 }}>
            {references.map(ref => <li key={ref.url}><a href={ref.url} target="_blank" rel="noopener noreferrer">{ref.name}</a></li>)}
          </ul>
          <p style={{ lineHeight: 1.8 }}>For a companion discussion of conventional and advanced blood tests, see the <Link href="/diagnostics">biomarker guide</Link>.</p>
        </section>
      </div>
    </main>
  );
}
