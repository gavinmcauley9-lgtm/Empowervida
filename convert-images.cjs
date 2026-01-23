const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const publicDir = './public';

// Top 20 largest PNG files to convert
const filesToConvert = [
    'metabolic_state_3_gridlock.png',
    'metabolic_state_2_struggle.png',
    'metabolic_state_1_normal.png',
    'cell_membrane_oil_change.png',
    'insulin_resistance_two_stages.png',
    'tactical_hero_user.png',
    'brain_sewage_glymphatic.png',
    'mitochondrion_final.png',
    'glymphatic_system_v2.png',
    'mitochondria_biogenesis.png',
    'stage_2_emergency_shutdown.png',
    'holographic_clock.png',
    'tier3_hero_user.png',
    'power_plant_two_stages.png',
    'magnesium_neuroplasticity_hero.png',
    'blog-energy-crisis.png',
    'stage_1_smoldering_furnace.png',
    'sleep_brain_v2.png',
    'amino_acid_repair.png',
    'normal_labs_energy_crisis.png'
];

async function convertToWebP() {
    console.log('Starting image conversion to WebP...\n');

    let totalSaved = 0;

    for (const file of filesToConvert) {
        const inputPath = path.join(publicDir, file);
        const outputPath = path.join(publicDir, file.replace('.png', '.webp'));

        if (!fs.existsSync(inputPath)) {
            console.log(`⚠️  Skipping ${file} - file not found`);
            continue;
        }

        try {
            const inputStats = fs.statSync(inputPath);
            const inputSize = inputStats.size;

            await sharp(inputPath)
                .webp({ quality: 80 })
                .toFile(outputPath);

            const outputStats = fs.statSync(outputPath);
            const outputSize = outputStats.size;
            const saved = inputSize - outputSize;
            const percentage = ((saved / inputSize) * 100).toFixed(1);

            totalSaved += saved;

            console.log(`✅ ${file}`);
            console.log(`   ${(inputSize / 1024).toFixed(0)}KB → ${(outputSize / 1024).toFixed(0)}KB (saved ${percentage}%)\n`);

        } catch (err) {
            console.log(`❌ Error converting ${file}: ${err.message}`);
        }
    }

    console.log('━'.repeat(50));
    console.log(`Total saved: ${(totalSaved / 1024 / 1024).toFixed(2)} MB`);
    console.log('━'.repeat(50));
}

convertToWebP();
