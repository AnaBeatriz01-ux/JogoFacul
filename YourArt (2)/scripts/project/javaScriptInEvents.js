

const scriptsInEvents = {

	async FolhaDeEventos1_Event7_Act1(runtime, localVars)
	{
		const instNumeros = runtime.objects.numeros.getFirstInstance();
		const instBalao = runtime.objects.balaodefala.getFirstInstance();
		const instTexto = runtime.objects.bafundamento01.getFirstInstance();
		
		if (!instNumeros || !instBalao || !instTexto) return;
		
		let atual = parseInt(instNumeros.text) || 0;
		let proximo = atual + 1;
		if (proximo > 7) proximo = 7; 
		instNumeros.text = proximo.toString();
		
		const frases = [
		    "Textura: É a qualidade visual ou tátil de uma superfície, indicando se algo parece áspero, macio ou irregular.",
		    "Linha: É a marca contínua feita em uma superfície, servindo para definir contornos ou guiar o olhar.",
		    "Forma: Ocorre quando uma linha se fecha ou delimita um espaço, criando áreas bidimensionais.",
		    "Espaço: Define a área ao redor, dentro ou entre os objetos, podendo ser positivo ou negativo.",
		    "Cor: É a percepção da luz refletida pelos objetos, possuindo matiz, saturação e brilho.",
		    "Valor: Refere-se à graduação de luminosidade entre o claro e o escuro, essencial para o volume.",
		    "Equilíbrio: Refere-se à distribuição visual dos elementos para criar estabilidade ou tensão."
		];
		
		instTexto.text = frases[proximo - 1];
		
		const mx = runtime.mouse.getCursorX();
		const my = runtime.mouse.getCursorY();
		
		instBalao.width = 450; 
		instBalao.height = 250;
		instTexto.width = 400; 
		instTexto.height = 200;
		
		instBalao.x = mx;
		instBalao.y = my - 120;
		instTexto.x = instBalao.x;
		instTexto.y = instBalao.y;
		
		instBalao.isVisible = true;
		instTexto.isVisible = true;
		instBalao.opacity = 1;
		instTexto.opacity = 1;
		
		instBalao.moveToTop();
		instTexto.moveToTop();
		
		const valorNoMomentoDoClique = instNumeros.text;
		
		setTimeout(() => {
		    if (instNumeros.text === valorNoMomentoDoClique) {
		        instBalao.isVisible = false;
		        instTexto.isVisible = false;
		    }
		}, 5000);
		
	}
};

globalThis.C3.JavaScriptInEvents = scriptsInEvents;
