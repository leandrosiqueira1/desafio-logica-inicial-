let nome = 'Leandro';
const xp = 12000;

console.log('Digite o nome do heroi:' + nome);
console.log('Digite a quantidade de XP:' + xp);

for(i = 0; i<1; i++){
    let exp = xp;
    let nivel;
   
    if(xp >= 0 && xp <= 1000){
        let nivel = 'Ferro';
        console.log(`O Heroi de nome ${nome} está no nivel de ${nivel}`);
    }else if(xp >=1001 && xp <= 2000){
        let nivel = 'Brozer';
        console.log(`O Heroi de nome ${nome} está no nivel de ${nivel}`);
       
    }else if(xp >=2001 && xp <= 5000){
        let nivel = 'Prata';
        console.log(`O Heroi de nome ${nome} está no nivel de ${nivel}`);
       
    }else if(xp >=5001 && xp <= 7000){
        let nivel = 'Ouro';
        console.log(`O Heroi de nome ${nome} está no nivel de ${nivel}`);
       
    }else if(xp >=7001 && xp <= 8000){
        let nivel = 'Platina';
        console.log(`O Heroi de nome ${nome} está no nivel de ${nivel}`);
       
    }else if(xp >=8001 && xp <= 9000){
        let nivel = 'Ascendente';
        console.log(`O Heroi de nome ${nome} está no nivel de ${nivel}`);
       
    }else if(xp >=9001 && xp <= 1000){
        let nivel = 'Imortal';
        console.log(`O Heroi de nome ${nome} está no nivel de ${nivel}`);
       
    }else if(xp >= 1000){
        let nivel = 'Radiante';
        console.log(`O Heroi de nome ${nome} está no nivel de ${nivel}`);
       
    }
   
}

