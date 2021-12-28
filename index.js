// Code your solutions in this file

function writeCards(cards, event){

    const cardarr = []
    for(let  i = 0; i < cards.length; i++){
       cardarr[i] = `Thank you, ${cards[i]}, for the wonderful ${event} gift!`;
    }

    return cardarr;
}

function countDown(n){
    let i = n;
    while(i >= 0){
        console.log(i);
        i--;
    }
}


