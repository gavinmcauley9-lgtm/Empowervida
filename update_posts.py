import sys

def replace_lines(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        lines = f.readlines()

    # Chunk 1: Lines 3639-3651
    lines[3638:3651] = [
        '      <h2 style="font-size: 2rem; font-weight: 700; margin: 3rem 0 1.5rem 0; color: var(--color-text);">The Clinical Importance of Timing</h2>\n',
        '  \n',
        '      <p style="font-size: 1.1rem; line-height: 1.8; margin-bottom: 1.5rem;">\n',
        '        While this combination offers potent synergistic benefits, proper timing is non-negotiable. <strong>NAD+ precursors (NMN/NR) should generally be taken early in the day.</strong>\n',
        '      </p>\n',
        '  \n',
        '      <p style="font-size: 1.1rem; line-height: 1.8; margin-bottom: 1.5rem;">\n',
        '        Patients who consume NAD+ precursors in the late afternoon or evening frequently report profound sleep disturbances. Because NAD+ stimulates mitochondrial energy production without acting as a central nervous stimulant, it creates a state of deep, metabolic wakefulness that can prevent the onset of sleep.\n',
        '      </p>\n',
        '  \n',
        '      <p style="font-size: 1.1rem; line-height: 1.8; margin-bottom: 1.5rem;">\n',
        '        Endogenous NAD+ levels naturally peak in the morning alongside cortisol, aligning with the body\'s circadian rhythm. Consuming a precursor late in the day sends an inappropriate metabolic signal to the body\'s master clock, disrupting SIRT1-mediated clock genes and throwing sleep architecture into chaos.\n',
        '      </p>\n'
    ]
    
    # After first replacement, indices change. 
    # Wait, it's safer to do this in reverse order or just write the whole thing if the length changes.
    # Chunk 1 replaces 13 lines with 13 lines. Indices stay same!
    
    # Chunk 2: Lines 3665-3676 (12 lines) -> Replace with 12 lines.
    lines[3664:3676] = [
        '      <h2 style="font-size: 2rem; font-weight: 700; margin: 3rem 0 1.5rem 0; color: var(--color-text);">The Clinical Protocol</h2>\n',
        '  \n',
        '      <p style="font-size: 1.1rem; line-height: 1.8; margin-bottom: 1.5rem;">\n',
        '        To mitigate potential sleep disturbances while maximizing bioenergetic synergy, clinical dosing typically follows this structure:\n',
        '      </p>\n',
        '  \n',
        '      <h3 style="font-size: 1.5rem; font-weight: 700; margin: 2rem 0 1rem 0; color: var(--color-text);">1. The Morning Administration</h3>\n',
        '  \n',
        '      <ul style="font-size: 1.1rem; line-height: 1.8; margin-bottom: 1.5rem; padding-left: 2rem;">\n',
        '        <li style="margin-bottom: 0.75rem;"><strong>NAD+ Precursor (NMN or NR):</strong> 300–500 mg daily, taken early in the morning to align with the natural circadian peak.</li>\n',
        '        <li style="margin-bottom: 0.75rem;"><strong>Creatine Monohydrate:</strong> 5g daily. This can be co-administered with the NAD+ precursor alongside a first meal. There are no known pharmacological interactions.</li>\n',
        '      </ul>\n'
    ]
    
    # Chunk 3: Lines 3701-3705 (5 lines) -> Replace with 5 lines.
    lines[3700:3705] = [
        '      <h2 style="font-size: 2rem; font-weight: 700; margin: 3rem 0 1.5rem 0; color: var(--color-text);">The Physician\'s Perspective</h2>\n',
        '  \n',
        '      <p style="font-size: 1.1rem; line-height: 1.8; margin-bottom: 1.5rem;">\n',
        '        Combining Creatine and NAD+ precursors offers a comprehensive approach to addressing the cellular energy deficits associated with aging. By simultaneously optimizing mitochondrial ATP generation and cytoplasmic ATP recycling, patients can effectively support both physical endurance and cognitive longevity. However, adherence to strict circadian timing remains critical for therapeutic success.\n',
        '      </p>\n'
    ]

    with open(file_path, 'w', encoding='utf-8') as f:
        f.writelines(lines)

replace_lines('src/data/posts.js')
