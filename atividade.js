let inventarioAlpha = [
  ["Cristal Rubion", "Plutão", 4500],
  ["Cápsula de Éter", "Júpiter", 7800],
  ["Nanofibra Luminosa", "Saturno", 12000],
  ["Minério Dourado", "Marte", 8500],
  ["Flor de Andrômeda", "Andrômeda", 13000],
  ["Ampulheta Galáctica", "Vênus", 2200],
  ["Fóssil Estelar", "Lua", 9000],
  ["Orbe do Caos", "Netuno", 9100],
  ["Lente do Vazio", "Buraco Negro X-1", 14300],
  ["Chave de Fóton", "Sol", 2300],
  ["Esfera Sombria", "Nêmesis", 13400],
  ["Granada de Íons", "Marte", 4100],
  ["Tecido Estelar", "Urano", 5300],
  ["Engrenagem Sombria", "Plutão", 6600],
  ["Fragmento Prismático", "Kepler-22b", 6400],
  ["Núcleo de Plasma", "Kepler-452b", 9100],
  ["Anel de Chronos", "Terra", 4900],
  ["Bateria Quântica", "Terra", 4000],
  ["Areia do Tempo", "Terra", 3100],
  ["Escudo de Luz", "Vênus", 4700],
  ["Catalisador Estelar", "Sirius", 12500],
  ["Pó de Cometa", "Netuno", 3000],
  ["Relógio Quântico", "Terra", 5000],
  ["Vórtice Gravitacional", "Saturno", 8800],
  ["Cristal Ômega", "Andrômeda", 13900],
  ["Cristal Ômega", "Andrômeda", 13900]
];

let inventarioBeta = [
  ["Lâmina Solar", "Mercúrio", 6700],
  ["Cometa Engarrafado", "Netuno", 7600],
  ["Relíquia de Zordon", "Elysium", 25000],
  ["Pó Lunar", "Lua", 2900],
  ["Nevoeiro Encapsulado", "Júpiter", 3800],
  ["Chip de Matéria", "Ceres", 4100],
  ["Chave de Portais", "Júpiter", 5900],
  ["Globo de Plasma", "Terra", 7200],
  ["Mapa Estelar", "Vênus", 2100],
  ["Pedra Temporal", "Lua", 7800],
  ["Lanterna Estelar", "Sol", 3200],
  ["Fragmento de Eclipse", "Eclipse E-9", 8300],
  ["Ponte de Gelo", "Hoth", 3900],
  ["Fluido de Saturno", "Saturno", 4400],
  ["Fenda de Tempo", "Marte", 8700],
  ["Condutor Fotônico", "Sol", 3600],
  ["Memória Galáctica", "Terra", 5500],
  ["Livro de Nebulosa", "Andrômeda", 9200],
  ["Túnel Quântico", "Netuno", 4100],
  ["Canhão de Luz", "Vênus", 6800],
  ["Orbe Incandescente", "Sol", 9300],
  ["Matriz de Propulsão", "Vênus", 4500],
  ["Partícula Livre", "Urano", 5400],
  ["Capa de Invisibilidade", "Terra", 3900],
  ["Terminal de Dobra", "Alpha Centauri", 10500]
];


//1.Um item duplicado foi detectado no final do inventário Alpha. Remova a cópia.
let itemRemovidoAlpha = inventarioAlpha.pop();
console.log(`Item duplicado removido: ${itemRemovidoAlpha}`);
console.log(`Lista após a remoção: ${inventarioAlpha}`);

//2.Um artefato obsoleto foi removido do final da lista Beta após avaliação técnica.
let itemRemovidoBeta = inventarioBeta.pop();
console.log(`Item removido no final da lista Beta: ${itemRemovidoBeta}`);
console.log(`Lista após a missão: ${inventarioBeta}`);

//3.Três novos artefatos da Terra foram entregues à nave Alpha. Adicione-os ao final.
let novoItem1 = ["Camisa do Zé Felipe", "Terra", "3300"];
let novoItem2 =  ["Chuteira do Neymar", "Terra", "8729"];
let novoItem3 = ["Xbox 720", "Terra", "9322"];
inventarioAlpha.push(novoItem1);
inventarioAlpha.push(novoItem2);
inventarioAlpha.push(novoItem3);
console.log("Lista atualizada:", inventarioAlpha);

//4.Dois artefatos especiais de Kepler foram coletados e adicionados à nave Beta.
let itemNovo1 = ["Zampakutou", "Kepler", "1200"];
let itemNovo2 = ["Cuphead 2", "Kepler", "2500"];
inventarioBeta.push(itemNovo1);
inventarioBeta.push(itemNovo2);
console.log("Lista atualizada:", inventarioBeta);

//5. Um item da Alpha precisa aparecer no topo da lista para ser destacado na vitrine.
let itemMaisTop = inventarioAlpha.splice(7,1);
console.log("Item destacado:", itemMaisTop);
inventarioAlpha.unshift(itemMaisTop);
console.log("Lista atualizada:", inventarioAlpha);

//6.Um item da Beta deve ser promovido para o início da lista para estudo prioritário.
let itemBizarro = inventarioBeta.splice(16,1);
console.log(`Item de estudo prioritário: ${itemBizarro}`);
inventarioBeta.unshift(itemBizarro);
console.log("Lista atualizada:", inventarioBeta);

//7.Um artefato incorreto foi inserido no topo da Alpha por engano. Ele deve ser excluído.
let itemRemoved = inventarioAlpha.shift();
console.log(`Item removido: ${itemRemoved}`);
console.log("Lista atualizada:", inventarioAlpha);

//8.Um artefato incorreto foi inserido no topo da Alpha por engano. Ele deve ser excluído.
let itemRemoved2 = inventarioBeta.shift();
console.log(`Item removido: ${itemRemoved2}`);
console.log("Lista atualizada:", inventarioBeta);

//9.Verifique se a “Relíquia de Zordon” está presente no inventário Beta.

//10.Verifique se o item “Nanofibra Luminosa” ainda está disponível na Alpha.

//11.Gere uma string com todos os planetas do inventário Alpha, separados por um delimitador.

//12.Crie um texto com os nomes dos 10 primeiros itens da Beta, separados por vírgulas.
let novaArray2 = [];
novaArray2 = inventarioBeta.slice(0,10);
console.log(`Nova lista: ${novaArray2.join(';  ')}`);


//13.Gere uma nova lista com os 5 primeiros itens da nave Beta para inspeção.
let novaArray = [];
novaArray = inventarioBeta.slice(0,5)
console.log("Nova lista:", novaArray);

//14.Separe os 10 últimos itens do inventário Alpha para estudo temporal.
let clone = inventarioAlpha.map(item => item);
let invertido = clone.reverse()
let estudoTemporal = invertido.slice(0,10);
console.log("Lista de estudo temporal:", estudoTemporal);

//15.O quinto item da Alpha foi substituído por uma versão mais moderna. Atualize
console.log(`Item substituido:${inventarioAlpha[4]}`);
inventarioAlpha[4] = ["Hogyoku", "Hueco Mundo", "9999"]
console.log(`Item atualizado: ${inventarioAlpha[4]}`);
console.log("Lista atualizada:", inventarioAlpha);

//16. Dois itens no meio do inventário Beta foram contaminados e precisam ser removidos.
console.log(`Os itens que do inventário beta que foram contaminados serão removidos foram ${inventarioBeta[13]} e ${inventarioBeta[14]}`);
inventarioBeta.splice(13,2)
console.log("Lista atualizada:", inventarioBeta);

//17.Unifique os inventários Alpha e Beta em uma única estrutura.
let listaUnificada = inventarioAlpha.concat(inventarioBeta)
console.log("Lista Unificada:", listaUnificada);

//18.Junte os cinco primeiros itens de cada nave em uma nova vitrine de destaques.
let destaque1 = inventarioAlpha.slice(0,5);
let destaque2 = inventarioBeta.slice(0,5);
listaUnificada2 = destaque1.concat(destaque2);
console.log("Lista de destaques:" , listaUnificada2);

//19.Crie uma versão com os nomes de todos os itens da Beta em letras maiúsculas.

//20.Converta os valores de todos os itens da Alpha para uma moeda interestelar (multiplicação).

//21.Filtre da Beta apenas os itens que custam mais de 7000 créditos.

//22.Filtre da Alpha todos os itens originários da Terra para despacho diplomático.

//23.Reorganize os itens da Beta do menor para o maior valor.

//24.Reorganize a lista da Alpha em ordem alfabética dos nomes dos artefatos.

//25.Inverta a ordem de todos os itens da Beta para visualização reversa.

//26.Inverta a ordem dos 15 primeiros itens da Alpha como simulação de viagem no tempo.
let quinzePrimeiros = inventarioAlpha.slice(0,15);
let viagemTemporal = quinzePrimeiros.reverse();
let temporalViagem = inventarioAlpha.splice(16, inventarioAlpha.length);
let viagemTemporalVerdadeira = quinzePrimeiros.concat(temporalViagem)
console.log(viagemTemporalVerdadeira);

//27.Crie uma prévia com os nomes e planetas dos 10 itens mais valiosos da Alpha.

//28.Extraia os itens da Beta que foram coletados em luas (ex: Lua, Europa, Titã…).

//29.dentifique e mova para o final da Alpha todos os itens com valor abaixo de 4000.

//30.Conte quantos itens do inventário Beta vieram de planetas do sistema solar interno.














  
 