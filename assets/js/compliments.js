/* ============================================================
   COMPLIMENTS PAGE
   Interactions / reveals / compliments / ambient hearts
============================================================ */


/* ============================================================
   COMPLIMENT COLLECTION
============================================================ */

const compliments = [
    "You have this beautiful way of making everything feel gentler.",

    "You are one of those rare people who make life feel warmer just by being in it.",

    "Your presence has gently changed the way I see ordinary days.",

    "You are more loved, more appreciated, and more important than you realize.",

    "You are someone I would always choose to keep close.",

    "Some people are unforgettable because of what they did. You are unforgettable because of who you are.",

    "You have the kind of warmth that makes people feel safe without even trying.",

    "You make simple moments feel meaningful, soft, and beautiful.",

    "You are the kind of person I could happily keep discovering little things about.",

    "You probably don't realize how often you make people smile.",

    "There is something incredibly comforting about you.",

    "You make ordinary conversations feel like little memories.",

    "You have a way of making people feel like they matter.",

    "You are much more special than you give yourself credit for.",

    "The little things about you are some of the things I remember most.",

    "You make being around you feel easy.",

    "You have a softness that never takes away from your strength.",

    "I hope you know how lovely it is simply to know you.",

    "You have this quiet ability to make a day better without even trying.",

    "You are one of those people whose absence is genuinely felt.",

    "Somehow, even your smallest gestures can mean more than you probably realize.",

    "You make people feel comfortable enough to be themselves.",

    "You are the kind of person people are lucky to have in their lives.",

    "I don't think you realize how many little things about you are worth remembering.",

    "You have a way of turning ordinary moments into moments I want to keep.",

    "Your happiness is genuinely one of my favorite things to see.",

    "You are beautiful in all the ways that have nothing to do with appearances.",

    "There is something about your presence that makes things feel a little less heavy.",

    "You are someone I could never describe with just one compliment.",

    "Getting to know you has made my life a little more beautiful.",

    "You have become one of those people I instinctively want to tell things to.",

    "You are proof that sometimes the best people enter your life quietly.",

    "I hope you see yourself at least once the way the people who love you see you.",

    "You make kindness look natural.",

    "You have a heart that deserves to be appreciated loudly and often.",

    "There are so many little versions of you that I adore the laughing you, the excited you, the sleepy you, the completely random you.",

    "You make even doing absolutely nothing together feel like time well spent.",

    "You are one of my favorite people to simply exist around.",

    "Knowing you has given me so many little moments I wouldn't trade for anything.",

    "If I could bottle the feeling of some of my favorite days, you would probably be somewhere inside all of them."
];


/* ============================================================
   ELEMENTS
============================================================ */

const complimentText =
    document.getElementById("complimentText");

const moreComplimentBtn =
    document.getElementById("moreCompliment");

const continueButton =
    document.getElementById("continueButton");

const heartLayer =
    document.querySelector(".heart-layer");


/* ============================================================
   STATE
============================================================ */

let previousIndex = -1;
let isChanging = false;


/* ============================================================
   RANDOM HELPERS
============================================================ */

function randomBetween(min, max) {
    return Math.random() * (max - min) + min;
}


/* ============================================================
   HEART BURST
============================================================ */

function spawnHeartBurst(x = null, y = null, options = {}) {

    if (!heartLayer) {
        return;
    }

    const heart = document.createElement("span");

    heart.className = "floating-heart";

    heart.textContent =
        Math.random() > 0.25 ? "♡" : "✦";

    const left =
        x !== null
            ? x
            : randomBetween(20, 80);

    const top =
        y !== null
            ? y
            : randomBetween(35, 65);

    const size =
        options.size ??
        randomBetween(0.7, 1.25);

    const duration =
        options.duration ??
        randomBetween(1.6, 2.4);

    const rotation =
        randomBetween(-20, 20);

    heart.style.left = `${left}%`;
    heart.style.top = `${top}%`;

    heart.style.fontSize = `${size}rem`;

    heart.style.setProperty(
        "--heart-duration",
        `${duration}s`
    );

    heart.style.setProperty(
        "--heart-rotation",
        `${rotation}deg`
    );

    heartLayer.appendChild(heart);

    window.setTimeout(() => {
        heart.remove();
    }, duration * 1000 + 200);
}


/* ============================================================
   SMALL COMPLIMENT BURST
============================================================ */

function createComplimentBurst() {

    const count = 4;

    for (let i = 0; i < count; i += 1) {

        window.setTimeout(() => {

            spawnHeartBurst(
                randomBetween(25, 75),
                randomBetween(42, 60),
                {
                    size: randomBetween(0.65, 1.1),
                    duration: randomBetween(1.5, 2.2)
                }
            );

        }, i * 90);
    }
}


/* ============================================================
   RANDOM COMPLIMENT
============================================================ */

function getRandomCompliment() {

    if (compliments.length === 0) {
        return "";
    }

    if (compliments.length === 1) {
        previousIndex = 0;
        return compliments[0];
    }

    let nextIndex;

    do {
        nextIndex =
            Math.floor(
                Math.random() * compliments.length
            );
    } while (nextIndex === previousIndex);

    previousIndex = nextIndex;

    return compliments[nextIndex];
}


/* ============================================================
   SHOW COMPLIMENT
============================================================ */

function showRandomCompliment() {

    if (!complimentText || isChanging) {
        return;
    }

    isChanging = true;

    complimentText.classList.add("changing");

    window.setTimeout(() => {

        complimentText.textContent =
            getRandomCompliment();

        complimentText.classList.remove("changing");

        createComplimentBurst();

        isChanging = false;

    }, 280);
}


/* ============================================================
   BUTTON
============================================================ */

if (moreComplimentBtn) {

    moreComplimentBtn.addEventListener(
        "click",
        showRandomCompliment
    );
}


/* ============================================================
   CONTINUE BUTTON
============================================================ */

if (continueButton) {

    continueButton.addEventListener(
        "click",
        () => {

            continueButton.disabled = true;

            continueButton.style.transform =
                "scale(0.97)";

            window.setTimeout(() => {

                window.location.href =
                    "loading.html";

            }, 180);

        }
    );
}


/* ============================================================
   SCROLL REVEALS
============================================================ */

const revealItems =
    document.querySelectorAll(".reveal");


if ("IntersectionObserver" in window) {

    const observer =
        new IntersectionObserver(
            (entries) => {

                entries.forEach((entry) => {

                    if (!entry.isIntersecting) {
                        return;
                    }

                    entry.target.classList.add(
                        "visible"
                    );

                    observer.unobserve(
                        entry.target
                    );

                });

            },
            {
                threshold: 0.14,
                rootMargin: "0px 0px -5% 0px"
            }
        );


    revealItems.forEach((item, index) => {

        /*
         * Very small stagger.
         * Only applied to nearby cards so the
         * page doesn't feel artificially slow.
         */

        if (
            item.classList.contains("love-card") ||
            item.classList.contains("secret-card")
        ) {

            item.style.transitionDelay =
                `${Math.min(index * 0.045, 0.22)}s`;
        }

        observer.observe(item);

    });

} else {

    /*
     * Fallback for very old browsers.
     */

    revealItems.forEach((item) => {

        item.classList.add("visible");

    });

}


/* ============================================================
   INITIAL AMBIENT HEARTS
============================================================ */

function createInitialAmbientHearts() {

    /*
     * Keep this deliberately subtle.
     * The page should feel alive, not covered in hearts.
     */

    for (let i = 0; i < 6; i += 1) {

        window.setTimeout(() => {

            spawnHeartBurst(
                randomBetween(15, 85),
                randomBetween(55, 90),
                {
                    size: randomBetween(0.55, 0.9),
                    duration: randomBetween(2.2, 3.2)
                }
            );

        }, i * 420);

    }

}


/* ============================================================
   TOUCH FEEDBACK FOR LOVE CARDS
============================================================ */

const loveCards =
    document.querySelectorAll(".love-card");


loveCards.forEach((card) => {

    card.addEventListener(
        "touchstart",
        () => {

            card.style.transition =
                "transform 0.15s ease";

        },
        {
            passive: true
        }
    );

});


/* ============================================================
   FIRST COMPLIMENT
============================================================ */

/*
 * Keep the first compliment intentional instead of
 * immediately randomizing it.
 */

if (complimentText) {

    complimentText.textContent =
        "You are my fav part of the day.";

}


/* ============================================================
   START AMBIENT EFFECTS
============================================================ */

createInitialAmbientHearts();