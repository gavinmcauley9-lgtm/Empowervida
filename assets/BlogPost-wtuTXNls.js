import{a as x,j as e,L as i,R as b}from"./index-CMei3cAZ.js";import{S as u}from"./SEO-DGVE9DmK.js";import{E as y}from"./EmailCapture-nFbe7j4Z.js";import{P as f,C as v}from"./posts-C_rv1DMo.js";function T(){const{id:n}=x(),t=f.find(o=>o.id.toString()===n);if(!t)return e.jsxs("div",{className:"container",style:{paddingTop:"8rem",textAlign:"center",backgroundColor:"#000000",minHeight:"100vh",color:"#FFFFFF"},children:[e.jsxs("h1",{children:["Post not found (ID: ",n,")"]}),e.jsx("p",{children:"The requested article could not be located."}),e.jsx(i,{to:"/blog",style:{color:"#FF5F00"},children:"Back to Intel"})]});const m=v.find(o=>o.id===t.category)?.label,{headings:a,modifiedContent:d}=b.useMemo(()=>{if(!t?.content)return{headings:[],modifiedContent:""};const o=[],r=t.content.replace(/<h2([^>]*)>(.*?)<\/h2>/g,(j,h,l)=>{const c=l.replace(/<[^>]*>/g,""),s=c.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/(^-|-$)/g,"");return o.push({id:s,title:c}),`<h2 id="${s}"${h}>${l}</h2>`});return{headings:o,modifiedContent:r}},[t]),g={"@context":"https://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,name:"Home",item:"https://empowervida.com/"},{"@type":"ListItem",position:2,name:"Blog",item:"https://empowervida.com/blog"},{"@type":"ListItem",position:3,name:t.title,item:`https://empowervida.com/blog/${t.id}`}]},p={"@context":"https://schema.org","@type":"MedicalWebPage",headline:t.title,description:t.excerpt,image:t.image?`https://empowervida.com${t.image}`:"https://empowervida.com/empowervida_hero_logo.png",datePublished:t.date,lastReviewed:t.date,author:{"@type":"Physician",name:"Dr. Gavin McAuley, MBChB",medicalSpecialty:"Longevity & Metabolic Health",jobTitle:"GP & Longevity Specialist",url:"https://empowervida.com/about",sameAs:"https://www.linkedin.com/in/gavin-mcauley-62147151/"},reviewedBy:{"@type":"Physician",name:"Dr. Gavin McAuley, MBChB"},audience:{"@type":"MedicalAudience",audienceType:"patient"},publisher:{"@type":"Organization",name:"EMPOWERVIDA",logo:{"@type":"ImageObject",url:"https://empowervida.com/empowervida_hero_logo.png"}},mainEntityOfPage:{"@type":"WebPage","@id":`https://empowervida.com/blog/${t.id}`}};return e.jsx("div",{style:{backgroundColor:"var(--color-bg)",minHeight:"100vh",color:"var(--color-text)",fontFamily:'"Inter", sans-serif'},children:e.jsxs("div",{className:"container",style:{paddingTop:"clamp(6rem, 10vw, 8rem)",paddingBottom:"clamp(3rem, 6vw, 6rem)",maxWidth:"900px"},children:[e.jsx(u,{title:`${t.title} | EMPOWERVIDA`,description:t.excerpt,keywords:`${t.category}, longevity, health optimization, ${t.title}`,canonical:`/blog/${t.id}`,ogImage:t.image||"/empowervida_hero_logo.png",ogType:"article",author:"Dr. Gavin McAuley",schemaData:[p,g]}),e.jsx(i,{to:"/blog",style:{display:"inline-block",marginBottom:"2rem",color:"var(--color-text-muted)",fontSize:"0.85rem",textDecoration:"none",fontWeight:600,textTransform:"uppercase",letterSpacing:"0.05em",transition:"color 0.2s ease"},onMouseEnter:o=>o.target.style.color="var(--color-primary)",onMouseLeave:o=>o.target.style.color="var(--color-text-muted)",children:"← BACK TO BLUEPRINT"}),e.jsxs("div",{style:{background:"rgba(255, 255, 255, 0.8)",backdropFilter:"blur(12px)",padding:"clamp(1.5rem, 4vw, 3rem)",borderRadius:"16px",boxShadow:"0 10px 40px rgba(0,0,0,0.05)",border:"1px solid rgba(255, 255, 255, 0.5)"},children:[e.jsx("div",{style:{color:"var(--color-accent-teal)",fontWeight:"600",textTransform:"uppercase",fontSize:"0.85rem",letterSpacing:"0.1em",marginBottom:"1rem"},children:t.category==="all"?"General":m}),e.jsx("h1",{style:{fontSize:"clamp(2rem, 4vw, 3rem)",marginBottom:"2rem",lineHeight:"1.2",color:"var(--color-text)",fontFamily:'"Manrope", sans-serif',fontWeight:800},children:t.title}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px",padding:"12px 0",borderTop:"1px solid rgba(0,0,0,0.05)",borderBottom:"1px solid rgba(0,0,0,0.05)",marginBottom:"2rem"},children:[e.jsx("div",{style:{width:"40px",height:"40px",borderRadius:"50%",background:"var(--color-accent-teal)",display:"flex",alignItems:"center",justifyContent:"center",color:"white",fontWeight:"bold",fontSize:"18px"},children:"Dr"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[e.jsx("span",{style:{fontWeight:700,fontSize:"0.95rem",color:"var(--color-text)"},children:"Dr. Gavin McAuley, MBChB"}),e.jsx("span",{style:{fontSize:"0.8rem",color:"var(--color-accent-teal)",fontWeight:600},children:"✓ Medically Reviewed Protocol"})]})]}),e.jsx("div",{style:{width:"60px",height:"4px",background:"var(--color-accent-orange)",marginBottom:"2rem"}}),e.jsxs("div",{style:{color:"var(--color-text-muted)",fontSize:"0.9rem",fontWeight:500,textTransform:"uppercase",letterSpacing:"0.05em",marginBottom:"2rem"},children:[t.date," • Dr. Gavin"]}),t.image&&e.jsx("div",{style:{marginBottom:"3rem",borderRadius:"12px",overflow:"hidden",boxShadow:"0 4px 20px rgba(0,0,0,0.05)"},children:e.jsx("img",{src:t.image,alt:t.title,loading:"lazy",style:{width:"100%",height:"auto",display:"block"}})}),t.excerpt&&e.jsxs("div",{style:{background:"#F8F9FA",borderLeft:"4px solid #20B2AA",padding:"1.5rem",margin:"0 0 2rem 0",borderRadius:"0 8px 8px 0",fontSize:"1.05rem",lineHeight:"1.6",color:"#374151",boxShadow:"0 2px 8px rgba(0,0,0,0.03)"},children:[e.jsx("h3",{style:{margin:"0 0 0.5rem 0",fontSize:"0.85rem",textTransform:"uppercase",letterSpacing:"0.1em",color:"#20B2AA",fontWeight:800},children:"Clinical Abstract"}),t.excerpt]}),a.length>0&&e.jsxs("div",{style:{background:"rgba(32, 178, 170, 0.05)",borderLeft:"4px solid var(--color-accent-teal)",padding:"1.5rem",borderRadius:"0 8px 8px 0",marginBottom:"3rem"},children:[e.jsx("h4",{style:{margin:"0 0 1rem 0",color:"var(--color-accent-teal)",textTransform:"uppercase",letterSpacing:"0.05em",fontSize:"0.9rem"},children:"Table of Contents"}),e.jsx("ul",{style:{margin:0,paddingLeft:"1.2rem"},children:a.map(o=>e.jsx("li",{style:{marginBottom:"0.5rem"},children:e.jsx("a",{href:`#${o.id}`,style:{color:"var(--color-text)",textDecoration:"none",fontSize:"0.95rem",fontWeight:500},onMouseEnter:r=>r.target.style.color="var(--color-accent-teal)",onMouseLeave:r=>r.target.style.color="var(--color-text)",children:o.title})},o.id))})]}),e.jsx("div",{className:"blog-content",style:{fontSize:"1.125rem",lineHeight:"1.8",color:"var(--color-text)"},dangerouslySetInnerHTML:{__html:d}}),t.cta&&e.jsxs("div",{style:{marginTop:"4rem",textAlign:"center",padding:"3rem",background:"var(--color-bg-alt)",borderRadius:"12px",border:"1px solid var(--color-border)"},children:[e.jsx("h3",{style:{marginBottom:"1rem",fontSize:"1.5rem",color:"var(--color-text)",textTransform:"uppercase"},children:"Ready to Optimise?"}),e.jsx("p",{style:{marginBottom:"2rem",color:"var(--color-text-muted)"},children:"Take the next step in your health journey."}),e.jsx(i,{to:t.cta.link,className:"btn-primary",style:{display:"inline-block",textDecoration:"none",fontSize:"1rem",padding:"1rem 2.5rem",borderRadius:"8px",background:"var(--color-accent-orange)",color:"#FFFFFF",fontWeight:700,textTransform:"uppercase",letterSpacing:"0.05em"},children:t.cta.text})]})]}),t.references&&e.jsx("div",{className:"container",style:{maxWidth:"900px",margin:"0 auto 4rem auto",borderTop:"1px solid rgba(255,255,255,0.1)",paddingTop:"2rem"},children:e.jsxs("details",{style:{cursor:"pointer",color:"var(--color-text-muted)"},children:[e.jsxs("summary",{style:{fontSize:"0.9rem",fontWeight:700,textTransform:"uppercase",letterSpacing:"0.05em",marginBottom:"1rem",userSelect:"none",outline:"none"},children:["🔬 Clinical References (",t.references.length,")"]}),e.jsx("ol",{style:{paddingLeft:"1.5rem",fontSize:"0.85rem",color:"var(--color-text-muted)",lineHeight:"1.6",fontFamily:'"Inter", sans-serif'},children:t.references.map((o,r)=>e.jsxs("li",{style:{marginBottom:"0.75rem"},children:[o.text," ",o.url&&e.jsx("a",{href:o.url,target:"_blank",rel:"noopener noreferrer",style:{color:"var(--color-accent-teal)",textDecoration:"none"},children:"↗ Source"})]},r))})]})}),e.jsx(y,{variant:"default"}),e.jsx("div",{style:{marginTop:"3rem",padding:"1.5rem",background:"rgba(107, 114, 128, 0.05)",borderRadius:"8px",border:"1px solid rgba(107, 114, 128, 0.1)"},children:e.jsxs("p",{style:{fontSize:"0.85rem",color:"var(--color-text-muted)",lineHeight:"1.6",margin:0,fontStyle:"italic"},children:[e.jsx("strong",{children:"Medical Disclaimer:"})," This article reflects the author's clinical experience and personal research. It is intended for educational purposes only and is not a substitute for professional medical advice, diagnosis, or treatment. Always consult your healthcare provider before starting any supplement regimen, especially if you have existing health conditions or take medications."]})}),e.jsx("style",{children:`
          .blog-content h2 {
            color: var(--color-text);
            font-size: clamp(1.5rem, 4vw, 1.8rem);
            margin-top: 3.5rem;
            margin-bottom: 1.5rem;
            font-weight: 700;
            letter-spacing: -0.02em;
            text-transform: none;
            font-family: 'Manrope', sans-serif;
          }
          .blog-content h3 {
            color: var(--color-text);
            font-size: clamp(1.2rem, 3.5vw, 1.4rem);
            margin-top: 2.5rem;
            margin-bottom: 1rem;
            font-weight: 600;
            font-family: 'Manrope', sans-serif;
          }
          .blog-content p {
            margin-bottom: 1.8rem;
            color: var(--color-text);
            font-size: clamp(1rem, 2vw, 1.125rem);
            line-height: 1.8;
          }
          .blog-content ul, .blog-content ol {
            margin-bottom: 2rem;
            padding-left: 1.5rem;
            color: var(--color-text);
            font-size: clamp(1rem, 2vw, 1.125rem);
          }
          .blog-content li {
            margin-bottom: 0.8rem;
            line-height: 1.8;
          }
          .blog-content strong {
            color: var(--color-text-hero);
            font-weight: 700;
          }
          .blog-content a {
            color: var(--color-accent-teal);
            text-decoration: underline;
            word-break: break-word;
          }
          /* Highlight Box Style */
          .blog-content blockquote {
            background: var(--color-bg-alt);
            color: var(--color-text);
            border-left: 4px solid var(--color-accent-orange);
            padding: 1.5rem;
            margin: 2.5rem 0;
            font-style: normal;
            border-radius: 0 8px 8px 0;
            box-shadow: 0 4px 12px rgba(0,0,0,0.03);
          }
          .blog-content blockquote p {
            margin-bottom: 0;
          }
          /* Mobile-specific optimizations */
          @media (max-width: 768px) {
            .blog-content h2 {
              margin-top: 2.5rem;
              margin-bottom: 1rem;
            }
            .blog-content h3 {
              margin-top: 2rem;
              margin-bottom: 0.75rem;
            }
            .blog-content p {
              margin-bottom: 1.5rem;
            }
            .blog-content ul, .blog-content ol {
              padding-left: 1.25rem;
              margin-bottom: 1.5rem;
            }
            .blog-content blockquote {
              padding: 1.25rem;
              margin: 2rem -1rem;
              border-radius: 0 8px 8px 0;
            }
            /* Ensure images don't overflow */
            .blog-content img {
              max-width: 100%;
              height: auto;
              border-radius: 8px;
            }
            /* Make divs with inline styles responsive */
            .blog-content div[style*="padding"] {
              padding: 1.25rem !important;
            }
            .blog-content div[style*="margin"] {
              margin-left: 0 !important;
              margin-right: 0 !important;
            }
          }
          /* Ensure all images are responsive */
          .blog-content img {
            max-width: 100%;
            height: auto;
            display: block;
            margin: 2rem auto;
            border-radius: 12px;
          }
          /* Make tables responsive */
          .blog-content table {
            width: 100%;
            overflow-x: auto;
            display: block;
          }
        `})]})})}export{T as default};
