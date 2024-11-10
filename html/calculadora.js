const pantalla = document.querySelector(".pantalla");
const pantallaError = document.querySelector(".pantalla_error");
const botones = document.querySelectorAll(".btn");

botones.forEach(boton => {
    boton.addEventListener("click", () => {
        const botonApretado = boton.textContent;

        if (boton.id === "C") {
            pantalla.textContent = "0";
            pantallaError.textContent = ""; // Limpiar cualquier mensaje de error
            return;
        }

        if (boton.id === "borrar") {
            if (pantalla.textContent.length === 1 || pantalla.textContent === "Error!") {
                pantalla.textContent = "0";
            } else {
                pantalla.textContent = pantalla.textContent.slice(0, -1);
            }
            pantallaError.textContent = ""; // Limpiar cualquier mensaje de error
            return;
        }


        if (boton.id === "igual") {
            try {
                pantalla.textContent = eval(pantalla.textContent.replace(/−/g, "-"));
                pantallaError.textContent = ""; // Limpiar el mensaje de error si la evaluación es exitosa
            } catch {
                pantallaError.textContent = "Error en la expresión"; // Mostrar error si la expresión no es válida
                pantalla.textContent = "Error!";
            }
            return;
        }

        // Limitar cada número a un máximo de 5 dígitos
        const partes = pantalla.textContent.split(/[\+\-\*\/]/); // Divide el contenido en partes por cada operador
        const ultimoNumero = partes[partes.length - 1]; // Obtén el último número ingresado
        
        if (ultimoNumero.length >= 5 && !isNaN(botonApretado)) {
            pantallaError.textContent = "Máximo 5 dígitos por número"; // Mostrar mensaje de error
            return;
        }

        // Limpiar el mensaje de error si el usuario ingresa un valor válido
        pantallaError.textContent = "";

        if (pantalla.textContent === "0" || pantalla.textContent === "Error!") {
            pantalla.textContent = botonApretado;
        } else {
            pantalla.textContent += botonApretado;
        }
    });
});
