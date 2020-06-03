let submitButton = document.getElementById('submit');
let amount = document.getElementById('number');
let money = document.getElementById('money');

money.addEventListener('submit', AddMoney);
let displayCoins = document.getElementById('coinArea');

function AddMoney(event){
    event.preventDefault();
    const data = new FormData(money);
    let coinAmount = parseInt(data.get('number'));
    let coinType = data.get('dropdown');

    if(coinType === 'penny'){
        for(let i = 0; i < coinAmount; i++){
            let pen = document.createElement('div');
            pen.style.height = "60px";
            pen.style.width = "60px";
            pen.style.borderRadius = "50px";
            pen.style.backgroundColor = "#b87333";
            pen.style.fontSize = "15px";
            pen.style.textAlign = "center";
            pen.innerText = "penny";
            displayCoins.append(pen);
        }
    }
    else if(coinType === 'nickel'){
        for(let i = 0; i < coinAmount; i++){
            let nick = document.createElement('div');
            nick.style.height = "75px";
            nick.style.width = "75px";
            nick.style.borderRadius = "50px";
            nick.style.backgroundColor = "#c5c5c5";
            nick.style.fontSize = "15px";
            nick.style.textAlign = "center";
            nick.innerText = "nickel";
            displayCoins.append(nick);
        }

    }
    else if(coinType === 'dime'){
        for(let i = 0; i < coinAmount; i++){
            let dime = document.createElement('div');
            dime.style.height = "40px";
            dime.style.width = "40px";
            dime.style.borderRadius = "50px";
            dime.style.backgroundColor = "#ededed";
            dime.style.fontSize = "10px";
            dime.style.textAlign = "center";
            dime.innerText = 'dime';
            displayCoins.append(dime);
        }

    }
    else if(coinType === 'quarter'){
        for(let i = 0; i < coinAmount; i++){
            let quart = document.createElement('div');
            quart.style.height = "100px";
            quart.style.width = "100px";
            quart.style.borderRadius = "50px";
            quart.style.backgroundColor = "#8b8b8b";
            quart.style.fontSize = "15px";
            quart.style.textAlign = "center";
            quart.innerText = "quarter";
            displayCoins.append(quart);
        }

    }
    else{
        console.log("No coin option inserted");
    }

    displayCoins.addEventListener('click', e =>{
        e.target.remove();
    })
}