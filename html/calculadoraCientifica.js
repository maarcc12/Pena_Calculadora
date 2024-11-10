const pantalla = document.querySelector(".pantalla");
const pantallaError = document.querySelector(".pantalla_error");
const botones = document.querySelectorAll(".btn");

botones.forEach(boton => {
    boton.addEventListener("click", () => {
        const valor = boton.textContent;

        // Operaciones científicas
        if (["sin", "cos", "tan", "log", "exp"].includes(valor)) {
            if (pantalla.textContent === "Error!") return;

            const num = parseFloat(pantalla.textContent);
            switch (valor) {
                case "sin":
                    pantalla.textContent = Math.sin(num).toFixed(5);
                    break;
                case "cos":
                    pantalla.textContent = Math.cos(num).toFixed(5);
                    break;
                case "tan":
                    pantalla.textContent = Math.tan(num).toFixed(5);
                    break;
                case "log":
                    pantalla.textContent = Math.log(num).toFixed(5);
                    break;
                case "exp":
                    pantalla.textContent = Math.exp(num).toFixed(5);
                    break;
            }
            return;
        }

        // Función de memoria
        if (valor === "M+") {
            sessionStorage.setItem("memoria", pantalla.textContent);
            return;
        }

        if (valor === "MR") {
            const memoria = sessionStorage.getItem("memoria");
            if (memoria) pantalla.textContent = memoria;
            return;
        }

        if (valor === "MC") {
            sessionStorage.removeItem("memoria");
            return;
        }

        // Limpiar pantalla y error
        if (boton.id === "C") {
            pantalla.textContent = "0";
            pantallaError.textContent = "";
            return;
        }

        // Borrar último dígito
        if (boton.id === "borrar") {
            if (pantalla.textContent.length === 1 || pantalla.textContent === "Error!") {
                pantalla.textContent = "0";
            } else {
                pantalla.textContent = pantalla.textContent.slice(0, -1);
            }
            pantallaError.textContent = "";
            return;
        }

        // Evaluar expresión
        if (boton.id === "igual") {
            try {
                pantalla.textContent = eval(pantalla.textContent.replace(/−/g, "-"));
                pantallaError.textContent = "";
            } catch {
                pantallaError.textContent = "Error en la expresión";
                pantalla.textContent = "Error!";
            }
            return;
        }

        // Limitar dígitos del número ingresado a 5
        const partes = pantalla.textContent.split(/[\+\-\*\/]/);
        const ultimoNumero = partes[partes.length - 1];
        
        if (ultimoNumero.length >= 5 && !isNaN(boton.textContent)) {
            pantallaError.textContent = "Máximo 5 dígitos por número";
            return;
        }

        // Agregar número u operador a la pantalla
        pantallaError.textContent = "";
        if (pantalla.textContent === "0" || pantalla.textContent === "Error!") {
            pantalla.textContent = valor;
        } else {
            pantalla.textContent += valor;
        }
    });
});
