/* prezentacija.js */
const slides = document.querySelectorAll('.slide');
const commentaries = [
    "Šis darbs ir stāsts par sinerģiju starp precīzām tehnoloģijām un patiesu cilvēcību, mērķtiecīgi tiecoties uz vidi, kurā digitālie risinājumi kalpo cilvēkam, nevis otrādi.",
    "Mana misija bija skaidra — apvienot manu 13 gadu pieredzi sociālajā darbā ar programmēšanu, lai atrisinātu sistēmas lielāko 'sāpi' — laika trūkumu.",
    "SAPS jēga ir vienkārša: atgriezt sociālajam darbiniekam laiku. Laiku, ko šobrīd atņem bezgalīgie papīru kalni, bet kas pienākas klientam.",
    "Identificētā problēma ir kritiska: speciālisti tērē 80% laika rakstīšanai, nevis sarunai. Es vēlējos šo proporciju apgriezt kājām gaisā.",
    "SAC 'Vaiņode' ir vieta ar sirdi. SAPS ir mans ieguldījums, lai šī sirds varētu pukstēt straujāk, nevis tikt nosmacēta birokrātijā.",
    "Esmu uzbūvējis stabilu pamatu. SAPS ir kā uzticams asistents, kurš nekad neaizmirst, nepiekūst un strādā pat tad, ja pazūd internets.",
    "Šī arhitektūra nav tikai koda slāņi. Tā ir kā sakārtota speciālista domāšana, kurā dati plūst loģiski un droši, palīdzot pieņemt labākos lēmumus.",
    "Darba diena sākas ar mieru. Galvenais panelis uzreiz pasaka: 'Viss kārtībā, šeit ir lietas, kurām šodien vajag tavu uzmanību'.",
    "Reģistrs vairs nav tikai saraksts. Tā ir iespēja sekundes laikā atrast cilvēku un viņa vajadzības, nedodoties uz arhīvu pakaļ lietas mapei.",
    "Klienta karte SAPS vidē ir digitāls dzīvesstāsts. Mēs redzam cilvēku visā viņa pilnībā — no izglītības līdz personīgajām interesēm.",
    "Svarīgākās saites. Mēs zinām, kas ir tie cilvēki, kuriem klients uzticas visvairāk, un mēs varam šīs attiecības kopt un uzturēt.",
    "Intereses un hobiji. SAPS palīdz mums ieraudzīt klienta dvēseli — viņa diētu, ticību un vaļaspriekus, lai mēs spētu nodrošināt māju sajūtu.",
    "Veselība ir dārgums. Medicīniskais bloks sakārto anamnēzi un diagnozes tā, lai māsām un ārstiem būtu skaidrs un ātrs rīcības plāns.",
    "Medikamentu drošība. Mēs izslēdzam cilvēcisko kļūdu rēķināšanas un pārrakstīšanas procesā. Tas ir miers speciālistam un drošība klientam.",
    "Rehabilitācija ar sirdi. Katra nodarbība fiksē ne tikai progresu, bet arī klienta emocijas. Mēs redzam, kas cilvēkam tiešām palīdz justies labāk.",
    "Atvieglojums no 'papīru kalniem'. Programma pati aizpilda sarežģītas Excel formas sekundēs. Tas, kas agrāk prasīja stundu, tagad notiek acumirklī.",
    "Dati palīdz saprast mūsu kopienu. Diagrammas parāda reālo situāciju — kas mēs esam, cik mēs esam un kā mēs varam vēl labāk plānot savas rūpes.",
    "Dinamiska izaugsme. Mēs beidzot redzam speciālistu darba reālo augli un klienta motivācijas izmaiņas mēnešu un gadu griezumā.",
    "Uzticība un privātums. Dati ir drošībā. Katra piekļuve ir auditēta, jo klienta konfidencialitāte ir mūsu augstākais standarts.",
    "Sistēmas sirds uzturēšana. Administrators var būt drošs — dati ir spoguļoti, backups ir gatavs un sistēma kalpo speciālistiem bez apstājas.",
    "Esmu izmantojis modernākos AI rīkus, lai nodrošinātu, ka katra koda rinda ir stabila un sistēma ir gatava reālai dzīvei un slodzei.",
    "SAPS nav tikai mans kvalifikācijas darbs. Tas ir pierādījums, ka tehnoloģijas ar sirdi var reāli mainīt sociālo aprūpi Latvijā.",
    "Paldies par uzmanību! Esmu gatavs jūsu jautājumiem un diskusijai par to, kā SAPS var palīdzēt jūsu ikdienā.",
    "Esmu gatavs komisijas jautājumiem."
];

let currentSlide = parseInt(localStorage.getItem('lastSlide')) || 0;
let typewriterInterval;
let autoGalleryInterval;

if (window.location.hash) {
    const hashSlide = parseInt(window.location.hash.replace('#slide-', ''));
    if (!isNaN(hashSlide)) currentSlide = hashSlide - 1;
}

function updateSlide() {
    slides.forEach((s, i) => {
        s.classList.toggle('active', i === currentSlide);
        const visualArea = s.querySelector('.visual-area');
        if (visualArea && visualArea.querySelector('.gallery-container')) {
            updateGallery(s);
            startAutoGallery(s);
        }
    });
    
    typeWriter(commentaries[currentSlide] || "", "commentaryText");
    document.getElementById('progressBar').style.width = ((currentSlide + 1) / slides.length * 100) + "%";
    document.getElementById('slideCounter').innerText = `${(currentSlide + 1).toString().padStart(2, '0')} / ${slides.length}`;
    document.getElementById('prevBtn').disabled = currentSlide === 0;
    document.getElementById('nextBtn').disabled = currentSlide === slides.length - 1;
    
    localStorage.setItem('lastSlide', currentSlide);
    window.location.hash = `slide-${currentSlide + 1}`;
}

function typeWriter(text, elementId) {
    clearInterval(typewriterInterval);
    const element = document.getElementById(elementId);
    element.innerHTML = "";
    let i = 0;
    typewriterInterval = setInterval(() => {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
        } else {
            clearInterval(typewriterInterval);
        }
    }, 20);
}

function startAutoGallery(slide) {
    clearInterval(autoGalleryInterval);
    const imgs = slide.querySelectorAll('.gallery-img');
    if (imgs.length <= 1) return;
    
    autoGalleryInterval = setInterval(() => {
        let activeIdx = Array.from(imgs).findIndex(img => img.classList.contains('active'));
        let nextIdx = (activeIdx + 1) % imgs.length;
        
        imgs[activeIdx].classList.remove('active');
        imgs[nextIdx].classList.add('active');
        
        const dots = slide.querySelectorAll('.nav-dot');
        if (dots.length) {
            dots[activeIdx].classList.remove('active');
            dots[nextIdx].classList.add('active');
        }
    }, 5000);
}

function handleEmailClick(event) {
    event.preventDefault();
    const email = "davisstrazds@gmail.com";
    
    // 1. Atveram e-pastu
    const mailtoWindow = window.open(`mailto:${email}`, '_self');
    
    // 2. Mēģinām nokopēt (Modernā metode)
    if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(email).then(() => {
            showToast("ADRESE NOKOPĒTA!");
        }).catch(() => copyFallback(email));
    } else {
        copyFallback(email);
    }
}

function copyFallback(text) {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.position = "fixed";
    textArea.style.left = "-9999px";
    document.body.appendChild(textArea);
    textArea.select();
    try {
        document.execCommand('copy');
        showToast("ADRESE NOKOPĒTA!");
    } catch (err) {
        console.error("Copy failed");
    }
    document.body.removeChild(textArea);
}
function showToast(message) {
    const toast = document.createElement('div');
    toast.style.cssText = `
        position: fixed;
        bottom: 30px;
        left: 50%;
        transform: translateX(-50%);
        background: var(--accent);
        color: #000;
        padding: 12px 30px;
        border-radius: 40px;
        font-weight: 800;
        z-index: 10000;
        box-shadow: 0 10px 30px rgba(0, 210, 255, 0.4);
        font-family: 'Inter', sans-serif;
        letter-spacing: 1px;
        pointer-events: none;
        opacity: 0;
        transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    `;
    toast.innerText = message.toUpperCase();
    document.body.appendChild(toast);

    // Animācija ienākot
    setTimeout(() => {
        toast.style.opacity = '1';
        toast.style.bottom = '50px';
    }, 10);

    // Noņemšana
    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.bottom = '30px';
        setTimeout(() => toast.remove(), 400);
    }, 3000);
}

function zoomImage(container) {
    const activeImg = container.querySelector('.gallery-img.active') || container.querySelector('img');
    const lightbox = document.getElementById('lightbox');
    const lbImg = lightbox.querySelector('img');
    lbImg.src = activeImg.src;
    lightbox.style.display = 'flex';
}

function updateGallery(slide) {
    const container = slide.querySelector('.gallery-container');
    const imgs = container.querySelectorAll('.gallery-img');
    if (imgs.length <= 1) return;

    let nav = slide.querySelector('.gallery-nav');
    if (!nav) {
        nav = document.createElement('div');
        nav.className = 'gallery-nav';
        imgs.forEach((_, idx) => {
            const dot = document.createElement('div');
            dot.className = 'nav-dot' + (idx === 0 ? ' active' : '');
            dot.onclick = (e) => {
                e.stopPropagation();
                imgs.forEach(i => i.classList.remove('active'));
                nav.querySelectorAll('.nav-dot').forEach(d => d.classList.remove('active'));
                imgs[idx].classList.add('active');
                dot.classList.add('active');
            };
            nav.appendChild(dot);
        });
        slide.querySelector('.visual-area').appendChild(nav);
    }
}

document.getElementById('nextBtn').addEventListener('click', () => {
    if (currentSlide < slides.length - 1) {
        currentSlide++;
        updateSlide();
    }
});

document.getElementById('prevBtn').addEventListener('click', () => {
    if (currentSlide > 0) {
        currentSlide--;
        updateSlide();
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight' || e.key === 'Space') {
        document.getElementById('nextBtn').click();
    } else if (e.key === 'ArrowLeft') {
        document.getElementById('prevBtn').click();
    }
});

// Add event listener for the email link
document.addEventListener('DOMContentLoaded', () => {
    const emailLink = document.getElementById('emailLink');
    if (emailLink) {
        emailLink.addEventListener('click', handleEmailClick);
    }
});

updateSlide();
