import sys

def replace_lines(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        lines = f.readlines()

    # Must replace from bottom to top to avoid index shifting

    # Chunk 8: 4080-4083
    lines[4080:4083] = [
        '      <div style="background: rgba(220, 38, 38, 0.1); border-left: 4px solid #DC2626; padding: 1.5rem; margin: 2rem 0; border-radius: 8px;">\n',
        '        <p style="margin: 0; font-weight: 700; color: #DC2626; font-size: 1.1rem; margin-bottom: 0.75rem;">Clinical Addendum</p>\n',
        '        <p style="margin: 0; font-size: 1rem; line-height: 1.6;">\n',
        '          This content is for educational and informational purposes only. It is not intended as medical advice and should not replace consultation with a qualified healthcare professional. Always consult your physician before starting any new supplement, diet, or exercise programme.\n',
        '        </p>\n',
        '      </div>\n'
    ]

    # Chunk 7: 4056-4062
    lines[4056:4062] = [
        '      <div style="background: rgba(102, 126, 234, 0.1); border-left: 4px solid #667eea; padding: 1.5rem; margin: 2rem 0; border-radius: 8px;">\n',
        '        <p style="margin: 0; font-weight: 700; color: #667eea; font-size: 1.1rem; margin-bottom: 0.75rem;">Clinical Observation: Beyond the Spine</p>\n',
        '        <p style="margin: 0; font-size: 1rem; line-height: 1.6;">\n',
        '          Collagen supplementation is not limited to spinal degeneration. In patients presenting with medial compartment knee pain and MRI-confirmed cartilage loss on the medial femoral condyle, standard surgical consultation often projects joint replacement within a few years. However, when such patients are placed on a targeted protocol of 10g hydrolysed collagen peptides plus 40mg UC-II daily, supported by 1g Vitamin C and optimized Vitamin D levels (>50 ng/mL), clinical outcomes frequently shift. At six months, substantial pain reduction and restored mobility (e.g., deep squats) are commonly observed. By twelve months, follow-up imaging often shows arrested cartilage loss and indications of early cartilage remodelling. This is not anecdotal magic; it is foundational biochemistry. When provided with necessary raw materials and cofactors, the body demonstrates extraordinary repair capacity, even in avascular tissues, given sufficient time and consistency.\n',
        '        </p>\n',
        '      </div>\n'
    ]

    # Chunk 6: 4038-4041
    lines[4038:4041] = [
        '        <li style="margin-bottom: 0.75rem;"><strong>Type I:</strong> The most abundant collagen in the human body. Found in skin, tendons, bones, and organs. This is the "structural steel" of your body. Supplementing Type I supports skin elasticity, bone density, and wound healing.</li>\n',
        '        <li style="margin-bottom: 0.75rem;"><strong>Type II:</strong> Found exclusively in cartilage and intervertebral discs. Undenatured Type II collagen (UC-II) works through a different mechanism: it modulates the immune system to reduce the autoimmune attack on cartilage, rather than simply providing building blocks.</li>\n',
        '        <li style="margin-bottom: 0.75rem;"><strong>Type III:</strong> Found alongside Type I in skin, blood vessels, and internal organs. It provides elasticity and is particularly important for vascular health.</li>\n'
    ]

    # Chunk 5: 4022-4030
    lines[4022:4030] = [
        '      <div style="background: linear-gradient(135deg, rgba(255, 152, 0, 0.1) 0%, rgba(255, 95, 0, 0.05) 100%); border: 2px solid #FF9800; padding: 2rem; margin: 3rem 0; border-radius: 12px; text-align: center;">\n',
        '        <p style="margin: 0; font-size: 1.3rem; font-weight: 700; color: #FF9800;">\n',
        '          Measurable Tissue Regeneration Is Not a Placebo.\n',
        '        </p>\n',
        '        <p style="margin: 1rem 0 0 0; font-size: 1.1rem; color: var(--color-text-muted);">\n',
        '          It is the biological result of providing the structural "engine" with the precise components required for repair.\n',
        '        </p>\n',
        '      </div>\n'
    ]

    # Chunk 4: 3987-3990
    lines[3987:3990] = [
        '      <p style="font-size: 1.1rem; line-height: 1.8; margin-bottom: 1.5rem;">\n',
        '        Why do modern protocols succeed where early trials failed?\n',
        '      </p>\n'
    ]

    # Chunk 3: 3944-3978
    lines[3944:3978] = [
        '      <p style="font-size: 1.1rem; line-height: 1.8; margin-bottom: 1.5rem;">\n',
        '        Physicians are trained as evidence gatekeepers, often viewing supplemental interventions with guarded skepticism. For years, the prevailing medical consensus dismissed collagen supplementation as medically inert, largely based on early trials that failed to show significant benefits. The paradigm was simple: if it wasn\'t a pharmaceutical, it was a placebo.\n',
        '      </p>\n',
        '  \n',
        '      <p style="font-size: 1.1rem; line-height: 1.8; margin-bottom: 1.5rem;">\n',
        '        However, the volume of clinical case studies reporting profound improvements—patients awaiting joint replacements experiencing unexpected pain resolution, or those with degenerative spines regaining mobility—demanded a closer scientific look. It became apparent that the initial research may not have been evaluating the correct biomarkers or formulations.\n',
        '      </p>\n',
        '  \n',
        '      <h2 style="font-size: 2rem; font-weight: 700; margin: 3rem 0 1.5rem 0; color: var(--color-text);">Clinical Observations in Spinal Degeneration</h2>\n',
        '  \n',
        '      <p style="font-size: 1.1rem; line-height: 1.8; margin-bottom: 1.5rem;">\n',
        '        Consider a common clinical scenario: a patient in their sixties with a history of heavy occupational load bearing presents with severe Spinal Stenosis and lumbar degeneration. Despite previous surgical interventions like a laminectomy, chronic pain persists. MRI scans often reveal advanced degeneration at the L4/L5 vertebrae, leading surgical teams to conclude that further operative measures are unviable. The patient is often left with standard analgesics, which are profoundly inadequate for the severity of the condition.\n',
        '      </p>\n',
        '  \n',
        '      <p style="font-size: 1.1rem; line-height: 1.8; margin-bottom: 1.5rem;">\n',
        '        Looking past outdated skepticism to newer, high-resolution data reveals a different therapeutic avenue. Studies featuring subjects with degenerative disc disease have demonstrated that specific supplemental protocols can yield not only significant pain reduction but also evidence of structural regeneration on follow-up scans within three to six months.\n',
        '      </p>\n',
        '  \n',
        '      <p style="font-size: 1.1rem; line-height: 1.8; margin-bottom: 1.5rem;">\n',
        '        In clinical observations, when patients strictly adhere to a high-dose, targeted collagen protocol, many report dramatic reductions in debilitating pain, sometimes achieving near-total resolution within 4 to 8 weeks of consistent administration.\n',
        '      </p>\n'
    ]

    # Chunk 2: 3933-3935
    lines[3933:3935] = [
        '        <p style="margin: 0; font-weight: 700; color: #FF9800; font-size: 1.1rem; margin-bottom: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em;">MUSCULOSKELETAL HEALTH</p>\n',
        '        <p style="margin: 0; font-size: 1.05rem; line-height: 1.6;">When patients face severe spinal degeneration and surgery is no longer viable, it is critical to look past outdated skepticism and examine newer, high-resolution data regarding structural regeneration.</p>\n'
    ]

    # Chunk 1: 3908-3912
    lines[3908:3912] = [
        '    title: "Clinical Observations: Can Targeted Collagen Protocols Regenerate Spinal Discs?",\n',
        '    category: \'Sarcopenia Prevention\',\n',
        '    image: \'/lumbar_spine_l4_l5_hero.webp\',\n',
        '    excerpt: "Physicians are trained as evidence gatekeepers, often viewing collagen with skepticism. However, newer, high-resolution data on bone-on-bone degeneration forces a re-evaluation. Here\'s what the science actually shows about spinal repair.",\n'
    ]

    with open(file_path, 'w', encoding='utf-8') as f:
        f.writelines(lines)

replace_lines('src/data/posts.js')
