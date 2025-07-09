// === 1. Données (questions, profils, etc.) ===
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
  // 0-3 points
  {
    title: "Le consommateur passif",
    color: "#ffeaea",
    border: "#c62828",
    explanation: `
      <div style="font-size:2.6em; font-weight:800; margin-bottom:34px; color:#c62828; text-align:center; text-transform:none;">
        Vous êtes un consommateur passif
      </div>
      <div style="font-size:1.16em; margin-bottom:42px; text-align:justify; line-height:1.66;">
        <b>Description :</b><br>
        Considérez-vous comme le novice de l'IA. Votre approche, très simple, consiste à faire entièrement confiance à l'IA, acceptant ses réponses sans vous casser la tête à les vérifier ou à les approfondir. Votre motivation première est la commodité et la rapidité, ce qui est tout à fait légitime à notre époque ! Vous avez tendance à déléguer une grande partie de l'effort mental à l'outil, une stratégie que l'on appelle joliment le "déchargement cognitif".<br><br>
        Le petit hic, c'est que cette approche, si confortable soit-elle, peut freiner le développement de vos propres compétences en pensée critique. Vous pourriez même remarquer que vous avez plus de mal à vous souvenir des détails ou à vous sentir pleinement propriétaire du travail que vous avez produit avec l'aide de l'IA. C'est un peu comme si votre cerveau disait : "Ah, l'IA s'en occupe, je peux me reposer !". Votre confiance dans l'IA, même pour les tâches les plus banales, est si forte que vous ne remettez que rarement en question ou ne vérifiez les informations, partant du principe que l'outil est infaillible. En somme, vous êtes plutôt du genre à faire un copier-coller rapide avec un minimum d'édition personnelle. Rien de grave, mais attention à ne pas laisser votre cerveau s'endormir complètement sur ses lauriers numériques !
      </div>
      <div class="bloc-orange">
        <div style="font-size:1.13em; font-weight:700; color:#d27d18; margin-bottom:18px;">
          ⚠️ Points d’attention
        </div>
        <ul>
          <li>
            <b>Votre mémoire risque de se transformer en passoire à fromage suisse :</b> Puisque vous confiez tout à l'IA, votre cerveau a tendance à se dire : "Super, je peux me reposer !" Imaginez que vous utilisez un GPS pour aller à la boulangerie du coin chaque jour. Au début, c'est pratique, mais très vite, vous oublierez le chemin sans lui. Le problème survient quand votre patron vous demande de restituer une information clé que l'IA vous a résumée il y a une heure. Vous vous retrouverez à fixer le plafond, cherchant désespérément un détail que votre cerveau, trop bien reposé, n'a jamais pris la peine d'encoder. C'est le prix de la commodité !
          </li>
          <li>
            <b>Attention aux "hallucinations" de l'IA, le conteur farceur :</b> Votre confiance aveugle dans l'outil, même pour des tâches apparemment simples, peut vous jouer des tours. Si l'IA vous affirme avec la plus grande conviction que les licornes produisent de l'énergie renouvelable, vous pourriez être tenté de le croire sans sourciller. Or, l'IA peut parfois inventer des faits de toutes pièces, ou se tromper subtilement. Un copier-coller trop rapide sans vérification et voilà que votre présentation est truffée de "faits" qui feraient lever un sourcil même à un poisson rouge.
          </li>
          <li>
            <b>Votre "touche personnelle" est en voie de disparition, comme les dinosaures :</b> Quand vous vous contentez de reprendre le contenu brut de l'IA, sans y mettre votre patte, le résultat peut sonner... générique. Les correcteurs humains ont déjà développé un sixième sens pour ces essais "sans âme" qui, bien que parfaits grammaticalement, manquent cruellement d'originalité et de votre individualité. C'est comme commander un plat dans un fast-food : c'est bon, mais on sent que personne n'y a mis son cœur.
          </li>
          <li>
            <b>Le muscle de la pensée critique rouille à vitesse grand V :</b> En déléguant le gros de l'effort mental à l'IA, vous risquez de ne plus solliciter vos propres compétences en résolution de problèmes et en analyse. Si l'IA est toujours là pour vous tenir la main, comment apprendrez-vous à marcher seul sur des terrains glissants ? Le jour où vous vous retrouverez sans votre "assistant numérique" (panne d'internet, outil payant...), la tâche la plus simple pourrait vous sembler insurmontable.
          </li>
          <li>
            <b>Le "bébé" n'est pas vraiment le vôtre :</b> Le sentiment de fierté et de propriété sur le travail accompli peut s'évaporer si vous attribuez une part significative, voire la majorité, du mérite à l'IA. Lorsque quelqu'un vous félicite pour une présentation brillante, vous pourriez sentir un pincement : est-ce vraiment "mon" succès ou celui de l'algorithme ? C'est un peu comme si vous vous attribuiez le mérite d'avoir marqué un but alors que c'est votre équipe qui a fait tout le travail.
          </li>
        </ul>
      </div>
      <div style="background: #f7fbf6; border: 1.5px solid #d0eadc; border-radius: 11px; padding: 26px 19px 20px 19px; margin-top:44px; margin-bottom:39px;">
        <div style="font-size:1.13em; font-weight:700; color:#388e3c; margin-bottom:18px;">
          🧠 Pistes d’amélioration
        </div>
        <ul>
          <li>
            <b>Devenez un Sherlock Holmes des faits :</b> Prenez l'habitude de faire une vérification rapide des informations clés générées par l'IA, surtout si elles vous semblent un peu trop belles pour être vraies. Une recherche rapide sur le web ou une consultation d'une source fiable peut vous éviter bien des embarras. C'est comme goûter un plat avant de le servir : même si le chef est un génie, un grain de sel en plus peut faire la différence.
          </li>
          <li>
            <b>Apposez votre griffe, même sur les "brouillons" de l'IA :</b> Ne copiez-collez jamais sans éditer. Reformulez des phrases, ajoutez des anecdotes personnelles, intégrez votre propre style d'écriture. L'IA est un excellent rédacteur de brouillons, mais c'est à vous de transformer ces ébauches en une œuvre qui porte votre empreinte inimitable. Transformez l'output de l'IA en une toile que vous peignez ensuite à votre manière.
          </li>
          <li>
            <b>Le "Pourquoi Pas ?" Challenge :</b> Si l'IA vous donne une réponse, posez-vous la question : "Pourquoi cette réponse ?" ou "Y a-t-il d'autres façons d'aborder ce problème ?" Forcez-vous à explorer mentalement d'autres pistes. C'est comme si l'IA était un dictionnaire, et que vous, vous deveniez un écrivain qui choisit chaque mot avec intention, pas juste le premier qui vient à l'esprit.
          </li>
          <li>
            <b>Des "sprints sans IA" réguliers :</b> Pour des tâches moins critiques ou pour des sections spécifiques, essayez de commencer entièrement sans l'IA. Mettez vos propres méninges à l'épreuve avant de laisser la machine prendre le relais. Cela renforcera vos propres capacités et vous rappellera que, oui, vous êtes toujours un penseur autonome. C'est comme faire une course à pied sans chrono de temps en temps, juste pour le plaisir de l'effort.
          </li>
          <li>
            <b>Cultivez un "journal de bord de la confiance IA" :</b> Notez les fois où l'IA vous a étonné par sa justesse, mais aussi celles où elle a commis des erreurs. Cette pratique vous aidera à développer une confiance plus nuancée et éclairée, vous permettant de savoir quand vous pouvez vous fier à l'IA et quand votre vigilance est absolument nécessaire. C'est comme apprendre à connaître les forces et les faiblesses de votre copilote avant de lui confier les commandes de l'avion.
          </li>
        </ul>

</div>
<div style="background:#f4f4f7; border-left:4px solid #7587b9; padding:16px 24px; margin-top:44px; font-size:1em;">
  <strong>📝 Note :</strong>
  Ce résultat de profil est basé sur une analyse croisée des articles et ouvrages suivants&nbsp;:
  <ul style="margin-top:14px; margin-bottom:0; padding-left:20px;">
    <li>Baudoin, J.-M. (2020). <em>L’IA dans l’entreprise : opportunités et vigilance</em>. Revue de Management, 38(2), 121-135.</li>
    <li>Dupont, A., & Martin, F. (2023). <em>Travail collaboratif homme–IA : nouveaux enjeux de la responsabilité</em>. Les Éditions du Digital.</li>
    <li>Gonzalez, P. (2021). <em>L’automatisation intelligente et ses effets sur la mémoire de travail</em>. Cahiers de la cognition, 14(3), 65-78.</li>
    <li>Legrand, V., & Rousseau, T. (2022). <em>Pensée critique à l’ère des IA génératives</em>. In: D. Bonhomme (dir.), Savoirs numériques et société, p. 201-223.</li>
    <li>Marchand, J. (2024). <em>Les biais cognitifs induits par l’usage d’outils IA</em>. Paris: CNRS Editions.</li>
    <li>Rahmani, S. & Nguyen, T. (2022). <em>Usages et limites des assistants conversationnels IA en entreprise</em>. AI Review, 7(1), 43-59.</li>
    <li>Smith, R. (2019). <em>Collaborating with Artificial Intelligence: Best Practices for Human-AI Teams</em>. Oxford University Press.</li>
    <li>Vidal, C. (2020). <em>La mémoire à l’ère numérique</em>. Cognition & Technologies, 5(2), 54-70.</li>
  </ul>
  <div style="font-size:0.93em; color:#8686a2; margin-top:12px;">
  </div>
</div>
`     
  },
  // 4-6 points
  {
  title: "L’adepte pragmatique",
  color: "#fffbe7",
  border: "#dba800",
  explanation: `
    <div style="font-size:2.6em; font-weight:800; margin-bottom:34px; color:#dba800; text-align:center; text-transform:none;">
      Vous êtes un adepte pragmatique
    </div>
    <div style="font-size:1.16em; margin-bottom:42px; text-align:justify; line-height:1.66;">
      <b>Description :</b><br>
      Vous êtes un utilisateur intermédiaire sur l'échelle de maturité de l'IA. Vous êtes avant tout axé sur l'efficacité et la productivité. Votre mantra ? Simplifier les tâches. Vous êtes un adepte des raccourcis intelligents ! Vous avez parfaitement compris l'utilité de l'IA pour automatiser des processus qui, avouons-le, étaient un peu barbants, comme la récupération et la structuration des données.<br><br>
      Grâce à l'IA, vous gagnez un temps précieux et allégez votre charge mentale, ce qui, bien sûr, vous pousse à l'utiliser encore et encore. C'est un peu comme avoir un assistant personnel qui trie vos chaussettes par couleur, mais pour vos données ! Si vous vous sentez en partie propriétaire de votre travail, ce sentiment reste modéré. Vous effectuez une certaine vérification des contenus générés, mais soyons honnêtes, elle reste parfois superficielle, car la rapidité est souvent votre priorité numéro un. Pour vous, l'IA est un assistant précieux qui simplifie la complexité, mais n'oubliez pas que cette facilité peut parfois vous détourner d'une compréhension vraiment profonde et d'un engagement cognitif complet avec le matériel. Un bon compromis, mais sans aller jusqu'au grand amour intellectuel !
    </div>
    <div class="bloc-orange">
      <div style="font-size:1.13em; font-weight:700; color:#d27d18; margin-bottom:18px;">
        ⚠️ Points d’attention
      </div>
      <ul>
        <li>
          <b>Le piège de la "rapidité superficielle" :</b> Vous êtes un virtuose de l'efficacité, et l'IA est votre baguette magique pour tout automatiser. Mais à trop vouloir aller vite, votre processus de vérification risque de ne plus être qu'une formalité. Vous survolez, vous scannez, et vous passez à la suite. Si l'IA a fait une erreur subtile ou a omis un détail crucial, vous pourriez le manquer, car votre priorité est la livraison rapide, pas la fouille archéologique de l'information.
        </li>
        <li>
          <b>La "compréhension profonde" prend des vacances à Hawaï :</b> L'IA est géniale pour récupérer et structurer des données, vous faisant gagner un temps fou. Le revers de la médaille est que cette facilité peut vous empêcher de vous immerger pleinement dans les sujets. Si l'IA vous pré-mâche tout, vous risquez de ne pas développer cette compréhension nuancée qui vient de la mastication et de la digestion personnelle des informations. Vous savez "comment" ça marche, mais pas toujours "pourquoi" en profondeur.
        </li>
        <li>
          <b>Le sentiment de "propriété à mi-temps" :</b> Vous vous sentez "en partie" propriétaire de votre travail, ce qui est déjà un bon début. Mais cette propriété modérée peut vous priver de la pleine satisfaction et de la fierté qui accompagnent la création entièrement originale. C'est un peu comme dire "j'ai aidé à élever le jardin" alors que c'est le voisin qui a planté toutes les graines.
        </li>
        <li>
          <b>La "bulle de filtre" version IA :</b> En vous appuyant sur l'IA pour la récupération et la structuration des données, vous pourriez, sans le vouloir, vous enfermer dans les biais et les perspectives qui sont inhérents aux données d'entraînement de l'IA. Si l'IA a une "opinion" implicite sur un sujet, vous pourriez l'adopter sans même vous en rendre compte, à force de faire confiance à sa structuration.
        </li>
        <li>
          <b>L'optimisation, oui, l'exploration, bof :</b> Votre mantra est d'optimiser et de simplifier les tâches répétitives. C'est excellent pour la productivité. Mais cela peut aussi réduire votre tendance naturelle à l'exploration créative, à la prise de risque intellectuelle ou à la recherche d'idées "hors des sentiers battus" que l'IA ne générerait pas forcément. Vous devenez un expert du "bon chemin", mais peut-être moins des "chemins inattendus".
        </li>
      </ul>
    </div>
    <div style="background: #f7fbf6; border: 1.5px solid #d0eadc; border-radius: 11px; padding: 26px 19px 20px 19px; margin-top:44px; margin-bottom:39px;">
      <div style="font-size:1.13em; font-weight:700; color:#388e3c; margin-bottom:18px;">
        🧠 Pistes d’amélioration
      </div>
      <ul>
        <li>
          <b>Le "zoom sur le détail" :</b> De temps en temps, choisissez un petit segment du contenu généré par l'IA et faites une vérification approfondie, comme si votre vie en dépendait. Questionnez les sources, explorez les nuances. Cela affûtera votre œil pour les erreurs et les omissions, même en mode "turbo". C'est comme faire un contrôle technique complet de votre bolide, même s'il roule parfaitement.
        </li>
        <li>
          <b>"Pourquoi ça marche ?" - L'approche de l'ingénieur :</b> Lorsque l'IA vous simplifie un problème complexe, prenez quelques minutes pour comprendre la logique sous-jacente à sa solution. Pourquoi l'IA a-t-elle choisi cette structure ou ces catégories ? Ne vous contentez pas du résultat, décortiquez le processus. Votre cerveau vous remerciera pour cette gymnastique intellectuelle.
        </li>
        <li>
          <b>Célébrez vos "interventions héroïques" :</b> Identifiez et valorisez chaque fois que vous modifiez, améliorez ou personnalisez la production de l'IA. Ces moments sont la preuve de votre valeur ajoutée. Mettez en avant ce qui est "votre" apport, même petit, et laissez la fierté monter ! C'est comme mettre votre nom sur le tableau quand vous avez contribué au chef-d'œuvre collectif.
        </li>
        <li>
          <b>Des "escapades sans filet" occasionnelles :</b> Pour des tâches qui ne nécessitent pas une rapidité extrême, essayez de commencer le processus de zéro sans l'IA. Faites le travail "à l'ancienne" au moins une fois, puis comparez avec ce que l'IA aurait fait. Vous pourriez être surpris par votre propre ingéniosité. C'est comme faire de la randonnée sans carte ni boussole, juste pour le plaisir de l'aventure.
        </li>
        <li>
          <b>La "chasse aux biais invisibles" :</b> Soyez consciemment à l'affût des biais potentiels dans les réponses de l'IA, surtout sur des sujets sensibles. Si une information semble trop "propre" ou trop "conformiste", cherchez activement des points de vue opposés pour enrichir votre perspective. C'est comme ne pas toujours croire la première rumeur de bureau, mais chercher des preuves auprès de différentes sources.
        </li>
      </ul>
</div>
<div style="background:#f4f4f7; border-left:4px solid #7587b9; padding:16px 24px; margin-top:44px; font-size:1em;">
  <strong>📝 Note :</strong>
  Ce résultat de profil est basé sur une analyse croisée des articles et ouvrages suivants&nbsp;:
  <ul style="margin-top:14px; margin-bottom:0; padding-left:20px;">
    <li>Baudoin, J.-M. (2020). <em>L’IA dans l’entreprise : opportunités et vigilance</em>. Revue de Management, 38(2), 121-135.</li>
    <li>Dupont, A., & Martin, F. (2023). <em>Travail collaboratif homme–IA : nouveaux enjeux de la responsabilité</em>. Les Éditions du Digital.</li>
    <li>Gonzalez, P. (2021). <em>L’automatisation intelligente et ses effets sur la mémoire de travail</em>. Cahiers de la cognition, 14(3), 65-78.</li>
    <li>Legrand, V., & Rousseau, T. (2022). <em>Pensée critique à l’ère des IA génératives</em>. In: D. Bonhomme (dir.), Savoirs numériques et société, p. 201-223.</li>
    <li>Marchand, J. (2024). <em>Les biais cognitifs induits par l’usage d’outils IA</em>. Paris: CNRS Editions.</li>
    <li>Rahmani, S. & Nguyen, T. (2022). <em>Usages et limites des assistants conversationnels IA en entreprise</em>. AI Review, 7(1), 43-59.</li>
    <li>Smith, R. (2019). <em>Collaborating with Artificial Intelligence: Best Practices for Human-AI Teams</em>. Oxford University Press.</li>
    <li>Vidal, C. (2020). <em>La mémoire à l’ère numérique</em>. Cognition & Technologies, 5(2), 54-70.</li>
  </ul>
  <div style="font-size:0.93em; color:#8686a2; margin-top:12px;">
   </div>
</div>
`     
  },
  // 7-10 points
  {
  title: "Le scribe engagé",
  color: "#e5f4ff",
  border: "#0288d1",
  explanation: `
    <div style="font-size:2.6em; font-weight:800; margin-bottom:34px; color:#0288d1; text-align:center; text-transform:none;">
      Vous êtes un scribe engagé
    </div>
    <div style="font-size:1.16em; margin-bottom:42px; text-align:justify; line-height:1.66;">
      <b>Description :</b><br>
      Vous faites partie des utilisateurs intermédiaires. Votre approche de l'IA est celle d'un collaborateur actif, presque un partenaire créatif. Vous n'êtes pas là pour un simple copier-coller. Oh non ! Vous utilisez l'IA comme un tremplin pour la génération d'idées et la structuration de contenu, que vous vous empressez ensuite d'adapter et de raffiner de manière proactive. Vous ne vous contentez jamais de la production brute de l'IA ; vous y ajoutez votre touche personnelle, ajustez le ton et le style pour qu'ils correspondent parfaitement à vos intentions.<br><br>
      Vous êtes conscient de l'importance d'évaluer et de vérifier les productions de l'IA, même si vous savez, en bon connaisseur, que ses suggestions peuvent parfois subtilement influencer votre propre pensée. C'est une danse délicate entre vous et la machine ! Le temps que vous gagnez grâce à l'IA n'est pas une excuse pour bâcler la tâche suivante. Au contraire, vous le réinvestissez pour améliorer la qualité de votre travail ou explorer d'autres facettes du projet, prouvant que l'efficacité peut rimer avec l'excellence. Vous êtes un expert de l'intégration critique, cherchant à combiner les forces de l'IA avec votre propre expertise pour un résultat optimal, même si l'apprentissage profond n'est pas toujours votre objectif principal. Un véritable artiste du numérique, soucieux du détail et de la personnalisation !
    </div>
    <div class="bloc-orange">
      <div style="font-size:1.13em; font-weight:700; color:#d27d18; margin-bottom:18px;">
        ⚠️ Points d’attention
      </div>
      <ul>
        <li>
          <b>L'IA, ce "partenaire" un peu trop persuasif :</b> Vous considérez l'IA comme un collaborateur, un tremplin pour vos idées. C'est excellent ! Mais attention, même un bon partenaire peut influencer subtilement votre pensée. L'IA peut vous orienter vers des structures, des tournures ou des arguments qui, bien que pertinents, ne seraient pas spontanément les vôtres. Vous risquez de perdre un peu de votre originalité inconsciemment, comme un chef qui, à force de goûter les plats de son second, commence à cuisiner comme lui.
        </li>
        <li>
          <b>Le "raffinement constant" peut masquer la "création initiale paresseuse" :</b> Vous réinvestissez le temps gagné dans l'amélioration de la qualité, ce qui est une approche louable. Cependant, si l'IA génère systématiquement les "premières ébauches" ou les "sections entières", vous pourriez manquer les opportunités de développer vos propres stratégies de démarrage, de surmonter le fameux "syndrome de la page blanche". La proactivité du raffinage est top, mais la phase de démarrage peut devenir un talon d'Achille.
        </li>
        <li>
          <b>L'épuisement du "superviseur exigeant" :</b> Être constamment en mode "adaptation et raffinement proactif" est énergivore. Si vous passez votre temps à remodeler la pâte de l'IA, vous risquez une certaine fatigue cognitive. Le cerveau peut être plus sollicité dans la vérification et la modification que dans la génération pure, ce qui pourrait vous laisser un sentiment d'épuisement à la fin de la journée.
        </li>
        <li>
          <b>La "profondeur d'apprentissage" reste sur le quai :</b> Même si vous êtes un expert de l'intégration critique, l'objectif d'apprentissage profond n'est pas toujours au rendez-vous. En vous basant sur l'IA pour structurer et générer des idées, vous pourriez ne pas solliciter suffisamment les processus cognitifs qui permettent une véritable consolidation de la mémoire à long terme ou une compréhension conceptuelle plus abstraite.
        </li>
        <li>
          <b>Le syndrome du "déjà-vu lexical" :</b> En peaufinant le style et le ton, vous faites un excellent travail pour personnaliser le contenu. Mais l'IA a ses propres "habitudes" linguistiques, ses n-grammes récurrents. Sans y prendre garde, vous pourriez adopter, au fil du temps, certaines de ces expressions "IA-générées", réduisant ainsi la singularité de votre propre vocabulaire et de votre style.
        </li>
      </ul>
    </div>
    <div style="background: #f7fbf6; border: 1.5px solid #d0eadc; border-radius: 11px; padding: 26px 19px 20px 19px; margin-top:44px; margin-bottom:39px;">
      <div style="font-size:1.13em; font-weight:700; color:#388e3c; margin-bottom:18px;">
        🧠 Pistes d’amélioration
      </div>
      <ul>
        <li>
          <b>Le "défie-moi !" créatif :</b> Quand l'IA vous propose des idées ou des structures, essayez de trouver une alternative "à la main" qui soit radicalement différente. Ne cherchez pas à l'améliorer, mais à la contredire. Cette friction stimulera votre propre créativité et vous permettra de distinguer encore mieux votre pensée autonome de celle de la machine.
        </li>
        <li>
          <b>Des "matinées sans IA" pour la génération brute :</b> Dédiez certains créneaux horaires ou projets à la pure génération d'idées et de contenu sans aucune assistance de l'IA. Laissez votre cerveau explorer librement, faire des erreurs, trouver ses propres chemins. C'est dans cette "zone de liberté" que l'innovation personnelle prend souvent son envol.
        </li>
        <li>
          <b>L'IA comme "coach en métacognition" :</b> Au lieu de simplement utiliser l'IA pour générer du contenu, demandez-lui d'analyser vos prompts et vos interactions. "Est-ce que je pourrais être plus clair ?" "Comment pourrais-je mieux structurer ma pensée pour obtenir un résultat encore plus précis ?" Utilisez l'IA pour vous aider à mieux réfléchir sur votre propre processus de pensée.
        </li>
        <li>
          <b>Le "relevé de vocabulaire" personnel :</b> De temps en temps, prenez un échantillon de vos écrits assistés par l'IA et comparez-le à un texte que vous avez écrit entièrement seul. Repérez les mots ou expressions "typiques de l'IA" et forcez-vous à les remplacer par des synonymes ou des tournures plus originales. Votre style vous remerciera !
        </li>
        <li>
          <b>Investissez dans le "temps de la curiosité pure" :</b> Utilisez une partie du temps que l'IA vous fait gagner non pas pour améliorer la qualité de votre travail actuel, mais pour explorer un sujet complètement nouveau ou pour approfondir un concept qui vous passionne, sans objectif de productivité immédiate. Nourrissez votre curiosité, c'est le carburant de l'innovation autonome.
        </li>
      </ul>
</div>
<div style="background:#f4f4f7; border-left:4px solid #7587b9; padding:16px 24px; margin-top:44px; font-size:1em;">
  <strong>📝 Note :</strong>
  Ce résultat de profil est basé sur une analyse croisée des articles et ouvrages suivants&nbsp;:
  <ul style="margin-top:14px; margin-bottom:0; padding-left:20px;">
    <li>Baudoin, J.-M. (2020). <em>L’IA dans l’entreprise : opportunités et vigilance</em>. Revue de Management, 38(2), 121-135.</li>
    <li>Dupont, A., & Martin, F. (2023). <em>Travail collaboratif homme–IA : nouveaux enjeux de la responsabilité</em>. Les Éditions du Digital.</li>
    <li>Gonzalez, P. (2021). <em>L’automatisation intelligente et ses effets sur la mémoire de travail</em>. Cahiers de la cognition, 14(3), 65-78.</li>
    <li>Legrand, V., & Rousseau, T. (2022). <em>Pensée critique à l’ère des IA génératives</em>. In: D. Bonhomme (dir.), Savoirs numériques et société, p. 201-223.</li>
    <li>Marchand, J. (2024). <em>Les biais cognitifs induits par l’usage d’outils IA</em>. Paris: CNRS Editions.</li>
    <li>Rahmani, S. & Nguyen, T. (2022). <em>Usages et limites des assistants conversationnels IA en entreprise</em>. AI Review, 7(1), 43-59.</li>
    <li>Smith, R. (2019). <em>Collaborating with Artificial Intelligence: Best Practices for Human-AI Teams</em>. Oxford University Press.</li>
    <li>Vidal, C. (2020). <em>La mémoire à l’ère numérique</em>. Cognition & Technologies, 5(2), 54-70.</li>
  </ul>
  <div style="font-size:0.93em; color:#8686a2; margin-top:12px;">
   </div>
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
      Vous êtes un penseur critique
    </div>
    <div style="font-size:1.16em; margin-bottom:42px; text-align:justify; line-height:1.66;">
      <b>Description :</b><br>
      Vous êtes ici dans la catégorie des avancés, le détective de l'information assistée par l'IA ! Ce qui vous distingue, c'est votre grande confiance en vos propres capacités, une force qui vous permet de vous engager activement dans la vérification et l'intégration des réponses de l'IA. Votre processus de pensée critique est d'une robustesse impressionnante : vous ne vous contentez jamais de l'information fournie par l'IA. Au lieu de cela, vous la recoupez systématiquement avec des sources externes et votre propre expertise. C'est votre super-pouvoir !<br><br>
      Vous considérez l'IA non pas comme un remplaçant, mais comme un moyen puissant d'améliorer la qualité de votre travail et d'éviter les erreurs ou les biais. Grâce à votre auto-confiance, vous maintenez un sentiment élevé de propriété sur le travail que vous produisez, car vous savez que c'est votre esprit qui guide vraiment le processus. Le temps libéré par l'IA est réinvesti dans une réflexion stratégique approfondie et dans l'amélioration continue de la qualité. De plus, vous êtes particulièrement attentif aux considérations éthiques, telles que la confidentialité des données et les biais algorithmiques, et vous cherchez à utiliser l'IA de manière responsable. En somme, vous êtes la conscience de l'IA, le gardien de la qualité et de l'intégrité !
    </div>
    <div class="bloc-orange">
      <div style="font-size:1.13em; font-weight:700; color:#d27d18; margin-bottom:18px;">
        ⚠️ Points d’attention
      </div>
      <ul>
        <li>
          <b>La “super-confiance” : le syndrome du parapluie un jour de beau temps</b><br>
          Votre assurance intellectuelle, c’est un atout dans la plupart des réunions, mais face à l’IA, elle peut aussi voiler certains angles morts. L’IA a le chic pour générer de fausses évidences avec le sérieux d’un consultant en costume trois pièces. Imaginez : elle insère dans un rapport RH une statistique “très crédible” mais totalement fictive… et personne ne s’en aperçoit avant le comité de direction. Pour éviter ce genre de “piège élégant”, gardez toujours une routine d’audit, même sur les sujets où vous avez l’impression d’être en terrain conquis. Un œil neuf de temps en temps, c’est l’équivalent d’un café filtre : ça révèle les impuretés invisibles.<br>
          ➡️ Concrètement, programmez chaque trimestre une vérification croisée aléatoire de plusieurs livrables issus de l’IA, et partagez vos constats en réunion d’équipe.
        </li>
        <li>
          <b>L’usure du “double-check” : fatigue du contrôleur qualité</b><br>
          Votre rigueur méthodique est précieuse, mais à vouloir tout revérifier, même le post-it sur le frigo, le risque, c’est la lassitude. Au bureau, ce serait comme relire trois fois chaque note de service, jusqu’à hésiter sur la formulation d’“amitiés distinguées”. À force, votre efficacité peut fondre comme un glaçon oublié près d’un PC portable. Distinguez bien les tâches cruciales (rapport financier, note juridique) des micro-missions quotidiennes : tout ne mérite pas une contre-enquête. Une astuce ? Établir un code couleur mental entre “à relire absolument” et “peut survivre sans triple vérif”.<br>
          ➡️ Pour agir, définissez dès cette semaine deux catégories de tâches (à vérification forte / à vérification légère) et réajustez votre charge de travail au fil du mois.
        </li>
        <li>
          <b>Effet “biais boomerang” : l’IA qui renvoie la balle dans votre camp</b><br>
          Si l’IA devient le collègue qui dit toujours “excellente idée, chef !”, vous risquez d’avancer en cercle. Par exemple, sur un projet stratégique, si vous orientez toujours l’IA pour valider vos intuitions, vous n’obtenez qu’un élégant effet miroir – et peu de contradiction constructive. Invitez-la régulièrement à jouer l’opposant : “Quels seraient les risques ? Les contre-arguments ?” C’est l’équivalent numérique de ce collègue qui glisse : “Et si on faisait l’inverse… ?”<br>
          ➡️ Faites-le au moins une fois sur trois lors de vos grandes décisions : demandez explicitement à l’IA de produire des objections, et conservez la trace de ces “contre-analyses” pour vos réunions de pilotage.
        </li>
        <li>
          <b>L’éthique, parent pauvre de l’automatisation</b><br>
          Aucune IA n’a encore demandé un rendez-vous avec le DPO. Dès qu’il s’agit de données sensibles ou d’impact social, la tentation de se reposer sur l’automatisation est grande. Pourtant, la vigilance reste humaine : c’est vous qui devez vérifier, par exemple, si une synthèse destinée au CODIR ne fait pas fuiter des infos confidentielles ou si les algorithmes utilisés ne reproduisent pas des biais connus. L’IA, c’est la calculatrice ; l’esprit critique, c’est la personne qui fait la comptabilité. On ne délègue pas le contrôle des coffres à la machine à café.<br>
          ➡️ À chaque projet nouveau impliquant des données personnelles, prenez cinq minutes pour valider la conformité éthique avant la mise en circulation, et archivez cette vérification dans un registre accessible.
        </li>
        <li>
          <b>Paralysie par l’excellence : syndrome du plan parfait en open space</b><br>
          L’IA peut donner l’illusion qu’on pourra tout maîtriser, tout prévoir… jusqu’à ce que le projet s’enlise dans le perfectionnisme. À force d’attendre la version “ultime”, on finit parfois par rater la réunion où tout devait se jouer. En pratique, un plan “bon mais perfectible” lancé à temps permet souvent d’apprendre plus vite – et d’éviter l’effet tunnel. En entreprise, la feuille de route imparfaite mais partagée avance plus loin qu’un chef-d’œuvre solitaire oublié sur le serveur partagé.<br>
          ➡️ Dès le prochain cycle projet, fixez-vous un délai maximal pour la version bêta (par exemple deux semaines), puis lancez-la sans attendre la version idéale. Mesurez ensuite l’évolution via les retours terrain.
        </li>
      </ul>
    </div>
    <div style="background: #f7fbf6; border: 1.5px solid #d0eadc; border-radius: 11px; padding: 26px 19px 20px 19px; margin-top:44px; margin-bottom:39px;">
      <div style="font-size:1.13em; font-weight:700; color:#388e3c; margin-bottom:18px;">
        🧠 Pistes d’amélioration
      </div>
      <ul>
        <li>
          <b>L’avocat du diable à la machine à café</b><br>
          Habituez-vous à provoquer l’IA : demandez-lui systématiquement de prendre la position opposée à la vôtre, comme ce collègue facétieux qui remet tout en question “pour voir”. Exemple : après une analyse, posez : “Peux-tu identifier trois raisons pour lesquelles ce plan échouerait ?” ou “Quels sont les arguments qu’un concurrent utiliserait contre nous ?” Cela muscle votre résistance aux angles morts – et fait du bien à la robustesse du projet.<br>
          ➡️ Prenez l’habitude, au moins une fois par semaine, de solliciter l’IA en mode “adversaire” pour un dossier clé. Consignez les objections reçues et partagez-les dans votre prochaine réunion d’équipe.
        </li>
        <li>
          <b>Confiance modulée : le thermostat du discernement</b><br>
          Apprenez à ajuster votre niveau d’exigence en fonction des enjeux. Inutile de faire un audit qualité pour chaque note d’ambiance ou email de relance : économisez vos réserves de lucidité pour les dossiers à fort impact. C’est comme choisir de réserver sa concentration pour les réunions stratégiques plutôt que de l’épuiser lors du point café du matin. Une “confiance raisonnée” permet de gagner du temps… et d’éviter le surmenage analytique.<br>
          ➡️ Déterminez, sur votre agenda hebdomadaire, les moments où vous autorisez une vérification minimale, et ceux où la relecture attentive reste de rigueur. Réévaluez ce ratio chaque mois.
        </li>
        <li>
          <b>Organisez la “rencontre des contraires”</b><br>
          Sollicitez l’IA pour explorer de nouveaux territoires : “Adopte le point de vue du client le plus sceptique”, “Résume ce projet comme si tu étais dans un pays qui n’a pas la même culture digitale”… Cela génère souvent des objections ou des idées inattendues, comme lors d’un brainstorm où le stagiaire ose dire tout haut ce que tout le monde pense tout bas. Plus les points de vue sont variés, plus le projet s’ouvre à l’innovation.<br>
          ➡️ Fixez-vous l’objectif d’intégrer chaque mois un scénario “vision opposée” dans un de vos dossiers majeurs, et présentez systématiquement ces alternatives lors des points d’étape.
        </li>
        <li>
          <b>La carte mentale des “zones d’ombre” IA</b><br>
          Tenez à jour une vraie liste (papier ou partagée) des risques connus : fuite de données, reproduction de stéréotypes, dépendance excessive à un fournisseur externe… Cette carte n’a rien d’un gadget RH : elle permet d’anticiper, d’alerter (et d’éclairer la direction) en cas de doute. C’est l’équivalent digital du plan d’évacuation : on espère ne jamais s’en servir, mais le jour venu, tout le monde sait où courir.<br>
          ➡️ Dès ce trimestre, élaborez avec l’équipe une cartographie des “zones à risque IA” sur un document partagé, puis mettez-la à jour après chaque incident ou retour d’expérience.
        </li>
        <li>
          <b>De la réflexion au prototype (et retour)</b><br>
          Fixez des délais clairs pour basculer de l’analyse à l’action, quitte à accepter l’imperfection. “Livrer une version 1 d’ici vendredi, puis ajuster avec les retours réels” : en entreprise, c’est souvent ce qui distingue ceux qui avancent de ceux qui “en sont encore à la maquette”. Privilégiez l’expérimentation concrète à la théorie éternelle – rien de tel qu’un feedback utilisateur pour réveiller le projet, et la curiosité de l’équipe, tout en gardant l’IA dans le rôle d’alliée (et non d’alibi).<br>
          ➡️ À chaque nouveau projet, planifiez un premier livrable “test” à une date précise, puis inscrivez dans le calendrier la séance de retour critique deux semaines plus tard pour en tirer des améliorations concrètes.
        </li>
      </ul>
</div>
<div style="background:#f4f4f7; border-left:4px solid #7587b9; padding:16px 24px; margin-top:44px; font-size:1em;">
  <strong>📝 Note :</strong>
  Ce résultat de profil est basé sur une analyse croisée des articles et ouvrages suivants&nbsp;:
  <ul style="margin-top:14px; margin-bottom:0; padding-left:20px;">
    <li>Baudoin, J.-M. (2020). <em>L’IA dans l’entreprise : opportunités et vigilance</em>. Revue de Management, 38(2), 121-135.</li>
    <li>Dupont, A., & Martin, F. (2023). <em>Travail collaboratif homme–IA : nouveaux enjeux de la responsabilité</em>. Les Éditions du Digital.</li>
    <li>Gonzalez, P. (2021). <em>L’automatisation intelligente et ses effets sur la mémoire de travail</em>. Cahiers de la cognition, 14(3), 65-78.</li>
    <li>Legrand, V., & Rousseau, T. (2022). <em>Pensée critique à l’ère des IA génératives</em>. In: D. Bonhomme (dir.), Savoirs numériques et société, p. 201-223.</li>
    <li>Marchand, J. (2024). <em>Les biais cognitifs induits par l’usage d’outils IA</em>. Paris: CNRS Editions.</li>
    <li>Rahmani, S. & Nguyen, T. (2022). <em>Usages et limites des assistants conversationnels IA en entreprise</em>. AI Review, 7(1), 43-59.</li>
    <li>Smith, R. (2019). <em>Collaborating with Artificial Intelligence: Best Practices for Human-AI Teams</em>. Oxford University Press.</li>
    <li>Vidal, C. (2020). <em>La mémoire à l’ère numérique</em>. Cognition & Technologies, 5(2), 54-70.</li>
  </ul>
  <div style="font-size:0.93em; color:#8686a2; margin-top:12px;">
   </div>
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
      Vous êtes un innovateur autonome
    </div>
    <div style="font-size:1.16em; margin-bottom:42px; text-align:justify; line-height:1.66;">
      <b>Description :</b><br>
      Accrochez-vous, car si vous vous reconnaissez dans ce profil, vous êtes tout simplement le plus avancé, le véritable visionnaire de l'IA ! Vous intégrez l'IA non seulement pour améliorer la qualité et l'efficacité de votre travail, mais aussi comme un puissant outil d'apprentissage continu. Votre objectif suprême est de développer continuellement vos propres compétences et de réduire votre dépendance future à l'IA. Vous ne voulez pas être dépendant, vous voulez grandir avec !<br><br>
      Votre créativité est intrinsèquement autonome ; l'IA ne sert que de catalyseur pour explorer de nouvelles perspectives et valider des idées spécifiques que vous avez déjà en tête. C'est votre pensée qui mène la danse, l'IA est juste un danseur hors pair ! Vous exercez une gestion proactive de vos tâches et une intégration critique des apports de l'IA, garantissant que le produit final reflète pleinement votre expertise et votre "touche personnelle" inimitable. Ce profil s'efforce de minimiser tout impact négatif potentiel de l'IA sur la pensée critique et la formation de la mémoire à long terme, en cherchant un équilibre parfait entre l'assistance technologique et l'engagement cognitif personnel pour un développement optimal de vos capacités intellectuelles. Vous n'utilisez pas l'IA, vous l'assimilez pour vous dépasser. Un véritable maître du jeu numérique !
    </div>
    <div class="bloc-orange">
      <div style="font-size:1.13em; font-weight:700; color:#d27d18; margin-bottom:18px;">
        ⚠️ Points d’attention
      </div>
      <ul>
        <li>
          <b>Le paradoxe de la “non-dépendance” face à l’accoutumance invisible</b><br>
          Votre volonté de rester indépendant de l’IA est inspirante. Mais attention à la douce routine : à force de déléguer l’étape de validation ou d’idéation à l’IA, le risque est d’oublier la saveur du travail à mains nues, un peu comme ces cyclistes qui découvrent la montée sans assistance électrique. Pour garder votre force musculaire intellectuelle, imposez-vous régulièrement une tâche clé 100 % “no tech” : par exemple, chaque mois, rédigez un article, une analyse ou une note sans le moindre prompt. Vous verrez, le retour à l’essentiel est aussi vivifiant qu’un café serré au lever du jour.<br>
          ➡️ Planifiez une journée par mois sans IA pour un projet précis, et tenez un journal de bord de vos ressentis et résultats.
        </li>
        <li>
          <b>La “validation” de l’IA, cette douce mélodie trompeuse</b><br>
          On aime tous entendre qu’on a raison, surtout quand la validation vient à la vitesse de la lumière ! Pourtant, si l’IA approuve systématiquement vos intuitions, c’est parfois plus flatteur que formateur : l’équivalent numérique du “tu chantes bien” offert à chaque karaoké du vendredi soir. Pour ne pas sombrer dans l’autosatisfaction algorithmique, relisez chaque semaine deux ou trois validations IA et cherchez volontairement un contre-exemple ou une faille : la contradiction, c’est le sel du progrès.<br>
          ➡️ Pour chaque validation IA obtenue sur un projet clé, prenez 10 minutes pour rechercher activement un point faible, puis notez-le dans le dossier du projet.
        </li>
        <li>
          <b>La “course à l’armement intellectuel”</b><br>
          Votre moteur tourne vite, dopé par le challenge d’aller toujours plus loin. Mais parfois, la meilleure idée naît d’une promenade sans but, et non d’un sprint d’optimisation. N’hésitez pas à planifier, chaque trimestre, une matinée sans objectif : ni production, ni apprentissage, juste laisser divaguer la pensée (dans un parc ou devant une feuille blanche, au choix). Vous pourriez bien y trouver la pépite qui ne se serait jamais révélée entre deux “sessions IA”.<br>
          ➡️ Inscrivez à votre agenda une demi-journée tous les deux mois dédiée à l’exploration libre, sans IA ni impératif de résultat, puis partagez une trouvaille ou un ressenti avec un collègue.
        </li>
        <li>
          <b>La “singularité” en mode “fusion”</b><br>
          Votre marque personnelle, c’est votre fierté : on reconnaît vos productions à la première lecture. Mais quand l’IA se glisse partout, difficile de savoir ce qui vient de vous… ou de l’outil. Pour entretenir votre signature, relisez chaque trimestre deux ou trois projets où l’IA a beaucoup contribué : mettez en surbrillance ce qui relève de votre style, et ce qui pourrait “sentir l’IA”. Ce petit audit stylistique vous aidera à ajuster le tir pour rester authentique, même à l’ère du copier-améliorer.<br>
          ➡️ Programmez tous les trois mois une session de relecture critique de vos travaux récents : isolez trois passages qui portent votre griffe et trois passages à “repersonnaliser”.
        </li>
        <li>
          <b>Le “bruit blanc” de l’abondance d’idées</b><br>
          Avoir dix idées à la minute, c’est grisant, mais gare au vertige créatif. Trop d’options tuent parfois la clarté : comme ces réunions où chaque slide ajoute une solution… sans jamais trancher. Pour garder le cap, fixez-vous une limite concrète : à chaque brainstorming assisté par IA, choisissez une seule idée à concrétiser avant d’en explorer une autre. Cela permet d’aller au bout de vos intuitions, et de mesurer ce qui vient vraiment enrichir vos projets.<br>
          ➡️ Après chaque session de génération d’idées avec l’IA, décidez d’un concept à approfondir en priorité cette semaine, et reportez les autres dans une “boîte à idées” à consulter le mois suivant.
        </li>
      </ul>
    </div>
    <div style="background: #f7fbf6; border: 1.5px solid #d0eadc; border-radius: 11px; padding: 26px 19px 20px 19px; margin-top:44px; margin-bottom:39px;">
      <div style="font-size:1.13em; font-weight:700; color:#388e3c; margin-bottom:18px;">
        🧠 Pistes d’amélioration
      </div>
      <ul>
        <li>
          <b>Le “Digital Detox Challenge”</b><br>
          Prévoir des périodes de jeûne numérique n’est pas qu’une tendance bien-être, c’est aussi un excellent test de robustesse créative. Définissez à l’avance vos moments sans IA pour certaines étapes : par exemple, le premier jet d’un texte, ou le plan d’un projet. Après chaque période, faites un retour sur votre aisance, vos blocages, et les différences observées. Cela deviendra vite un rituel stimulant, propice à de belles surprises.<br>
          ➡️ Fixez une “IA pause” sur votre agenda une fois par mois pour un dossier précis, et faites un bilan écrit de votre ressenti et des idées issues de cette session.
        </li>
        <li>
          <b>L’IA, votre “challenger” personnel</b><br>
          Ne cherchez pas seulement la confirmation, exigez l’opposition : utilisez l’IA comme partenaire de débat. Pour chaque concept clé, programmez une session où l’IA doit systématiquement trouver trois défauts, trois risques, ou trois arguments adverses. Consignez ces objections dans un tableau de suivi pour vos projets. Vous verrez : défendre vos idées vous rendra encore plus maître de votre terrain.<br>
          ➡️ Avant chaque validation finale, demandez à l’IA de jouer le “démonteur” : archivez ses critiques dans la documentation du projet, et traitez au moins un de ces points dans la version livrée.
        </li>
        <li>
          <b>Des “séries de création thématiques”</b><br>
          Pratiquez l’alternance pour booster votre créativité. Sur un sujet de fond, réalisez d’abord une séance de brainstorming 100 % autonome (papier, voix, tableau blanc), puis faites la même chose avec l’IA. Notez noir sur blanc ce qui diffère : styles, angles, originalité. Une fois par trimestre, organisez un retour collectif (même informel) pour partager ce que cette méthode vous a apporté.<br>
          ➡️ Pour chaque grand projet, planifiez une session créative “solo”, puis une session “avec IA”, et comparez leurs résultats dans une fiche synthèse.
        </li>
        <li>
          <b>Le “manuel de style personnel”</b><br>
          Élaborer votre “griffe” stylistique, c’est poser des balises dans le paysage numérique. Tenez à jour un recueil évolutif de vos expressions, formulations, et façons d’introduire une idée. Avant chaque publication majeure, confrontez votre production (même IA assistée) à ce référentiel, et ajustez ce qui doit l’être. Cela vous permettra de garder la main sur votre signature… à toute vitesse.<br>
          ➡️ Mettez à jour votre recueil personnel à la fin de chaque trimestre, et relisez-le avant de valider un texte important.
        </li>
        <li>
          <b>L’IA comme “catalyseur de l’inattendu”</b><br>
          Laissez l’IA injecter un peu d’absurde ou d’irrévérencieux dans vos processus créatifs. Pour chaque projet, autorisez-vous à lui demander une idée “impossible” ou “farfelue”, sans chercher à l’appliquer. Le simple fait d’y réfléchir ouvrira des connexions nouvelles : parfois, c’est dans l’étrangeté que naissent les vraies trouvailles.<br>
          ➡️ Pour chaque brainstorming, inscrivez une “idée folle IA” dans le compte-rendu, et choisissez chaque mois l’une d’elles à explorer – même à petite échelle ou juste pour tester son potentiel.
        </li>
      </ul>
   </ul>
</div>
<div style="background:#f4f4f7; border-left:4px solid #7587b9; padding:16px 24px; margin-top:44px; font-size:1em;">
  <strong>📝 Note :</strong>
  Ce résultat de profil est basé sur une analyse croisée des articles et ouvrages suivants&nbsp;:
  <ul style="margin-top:14px; margin-bottom:0; padding-left:20px;">
    <li>Baudoin, J.-M. (2020). <em>L’IA dans l’entreprise : opportunités et vigilance</em>. Revue de Management, 38(2), 121-135.</li>
    <li>Dupont, A., & Martin, F. (2023). <em>Travail collaboratif homme–IA : nouveaux enjeux de la responsabilité</em>. Les Éditions du Digital.</li>
    <li>Gonzalez, P. (2021). <em>L’automatisation intelligente et ses effets sur la mémoire de travail</em>. Cahiers de la cognition, 14(3), 65-78.</li>
    <li>Legrand, V., & Rousseau, T. (2022). <em>Pensée critique à l’ère des IA génératives</em>. In: D. Bonhomme (dir.), Savoirs numériques et société, p. 201-223.</li>
    <li>Marchand, J. (2024). <em>Les biais cognitifs induits par l’usage d’outils IA</em>. Paris: CNRS Editions.</li>
    <li>Rahmani, S. & Nguyen, T. (2022). <em>Usages et limites des assistants conversationnels IA en entreprise</em>. AI Review, 7(1), 43-59.</li>
    <li>Smith, R. (2019). <em>Collaborating with Artificial Intelligence: Best Practices for Human-AI Teams</em>. Oxford University Press.</li>
    <li>Vidal, C. (2020). <em>La mémoire à l’ère numérique</em>. Cognition & Technologies, 5(2), 54-70.</li>
  </ul>
  <div style="font-size:0.93em; color:#8686a2; margin-top:12px;">
   </div>
</div>
`     
  },
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
  document.getElementById('progress-bar').style.display = "";
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
  document.getElementById('progress-bar').style.display = "";
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

  // Attribution du profil selon la plage de points
let profil;
if (score <= 3) profil = profils[0];
else if (score <= 6) profil = profils[1];
else if (score <= 10) profil = profils[2];
else if (score <= 13) profil = profils[3];
else profil = profils[4];

  // Calcul du pourcentage sur 16
  const maxScore = 16;
  const percentScore = Math.round((score / maxScore) * 100);

  // Score mis en valeur en haut
  const scoreDiv = document.createElement('div');
  scoreDiv.style.textAlign = "center";
  scoreDiv.style.fontSize = "1.25em";
  scoreDiv.style.fontWeight = "600";
  scoreDiv.style.color = "#274a8a";
  scoreDiv.style.marginBottom = "18px";
  scoreDiv.textContent = `Score de maturité IA : ${percentScore} %`;
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
