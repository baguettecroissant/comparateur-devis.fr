const fs = require('fs');

const raw = fs.readFileSync('raw_categories.txt', 'utf8');
const lines = raw.split('\n');

const categories = [];

function slugifyWithAccents(str) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
              .toLowerCase()
              .replace(/[^a-z0-9]+/g, '-')
              .replace(/(^-|-$)+/g, '');
}

for (const line of lines) {
    // Matches something like: "  #46  Abattage d'arbres  32%  34%"
    // or: "  #34  Alarme incendie  Statistiques indisponibles"
    const match = line.match(/#(\d+)\s+([^\t]+)(?:\t\d+%|\tStatistiques)/);
    
    if(match) {
        categories.push({
             id: parseInt(match[1], 10),
             name: match[2].trim(),
             slug: slugifyWithAccents(match[2].trim())
        });
    }
}

const unique = [];
const seen = new Set();
for(const c of categories) {
    if(!seen.has(c.id)) {
        seen.add(c.id);
        unique.push(c);
    }
}

fs.writeFileSync('src/data/categories.json', JSON.stringify(unique, null, 2));
console.log(`Parsed ${unique.length} unique categories.`);
