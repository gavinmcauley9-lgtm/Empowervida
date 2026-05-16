import sys

def replace_lines(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        lines = f.readlines()

    # We must do replacements from bottom to top so line indices don't shift for earlier chunks if we change line counts.
    
    # Chunk 4: 3898:3901
    lines[3898:3901] = [
        '      <div style="background: rgba(220, 38, 38, 0.1); border-left: 4px solid #DC2626; padding: 1.5rem; margin: 2rem 0; border-radius: 8px;">\n',
        '        <p style="margin: 0; font-weight: 700; color: #DC2626; font-size: 1.1rem; margin-bottom: 0.75rem;">Clinical Addendum</p>\n',
        '        <p style="margin: 0; font-size: 1rem; line-height: 1.6;">\n',
        '          This content is for educational and informational purposes only. It is not intended as medical advice and should not replace consultation with a qualified healthcare professional. Always consult your physician before starting any new supplement, diet, or exercise programme.\n',
        '        </p>\n',
        '      </div>\n'
    ]

    # Chunk 3: 3829:3832
    lines[3829:3832] = [
        '      <p style="font-size: 1.1rem; line-height: 1.8; margin-bottom: 1.5rem;">\n',
        '        Modern clinical protocols do not wait for MRI-visible atrophy before initiating treatment. The objective is to optimize cerebral metabolism immediately.\n',
        '      </p>\n'
    ]
    
    # Chunk 2: 3789:3792
    lines[3789:3792] = [
        '      <p style="font-size: 1.1rem; line-height: 1.8; margin-bottom: 1.5rem;">\n',
        '        Two seminal discoveries have fundamentally altered the clinical approach to neurodegenerative conditions:\n',
        '      </p>\n'
    ]

    # Chunk 1: 3770:3786
    lines[3770:3786] = [
        '      <p style="font-size: 1.1rem; line-height: 1.8; margin-bottom: 1.5rem;">\n',
        '        A frequent and challenging clinical presentation involves patients who maintain ostensibly healthy lifestyles but still experience insidious cognitive changes.\n',
        '      </p>\n',
        '  \n',
        '      <p style="font-size: 1.1rem; line-height: 1.8; margin-bottom: 1.5rem;">\n',
        '        Consider a common scenario in longevity medicine: a patient presents with signs of early-onset cognitive decline—such as uncharacteristic forgetfulness noticed by a spouse—yet all standard laboratory panels return "normal." The patient may be physically active and present well, masking the underlying metabolic dysfunction.\n',
        '      </p>\n',
        '  \n',
        '      <p style="font-size: 1.1rem; line-height: 1.8; margin-bottom: 1.5rem;">\n',
        '        When evaluating standard screens—full blood count, iron, thyroid function—no immediate anomalies are detected. The conventional, reactive approach often involves a neurological referral, an unremarkable MRI, and a preliminary diagnosis of early-stage dementia, offering little in the way of actionable intervention.\n',
        '      </p>\n',
        '  \n',
        '      <p style="font-size: 1.1rem; line-height: 1.8; margin-bottom: 1.5rem;">\n',
        '        However, applying a functional medicine lens reveals a different pathology. While this patient profile appears physically intact, their neurological architecture is likely experiencing profound energy deficits. Whether categorized clinically as "brain fog," age-related memory impairment, or early cognitive decline, the underlying biology is frequently identical: a brain that can no longer metabolize fuel efficiently.\n',
        '      </p>\n'
    ]

    with open(file_path, 'w', encoding='utf-8') as f:
        f.writelines(lines)

replace_lines('src/data/posts.js')
