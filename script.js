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


onst profils = [
  // 0-3 points
  {
    title: "Le suiveur passif",
    color: "#ffeaea",
    border: "#c62828",
    explanation: `
      <div style="font-size:2.6em; font-weight:800; margin-bottom:34px; color:#c62828; text-align:center; text-transform:none;">
        Le suiveur passif
      </div>
      <div style="font-size:1.16em; margin-bottom:42px; text-align:justify; line-height:1.66;">
        <b>Description :</b><br>
        Ce profil se caractérise par une forte dépendance à l'IA et une faible conscience de la nécessité d'une pensée critique. L'utilisateur a tendance à accepter les résultats de l'IA sans vérification approfondie, privilégiant la commodité et la rapidité. Cela conduit à un déchargement cognitif important, pouvant nuire à la mémorisation et au sentiment d'appropriation du travail.
      </div>
      <div class="bloc-orange">
        <div style="font-size:1.13em; font-weight:700; color:#d27d18; margin-bottom:18px;">
          ⚠️ Points d'attention
        </div>
        <ul>
          <li>à remplir</li>
        </ul>
      </div>
      <div style="background: #f7fbf6; border: 1.5px solid #d0eadc; border-radius: 11px; padding: 26px 19px 20px 19px; margin-top:44px; margin-bottom:39px;">
        <div style="font-size:1.13em; font-weight:700; color:#388e3c; margin-bottom:18px;">
          💡 Pistes d'améliorations
        </div>
        <ul>
          <li>à remplir</li>
        </ul>
      </div>
    `
  },
  // 4-6 points
  {
    title: "L'adepte pragmatique",
    color: "#fffbe7",
    border: "#dba800",
    explanation: `
      <div style="font-size:2.6em; font-weight:800; margin-bottom:34px; color:#dba800; text-align:center; text-transform:none;">
        L'adepte pragmatique
      </div>
      <div style="font-size:1.16em; margin-bottom:42px; text-align:justify; line-height:1.66;">
        <b>Description :</b><br>
        L'utilisateur de ce profil est principalement orienté vers l'efficacité et la productivité. Il utilise l'IA pour faciliter les tâches et réduire l'effort cognitif, notamment pour la collecte ou l'organisation d'informations. Bien qu'il reconnaisse le rôle de l'IA, il peut avoir une appropriation modérée de son travail et une vérification superficielle des contenus générés. Les sources suggèrent que la confiance élevée dans l'IA peut réduire l'effort perçu pour la pensée critique.
      </div>
      <div class="bloc-orange">
        <div style="font-size:1.13em; font-weight:700; color:#d27d18; margin-bottom:18px;">
          ⚠️ Points d'attention
        </div>
        <ul>
          <li>à remplir</li>
        </ul>
      </div>
      <div style="background: #f7fbf6; border: 1.5px solid #d0eadc; border-radius: 11px; padding: 26px 19px 20px 19px; margin-top:44px; margin-bottom:39px;">
        <div style="font-size:1.13em; font-weight:700; color:#388e3c; margin-bottom:18px;">
          💡 Pistes d'améliorations
        </div>
        <ul>
          <li>à remplir</li>
        </ul>
      </div>
    `
  },
  // 7-10 points
  {
    title: "Le curateur engagé",
    color: "#e5f4ff",
    border: "#0288d1",
    explanation: `
      <div style="font-size:2.6em; font-weight:800; margin-bottom:34px; color:#0288d1; text-align:center; text-transform:none;">
        Le curateur engagé
      </div>
      <div style="font-size:1.16em; margin-bottom:42px; text-align:justify; line-height:1.66;">
        <b>Description :</b><br>
        Ce profil utilise l'IA comme un outil collaboratif, notamment pour la génération d'idées ou la structuration de contenu, qu'il adapte et raffine activement. Il est conscient de l'importance de vérifier et d'évaluer les sorties de l'IA, même s'il peut encore être influencé par les suggestions du modèle. Le temps gagné est souvent réinvesti dans la modification ou l'amélioration du travail, mais pas nécessairement pour un apprentissage profond.
      </div>
      <div class="bloc-orange">
        <div style="font-size:1.13em; font-weight:700; color:#d27d18; margin-bottom:18px;">
          ⚠️ Points d'attention
        </div>
        <ul>
          <li>à remplir</li>
        </ul>
      </div>
      <div style="background: #f7fbf6; border: 1.5px solid #d0eadc; border-radius: 11px; padding: 26px 19px 20px 19px; margin-top:44px; margin-bottom:39px;">
        <div style="font-size:1.13em; font-weight:700; color:#388e3c; margin-bottom:18px;">
          💡 Pistes d'améliorations
        </div>
        <ul>
          <li>à remplir</li>
        </ul>
      </div>
    `
  },
  // 11-13 points
  {
    title: "Le penseur critique",
    color: "#e5fbea",
    border: "#21936a",
    explanation: `
      <div style="font-size:2.6em; font-weight:800; margin-bottom:34px; color:#21936a; text-align:center; text-transform:none;">
        Le penseur critique
      </div>
      <div style="font-size:1.16em; margin-bottom:42px; text-align:justify; line-height:1.66;">
        <b>Description :</b><br>
        Caractérisé par une haute confiance en soi, cet utilisateur s'engage activement dans la vérification et l'intégration des réponses de l'IA. Son processus de pensée critique est fort, incluant la vérification systématique des sources. Il maintient un sentiment élevé d'appropriation de son travail et utilise le temps libéré par l'IA pour une réflexion stratégique approfondie et pour améliorer la qualité, plutôt que de simplement passer à la tâche suivante. Il est également sensible aux considérations éthiques comme la confidentialité des données.
      </div>
      <div class="bloc-orange">
        <div style="font-size:1.13em; font-weight:700; color:#d27d18; margin-bottom:18px;">
          ⚠️ Points d'attention
        </div>
        <ul>
          <li>à remplir</li>
        </ul>
      </div>
      <div style="background: #f7fbf6; border: 1.5px solid #d0eadc; border-radius: 11px; padding: 26px 19px 20px 19px; margin-top:44px; margin-bottom:39px;">
        <div style="font-size:1.13em; font-weight:700; color:#388e3c; margin-bottom:18px;">
          💡 Pistes d'améliorations
        </div>
        <ul>
          <li>à remplir</li>
        </ul>
      </div>
    `
  },
  // 14-16 points
  {
    title: "L'innovateur autonome",
    color: "#fff4f9",
    border: "#c2185b",
    explanation: `
      <div style="font-size:2.6em; font-weight:800; margin-bottom:34px; color:#c2185b; text-align:center; text-transform:none;">
        L'innovateur autonome
      </div>
      <div style="font-size:1.16em; margin-bottom:42px; text-align:justify; line-height:1.66;">
        <b>Description :</b><br>
        Ce profil représente l'utilisateur le plus avancé. Il intègre l'IA non seulement pour améliorer la qualité et l'efficacité de son travail, mais aussi comme un outil d'apprentissage pour développer ses propres compétences et réduire sa dépendance future à l'IA. Sa démarche créative est autonome, l'IA servant à explorer de nouvelles perspectives ou à valider des idées spécifiques. Il exerce une gestion de tâche proactive et une intégration critique, assurant que le produit final reflète pleinement sa "touche personnelle" et son expertise. Ce profil vise à minimiser l'impact négatif de l'IA sur la pensée critique et la formation de la mémoire à long terme.
      </div>
      <div class="bloc-orange">
        <div style="font-size:1.13em; font-weight:700; color:#d27d18; margin-bottom:18px;">
          ⚠️ Points d'attention
        </div>
        <ul>
          <li>à remplir</li>
        </ul>
      </div>
      <div style="background: #f7fbf6; border: 1.5px solid #d0eadc; border-radius: 11px; padding: 26px 19px 20px 19px; margin-top:44px; margin-bottom:39px;">
        <div style="font-size:1.13em; font-weight:700; color:#388e3c; margin-bottom:18px;">
          💡 Pistes d'améliorations
        </div>
        <ul>
          <li>à remplir</li>
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
