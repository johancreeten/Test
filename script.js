// === 1. Données (questions, profils, etc.) : À reprendre tel quel ===
const questions = [
  // Q1
  {
    text: "Imaginez que vous venez d'utiliser un outil pour créer un résumé détaillé d'un rapport technique complexe. L'IA a rapidement généré un texte bien structuré et cohérent, incluant divers faits, chiffres et conclusions. Quelques heures plus tard, un collègue vous interpelle et vous demande une information clé spécifique de ce résumé (par exemple, un chiffre précis, une date importante ou une définition technique). Quelle est votre réaction ?",
    img: "IMG/question1.jpg",
    answers: [
      { text: "Vous vous souvenez facilement et avec précision de l'information demandée, comme si vous l'aviez vous-même formulée et intégrée profondément dans votre mémoire.", value: 2 },
      { text: "Vous avez du mal à vous souvenir des détails exacts et ressentez un besoin immédiat de consulter à nouveau le résumé généré par l'IA ou l'outil d'IA lui-même pour retrouver l'information précise.", value: 0 },
      { text: "Vous vous souvenez des grandes lignes ou du concept général, mais les détails précis (chiffres, noms exacts, dates) vous échappent.", value: 1 },
      { text: "Vous parvenez à restituer l'information uniquement si vous avez personnellement révisé/édité ou réfléchi dessus, sinon le rappel est difficile.", value: 2 },
      { text: "Vous réalisez que vous avez trop fait confiance à l'IA, sans engager assez de réflexion critique ou mémorisation active.", value: 0 }
    ]
  },
  // Q2
  {
    text: "Imaginez que vous venez de créer une présentation importante avec l'aide substantielle d'un outil d'IA. Peu de temps après avoir livré la présentation, votre supérieur vous félicite pour la qualité et l'efficacité du travail. À quel point ressentez-vous que cette présentation est réellement la vôtre ?",
    img: "IMG/question2.jpg",
    answers: [
      { text: "Vous ressentez une pleine appropriation et une grande fierté. L'IA était un outil, mais vous avez apporté votre touche personnelle et une révision critique approfondie.", value: 2 },
      { text: "Vous vous sentez principalement propriétaire du travail, mais reconnaissez que l'IA a joué un rôle significatif dans certaines parties peu modifiées.", value: 1 },
      { text: "Vous avez le sentiment que l'IA a fait une grande partie du travail ; vous auriez besoin de revoir le contenu pour le 'faire entièrement vôtre'.", value: 0 },
      { text: "Vous attribuez une part significative, voire la majorité, du travail à l'IA, et votre sentiment de fierté est faible.", value: 0 }
    ]
  },
  // Q3
  {
    text: "Vous allez rédiger un document important et décidez d'utiliser un outil d'IA pour générer les premières ébauches, des sections entières ou des idées. Comment allez-vous vous y prendre ?",
    img: "IMG/question3.jpg",
    answers: [
      { text: "Je guide activement l'IA, affine ses productions, pose des questions de clarification, ajuste le ton : le contenu doit coller à mes objectifs et exigences de qualité.", value: 2 },
      { text: "Je laisse l'IA prendre en charge la majeure partie de la rédaction, la considérant comme un substitut efficace pour l'exécution.", value: 0 },
      { text: "J'utilise l'IA surtout pour générer des idées, plans ou structures, avant de rédiger moi-même le contenu principal.", value: 1 },
      { text: "Je m'en sers pour rassembler des faits, exemples, résumés, mais je vérifie et croise les sources pour fiabilité.", value: 2 },
      { text: "Je rédige moi-même le document, puis utilise l'IA pour la correction ou suggestions de style/vocabulaire.", value: 1 },
      { text: "Je me sers de l'IA pour apprendre comment elle structure ses réponses, afin d'améliorer mes propres compétences pour le futur.", value: 2 }
    ]
  },
  // Q4
  {
    text: "On vous demande de produire une idée particulièrement créative ou innovante, par exemple, un concept pour une nouvelle campagne de publicité. Comment abordez-vous cette tâche avec l'IA, en tenant compte des compromis entre rapidité, originalité et contrôle créatif ?",
    img: "IMG/question4.jpg",
    answers: [
      { text: "Je demande à l'IA de générer plusieurs concepts/slogans, puis je copie rapidement celui qui me paraît le plus pertinent.", value: 0 },
      { text: "J'utilise l'IA pour obtenir une première série d'idées, puis je les passe au crible pour éviter les clichés ou suggestions trop génériques.", value: 1 },
      { text: "J'ai déjà des idées claires : je demande à l'IA de structurer/étoffer ou d'explorer des perspectives nouvelles.", value: 2 },
      { text: "Mon processus créatif principal reste indépendant ; l'IA sert pour valider une idée, générer des données, tester des mots-clés…", value: 2 }
    ]
  },
  // Q5
  {
    text: "L'IA génère un résultat parfaitement aligné avec vos attentes pour une tâche (solution innovante à un problème récurrent, etc.). Quelle est votre réaction principale ?",
    img: "IMG/question5.jpg",
    answers: [
      { text: "Je suis bluffé et je partage immédiatement sans vérification : l’IA est tellement puissante que je lui fais confiance d'emblée.", value: 0 },
      { text: "Je vérifie minutieusement avant d'agir, même si cela prend du temps.", value: 2 },
      { text: "J'intègre la solution de l'IA puis je l'adapte à ma touche personnelle (style, ton, spécificité, standards…)", value: 2 },
      { text: "Je l'utilise tel quel par manque de temps, sans réflexion critique (pression, tâche non prioritaire…)", value: 0 }
    ]
  },
  // Q6
  {
    text: "Vous faites face à un problème d'organisation persistant au sein de votre service. Après plusieurs tentatives infructueuses pour le résoudre, vous décidez d'utiliser une IA générative pour vous aider. Comment abordez-vous la situation ?",
    img: "IMG/question6.jpg",
    answers: [
      { text: "Je demande à l'IA de fournir directement la solution la plus efficace ; je m’occupe surtout de l'intégration rapide, avec vérification minimale.", value: 0 },
      { text: "J'utilise l'IA pour générer plusieurs pistes, puis je les modifie et affine pour qu'elles correspondent précisément à nos besoins.", value: 1 },
      { text: "Je formule des requêtes très précises à l'IA, pour explorer différentes facettes/méthodologies et apprendre à résoudre moi-même.", value: 2 },
      { text: "Je réserve l'IA à des aspects secondaires ; pour la résolution de fond, je privilégie l'analyse humaine/discussions/expérience.", value: 2 }
    ]
  },
  // Q7
  {
    text: "Imaginez que vous êtes sous pression et que vous devez produire rapidement une ébauche de document crucial (propositions clients, etc.) avec une IA générative. Elle vous livre une première version en un temps record. Comment utilisez-vous principalement ce gain de temps ?",
    img: "IMG/question7.jpg",
    answers: [
      { text: "Je consacre ce temps à approfondir la stratégie du document, à rechercher des infos complémentaires, ou à la révision pour une qualité exceptionnelle.", value: 2 },
      { text: "J’apprécie le temps gagné et j'avance immédiatement sur la prochaine tâche dès que l’ébauche IA est acceptable.", value: 0 },
      { text: "Je consacre ce temps à la vérification, la validation, la recherche d'absence de biais, recoupement avec d'autres sources.", value: 2 },
      { text: "J’utilise la base IA pour développer mes propres idées et compétences, dans le but de réduire ma dépendance à l’IA.", value: 2 }
    ]
  },
  // Q8
  {
    text: "Vous travaillez pour un service RH et votre entreprise vous demande de traiter des centaines de candidatures pour un poste ouvert. Comment l’IA pourrait vous aider dans cette tâche ?",
    img: "IMG/question8.jpg",
    answers: [
      { text: "Je confierais entièrement à l’IA la gestion complète des candidatures, car l’automatisation totale est très pratique.", value: 0 },
      { text: "L’IA vérifie rapidement si les candidatures répondent aux critères, mais je réalise ensuite un examen approfondi et humain.", value: 2 },
      { text: "L’IA extrait automatiquement les informations essentielles, mais je reste vigilant sur la confidentialité et les biais.", value: 2 },
      { text: "J’utiliserais l’IA pour trier les candidatures et sélectionner les meilleures, même si j’admets une perte de finesse humaine.", value: 0 },
      { text: "L’IA effectue un premier tri objectif (diplômes, compétences…), en respectant strictement la confidentialité des données.", value: 2 }
    ]
  }
];


const profils = [
  // 0-2 points
  {
    title: "L'explorateur insouciant de l'IA",
    color: "#ffeaea",
    border: "#c62828",
    explanation: `
      <div style="font-size:2.6em; font-weight:800; margin-bottom:34px; color:#c62828; text-align:center; text-transform:none;">
        L'explorateur insouciant de l'IA
      </div>
      <div style="font-size:1.16em; margin-bottom:42px; text-align:justify; line-height:1.66;">
        <b>Description :</b><br>
        Vous avez tendance à vous appuyer fortement sur les outils d'IA, les considérant souvent comme un substitut direct à l'effort cognitif personnel. Vous privilégiez la vitesse et la commodité, ce qui peut malheureusement entraîner une réduction de l'engagement critique et une dépendance à long terme vis-à-vis de l'outil. Ce profil est plus susceptible de succomber à la "paresse métacognitive" en déléguant des responsabilités intellectuelles à l'IA.
      </div>
      <div class="bloc-orange">
        <div style="font-size:1.13em; font-weight:700; color:#d27d18; margin-bottom:18px;">
          ⚠️ Points d'attention
        </div>
        <ul>
          <li>
            <b>Offload cognitif et "paresse métacognitive"</b> : Ce profil est très susceptible de déléguer des tâches cognitives à l'IA, ce qui peut lui faire contourner un raisonnement analytique profond. Cette dépendance peut entraîner une forme de "paresse métacognitive", où les responsabilités cognitives et métacognitives sont transférées à l'IA, ce qui entrave sa capacité d'auto-régulation et son engagement profond avec le matériel.
            <div style="color:#c62828;">Exemple : vous copiez une réponse IA sans jamais reformuler avec vos mots ou vérifier sa logique.</div>
          </li>
          <li>
            <b>Mémoire et rappel altérés</b> : La forte reliance sur une IA peut considérablement nuire à la capacité de se souvenir ou de citer des informations issues de son propre travail, même celles produites quelques minutes auparavant. Son cerveau pourrait s'engager moins profondément dans les processus de mémoire, traitant l'information générée par l'outil de manière plus passive.
            <div style="color:#c62828;">Exemple : impossible de réexpliquer le contenu d’un texte généré par IA même juste après l’avoir utilisé.</div>
          </li>
          <li>
            <b>Faible sentiment d'appropriation</b> : L'utilisateur peut ressentir un sentiment d'appartenance fragmenté, voire absent, vis-à-vis du travail produit avec l'IA, attribuant une part significative, voire la majorité, du crédit à l'outil.
            <div style="color:#c62828;">Exemple : vous hésitez à signer un rapport rédigé à partir de ChatGPT, car il ne “vous ressemble” pas.</div>
          </li>
          <li>
            <b>Pensée homogène et biaisée</b> : Les contenus qu'il produit peuvent être statistiquement homogènes au sein d'un même sujet et manquer de déviation par rapport aux réponses par défaut de l'IA, avec un biais vers des formes de langage courantes et des réponses moins originales.
            <div style="color:#c62828;">Exemple : vos emails ou rapports reprennent toujours les mêmes formulations générées.</div>
          </li>
          <li>
            <b>Confiance excessive en l'IA</b> : Une confiance élevée dans la capacité de l'IA à effectuer la tâche est fortement associée à moins de pensée critique et à une sous-estimation de la nécessité de vérifier les informations.
            <div style="color:#c62828;">Exemple : vous recopiez une date ou un chiffre proposé par l’IA sans la comparer à une source fiable.</div>
          </li>
        </ul>
      </div>
      <div style="background: #f7fbf6; border: 1.5px solid #d0eadc; border-radius: 11px; padding: 26px 19px 20px 19px; margin-top:44px; margin-bottom:39px;">
        <div style="font-size:1.13em; font-weight:700; color:#388e3c; margin-bottom:18px;">
          💡 Pistes d'améliorations
        </div>
        <ul>
          <li>
            <b>Pratiquer la vérification active</b> : Toujours vérifier et recouper les informations générées par l'IA avec des sources externes fiables, même pour des tâches simples. Développer un scepticisme sain face à l'output.
            <div style="color:#c62828;">Exemple : tapez une affirmation clé sur Google ou dans un ouvrage avant de la réutiliser.</div>
          </li>
          <li>
            <b>Développer l'expertise personnelle</b> : Chercher à comprendre les principes sous-jacents des solutions offertes par l'IA, plutôt que de simplement les copier ou les appliquer sans réflexion. Se poser la question : "Comment aurais-je fait sans l'IA ?".
            <div style="color:#c62828;">Exemple : si l’IA suggère une structure de plan, essayez d’expliquer pourquoi elle est pertinente avant de la reprendre.</div>
          </li>
          <li>
            <b>Engager une "stewardship" active</b> : Passer d'une exécution passive à un rôle de supervision et d'orientation active de l'IA, en affinant et en personnalisant les résultats. Interagir avec l'IA comme avec un assistant junior qui a besoin d'être guidé.
            <div style="color:#c62828;">Exemple : donnez des consignes précises (“rends le texte plus synthétique” ou “utilise le vocabulaire technique de mon secteur”).</div>
          </li>
          <li>
            <b>Équilibrer l'efficacité et l'engagement</b> : Utiliser le temps gagné par l'IA pour une réflexion plus approfondie, pour améliorer la qualité du travail ou pour explorer de nouvelles idées, plutôt que de passer immédiatement à la tâche suivante.
            <div style="color:#c62828;">Exemple : ajoutez au moins une idée personnelle à chaque texte produit avec l’IA.</div>
          </li>
        </ul>
      </div>
    `
  },
  // 3-4 points
  {
    title: "Le stratège de l'IA",
    color: "#e3f2fd",
    border: "#1976d2",
    explanation: `
      <div style="font-size:2.6em; font-weight:800; margin-bottom:34px; color:#1976d2; text-align:center; text-transform:none;">
        Le stratège de l'IA
      </div>
      <div style="font-size:1.16em; margin-bottom:42px; text-align:justify; line-height:1.66;">
        <b>Description :</b><br>
        Vous adoptez une approche plus nuancée, utilisant l'IA comme un outil de soutien pour accroître votre efficacité sans nécessairement sacrifier complètement votre engagement cognitif. Vous reconnaissez les avantages de l'IA pour la productivité et pouvez vous sentir partiellement propriétaire du travail, mais vous pouvez encore avoir des angles morts concernant la profondeur de votre réflexion critique ou votre propre confiance en vos capacités à effectuer la tâche sans l'outil.
      </div>
      <div class="bloc-orange">
        <div style="font-size:1.13em; font-weight:700; color:#d27d18; margin-bottom:18px;">
          ⚠️ Points d'attention
        </div>
        <ul>
          <li>
            <b>Offload modéré mais persistant</b> : Bien que vous puissiez vous engager davantage que l'utilisateur dépendant, il peut arriver de sous-estimer la profondeur de l'engagement cognitif nécessaire pour certaines tâches, menant à une forme de "paresse" ou à un manque de stimulation mentale pour la résolution de problèmes indépendante.
            <div style="color:#1976d2;">Exemple : vous acceptez la proposition de structure de l’IA sans y apporter d’ajustement.</div>
          </li>
          <li>
            <b>Propriété partagée et intégration</b> : Vous pouvez ressentir une propriété partielle du travail, reconnaissant l'apport de l'IA tout en y ajoutant votre touche personnelle. Cela peut être un bon équilibre, mais vous devez veiller à ne pas vous contenter du minimum.
            <div style="color:#1976d2;">Exemple : vous signez un rapport IA sans y apporter votre style, car il répond déjà “au cahier des charges”.</div>
          </li>
          <li>
            <b>Concentration sur l'intégration</b> : L'effort est déplacé de la résolution de problèmes à l'intégration des réponses de l'IA, ce qui peut encore nécessiter une adaptation substantielle pour aligner le contenu généré avec des directives spécifiques.
            <div style="color:#1976d2;">Exemple : vous reformulez les paragraphes IA, mais sans remettre en cause la structure globale.</div>
          </li>
          <li>
            <b>Biais potentiel des moteurs de recherche</b> : Si vous utilisez des moteurs de recherche en parallèle, vous pouvez être susceptible aux "bulles de filtre" et au contenu optimisé pour le référencement, ce qui peut influencer le vocabulaire et les concepts de vos écrits.
            <div style="color:#1976d2;">Exemple : vous retrouvez dans votre texte des phrases toutes faites qu’on voit souvent en ligne.</div>
          </li>
        </ul>
      </div>
      <div style="background: #f4fafd; border: 1.5px solid #bee1f2; border-radius: 11px; padding: 26px 19px 20px 19px; margin-top:44px; margin-bottom:39px;">
        <div style="font-size:1.13em; font-weight:700; color:#1976d2; margin-bottom:18px;">
          💡 Pistes d'améliorations
        </div>
        <ul>
          <li>
            <b>Affiner les invites (prompts)</b> : Développer des compétences avancées en ingénierie d'invites pour guider plus précisément l'IA et obtenir des résultats plus personnalisés et moins génériques. L'objectif est d'orienter l'IA, pas de la laisser prendre les rênes.
            <div style="color:#1976d2;">Exemple : demandez “Peux-tu développer avec des exemples issus du monde associatif ?”.</div>
          </li>
          <li>
            <b>Intégration critique et personnalisation</b> : Ne pas se contenter de copier-coller, mais éditer et retravailler activement le contenu généré par l'IA pour y ajouter une touche personnelle, un style unique et s'assurer qu'il correspond parfaitement aux objectifs et à votre propre voix.
            <div style="color:#1976d2;">Exemple : modifiez la conclusion IA pour inclure une expérience vécue.</div>
          </li>
          <li>
            <b>Diversifier les sources de pensée</b> : Ne pas se fier uniquement à l'IA ou aux premiers résultats de recherche, mais explorer une gamme plus large de perspectives et de ressources (y compris la réflexion personnelle et l'interaction humaine) pour enrichir votre compréhension et vos idées.
            <div style="color:#1976d2;">Exemple : confrontez la réponse IA à une publication scientifique ou à une discussion avec un collègue.</div>
          </li>
          <li>
            <b>Évaluer la logique interne</b> : Au-delà de la simple vérification factuelle, s'attarder sur la cohérence, la pertinence et la logique interne des arguments ou des structures proposées par l'IA.
            <div style="color:#1976d2;">Exemple : posez-vous la question “est-ce que l’argument tient la route du début à la fin ?”.</div>
          </li>
        </ul>
      </div>
    `
  },
  // 5-7 points
  {
    title: "Le maître de l'esprit critique augmenté par l'IA",
    color: "#e7fbe7",
    border: "#388e3c",
    explanation: `
      <div style="font-size:2.6em; font-weight:800; margin-bottom:34px; color:#388e3c; text-align:center; text-transform:none;">
        Le maître de l'esprit critique augmenté par l'IA
      </div>
      <div style="font-size:1.16em; margin-bottom:42px; text-align:justify; line-height:1.66;">
        <b>Description :</b><br>
        Vous démontrez un niveau élevé d'engagement cognitif, de pensée critique et d'autonomie. Vous percevez l'IA comme un outil d'augmentation de vos propres capacités, en l'utilisant stratégiquement pour approfondir votre compréhension et générer des idées originales, tout en maintenant un sens aigu de la propriété et de la responsabilité de votre travail. Votre confiance en vos propres compétences vous pousse à davantage d'engagement critique.
      </div>
      <div class="bloc-orange">
        <div style="font-size:1.13em; font-weight:700; color:#d27d18; margin-bottom:18px;">
          ⚠️ Points d'attention
        </div>
        <ul>
          <li>
            <b>Maintenir l'engagement profond</b> : Même avec des compétences critiques solides, vous devez rester vigilant face à la tentation de la "facilité" qui pourrait réduire l'engagement profond et l'automatisation de schémas cognitifs robustes.
            <div style="color:#388e3c;">Exemple : vous lisez attentivement chaque réponse IA avant de l’adopter, même si elle paraît parfaite.</div>
          </li>
          <li>
            <b>Évaluation constante de la pertinence</b> : S'assurer que l'IA ne renforce pas des biais existants ou ne fournit pas d'informations qui, bien que correctes, manquent de nuance ou de pertinence contextuelle.
            <div style="color:#388e3c;">Exemple : vous corrigez une généralité IA en l’illustrant par un cas local ou une exception concrète.</div>
          </li>
          <li>
            <b>Éviter l'atrophie des compétences</b> : Veillez à ce que l'utilisation de l'IA ne conduise pas à une "atrophie des compétences" dans des tâches comme le brainstorming et la résolution de problèmes, en maintenant un exercice actif des circuits neuronaux pour le contrôle exécutif et la génération d'idées.
            <div style="color:#388e3c;">Exemple : vous rédigez une partie du texte sans IA avant de comparer avec sa version.</div>
          </li>
          <li>
            <b>Détecter le "style IA"</b> : Continuez à développer une capacité à identifier les éléments stylistiques homogènes et génériques souvent présents dans les contenus générés par l'IA, même si l'IA s'améliore.
            <div style="color:#388e3c;">Exemple : vous réécrivez une phrase trop lisse ou banale générée par l’IA pour y injecter votre style.</div>
          </li>
        </ul>
      </div>
      <div style="background: #eefbee; border: 1.5px solid #b9e9c7; border-radius: 11px; padding: 26px 19px 20px 19px; margin-top:44px; margin-bottom:39px;">
        <div style="font-size:1.13em; font-weight:700; color:#388e3c; margin-bottom:18px;">
          💡 Pistes d'améliorations
        </div>
        <ul>
          <li>
            <b>Utilisation hybride stratégique</b> : Intégrer l'IA pour les aspects routiniers, les phases exploratoires initiales ou le scaffolding, mais toujours revenir à l'effort cognitif auto-dirigé pour les processus fondamentaux comme la génération d'idées, l'organisation et la révision critique.
            <div style="color:#388e3c;">Exemple : laissez l’IA générer un plan, puis remplissez chaque partie de votre main.</div>
          </li>
          <li>
            <b>Renforcer les réseaux neuronaux</b> : Participer à des activités qui exercent activement les réseaux cérébraux associés à la planification, au langage et au contrôle attentionnel, en alternant les phases d'apprentissage avec et sans IA. Cela permet de développer des réseaux robustes.
            <div style="color:#388e3c;">Exemple : alternez lecture, écriture sans IA et brainstorming à l’ancienne.</div>
          </li>
          <li>
            <b>Mettre l'accent sur l'originalité et la profondeur</b> : Chercher délibérément à injecter de la personnalité, de la créativité et des nuances personnelles dans les contenus produits, allant au-delà de la perfection objective ou de la simple conformité.
            <div style="color:#388e3c;">Exemple : glissez une anecdote, une image ou une métaphore originale dans le texte final.</div>
          </li>
          <li>
            <b>Devenir un "expert" de l'IA</b> : Comprendre non seulement comment utiliser l'IA, mais aussi ses mécanismes internes, ses limites et ses biais potentiels, pour mieux la "stewarder" (superviser) et la remettre en question, devenant un partenaire éclairé et responsable.
            <div style="color:#388e3c;">Exemple : explorez les paramètres avancés de ChatGPT ou lisez un article sur l’éthique de l’IA.</div>
          </li>
        </ul>
      </div>
    `
  }
];

// === 2. Variables d'état ===
let currentQuestion = 0;
let userAnswers = [];

// === 3. Affichage harmonisé section par section ===
function showSection(sectionId) {
  document.querySelectorAll('.main-container section').forEach(section => {
    section.classList.remove('active');
    section.style.display = "none";
  });
  const target = document.getElementById(sectionId);
  if (target) {
    target.classList.add('active');
    target.style.display = "block";
  }
}

// === 4. Affichage de l'intro ===
function showIntro() {
  showSection('intro-section');
  updateProgressBar(0, questions.length);
  const introSection = document.getElementById('intro-section');
  if (introSection && !introSection.querySelector('.credit')) {
    const startBtn = introSection.querySelector('#start-btn');
    if (startBtn) {
      const creditDiv = createCreditDiv();
      startBtn.insertAdjacentElement('afterend', creditDiv);
    }
  }
}

// === 5. Fonction pour la barre de progression ===
function updateProgressBar(index, total, isResult = false) {
  const progressBar = document.getElementById('progress-bar');
  let percent = isResult ? 100 : Math.round((index / total) * 100);
  progressBar.innerHTML = `
    <div class="progress-bar-inner" style="width:${percent}%">
      <span class="progress-percent">${percent}%</span>
    </div>
  `;
}

// === 6. Affichage d'une question ===
function renderQuestion(index) {
  window.scrollTo({top: 0, behavior: 'smooth'});
  showSection('quiz-section');
  updateProgressBar(index, questions.length);

  const quizSection = document.getElementById('quiz-section');
  quizSection.innerHTML = '';

  const q = questions[index];
  if (!q) return;

  // Image si présente
  if (q.img) {
    const img = document.createElement('img');
    img.src = q.img;
    img.alt = "";
    img.className = "question-illustration";
    img.loading = "lazy";
    img.style.width = "100%";
    img.style.maxWidth = "370px";
    img.style.marginBottom = "18px";
    quizSection.appendChild(img);
  }

  // Texte question
  const questionElem = document.createElement('h2');
  questionElem.textContent = q.text || q.question;
  quizSection.appendChild(questionElem);

  // Choix de réponse
  const optionsList = document.createElement('div');
  optionsList.className = 'options-list';

  (q.answers || q.options).forEach((opt, i) => {
    const label = document.createElement('label');
    label.className = 'choice-button';
    label.style.display = 'block';

    const input = document.createElement('input');
    input.type = 'radio';
    input.name = 'option';
    input.value = i;
    if (userAnswers[index] === i) input.checked = true;

    // Ajoute l'effet sélection + bouton vert
    input.addEventListener('change', function() {
      // Gère le style sélectionné pour la réponse
      document.querySelectorAll('.choice-button').forEach(lab => lab.classList.remove('selected'));
      label.classList.add('selected');

      // Gère le bouton "Suivant" ou "Voir mon profil IA"
      let nextBtn = document.getElementById('next-btn') || document.getElementById('submit-btn');
      if(nextBtn) nextBtn.classList.add('next-green');
    });

    label.appendChild(input);
    label.appendChild(document.createTextNode(opt.text || opt));
    optionsList.appendChild(label);
  });

  quizSection.appendChild(optionsList);

  // Bouton suivant ou valider
  let nextBtn = document.createElement('button');
  nextBtn.textContent = (index < questions.length - 1) ? 'Suivant' : 'Voir mon profil IA';
  nextBtn.id = (index < questions.length - 1) ? 'next-btn' : 'submit-btn';

  // Nettoie la classe verte au changement de question (pour ne pas la garder sur la question suivante)
  nextBtn.classList.remove('next-green');

  nextBtn.addEventListener('click', function() {
    const checked = quizSection.querySelector('input[name="option"]:checked');
    if (!checked) {
      alert('Merci de choisir une réponse.');
      return;
    }
    userAnswers[index] = parseInt(checked.value, 10);
    if (index < questions.length - 1) {
      currentQuestion++;
      renderQuestion(currentQuestion);
    } else {
      showResult();
    }
  });

  quizSection.appendChild(nextBtn);

  // Ajoute le crédit juste sous le bouton
  const creditDiv = createCreditDiv();
  nextBtn.insertAdjacentElement('afterend', creditDiv);

  // Si déjà répondu (cas retour en arrière), restaure bouton vert si besoin
  if (typeof userAnswers[index] !== 'undefined') {
    // Retrouve le bouton next ou submit et applique la classe verte
    let btn = document.getElementById('next-btn') || document.getElementById('submit-btn');
    if(btn) btn.classList.add('next-green');
    // Ajoute aussi la classe 'selected' à la réponse déjà choisie
    let labels = quizSection.querySelectorAll('.choice-button');
    if(labels[userAnswers[index]]) labels[userAnswers[index]].classList.add('selected');
  }
}

// === 7. Affichage du résultat ===
function showResult() {
  window.scrollTo({top: 0, behavior: 'smooth'});
  showSection('result-section');
  updateProgressBar(questions.length, questions.length, true);

  const resultSection = document.getElementById('result-section');
  resultSection.innerHTML = '';

  // Calcul du score total
  let score = userAnswers.reduce((acc, curr, idx) => {
    const answerObj = (questions[idx].answers || questions[idx].options)[curr];
    return acc + (answerObj.value !== undefined ? answerObj.value : 0);
  }, 0);

  // Attribution du profil
  let profil;
  if (score >= 5) profil = profils[2];
  else if (score >= 3) profil = profils[1];
  else profil = profils[0];

  // Calcul du pourcentage
  const percentScore = Math.round((score / questions.length) * 100);

  // Score mis en valeur en haut
  const scoreDiv = document.createElement('div');
  scoreDiv.style.textAlign = "center";
  scoreDiv.style.fontSize = "2.7em";
  scoreDiv.style.fontWeight = "900";
  scoreDiv.style.color = profil.border;
  scoreDiv.style.marginBottom = "18px";
  scoreDiv.textContent = `${percentScore}%`;
  resultSection.appendChild(scoreDiv);

  // Bloc explication du profil
  const bloc = document.createElement('div');
  bloc.innerHTML = profil.explanation;
  resultSection.appendChild(bloc);

  // Bouton recommencer
  const restartBtn = document.createElement('button');
  restartBtn.textContent = "Recommencer";
  restartBtn.id = "restart-btn";
  restartBtn.addEventListener('click', restartQuiz);
  resultSection.appendChild(restartBtn);

  // Ajoute le crédit
  const creditDiv = createCreditDiv();
  restartBtn.insertAdjacentElement('afterend', creditDiv);
}

// === 8. Création du crédit (unique) ===
function createCreditDiv() {
  const creditDiv = document.createElement('div');
  creditDiv.className = "credit";
  creditDiv.innerHTML = `Créé par <a href="https://www.linkedin.com/in/johan-creeten" target="_blank" rel="noopener">Johan Creeten</a> | CC-BY-2.0`;
  return creditDiv;
}

// === 9. Réinitialisation du quiz ===
function restartQuiz() {
  currentQuestion = 0;
  userAnswers = [];
  showIntro();
}

// === 10. Lancement du quiz (depuis l'intro) ===
document.addEventListener('DOMContentLoaded', function() {
  // Bouton démarrer dans l'intro
  const startBtn = document.getElementById('start-btn');
  if (startBtn) {
    startBtn.addEventListener('click', function() {
      currentQuestion = 0;
      userAnswers = [];
      renderQuestion(currentQuestion);
    });
  }

  // Ajoute le crédit à l'intro s'il n'est pas déjà là (pour la 1re page)
  showIntro();
});
