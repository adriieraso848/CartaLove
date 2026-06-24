
const stars = document.getElementById("stars");

for (let i = 0; i < 300; i++) {

    const star = document.createElement("div");

    star.className = "star";

    star.style.left = Math.random() * 100 + "%";
    star.style.top = Math.random() * 100 + "%";

    star.style.animationDelay = Math.random() * 3 + "s";
    star.style.animationDuration = (Math.random() * 3 + 2) + "s";

    stars.appendChild(star);

}


const mensaje = `


Hay personas que llegan a nuestra vida sin hacer ruido,
pero poco a poco terminan convirtiéndose en nuestro lugar favorito.

Desde que llegaste,
las noches tienen más estrellas,
las sonrisas duran más
y mi corazón encontró un motivo más para creer en el amor.

Gracias por cada conversación,
por cada risa,
por cada momento compartido.

Quiero que sepas que,
sin importar la distancia,
el tiempo
o los obstáculos,
siempre habrá una parte de mí
que elegirá caminar a tu lado.

Si algún día miras el cielo,
recuerda que entre todas las estrellas
siempre habrá una que me recuerde a ti.

Porque de todas las personas que conocí...

tú eres mi favorita.

❤️
`;

const texto = document.getElementById("texto");

const boton = document.getElementById("abrir");

const carta = document.getElementById("carta");

const inicio = document.getElementById("inicio");

const musica = document.getElementById("musica");

const final = document.getElementById("final");

const tapa = document.querySelector(".tapa");


boton.onclick = () => {

    tapa.style.transform = "rotateX(180deg)";

    musica.play().catch(() => {});

    setTimeout(() => {

        inicio.style.display = "none";

        carta.style.display = "flex";

        escribir();

    }, 1200);

}



let i = 0;

function escribir() {

    if (i < mensaje.length) {

        texto.innerHTML += mensaje.charAt(i);

        i++;

        setTimeout(escribir, 45);

    } else {

        final.style.opacity = "1";
    }



function estrellaFugaz() {

    const estrella = document.createElement("div");

    estrella.style.position = "fixed";
    estrella.style.top = Math.random() * 40 + "%";
    estrella.style.left = "-100px";

    estrella.style.width = "120px";
    estrella.style.height = "2px";

    estrella.style.background = "linear-gradient(to right, white, transparent)";

    estrella.style.transform = "rotate(-25deg)";

    estrella.style.opacity = ".9";

    estrella.style.zIndex = "-1";

    document.body.appendChild(estrella);

    let x = -100;
    let y = Math.random() * 300;

    const animar = setInterval(() => {

        x += 15;
        y += 6;

        estrella.style.left = x + "px";
        estrella.style.top = y + "px";

        if (x > window.innerWidth + 200) {

            clearInterval(animar);

            estrella.remove();

        }

    }, 20);

}

setInterval(estrellaFugaz, 6000);  }