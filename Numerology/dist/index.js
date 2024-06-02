"use strict";
const letterMap = new Map([
    ['a', 'a un caractère très fort, « Je me protège » « Je me protège moi et ma famille, j’écoute et je décide ».'],
    ['b', 'est une personne qui aime les enfants, qui aime mettre de côté de l’argent et économiser.'],
    ['c', 'est une personne qui parle beaucoup, qui aime communiquer mais attention, car peut facilement entrer dans les critiques.'],
    ['d', 'préfère avancer et laisser son passé de côté. Personne qui adore économiser, limite radin.'],
    ['e', 'est une persone qui aime la vie, quelqu’un d’ouvert, une ouverture de vie impressionnante, à l&apos;écoute des gens. Le e est La plus jolie lettre surtout en pierre angulaire.'],
    ['f', 'a une très grande ouverture de vie. Cette personne aime la vie, et est très à l&apos;écoute des gens.'],
    ['g', 'est une personne qui va à l’envers de tout le monde et qui a du mal à avancer dans la vie, reste sur ses acquis ; difficile de faire changer d’avis.'],
    ['h', 'est une personne organisée, qui est honnête, juste et qui ne supporte pas l’injustice. Cette personne intègre : « J’y vais tout droit car je sais que j’ai raison » = personne têtue.'],
    ['i', 'est une personne qui suit son intuition (extraordinaire), qui écoute son cœur.'],
    ['j', 'est une personne qui a une très grande intuition (double I), mais qui de prime abord peut montrer de l&apos;agressivité.'],
    ['k', 'profite de la vie (ciel), mais redescend ensuite vers la Terre. Caractère très fort.'],
    ['l', 'est sous une apparence tranquille et douce, si contrariée, cette personne peut facilement exploser.'],
    ['m', 'est une personne autoritaire et matérialiste (je veux que ma famille et moi ne manquons de rien).'],
    ['n', 'est une personne indécise «  J’y vais, je n’y vais pas.. »,  « Je ne suis pas sûre », « Je ne sais pas quoi choisir ». Décisions très réfléchies.'],
    ['o', 'est une personne soit pas ou trop spontanée, toujours dans la routine, très organisée ou au contraire, très bordélique.'],
    ['p', 'est une personne qui avance dans la vie. Bon caractère, bonne personnalité.'],
    ['q', 'est une personne qui s&apos;ouvre un peu à la vie, très similaire à la lettre O &quot;soit pas ou trop spontanée, toujours dans la routine, très organisée ou au contraire, très bordélique.&quot;'],
    ['r', 'est une personne à tendance agressive, qui adore l’argent et qui a besoin d&apos;une sécurité financière, au risque d&apos;être malheureuse. Très fort caractère, facilement irritable.'],
    ['s', 'est une personne dans la sensualité, la sensibilité. Il est plus facile de la blesser que de la mettre en colère, cette personne est facilement à fleur de peau.'],
    ['t', 'est une personne intègre, responsable, têtue : ça me passe au-dessus de la tête car c&apos;est moi qui décide. Ne se laisse pas facilement influencer. Très fort caractère.'],
    ['u', 'est une personne avec une très grande ouverture de vie, aime s&apos;amuser, mais tout de même un poil d&apos;agressivité.'],
    ['v', 'est une personne avec une grande ouverture de vie, qui aime et qui est très à l&apos;écoute des gens.'],
    ['w', 'est une personne avec une ouverture de vie extraordinaire (double V).'],
    ['x', 'est une personne qui va dans tous les sens, qui n’est pas stable.'],
    ['y', 'est une personne avec une ouverture de vie, très abordable et responsable. Elle a une grande empathie et sait ce qu&apos;elle se veut.'],
    ['z', 'est une personne qui ne prend rien au sérieux, rien ne la touche. Personne plutôt rêveuse.']
]);
const lifePathMap = new Map([
    [1, 'Chemin d’action et de réussite grâce à une prise de risque ainsi qu’un sens des responsabilités marqués, souvent considérés comme des leaders. L’action et la détermination aide à franchir tout obstacle pour atteindre son objectif de vie. Il n’est pas question d’abandon ni de renonciation pour ces personnes. Attention cependant à bien gérer les frustrations qui peuvent facilement mener à une dépression, à des idées noires ou encore des troubles de l’humeur. La personne est destinée à être différente et unique. L’accepter et vivre selon sa vraie nature unique peut mener au succès, tandis que refuser cette nature peut entraîner des difficultés. Si les principaux traits de caractère sont l’indépendance, l’ambition et l’innovation, leurs principaux défis sont d’éviter l’égocentrisme et d’apprendre à collaborer.'],
    [2, 'Chemin d’harmonie, d’amitiés (excellent ami et confident sincère) et d’associations favorables. La médiation, le travail d’équipe, le compromis font partie intégrante du chemin de vie 2. Ces personnes sont empathiques et perçoivent le meilleur en chacun. Elles ont facilement tendance à être hypersensibles, timides et peinent souvent à s’exprimer en public. Elles préfèrent éviter tout conflit par peur d’être blessé ou contrarié, les poussant à rester discret. Cette attitude peut créer un malaise social qui peut rapidement freiner son développement personnel et professionnel. Souvent considérées comme des diplomates, ces personnes sont sensibles, harmonieuses et aiment coopérer, tandis que leurs principaux défis sont d’éviter la dépendance excessive et de développer la confiance en soi.'],
    [3, 'Chemin de la communication, de l’expression personnelle, de la grande sociabilité, de la pensée positive, de l’optimisme (tout se passera bien quoiqu’il arrive) et de l’extraversion. Cette personne aime l’aventure et les voyages, ce qui a tendance à l’éloigner de ses responsabilités voire de la réalité. L’art n’est pas juste un hobby pour les 3 mais une façon de vivre. Ce chemin de vie est rempli de défis, mais il a tendance à les éviter, ce qui peut l’empêcher de réaliser ses objectifs. Loyal et serviable, il est aussi excentrique et naïf. Il croit vraiment que la conscience universelle peut apporter la paix dans le monde. Il serait un excellent bénévole. Souvent considérées comme des artistes, ces personnes sont créatives, sociables et optimistes, tandis que leurs principaux défis sont d’éviter la superficialité et d’apprendre la discipline.'],
    [4, 'Chemin de l’effort et du travail, patience, organisation et précision. Le chemin de vie numéro n’aime pas les imprévus. La planification est essentielle pour arriver à son bonheur. Il passera une partie de sa vie à définir sa zone de confort et ne voudra plus en sortir volontairement. Souvent perçu comme trop sérieux, ennuyeux et sédentaire, celui qui suit le chemin de vie 4 ne se vante pas de ses succès. Souvent considérées comme des travailleurs, ces personnes sont organisées, disciplinées, stables et prêtes à s’acharner pour le travail, tandis que leurs principaux défis sont d’éviter l’entêtement et d’apprendre à être flexible.'],
    [5, 'Chemin du voyage et de la liberté, celui du changement et du mouvement, de l’action et de l’aventure. Il avance constamment et évite la routine, provoquant parfois des changements sans raison. Sa principale faiblesse est qu’il refuse les limites et voit l’arrêt comme un échec. L’exploration et l’apprentissage sont les seules constantes dans ses nombreuses transformations. Insatiable, celui qui suit le chemin de vie 5 devient frustré quand il ne peut pas satisfaire sa passion pour l’aventure. Souvent considérées comme des explorateurs, ces personnes sont libres, aventureuses, souples et s’adaptent facilement aux changements, tandis que leurs principaux défis sont d’éviter l’impulsivité et d’apprendre la constance.'],
    [6, 'Chemin de l’amour, de la fidélité, de la responsabilité, de la dévotion, de la famille et de la communauté. Le chemin de vie 6 représente la maison, la famille, la communauté et la compassion. Il est bienfaisant et toujours prêt à aider les autres avec une grande bienveillance. En partageant, il cherche à s’élever spirituellement. Bien que ses efforts soient souvent appréciés, certains pensent qu’il tire satisfaction du malheur des autres. Souvent considérées comme des responsables, ces personnes veillent à l’amour, à l’harmonie domestique et à rendre service à autrui, tandis que leurs principaux défis sont d’éviter de devenir trop critique et d’apprendre à équilibrer les besoins des autres avec les siens (de ne pas s’oublier au profit des autres). '],
    [7, 'Chemin de la réflexion et de l’analyse menant à la connaissance et à la sagesse. Le chemin de vie 7 est celui d’un perfectionniste solitaire qui réalise son potentiel après un choc sentimental. Casanier et peu social, il préfère la solitude et ne cherche pas à avoir beaucoup de relations. Philosophe et mystique, il est passionné par les questions existentielles. La numérologie lui attribue une bonne destinée et plus de chance que la moyenne grâce à sa capacité à faire des choix rationnels basés sur des faits objectifs. Ces personnes font d’excellents guérisseurs, grâce à leur don de naissance du toucher. Souvent considérées comme des penseurs, ces personnes sont dignes de sagesse, d’analyse, de spiritualité et d’introspection, tandis que leurs principaux défis sont d’éviter l’isolement et d’apprendre à faire confiance aux autres.'],
    [8, 'Chemin de la matérialité et de l’argent, menant à l’ambition et au pouvoir. Ces personnes sont mordues du travail et devront attendre plus de 10 ans pour atteindre la carrière professionnelle qui les épanouit. Si elles savent tout faire et gagnent facilement le respect de ses collègues notamment par ses nombreuses compétences et son savoir-faire, sa vie sociale, elle, peut s’avérer plus compliquée car le chemin de vie 8 n’accepte pas les reproches liés à son engagement professionnel. Les victoires ne sont pas nécessairement liées à l’argent mais plutôt au pouvoir. Ces personnes sont très sollicités de par leurs qualités et par leur volonté d’enfer, mais ne profitent donc pas assez de leur vie sociale. Ils ont besoin d’un partenaire attentionné et compréhensif. Souvent considérées comme des managers, ces personnes sont dignes de pouvoir, d’ambition, d’efficacité et de matérialisme, tandis que leurs principaux défis sont d’éviter l’autoritarisme et d’apprendre l’équilibre entre le matériel et le spirituel.'],
    [9, 'Chemin de la générosité et de l’humanité. Le chemin de vie 9 est celui des voyages intérieurs, de la sensibilité artistique et de la créativité. Ces personnes développent une passion pour apprendre et sont très curieuses. Si possible, elles seraient prêtes à parcourir le monde pour pratiquer ses passions comme ses loisirs, faire des affaires ou encore pour des causes humanitaires. Les 9 savent bien conseiller les gens grâce à leur expérience de vie et du savoir acquis tant dans la spiritualité que dans le plan géographique. Souvent considérées comme des humanitaires, ces personnes sont très altruistes, dignes de compassion, d’idéalisme et de globalité, tandis que leurs principaux défis sont d’éviter la désillusion et d’apprendre à lacher prise.'],
    [11, 'Chemin de vie guidé par une voie intérieure quasi-mystique qui lui permet de capter les moindres vibrations et de les interpréter. Le 11 suit son intuition et ne se trompe que rarement. Il est en effet dôté d’un énorme potentiel personnel grâce à son maître nombre. Ces personnes sont idéalistes mais pragmatiques, ambitieuses mais réalistes. Ses ambitions sont très élevées, pouvant les conduire à de nombreuses déceptions et crises existentielles. Souvent considérées comme des visionnaires, ces personnes sont dôtées d’une grande intuition, d’une illumination, d’une grande inspiration et d’un idéalisme, tandis que leurs principaux défis sont de gérer leur sensibilité extrême et de réaliser leur potentiel spirituel. '],
    [22, 'Chemin de vie nourri par l’appétit créateur, il est très ambitieux et à désir créer des choses à neuf, qui n’existaient pas auparavant. Ces personnes sont dôtées d’une intelligence pratique et d’un sens de l’observation excquis, leur permettant de réaliser des projets nouveaux, surtout dans un contexte professionnel. Grâce à ses grandes capacités d’analyses, le maître nombre 22 perçoit des éléments de réponses avant les autres, lui donnant une longueur d’avance. Ainsi, ce travailleur, est constamment à la recherche de responsabilités. Ces tâches, qu’il effectuera avec brio, lui donneront des résultats cumulés d’efforts acharnés. Avec le temps, ces derniers seront récompensés par une véritable renommée. Souvent considérées comme des maîtres bâtisseurs, ces personnes sont dôtées d’une vision pratique, d’un leadership mondial leur permettant de créer des réalisations monumentales, tandis que leurs principaux défis sont de gérer la pression des grandes ambitions et d’équilibrer les rêves avec la réalité.'],
    [33, 'Chemin de vie apportant à son détenteur chance, succès, sagesse et maturité. Le maître nombre 33 est tiraillé entre deux forces contradictoires : son empathie pour les personnes malchanceuses à sa très grande ambition. Son potentiel élevé est capable d’égaler sa sensibilité aux maux et aux injustices. Pleins de défis seront mis sur la route du 33 durant sa vie, mais le succès arrivera uniquement dès qu’il deviendra attentif et réceptif aux leçons de vie. Ces personnnes ont un profond désir d’aider les autres et de faire une différence positive dans le monde. Elles sont fortement connectées à la spiritualité et aux valeurs morales élevées. Le sens de la responsabilité envers les autres ainsi que du devoir sont fortement présents. Ces personnes ont un talent pour enseigner, guider et guérir les autres, tant sur un plan émotionnel que spirituel. Afin de réussir dans les meilleures conditions, la méditation et la relaxation lui sont favorables. Souvent considérées comme des maîtres enseignants, leurs principaux défis sont d’apprendre à équilibrer les besoins des autres avec les siens (de ne pas s’oublier au profit des autres) ainsi que d’apprendre à gérer la pression liée à la quête de perfection et de service aux autres. Le chemin de vie 33 est souvent associé à un niveau élevé de dévouement et de service, impliquant une mission de vie axée sur le bien-être collectif. Ceux qui suivent ce chemin sont appelés à avoir un impact significatif et bienveillant sur le monde.']
]);
const yearOfLIfeMeanings = [
    'C’est l’année idéale pour être audacieux et prendre des risques. C’est le moment parfait pour lancer les projets qui sont en attente depuis longtemps.La détermination et la confiance seront vos meilleurs alliés cette année.N’ayez pas peur de sortir de votre zone de confort : tout joue en votre faveur et votre entourage sera ouvert à vos idées. L’année personnelle 1 est déterminante pour les 8 années suivantes : c’est maintenant ou jamais !',
    'L’année personnelle 2, suivant la première, aidera à mener vos projets à bien.On récolte ce que l’on a semé l’année précédente.Vous deviendrez plus mature et sage, avec moins d’euphorie. Vous devrez faire preuve de modération tant sur le plan personnel que professionnel. C’est aussi une année de confrontations : adoptez une attitude consensuelle et privilégiez les compromis. L’objectif est d’assurer la continuité de vos projets avec une croissance lente mais régulière.Voyez cette année comme celle de la consolidation des acquis.Limitez les risques et soyez patient. ',
    'L’année personnelle 3 est celle de la créativité et de l’audace. C’est le moment d’explorer de nouvelles choses et de sortir de votre routine. Après une année plus calme, vous pouvez maintenant mettre vos envies en avant et chercher l’émancipation.Cette année peut aussi vous amener à une légère remise en question, sans trop de sérieux.Vous aurez au moins une opportunité à saisir pour être plus heureux et comblé que jamais.',
    'Soyez attentif dès le début, car les détails sont importants. Développez votre esprit logique et votre sens pratique. L’année personnelle 4 est connue pour être laborieuse et lente.Ceux qui sont optimistes y verront une occasion de se reposer.Profitez - en pour évacuer les frustrations des trois dernières années et triez vos activités.Ne vous précipitez pas, le contexte ne s’y prête pas. En termes d’entreprise, l’année personnelle 4 est celle de la réflexion stratégique, pas de l’action concrète.',
    'Regardez en arrière pour mieux avancer, c’est la devise de l’année personnelle 5. Vous êtes maintenant à mi-chemin de votre cycle de 9 ans : 4 ans sont passés, et 4 ans restent après cette année. Le 5 symbolise la diversité, la découverte et le dépaysement. Osez l’exotisme, mais restez réaliste.Préparez - vous à un changement important dans votre vie : il peut être soudain pour certains, ou progressif pour d’autres. Chaque mois de cette année vous permettra d’identifier des erreurs, des tâches inutiles ou des pertes de temps.Pour les numérologues, l’année personnelle 5 est idéale pour concevoir des projets, des idées ou même un enfant.',
    'Entre les extrêmes ou le chemin de l’équilibre, c’est ce dernier qu’il faut choisir.Concrètement, vous ne renoncez pas à vos ambitions, mais vous prenez conscience de vos responsabilités.Vous avez besoin de stabilité sentimentale.Il est peut - être temps de penser à un mariage ou à avoir un enfant.Après avoir réussi pendant les 5 premières années, vous allez attirer des convoitises : apprenez à dire "Non" et évitez de prendre en charge le travail et les erreurs des autres.L’année personnelle 6 est aussi celle de la pensée positive.',
    'Vous allez ressentir une légère baisse d’énergie avec un ralentissement de votre corps.La routine continuera, mais avec parfois de la fatigue et de la lassitude.Acceptez cela et trouvez la tranquillité.Soyez vigilant à ne pas tomber dans la déprime.L’année personnelle 7 ne sera pas pleine de grands changements. Évitez les dépenses excessives et gérez vos finances de manière rationnelle. Vos relations personnelles resteront stables et calmes.',
    'C’est le moment de récolter les fruits de vos efforts, de voir des résultats concrets.L’année personnelle 8 est celle de la réussite. Vos actions sont enfin reconnues par vos pairs et votre entourage. Vous aurez beaucoup d’énergie, mais le défi sera de la canaliser pour rester concentré.Au travail, vous brillerez, ce qui peut susciter l’admiration mais aussi la jalousie. Restez attentif à votre environnement, il pourrait vous offrir de nouvelles opportunités. Ne perdez pas la sagesse acquise ces dernières années. Malgré votre succès, restez humble et réaliste.',
    'C’est l’année qui marque la fin du cycle de 9 ans. C’est le moment de faire le bilan et de se poser des questions. Selon comment s’est déroulé le cycle jusqu’à présent, vous pourriez être plus ou moins fatigué, tant émotionnellement que physiquement.Il est temps de régler les affaires en cours pour préparer le nouveau cycle.L’année personnelle 9 peut être marquée par une certaine baisse de forme, avec des troubles de l’humeur et du sommeil. Ne vous forcez pas : ce n’est pas le moment idéal pour entreprendre de nouvelles aventures. Ceux qui ont réussi leur cycle apprécieront le sentiment d’avoir bien accompli leur travail.',
];
const questionIntroForChatgpt = 'Voilà un texte qui décrit une personne. Ecris-moi un résumé amélioré : ';
const lifePathFirstSentence = 'Notre chemin de vie reste identique toute notre vie, il d&eacute;finit notre caract&egrave;re, notre personnalit&eacute;. Il s&apos;agit d&apos;une route &agrave; suivre pour atteindre son &eacute;panouissement tant personnel que professionnel, son &eacute;quilibre spirituel et son bonheur.';
function compute() {
    const birthDateElement = document.getElementById('birthDate');
    let birthDateStr = null;
    if (birthDateElement) {
        birthDateStr = birthDateElement.value;
    }
    const dateToCompareToElement = document.getElementById('dateToCompareTo');
    let dateToCompareToStr = null;
    if (dateToCompareToElement) {
        dateToCompareToStr = dateToCompareToElement.value;
    }
    const firstNameElement = document.getElementById('firstName');
    let firstName = null;
    if (firstNameElement) {
        firstName = firstNameElement.value;
    }
    let errorMessage = validate(birthDateStr, "La date de naissance n'est pas valide \n");
    errorMessage += validate(dateToCompareToStr, "La date du jour n'est pas valide \n");
    errorMessage += validate(firstName, "Le prénom n'est pas valide \n");
    if (!isNullOrEmpty(errorMessage)) {
        alert(errorMessage);
        return;
    }
    let lifePathResult = lifePath(birthDateStr);
    let lifePathMeaning = lifePathMap.get(lifePathResult);
    let lifePathElement = document.getElementById("lifePath");
    lifePathElement.innerHTML = "<b>Chemin de vie : " + lifePathResult + "</b> </br> <b>Signification : </b>" + lifePathMeaning;
    let currentYear = computeCurrentYear(dateToCompareToStr, birthDateStr);
    let yearOfLifeResult = yearOfLife(currentYear.toString(), birthDateStr);
    let yearOfLifeMeaning = yearOfLIfeMeanings[yearOfLifeResult - 1];
    let yearOfLifeElement = document.getElementById("yearOfLife");
    yearOfLifeElement.innerHTML = "<b>Année de vie : " + yearOfLifeResult + "</b> </br> <b>Signification :</b> " + yearOfLifeMeaning;
    let firstNameLettersMeaning = createCharsSignifications(firstName);
    let textForChatGPT = questionIntroForChatgpt + "<br>" + lifePathFirstSentence + "<br>" + lifePathMeaning + "<br>" + yearOfLifeMeaning + "<br>" + firstNameLettersMeaning;
    let chatGptElement = document.getElementById("textForChatGpt");
    chatGptElement.innerHTML = textForChatGPT;
}
function copyText() {
    const textChatGptElement = document.getElementById('textForChatGpt');
    const textToCopy = textChatGptElement.textContent;
    const tempTextarea = document.createElement('textarea');
    tempTextarea.value = textToCopy;
    document.body.appendChild(tempTextarea);
    tempTextarea.select();
    try {
        const successful = document.execCommand('copy');
        if (!successful) {
            alert('La copie du texte a échoué.');
        }
    }
    catch (err) {
        console.error('Erreur lors de la copie du texte :', err);
    }
    document.body.removeChild(tempTextarea);
}
function validate(inputText, errorMessage) {
    if (isNullOrEmpty(inputText)) {
        return errorMessage;
    }
    return '';
}
function computeCurrentYear(dateToCompareToStr, birthDateStr) {
    const dateToCompareTo = new Date(dateToCompareToStr);
    const birthDate = new Date(birthDateStr);
    let currentYear = dateToCompareTo.getFullYear();
    dateToCompareTo.setFullYear(2000);
    birthDate.setFullYear(2000);
    if (dateToCompareTo.getTime() < birthDate.getTime()) {
        return currentYear - 1;
    }
    else {
        return currentYear;
    }
}
function createCharsSignifications(firstName) {
    let result = "";
    let ul = document.querySelector("#firstNameLetters > ul");
    if (ul) {
        ul.innerHTML = "";
        let lis = "";
        let alreadyUsedLetters = new Set();
        for (const letter of firstName) {
            let lowerCaseLetter = letter.toLocaleLowerCase();
            if (!alreadyUsedLetters.has(lowerCaseLetter)) {
                alreadyUsedLetters.add(lowerCaseLetter);
                let meaning = letterMap.get(lowerCaseLetter);
                if (meaning !== undefined) {
                    result += firstName + " " + meaning + "\n";
                    lis += "<li>" + lowerCaseLetter + " : " + meaning + "</li>";
                }
            }
        }
        ul.innerHTML = lis;
    }
    return result;
}
function yearOfLife(currentYear, birthDate) {
    let result = 0;
    result += computeSumOfText(currentYear);
    let splittedBirthDate = birthDate.split("-");
    for (let i = 1; i < splittedBirthDate.length; i++) {
        result += computeSumOfText(splittedBirthDate[i]);
    }
    while (result > 9) {
        result = computeSumOfText(result.toString());
    }
    return result;
}
function lifePath(birthDate) {
    let result = 0;
    let splittedBirthDate = birthDate.split("-");
    for (let i = 0; i < splittedBirthDate.length; i++) {
        result += computeSumOfText(splittedBirthDate[i]);
    }
    if (result == 11 || result == 22 || result == 33) {
        return result;
    }
    while (result > 9) {
        result = computeSumOfText(result.toString());
    }
    return result;
}
function isNullOrEmpty(str) {
    return str === null || str === undefined || str.trim() === '';
}
function computeSumOfText(text) {
    let result = 0;
    let splittedText = text.split("");
    for (let i = 0; i < splittedText.length; i++) {
        result += Number(splittedText[i]);
    }
    return result;
}
function setDateToday() {
    const today = new Date(); // Date du jour
    const yearStr = today.getFullYear().toString();
    const month = today.getMonth() + 1; // Les mois commencent à 0
    let monthStr = "";
    if (month < 10) {
        monthStr = "0" + month;
    }
    else {
        monthStr = month.toString();
    }
    const day = today.getDate();
    let dayStr = "";
    if (day < 10) {
        dayStr = "0" + day;
    }
    else {
        dayStr = day.toString();
    }
    const formattedDate = `${yearStr}-${monthStr}-${dayStr}`;
    const dateToCompareToElement = document.getElementById('dateToCompareTo');
    dateToCompareToElement.value = formattedDate;
}
document.addEventListener('DOMContentLoaded', () => {
    const computeButton = document.getElementById('computeBtn');
    const copyButton = document.getElementById('copyBtn');
    const setDateTodayButton = document.getElementById('setDateTodayBtn');
    if (computeButton) {
        computeButton.addEventListener('click', compute);
    }
    if (copyButton) {
        copyButton.addEventListener('click', copyText);
    }
    if (setDateTodayButton) {
        setDateTodayButton.addEventListener('click', setDateToday);
    }
});
