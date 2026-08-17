document.addEventListener("DOMContentLoaded", function () {

    /* =========================================
       PERSONAL DETAILS
    ========================================= */

    const birthdayPerson = "Mera Duduu Babyy";
    const sender = "Amena Mehnaz";

    const personName = document.getElementById("personName");
    const heroName = document.getElementById("heroName");
    const letterName = document.getElementById("letterName");
    const senderName = document.getElementById("senderName");
    const finalName = document.getElementById("finalName");
    const finalSender = document.getElementById("finalSender");

    if (personName) personName.textContent = birthdayPerson;
    if (heroName) heroName.textContent = birthdayPerson;
    if (letterName) letterName.textContent = birthdayPerson;
    if (senderName) senderName.textContent = sender;
    if (finalName) finalName.textContent = birthdayPerson;
    if (finalSender) finalSender.textContent = sender;


    /* =========================================
       FLOWING HEART PARTICLES
    ========================================= */

    const particles = document.getElementById("particles");

    if (particles) {

        for (let i = 0; i < 60; i++) {

            const heart = document.createElement("div");

            heart.className = "particle";

            heart.innerHTML = "♡";

            heart.style.left =
                Math.random() * 100 + "%";

            heart.style.animationDuration =
                (8 + Math.random() * 15) + "s";

            heart.style.animationDelay =
                Math.random() * 10 + "s";

            heart.style.fontSize =
                (10 + Math.random() * 18) + "px";

            particles.appendChild(heart);
        }
    }


    /* =========================================
       SECTION NAVIGATION
    ========================================= */

    function goToSection(id) {

        const section = document.getElementById(id);

        if (!section) {
            console.warn("Section not found:", id);
            return;
        }

        section.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }


    /* =========================================
       CONTINUE BUTTONS
    ========================================= */

    const continueButtons =
        document.querySelectorAll(".continue-btn");

    continueButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            const next =
                button.getAttribute("data-next");

            if (next) {
                goToSection(next);
            }

        });

    });


    /* =========================================
       💌 ENVELOPE
    ========================================= */

    const envelope =
        document.getElementById("loveEnvelope");

    const openButton =
        document.getElementById("openLoveBtn");

    const secretArea =
        document.getElementById("secretArea");


    if (openButton) {

        openButton.addEventListener("click", function (event) {

            event.preventDefault();

            console.log("Envelope button clicked");

            /* OPEN ENVELOPE */

            if (envelope) {
                envelope.classList.add("open");
            }

            /* HIDE BUTTON */

            openButton.style.opacity = "0";
            openButton.style.pointerEvents = "none";


            /* SHOW PIN AREA */

            setTimeout(function () {

                if (secretArea) {
                    secretArea.classList.add("show");
                }

            }, 700);

        });

    }


    /* =========================================
       🔐 PIN SYSTEM
    ========================================= */

    const correctPIN = "2325";

    let enteredPIN = "";

    let pinUnlocked = false;


    const keys =
        document.querySelectorAll(".heart-key");

    const display =
        document.getElementById("pinDisplay");

    const unlockButton =
        document.getElementById("unlockBtn");

    const message =
        document.getElementById("pinMessage");


    /* =========================================
       PIN DISPLAY
    ========================================= */

    function updateDisplay() {

        if (!display) return;

        const hearts =
            display.querySelectorAll("span");

        hearts.forEach(function (heart, index) {

            if (index < enteredPIN.length) {

                heart.textContent = "♥";

                heart.classList.add("filled");

            } else {

                heart.textContent = "♡";

                heart.classList.remove("filled");

            }

        });

    }


    /* =========================================
       PIN KEYS
    ========================================= */

    keys.forEach(function (key) {

        key.addEventListener("click", function (event) {

            event.preventDefault();

            if (pinUnlocked) {
                return;
            }

            const value =
                key.getAttribute("data-number");


            /* CLEAR */

            if (value === "clear") {

                enteredPIN = "";

            }


            /* DELETE */

            else if (value === "delete") {

                enteredPIN =
                    enteredPIN.slice(0, -1);

            }


            /* NUMBER */

            else {

                if (enteredPIN.length < 4) {

                    enteredPIN += value;

                }

            }


            updateDisplay();


            if (message) {
                message.textContent = "";
            }

        });

    });


    /* =========================================
       🔓 UNLOCK
    ========================================= */

    if (unlockButton) {

        unlockButton.addEventListener("click", function (event) {

            event.preventDefault();

            if (pinUnlocked) {
                return;
            }


            /* ===============================
               CORRECT PIN
            =============================== */

            if (enteredPIN === correctPIN) {

                pinUnlocked = true;


                /* REMOVE LOCK */

                document.body.classList.remove("pin-locked");

                document.body.classList.add("pin-unlocked");


                /* MESSAGE */

                if (message) {

                    message.textContent =
                        "Unlocked with love ♡";

                    message.style.color =
                        "#7d2940";

                }


                /* BUTTON */

                unlockButton.textContent =
                    "UNLOCKED ♡";

                unlockButton.disabled = true;


                /* GO TO HERO */

                setTimeout(function () {

                    goToSection("hero");

                }, 800);

            }


            /* ===============================
               WRONG PIN
            =============================== */

            else {

                if (message) {

                    message.textContent =
                        "Wrong PIN... try again ♡";

                    message.style.color =
                        "#9b4059";

                }


                /* SHAKE */

                const lock =
                    document.querySelector(".pin-lock");

                if (lock) {

                    lock.classList.remove("shake");

                    void lock.offsetWidth;

                    lock.classList.add("shake");

                }


                /* RESET PIN */

                enteredPIN = "";

                updateDisplay();

            }

        });

    }


    /* =========================================
       💌 LETTER REVEAL / FLIP
    ========================================= */

    const letterReveal =
        document.getElementById("letterReveal");


    if (letterReveal) {

        letterReveal.addEventListener("click", function (event) {

            event.preventDefault();

            console.log("Letter clicked");

            letterReveal.classList.toggle("open");

        });

    }


    /* =========================================
       🎁 GIFTS
    ========================================= */

    const gifts =
        document.querySelectorAll(".gift");

    const modal =
        document.getElementById("giftModal");

    const modalText =
        document.getElementById("modalText");

    const closeModal =
        document.getElementById("closeModal");


    gifts.forEach(function (gift) {

        gift.addEventListener("click", function (event) {

            event.preventDefault();

            const text =
                gift.getAttribute("data-message");

            if (modalText) {

                modalText.textContent = text;

            }

            if (modal) {

                modal.classList.add("show");

            }

        });

    });


    /* =========================================
       CLOSE GIFT MODAL
    ========================================= */

    if (closeModal) {

        closeModal.addEventListener("click", function (event) {

            event.preventDefault();

            if (modal) {
                modal.classList.remove("show");
            }

        });

    }


    /* =========================================
       CLOSE MODAL WHEN CLICKING OUTSIDE
    ========================================= */

    if (modal) {

        modal.addEventListener("click", function (event) {

            if (event.target === modal) {

                modal.classList.remove("show");

            }

        });

    }


    /* =========================================
       🕯️ CANDLES
    ========================================= */

    const candles =
        document.querySelectorAll(".candle");

    let candlesOff = 0;


    candles.forEach(function (candle) {

        candle.addEventListener("click", function (event) {

            event.preventDefault();


            /* Already OFF */

            if (candle.classList.contains("off")) {
                return;
            }


            /* TURN OFF */

            candle.classList.add("off");

            candlesOff++;


            /* =================================
               ALL 3 CANDLES OFF
            ================================= */

            if (candlesOff === candles.length) {

                const wishText =
                    document.getElementById("wishText");


                if (wishText) {

                    wishText.textContent =
                        "Your wish is officially on its way. ✨";

                }


                /* SHOW BIRTHDAY POPUP */

                setTimeout(function () {

                    const birthdayPopup =
                        document.getElementById("birthdayPopup");


                    if (birthdayPopup) {

                        birthdayPopup.classList.add("show");

                    }


                    /* CONFETTI */

                    createConfetti();

                }, 500);

            }

        });

    });


    /* =========================================
       🎉 BIRTHDAY POPUP CLOSE
    ========================================= */

    const closeBirthdayPopup =
        document.getElementById("closeBirthdayPopup");


    if (closeBirthdayPopup) {

        closeBirthdayPopup.addEventListener("click", function (event) {

            event.preventDefault();

            const birthdayPopup =
                document.getElementById("birthdayPopup");


            if (birthdayPopup) {

                birthdayPopup.classList.remove("show");

            }


            /* OPTIONAL:
               GO TO FINAL PAGE */

            setTimeout(function () {

                goToSection("final");

            }, 300);

        });

    }


    /* =========================================
       🎉 CONFETTI
    ========================================= */

    function createConfetti() {

        const container = document.body;


        for (let i = 0; i < 80; i++) {

            const confetti =
                document.createElement("div");

            confetti.className =
                "birthday-confetti";


            confetti.style.left =
                Math.random() * 100 + "vw";


            confetti.style.animationDelay =
                Math.random() * 1.5 + "s";


            confetti.style.animationDuration =
                (2.5 + Math.random() * 2) + "s";


            confetti.style.transform =
                "rotate(" +
                Math.random() * 360 +
                "deg)";


            container.appendChild(confetti);


            setTimeout(function () {

                confetti.remove();

            }, 5000);

        }

    }


    /* =========================================
       🔄 RESTART EXPERIENCE
    ========================================= */

    const restartBtn =
        document.getElementById("restartBtn");


    if (restartBtn) {

        restartBtn.addEventListener("click", function (event) {

            event.preventDefault();

            /* RESET PIN */

            enteredPIN = "";

            pinUnlocked = false;

            updateDisplay();


            /* RESET BODY */

            document.body.classList.remove("pin-unlocked");

            document.body.classList.add("pin-locked");


            /* RESET ENVELOPE */

            if (envelope) {

                envelope.classList.remove("open");

            }


            /* RESET OPEN BUTTON */

            if (openButton) {

                openButton.style.opacity = "1";

                openButton.style.pointerEvents = "auto";

            }


            /* RESET SECRET AREA */

            if (secretArea) {

                secretArea.classList.remove("show");

            }


            /* RESET UNLOCK BUTTON */

            if (unlockButton) {

                unlockButton.disabled = false;

                unlockButton.textContent =
                    "UNLOCK MY HEART ♡";

            }


            /* RESET MESSAGE */

            if (message) {

                message.textContent = "";

            }


            /* RESET LETTER */

            if (letterReveal) {

                letterReveal.classList.remove("open");

            }


            /* RESET CANDLES */

            candlesOff = 0;

            candles.forEach(function (candle) {

                candle.classList.remove("off");

            });


            /* RESET WISH */

            const wishText =
                document.getElementById("wishText");


            if (wishText) {

                wishText.textContent =
                    "Click the candles and make your wish.";

            }


            /* CLOSE POPUP */

            const birthdayPopup =
                document.getElementById("birthdayPopup");


            if (birthdayPopup) {

                birthdayPopup.classList.remove("show");

            }


            /* GO BACK TO OPENING */

            setTimeout(function () {

                goToSection("opening");

            }, 100);

        });

    }


    /* =========================================
       INITIAL STATE
    ========================================= */

    updateDisplay();


    console.log("Birthday website JavaScript loaded successfully ♡");

});
