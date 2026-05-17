import sys

def replace_lines(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        lines = f.readlines()

    # Chunk 3: 4383-4389
    lines[4383:4390] = [
        '      <div style="background: rgba(220, 38, 38, 0.1); border-left: 4px solid #DC2626; padding: 1.5rem; margin: 2rem 0; border-radius: 8px;">\n',
        '        <p style="margin: 0; font-weight: 700; color: #DC2626; font-size: 1.1rem; margin-bottom: 0.75rem;">Clinical Addendum</p>\n',
        '        <p style="margin: 0; font-size: 1rem; line-height: 1.6;">\n',
        '          This content is for educational and informational purposes only. It is not intended as medical advice and should not replace consultation with a qualified healthcare professional. While GlyNAC has strong clinical evidence, consult your physician before starting supplementation, particularly if you have asthma, cardiovascular disease, or take prescription medications.\n',
        '        </p>\n',
        '      </div>\n'
    ]

    # Chunk 2: 4334-4347
    lines[4334:4347] = [
        '      <h2 style="font-size: 2rem; font-weight: 700; margin: 3rem 0 1.5rem 0; color: var(--color-text);">The Physician\'s Perspective</h2>\n',
        '  \n',
        '      <p style="font-size: 1.1rem; line-height: 1.8; margin-bottom: 1.5rem;">\n',
        '        GlyNAC represents a significant advancement in human longevity interventions. The Baylor trials provide methodologically sound evidence that reversing glutathione deficiency yields clinically meaningful improvements across multiple ageing hallmarks, rather than merely altering isolated biomarkers.\n',
        '      </p>\n',
        '  \n',
        '      <p style="font-size: 1.1rem; line-height: 1.8; margin-bottom: 1.5rem;">\n',
        '        This combination is increasingly considered a foundational recommendation for adults over 40. It offers a well-tolerated and accessible method to address a fundamental driver of ageing—oxidative stress—at the cellular level.\n',
        '      </p>\n',
        '  \n',
        '      <p style="font-size: 1.1rem; line-height: 1.8; margin-bottom: 1.5rem;">\n',
        '        A practical clinical observation: Glycine administration frequently improves sleep architecture by modulating NMDA receptors and reducing core body temperature. Patients routinely report more restorative sleep when the second dose is taken in the evening.\n',
        '      </p>\n'
    ]

    # Chunk 1: 4330-4333
    lines[4330:4333] = [
        '      <p style="font-size: 1.1rem; line-height: 1.8; margin-bottom: 1.5rem;">\n',
        '        <strong>Can they be taken together?</strong> Yes. Clinical protocols typically advise co-administration, twice daily (e.g., 600mg NAC + 2.5g glycine at breakfast, repeated at dinner).\n',
        '      </p>\n'
    ]

    with open(file_path, 'w', encoding='utf-8') as f:
        f.writelines(lines)

replace_lines('src/data/posts.js')
