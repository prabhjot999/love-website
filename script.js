document.addEventListener("DOMContentLoaded", function () {

    const btn = document.getElementById("loveBtn");
    const message = document.getElementById("loveMessage");

    const flowers = ["🌸", "🌹", "🌺", "💐", "🌷"];

    btn.addEventListener("click", function () {

        message.style.display = "block";

        // Full Screen Flower Rain
        for (let i = 0; i < 100; i++) {

            let flower = document.createElement("div");
            flower.classList.add("flower");

            flower.innerHTML = flowers[Math.floor(Math.random() * flowers.length)];

            flower.style.left = Math.random() * 100 + "vw";
            flower.style.animationDuration = (Math.random() * 3 + 3) + "s";
            flower.style.fontSize = (Math.random() * 20 + 20) + "px";

            document.body.appendChild(flower);

            setTimeout(() => {
                flower.remove();
            }, 6000);
        }

    });

});
