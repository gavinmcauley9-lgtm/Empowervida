"use client";
import React from 'react';

const lipidCards = [
  {label:'HDL',tag:'Cholesterol transport',tone:'teal',description:'HDL particles help move cholesterol from tissues towards the liver. A higher HDL-C result does not automatically mean lower risk.',note:'HDL-C measures cholesterol carried by HDL, not how well HDL functions.'},
  {label:'LDL',tag:'Cholesterol delivery',tone:'amber',description:'LDL particles carry cholesterol in the bloodstream. Both larger and smaller LDL particles can enter artery walls and contribute to plaque.',note:'LDL-C measures the cholesterol inside LDL particles.'},
  {label:'ApoB',tag:'Atherogenic particle count',tone:'violet',description:'Each LDL, IDL, VLDL and Lp(a) particle carries one ApoB protein. ApoB therefore estimates the number of potentially artery-damaging particles.',note:'Two people with similar LDL-C may have different ApoB levels.'}
];
const insulinCards = [
  {label:'Blood pressure',tag:'A plausible pathway',description:'Insulin affects kidney sodium handling and sympathetic signalling. High blood pressure often accompanies insulin resistance, although the relationship is complex.'},
  {label:'Liver and blood fats',tag:'A well-established connection',description:'Insulin resistance commonly accompanies increased liver fat, higher triglycerides and changes in ApoB-containing lipoproteins.'},
  {label:'Brain and memory',tag:'Promising, not proven',description:'Insulin participates in brain signalling. Insulin resistance is associated with cognitive decline, but high insulin has not been shown to directly cause Alzheimer’s disease.'},
  {label:'Body composition',tag:'Energy storage',description:'Insulin suppresses fat breakdown after meals. Persistently high levels can accompany excess adiposity, but insulin alone does not determine weight gain.'}
];
function VisualCard({item,kind}) {
 return <article className="ev-vs-card">
   <div className="ev-vs-art" aria-hidden="true"><span className={`ev-vs-orb ev-vs-${item.tone||'teal'}`}></span><span className="ev-vs-orbit"></span></div>
   <div className="ev-vs-copy"><span className="ev-vs-tag">{item.tag}</span><h3>{item.label}</h3><p>{item.description}</p>{item.note&&<p className="ev-vs-note">{item.note}</p>}</div>
 </article>
}
export default function VisualScience({topic='cholesterol'}) {
 const cholesterol=topic==='cholesterol',cards=cholesterol?lipidCards:insulinCards;
 return <section className="ev-vs" aria-label={cholesterol?'Understanding cholesterol and ApoB':'Understanding insulin resistance'}>
 <style>{`
 .ev-vs{margin:2.25rem auto;max-width:1050px;font-family:Inter,system-ui,sans-serif}
 .ev-vs *{box-sizing:border-box}
 .ev-vs-head{padding:1.5rem 1.6rem;background:linear-gradient(115deg,#092d32,#164b4a);color:white;border-radius:18px 18px 0 0}
 .ev-vs-eyebrow{font-size:.8rem;letter-spacing:.12em;font-weight:800;color:#74e4d6;text-transform:uppercase}
 .ev-vs-head h2{font-family:Manrope,Inter,sans-serif;color:#fff!important;font-size:clamp(1.6rem,3vw,2.4rem);line-height:1.2;margin:.55rem 0!important}
 .ev-vs-head p{font-size:1.05rem;line-height:1.55;color:#e4f2f0;margin:0!important}
 .ev-vs-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:1px;background:#d9e7e4;border:1px solid #d9e7e4}
 .ev-vs-insulin .ev-vs-grid{grid-template-columns:repeat(2,minmax(0,1fr))}
 .ev-vs-card{background:#fff;min-width:0}
 .ev-vs-art{height:150px;display:flex;align-items:center;justify-content:center;position:relative;overflow:hidden;background:radial-gradient(circle at center,#225b62,#0a2d35)}
 .ev-vs-orb{width:93px;height:93px;border-radius:50%;background:radial-gradient(circle at 32% 28%,#e6fffa 0%,#66e0d3 18%,#16877e 53%,#083c4b 100%);box-shadow:0 0 25px #49e0ce77,inset -12px -12px 20px #03272a}
 .ev-vs-amber{background:radial-gradient(circle at 32% 28%,#fff9d7,#f4b34e 25%,#a94d22 70%,#482514)}
 .ev-vs-violet{background:radial-gradient(circle at 32% 28%,#f3eaff,#aa9bed 25%,#6254ae 70%,#282b59)}
 .ev-vs-orbit{position:absolute;width:145px;height:65px;border:1px solid #c2fff37a;border-radius:50%;transform:rotate(-25deg)}
 .ev-vs-copy{padding:1.2rem 1.35rem 1.5rem}
 .ev-vs-tag{font-size:.78rem;font-weight:800;letter-spacing:.07em;text-transform:uppercase;color:#087e75}
 .ev-vs-copy h3{font-size:1.55rem!important;color:#173f40!important;line-height:1.2;margin:.45rem 0 .65rem!important}
 .ev-vs-copy p{font-size:1rem!important;line-height:1.6!important;color:#243e42!important;margin:0 0 .65rem!important}
 .ev-vs-note{font-size:.92rem!important;color:#436063!important;border-top:1px solid #dce8e5;padding-top:.65rem}
 .ev-vs-bottom{padding:1.2rem 1.5rem;background:#eaf6f3;color:#153e3c;border-radius:0 0 18px 18px;font-size:1rem;line-height:1.6}
 .ev-vs-bottom strong{color:#0c5852}
 @media(max-width:700px){.ev-vs{margin:1.6rem 0}.ev-vs-head{padding:1.2rem 1.15rem}.ev-vs-head h2{font-size:1.65rem!important}.ev-vs-grid,.ev-vs-insulin .ev-vs-grid{grid-template-columns:minmax(0,1fr)}.ev-vs-card{display:grid;grid-template-columns:110px minmax(0,1fr)}.ev-vs-art{height:100%;min-height:150px}.ev-vs-orb{width:66px;height:66px}.ev-vs-orbit{width:100px;height:48px}.ev-vs-copy{padding:1.1rem}.ev-vs-copy h3{font-size:1.35rem!important}.ev-vs-copy p{font-size:1rem!important}.ev-vs-bottom{padding:1.15rem}}
 @media(max-width:360px){.ev-vs-card{grid-template-columns:minmax(0,1fr)}.ev-vs-art{height:105px;min-height:0}}
 `}</style>
 <header className="ev-vs-head"><span className="ev-vs-eyebrow">EmpowerVida · Visual Science</span><h2>{cholesterol?'Cholesterol: what your blood test really measures':'When insulin stays high'}</h2><p>{cholesterol?'Cholesterol travels inside particles. Their number matters as well as their cholesterol cargo.':'Insulin is essential. Persistently high levels often signal insulin resistance, which can affect several body systems.'}</p></header>
 <div className="ev-vs-grid">{cards.map(item=><VisualCard key={item.label} item={item}/>)}</div>
 <div className="ev-vs-bottom">{cholesterol?<><strong>The key distinction:</strong> LDL-C estimates cholesterol carried in LDL; ApoB estimates the number of atherogenic particles. Treatment targets depend on individual cardiovascular risk.</>:<><strong>The important distinction:</strong> these are associations and biological pathways, not proof that high insulin independently causes every outcome. Exercise, nutrition, sleep and appropriate care can improve metabolic health.</>}</div>
 </section>
}