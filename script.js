/* ============================================
   NICOLAS JAN-CORREIA — INTERACTIONS
   ============================================ */

/* ---------- i18n ---------- */
const I18N = {
  fr: {
    'nav.about': 'Manifeste',
    'nav.experiences': 'Expériences',
    'nav.skills': 'Expertise',
    'nav.education': 'Parcours',
    'nav.hobbies': 'Passions',
    'nav.contact': 'Contact',

    'hero.eyebrow': '— Portfolio · 2026',
    'hero.tagline': "Construire des ponts entre mes obsessions personnelles et les défis professionnels — pour transformer un concept abstrait en quelque chose de tangible.",
    'hero.sub': 'Brand Strategy & Project Management · Paris & International · Cultural Perspectives',
    'hero.scroll': 'Scroll',

    'about.label': '01 — Manifeste',
    'about.h1': 'Là où mes obsessions',
    'about.h2': 'deviennent une méthode',
    'about.h3': 'de travail.',
    'about.lead': "Une intuition passionnée, transformée en stratégie concrète. C'est ce qui se passe quand mes passions personnelles rencontrent les enjeux des marques que j'accompagne.",
    'about.p1': "Je n'ai jamais séparé qui je suis de ce que je fais. Mes passions et mes expériences professionnelles s'alimentent mutuellement — c'est ce qui me permet d'être à 100% dans chaque sujet, avec une compréhension qui ne se simule pas.",
    'about.p2': "Je suis guidé par la volonté d'évoluer dans un environnement qui me plaît, où je sais que je peux donner le meilleur de moi-même. Là où la curiosité devient méthode, et où chaque parcours s'entrechoque pour faire émerger une vision claire.",

    'exp.label': '02 — Expériences',
    'exp.title1': "À l'intersection de la donnée",
    'exp.title2': 'et de la narration.',
    'exp.sportfive.period': '2024 — Présent · Apprentissage',
    'exp.sportfive.role': 'BI & CRM Strategy · Business Performance',
    'exp.sportfive.brief': "Optimiser l'écosystème Salesforce pour 80+ commerciaux et piloter un pipeline de 20M€ avec une précision chirurgicale.",
    'exp.sportfive.output': 'Transformer le reporting en instrument de stratégie commerciale : chaque donnée saisie devient un levier pour personnaliser les offres de sponsoring des grands clubs (OL, LOSC, RC Lens).',
    'exp.sportfive.stat1': 'Pipeline piloté',
    'exp.sportfive.stat2': 'Commerciaux outillés',
    'exp.sportfive.stat3': 'Pôles connectés',
    'exp.sportfive.stat3num': '3',
    'exp.adidas.period': '2025 · ESSEC Sport Chair',
    'exp.adidas.role': 'Brand Strategy Consulting · Training Repositioning',
    'exp.adidas.brief': "Redéfinir la proposition de valeur Adidas dans le secteur Training pour restaurer sa crédibilité auprès d'une audience qui ne se reconnaissait plus dans les discours de marque traditionnels.",
    'exp.adidas.output': "Passer du « vendeur d'équipements » au « partenaire de progression ». Une approche basée sur des niches culturelles plutôt que sur des tendances de masse — défendue devant le leadership Adidas France.",
    'exp.adidas.quote': "« La crédibilité se regagne par la précision de l'insight, pas par le volume publicitaire. »",
    'exp.m6.period': '2024 · Stage',
    'exp.m6.role': 'Marketing Analyst · Advertiser Solutions',
    'exp.m6.brief': "En immersion totale dans la régie publicitaire d'un grand groupe média, transformer la donnée d'audience en stratégies de ciblage concrètes.",
    'exp.m6.output': "La science de l'attention : quantifier l'impalpable pour prouver la valeur d'une seconde de publicité à un annonceur.",
    'exp.m6.stat1': 'Dispositifs TV/Radio conçus',
    'exp.m6.stat2': 'Revenus générés',
    'exp.rg.period': '2023 & 2024 · 2 éditions',
    'exp.rg.role': 'Lacoste · Ambassadeur & Vendeur',
    'exp.rg.brief': "Représenter l'élégance Lacoste et gérer les flux critiques de clients lors d'un des plus grands tournois du monde.",
    'exp.rg.output': "Basculer instantanément du calme plat d'une interruption de pluie à l'adrénaline d'un rush massif après un 5 sets sur le Chatrier. Lire l'énergie d'une foule comme un signal stratégique.",
    'exp.rg.quote': "« Je suis revenu pour la ferveur unique de l'événement — cette énergie collective où la performance sur le court dicte le rythme de mon propre travail. »",

    'skills.label': '03 — Expertise',
    'skills.title1': 'Une seule compétence,',
    'skills.title2': 'déclinée en quatre arènes.',
    'skills.lead': 'Traduire la donnée en narration, et la narration en décision.',
    'skills.b1.title': 'Brand Strategy',
    'skills.b1.desc': "Positionnement, propositions de valeur, narration de marque. Construire des marques qui méritent qu'on s'y attache.",
    'skills.b1.t1': 'Brand Activation',
    'skills.b1.t2': 'Cultural Insight',
    'skills.b1.t3': 'Partnership Strategy',
    'skills.b2.title': 'Data & BI',
    'skills.b2.desc': "Transformer la donnée d'observation en levier de décision commerciale.",
    'skills.b2.t1': 'Salesforce CRM',
    'skills.b2.t2': 'Pipeline Analytics',
    'skills.b2.t3': 'Reporting Strategy',
    'skills.b3.title': 'Media & Attention',
    'skills.b3.desc': "Économie de l'attention, ciblage publicitaire, formats narratifs.",
    'skills.b3.t1': 'Audience Intelligence',
    'skills.b3.t2': 'Ad Tech',
    'skills.b3.t3': 'Storytelling',
    'skills.b4.title': 'Project Management',
    'skills.b4.desc': "Pivot entre Finance, Marketing, Sales. Faire parler les équipes qui ne se parlent pas.",
    'skills.b4.t1': 'Cross-functional',
    'skills.b4.t2': 'Stakeholder Mgmt',
    'skills.b4.t3': 'Delivery',
    'skills.tools.title': 'Outils',
    'skills.lang.title': 'Langues',
    'skills.lang.fr': 'Langue maternelle',
    'skills.lang.en': 'Bilingue · C2',
    'skills.lang.de': 'Conversationnel · B1',

    'edu.label': '04 — Parcours',
    'edu.title1': 'Un triangle entre',
    'edu.title2': 'rigueur, agilité, ouverture.',
    'edu.lead': "La rigueur académique française (Dauphine), l'agilité entrepreneuriale (ESSEC), l'ouverture multiculturelle (Copenhague & Rabat).",
    'edu.dauphine.prog': 'Master · Media Management (SIREN)',
    'edu.dauphine.desc': "Programme hybride business + expertise technique des médias. L'économie de l'attention, le data-driven strategy, les nouveaux modèles de revenus médias.",
    'edu.dauphine.goal': 'Objectif : devenir le pivot entre BI et stratégie de marque pour accroître la Brand Equity.',
    'edu.essec.prog': 'Bachelor in Business Administration · Sport Chair',
    'edu.essec.desc': "Spécialisation données & digital dans le sport professionnel. Consulting stratégique pour Adidas. L'Oréal Brandstorm Challenge. Strategic Management, B2B Marketing, Business Intelligence.",
    'edu.essec.goal': 'Semestre à ESSEC Rabat (Maroc, 2023) — appréhender les marchés émergents.',
    'edu.cbs.prog': 'Semester Exchange · Global Mindset',
    'edu.cbs.desc': "Approche scandinave : durabilité stratégique, leadership collaboratif. Cross-Cultural Communication — l'impact des biais culturels sur les négociations internationales.",
    'edu.cbs.goal': 'Le déclic : lier intérêts personnels (cultures étrangères) et rigueur professionnelle internationale.',

    'hob.label': '05 — Passions',
    'hob.title1': "Ce qui n'apparaît",
    'hob.title2': 'jamais sur un CV.',
    'hob.lead': "Quatre terrains qui nourrissent ma façon de penser les marques — quotidiennement, depuis longtemps.",
    'hob.p1.t': 'Voyages',
    'hob.p1.d': "Japon, Maroc, Danemark — chaque voyage devient une lentille pour relire les marques, les cultures, les usages.",
    'hob.p2.t': 'Sport',
    'hob.p2.d': "Olympique Lyonnais depuis l'enfance, Roland-Garros côté tribunes et côté terrain. Le sport est mon laboratoire favori pour comprendre les marques.",
    'hob.p3.t': 'Investissement',
    'hob.p3.d': "PEA + CTO. Une discipline personnelle pour cultiver une rigueur d'analyse, loin de l'instantanéité.",
    'hob.p4.t': 'Curiosité journalistique',
    'hob.p4.d': "JDE Pôle Sport & Culture, concours « Au Micro » de Canal+. Comprendre comment les systèmes sont câblés — pas seulement les opérer.",
    'hob.cta': 'Galerie complète →',
    'hob.bigcta': "Découvrir l'intégralité de mes passions",

    'exp.cta': 'Voir le détail →',
    'exp.viewall': 'Voir le détail complet de mes expériences',
    'edu.viewall': 'Découvrir mon parcours académique',
    'page.back': "Retour à l'accueil",
    'hob.japan.label': 'TRAVELS · Japan',
    'hob.japan.h1': 'Là où la discipline la plus rigoureuse',
    'hob.japan.h2': 'et la créativité la plus décalée',
    'hob.japan.h3': "coexistent sans s'excuser.",
    'hob.japan.sub': "Tokyo · Osaka · Kyoto — un terrain de jeu sensoriel et culturel.",
    'hob.japan.osaka': "Un théâtre à ciel ouvert où le mix de cultures et de genres est total. Chaque identité vestimentaire est une performance. On s'y sent libre de réinventer son propre style au milieu de la foule.",
    'hob.japan.kyoto': "Seul, à la tombée de la nuit, perdu au milieu des milliers de torii. Un moment suspendu dans un silence extraordinaire qui fait oublier le reste du monde.",
    'hob.travels.intro': "Au-delà du Japon — chaque voyage devient une lentille pour relire les marques, les cultures et les usages.",
    'hob.travels.morocco': "Un semestre à ESSEC Rabat. Lire les marques sous l'angle d'un marché émergent — c'est là que j'ai compris qu'une stratégie ne se duplique jamais d'un continent à l'autre.",
    'hob.travels.copenhagen': "Le déclic scandinave. Une approche du business plus collaborative, plus durable, où le silence vaut autant qu'un argument.",
    'hob.travels.tokyo': "Shibuya, Shimokitazawa, les ruelles de Yanaka — Tokyo n'est pas une ville, c'est une collection de quartiers qui chacun raconte une histoire différente du même pays.",
    'hob.travels.kyoto2': "Les temples au lever du jour, les ruelles de Gion. Le contraste avec Osaka, à 15 minutes de Shinkansen, est une leçon de positionnement à elle seule.",
    'hob.travels.marrakech': "L'art de la négociation comme conversation, pas comme transaction. Un cours accéléré en cross-cultural communication.",
    'hob.travels.nyhavn': "L'hiver scandinave force au minimalisme — dans les choix, dans les mots, dans le design. Une discipline visuelle qui se ressent partout.",
    'hob.sport.label': 'MOTEUR ÉMOTIONNEL · Sport',
    'hob.sport.h1': 'Olympique Lyonnais.',
    'hob.sport.h2': "Depuis l'enfance.",
    'hob.sport.p': "J'écrivais déjà mon propre journal sur l'actualité du club entre le primaire et le collège. C'est là que ma curiosité journalistique a commencé — bien avant que je sache que c'en était une.",
    'hob.sport.tennis': "Le tennis, c'est l'autre versant. Roland-Garros m'a vu côté tribunes, côté boutique Lacoste, côté terrain. Le sport, dans toutes ses dimensions, reste mon laboratoire favori pour comprendre les marques.",
    'hob.invest.label': 'DISCIPLINE · Investing',
    'hob.invest.h1': "Cultiver une rigueur d'analyse.",
    'hob.invest.h2': "Loin de l'instantanéité.",
    'hob.invest.p': "Tout est parti de la curiosité — discussions entre amis, heures à explorer pour comprendre les mécanismes qui régissent l'économie. Aujourd'hui, c'est une forme de discipline personnelle : construire un patrimoine avec une perspective de long terme.",
    'hob.invest.legend': 'PEA + CTO · Long-term perspective',
    'hob.curio.label': 'ANGLE JOURNALISTIQUE · Curiosity',
    'hob.curio.h1': 'Comprendre comment',
    'hob.curio.h2': 'les systèmes sont câblés.',
    'hob.curio.jde': "Pôle Sport & Culture. Je ne consomme pas les systèmes — j'ai besoin de comprendre comment ils sont câblés.",
    'hob.curio.aumicro': "L'art de la narration sportive. Comment transformer un événement technique en épopée narrative capable de captiver des millions de personnes.",
    'hob.curio.tag1': 'Football',
    'hob.curio.tag2': 'Tennis',
    'hob.curio.tag3': 'Markets',
    'hob.curio.tag4': 'Japan',
    'hob.curio.tag5': 'Travel',
    'hob.curio.tag6': 'Storytelling',

    'ct.label': '06 — Contact',
    'ct.h1': 'Une intuition,',
    'ct.h2': 'un projet, un café ?',
    'ct.cv': 'CV PDF',
    'ct.loc': 'Paris · Open to International · Sport · Media · Brand Strategy',
    'ct.built': 'Conçu avec soin · HTML · CSS · JS',

    'photo.placeholder': '[ photo ]',
  },
  en: {
    'nav.about': 'Manifesto',
    'nav.experiences': 'Experiences',
    'nav.skills': 'Expertise',
    'nav.education': 'Education',
    'nav.hobbies': 'Passions',
    'nav.contact': 'Contact',

    'hero.eyebrow': '— Portfolio · 2026',
    'hero.tagline': 'Build bridges between my personal obsessions and professional challenges — to turn abstract concepts into something tangible.',
    'hero.sub': 'Brand Strategy & Project Management · Paris & International · Cultural Perspectives',
    'hero.scroll': 'Scroll',

    'about.label': '01 — Manifesto',
    'about.h1': 'Where my obsessions',
    'about.h2': 'become a working',
    'about.h3': 'method.',
    'about.lead': "A passionate intuition, turned into concrete strategy. That's what happens when my personal passions meet the brands I work with.",
    'about.p1': "I have never separated who I am from what I do. My passions and my professional experiences feed each other — that's what lets me be 100% in every subject, with an understanding that can't be faked.",
    'about.p2': "I'm guided by the will to grow in an environment I love, where I know I can give my best. Where curiosity becomes method, and where every path collides to make a clear vision emerge.",

    'exp.label': '02 — Experiences',
    'exp.title1': 'At the intersection of data',
    'exp.title2': 'and storytelling.',
    'exp.sportfive.period': '2024 — Present · Apprenticeship',
    'exp.sportfive.role': 'BI & CRM Strategy · Business Performance',
    'exp.sportfive.brief': "Optimize the Salesforce ecosystem for 80+ sales reps and steer a €20M pipeline with surgical precision.",
    'exp.sportfive.output': "Turn reporting into a commercial strategy instrument: each data point becomes a lever to personalize sponsorship offers for major clubs (OL, LOSC, RC Lens).",
    'exp.sportfive.stat1': 'Pipeline steered',
    'exp.sportfive.stat2': 'Sales reps equipped',
    'exp.sportfive.stat3': 'Departments connected',
    'exp.sportfive.stat3num': '3',
    'exp.adidas.period': '2025 · ESSEC Sport Chair',
    'exp.adidas.role': 'Brand Strategy Consulting · Training Repositioning',
    'exp.adidas.brief': "Redefine Adidas's value proposition in the Training segment to restore credibility with an audience that no longer recognized itself in traditional brand discourse.",
    'exp.adidas.output': 'Shift from "equipment seller" to "progression partner". A cultural-niche approach over mass trends — defended in front of Adidas France leadership.',
    'exp.adidas.quote': '"Credibility is regained through the precision of insight, not through advertising volume."',
    'exp.m6.period': '2024 · Internship',
    'exp.m6.role': 'Marketing Analyst · Advertiser Solutions',
    'exp.m6.brief': "Total immersion in a major media group's ad sales house — turning audience data into concrete targeting strategies.",
    'exp.m6.output': "The science of attention: quantifying the intangible to prove the value of one second of advertising to an advertiser.",
    'exp.m6.stat1': 'TV/Radio activations designed',
    'exp.m6.stat2': 'Revenue generated',
    'exp.rg.period': '2023 & 2024 · 2 editions',
    'exp.rg.role': 'Lacoste · Ambassador & Vendor',
    'exp.rg.brief': 'Represent the elegance of Lacoste and manage critical client flows during one of the biggest tournaments in the world.',
    'exp.rg.output': "Switch instantly from the dead calm of a rain delay to the adrenaline of a massive rush after a 5-set match on Chatrier. Read a crowd's energy as a strategic signal.",
    'exp.rg.quote': '"I came back for the unique fervor of the event — that collective energy where the performance on court dictates the rhythm of my own work."',

    'skills.label': '03 — Expertise',
    'skills.title1': 'One single skill,',
    'skills.title2': 'played out in four arenas.',
    'skills.lead': 'Translate data into story, and story into decision.',
    'skills.b1.title': 'Brand Strategy',
    'skills.b1.desc': 'Positioning, value propositions, brand storytelling. Building brands worth caring about.',
    'skills.b1.t1': 'Brand Activation',
    'skills.b1.t2': 'Cultural Insight',
    'skills.b1.t3': 'Partnership Strategy',
    'skills.b2.title': 'Data & BI',
    'skills.b2.desc': 'Turn observational data into commercial decision leverage.',
    'skills.b2.t1': 'Salesforce CRM',
    'skills.b2.t2': 'Pipeline Analytics',
    'skills.b2.t3': 'Reporting Strategy',
    'skills.b3.title': 'Media & Attention',
    'skills.b3.desc': 'Attention economy, ad targeting, narrative formats.',
    'skills.b3.t1': 'Audience Intelligence',
    'skills.b3.t2': 'Ad Tech',
    'skills.b3.t3': 'Storytelling',
    'skills.b4.title': 'Project Management',
    'skills.b4.desc': 'Pivot between Finance, Marketing, Sales. Get teams talking when they normally don\'t.',
    'skills.b4.t1': 'Cross-functional',
    'skills.b4.t2': 'Stakeholder Mgmt',
    'skills.b4.t3': 'Delivery',
    'skills.tools.title': 'Tools',
    'skills.lang.title': 'Languages',
    'skills.lang.fr': 'Native',
    'skills.lang.en': 'Bilingual · C2',
    'skills.lang.de': 'Conversational · B1',

    'edu.label': '04 — Education',
    'edu.title1': 'A triangle between',
    'edu.title2': 'rigor, agility, openness.',
    'edu.lead': 'French academic rigor (Dauphine), entrepreneurial agility (ESSEC), multicultural openness (Copenhagen & Rabat).',
    'edu.dauphine.prog': "Master's · Media Management (SIREN)",
    'edu.dauphine.desc': "Hybrid program: business + technical media expertise. Attention economy, data-driven strategy, new media revenue models.",
    'edu.dauphine.goal': 'Goal: become the pivot between BI and brand strategy to grow Brand Equity.',
    'edu.essec.prog': 'Bachelor in Business Administration · Sport Chair',
    'edu.essec.desc': "Specialization in data & digital within professional sport. Strategic consulting for Adidas. L'Oréal Brandstorm Challenge. Strategic Management, B2B Marketing, Business Intelligence.",
    'edu.essec.goal': 'Semester at ESSEC Rabat (Morocco, 2023) — understanding emerging markets.',
    'edu.cbs.prog': 'Semester Exchange · Global Mindset',
    'edu.cbs.desc': 'A Scandinavian approach: strategic sustainability, collaborative leadership. Cross-Cultural Communication — the impact of cultural bias on international negotiations.',
    'edu.cbs.goal': 'The click: linking personal interests (foreign cultures) with international professional rigor.',

    'hob.label': '05 — Passions',
    'hob.title1': 'What never appears',
    'hob.title2': 'on a CV.',
    'hob.lead': "Four territories that feed my way of thinking about brands — daily, for a long time.",
    'hob.p1.t': 'Travels',
    'hob.p1.d': "Japan, Morocco, Denmark — every trip becomes a lens to re-read brands, cultures, habits.",
    'hob.p2.t': 'Sport',
    'hob.p2.d': "Olympique Lyonnais since childhood, Roland-Garros from the stands and from the grounds. Sport is my favorite lab to understand brands.",
    'hob.p3.t': 'Investing',
    'hob.p3.d': "PEA + CTO. A personal discipline for cultivating analytical rigor, far from instant gratification.",
    'hob.p4.t': 'Journalistic curiosity',
    'hob.p4.d': "JDE Sport & Culture pole, the Canal+ \"Au Micro\" contest. Understanding how systems are wired — not just operating them.",
    'hob.cta': 'Full gallery →',
    'hob.bigcta': 'Explore my passions in full',

    'exp.cta': 'View detail →',
    'exp.viewall': 'See the full detail of my experiences',
    'edu.viewall': 'Discover my academic path',
    'page.back': 'Back to home',
    'hob.japan.label': 'TRAVELS · Japan',
    'hob.japan.h1': 'Where the most rigorous discipline',
    'hob.japan.h2': 'and the most offbeat creativity',
    'hob.japan.h3': 'coexist without apology.',
    'hob.japan.sub': 'Tokyo · Osaka · Kyoto — a sensory and cultural playground.',
    'hob.japan.osaka': "An open-air theater where the mix of cultures and styles is total. Every dress identity is a performance. You feel free to reinvent your own style in the middle of the crowd.",
    'hob.japan.kyoto': "Alone, at nightfall, lost among the thousands of torii gates. A suspended moment in extraordinary silence that makes you forget the rest of the world.",
    'hob.travels.intro': 'Beyond Japan — every trip becomes a lens to re-read brands, cultures and habits.',
    'hob.travels.morocco': "A semester at ESSEC Rabat. Reading brands through the lens of an emerging market — that's where I understood that a strategy never duplicates from one continent to another.",
    'hob.travels.copenhagen': 'The Scandinavian click. A more collaborative, more sustainable approach to business, where silence is worth as much as an argument.',
    'hob.travels.tokyo': 'Shibuya, Shimokitazawa, the alleys of Yanaka — Tokyo is not a city, it\'s a collection of neighborhoods, each telling a different story of the same country.',
    'hob.travels.kyoto2': 'Temples at sunrise, the alleys of Gion. The contrast with Osaka — 15 minutes of Shinkansen — is a positioning lesson on its own.',
    'hob.travels.marrakech': 'The art of negotiation as conversation, not transaction. A crash course in cross-cultural communication.',
    'hob.travels.nyhavn': 'The Scandinavian winter forces minimalism — in choices, in words, in design. A visual discipline you feel everywhere.',
    'hob.sport.label': 'EMOTIONAL ENGINE · Sport',
    'hob.sport.h1': 'Olympique Lyonnais.',
    'hob.sport.h2': 'Since childhood.',
    'hob.sport.p': "I was already writing my own newspaper about the club between primary and middle school. That's where my journalistic curiosity began — long before I knew that's what it was.",
    'hob.sport.tennis': "Tennis is the other side. Roland-Garros has seen me in the stands, in the Lacoste shop, on the grounds. Sport, in all its dimensions, remains my favorite lab to understand brands.",
    'hob.invest.label': 'DISCIPLINE · Investing',
    'hob.invest.h1': 'Cultivating analytical rigor.',
    'hob.invest.h2': 'Far from instant gratification.',
    'hob.invest.p': "It all started with curiosity — conversations with friends, hours exploring to understand the mechanisms that drive the economy. Today it's a form of personal discipline: building wealth with a long-term perspective.",
    'hob.invest.legend': 'PEA + CTO · Long-term perspective',
    'hob.curio.label': 'JOURNALISTIC ANGLE · Curiosity',
    'hob.curio.h1': 'Understanding how',
    'hob.curio.h2': 'systems are wired.',
    'hob.curio.jde': "Sport & Culture pole. I don't just consume systems — I need to understand how they're wired.",
    'hob.curio.aumicro': 'The art of sports storytelling. How to turn a technical event into a narrative epic capable of captivating millions of people.',
    'hob.curio.tag1': 'Football',
    'hob.curio.tag2': 'Tennis',
    'hob.curio.tag3': 'Markets',
    'hob.curio.tag4': 'Japan',
    'hob.curio.tag5': 'Travel',
    'hob.curio.tag6': 'Storytelling',

    'ct.label': '06 — Contact',
    'ct.h1': 'A hunch,',
    'ct.h2': 'a project, a coffee?',
    'ct.cv': 'CV PDF',
    'ct.loc': 'Paris · Open to International · Sport · Media · Brand Strategy',
    'ct.built': 'Built with care · HTML · CSS · JS',

    'photo.placeholder': '[ photo ]',
  }
};

let currentLang = localStorage.getItem('njc-lang') || 'fr';

function applyLang(lang) {
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const val = I18N[lang][key];
    if (val !== undefined) {
      // Smooth fade swap
      el.style.transition = 'opacity 0.18s ease';
      el.style.opacity = '0';
      setTimeout(() => {
        el.innerHTML = val;
        el.style.opacity = '1';
      }, 180);
    }
  });
  // Update toggle visual
  const toggle = document.getElementById('langToggle');
  if (toggle) {
    const cur = toggle.querySelector('.lang-toggle__current');
    const oth = toggle.querySelector('.lang-toggle__other');
    cur.textContent = lang.toUpperCase();
    oth.textContent = (lang === 'fr' ? 'EN' : 'FR');
  }
  currentLang = lang;
  localStorage.setItem('njc-lang', lang);
}

document.addEventListener('DOMContentLoaded', () => {
  applyLang(currentLang);

  const toggle = document.getElementById('langToggle');
  if (toggle) {
    toggle.addEventListener('click', () => {
      applyLang(currentLang === 'fr' ? 'en' : 'fr');
    });
  }
});

/* ---------- Nav scroll state ---------- */
const nav = document.querySelector('.nav');
let lastScroll = 0;
window.addEventListener('scroll', () => {
  const y = window.scrollY;
  if (nav) nav.classList.toggle('is-scrolled', y > 30);
  lastScroll = y;
}, { passive: true });

/* ---------- Reveal on scroll ---------- */
const revealEls = document.querySelectorAll(
  '.about__headline, .about__lead, .about__details, .section__title, .skills__lead, .education__lead, ' +
  '.exp-card, .bento__card, .edu-item, .japan-panel, .travel-card, .hob-sport__copy, .hob-sport__quote, ' +
  '.hob-sport__photo, .hob-invest__chart, .hob-invest__grid > div, .hob-curio__grid > div, .curio-card, ' +
  '.contact__h, .contact__email, .contact__links, .contact__loc, .hob-japan__sticky, .hob-japan__panels, ' +
  '.travels-gallery__intro, .hob-curio__strip'
);
revealEls.forEach(el => el.classList.add('reveal'));

const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-in');
      // trigger number counter
      entry.target.querySelectorAll('.stat__num[data-count]').forEach(animateCount);
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.15, rootMargin: '0px 0px -10% 0px' });

revealEls.forEach(el => io.observe(el));

/* ---------- Number counter ---------- */
function animateCount(el) {
  if (el.dataset.counted) return;
  el.dataset.counted = '1';
  const target = parseFloat(el.getAttribute('data-count'));
  const suffix = el.getAttribute('data-suffix') || '';
  const duration = 1600;
  const startTime = performance.now();

  function step(now) {
    const t = Math.min((now - startTime) / duration, 1);
    const eased = 1 - Math.pow(1 - t, 3); // easeOutCubic
    const value = Math.round(target * eased);
    el.textContent = value + suffix;
    if (t < 1) requestAnimationFrame(step);
    else el.textContent = target + suffix;
  }
  requestAnimationFrame(step);
}

/* ---------- Sphere flash on experience reveal ---------- */
const sphere = document.getElementById('sphere');
const expCards = document.querySelectorAll('.exp-card[data-color]');
const flashIO = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting && sphere) {
      const color = entry.target.getAttribute('data-color') || '#0A0A0A';
      const rgb = hexToRgba(color, 0.45);
      sphere.style.setProperty('--flash-color', rgb);
      sphere.classList.add('flash');
      clearTimeout(sphere._flashT);
      sphere._flashT = setTimeout(() => sphere.classList.remove('flash'), 1400);
    }
  });
}, { threshold: 0.4 });
expCards.forEach(c => flashIO.observe(c));

function hexToRgba(hex, a) {
  const h = hex.replace('#','');
  const r = parseInt(h.substring(0,2),16), g = parseInt(h.substring(2,4),16), b = parseInt(h.substring(4,6),16);
  return `rgba(${r}, ${g}, ${b}, ${a})`;
}

/* ---------- Logo color reflect on hover ---------- */
document.querySelectorAll('.orbit__logo[data-color]').forEach(logo => {
  logo.addEventListener('mouseenter', () => {
    if (!sphere) return;
    sphere.style.setProperty('--flash-color', hexToRgba(logo.dataset.color, 0.45));
    sphere.classList.add('flash');
  });
  logo.addEventListener('mouseleave', () => {
    if (!sphere) return;
    setTimeout(() => sphere.classList.remove('flash'), 600);
  });
});

/* ---------- Position orbit logos at correct radius ---------- */
function positionOrbits() {
  const wrap = document.querySelector('.hero__sphere-wrap');
  if (!wrap) return;
  const size = wrap.getBoundingClientRect().width;
  document.querySelectorAll('.orbit').forEach((orbit, i) => {
    const logo = orbit.querySelector('.orbit__logo');
    if (!logo) return;
    // Each orbit at slightly different radius, between 42% and 50% of wrap
    const radii = [0.46, 0.50, 0.44, 0.48, 0.42, 0.50, 0.45];
    const r = (radii[i] || 0.46) * size;
    logo.style.left = `${size/2 + r}px`;
    logo.style.top  = `50%`;
  });
}
window.addEventListener('load', positionOrbits);
window.addEventListener('resize', positionOrbits);
