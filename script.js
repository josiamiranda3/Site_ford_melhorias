
        function verificarCheckbox() {
            const checkboxTermos = document.getElementById("termos");
            const botaoEnviar = document.getElementById("enviarBtn");
            
            botaoEnviar.disabled = !checkboxTermos.checked;
        }

    
