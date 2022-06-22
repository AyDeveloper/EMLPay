import { abi } from './abi';
import Caver from 'caver-js';

const caver = new Caver('https://api.baobab.klaytn.net:8651/');
const cav = new Caver(klaytn);



const submisionForm = document.querySelector('.submisionForm');

submisionForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const addr = submisionForm.addr.value;
    const amount = submisionForm.amount.value;
    Transfer(addr, amount).then(tx => {

    }).catch(err => {
        console.log(err);
    })
})


// get Balance
const  getTokenBalance = async (addr) => {
    if (!initialized) {
		await init();
	}
    emlContract.methods.balanceOf(addr).call()
    .then(result => {
        console.log(result);
        const tokenBal = document.querySelector('.tokenBal');
        tokenBal.style.display = "block"
        tokenBal.innerHTML = `<span>${formatValue(result).toFixed(2)} EML</span>`
    })
 }

// transfer
const Transfer = async (addr, amount) => {
	if (!initialized) {
		await init();
	}

   const recAddr = caver.utils.isAddress(addr);
   const val = caver.utils.convertToPeb(amount, 'KLAY')

   if(recAddr != true) {
    alert("Invalid Address");
    return;
   }
 
    emlContract.send({from: selectedAccount, gas: 1500000, value: 0}, 'transfer', addr, val)
    .then(result => {
        const events = result.events.Transfer.returnValues;
        const from = events.from;
        const to = events.to;
        const value = events.value;
        displayMessage("00",`Yay! you ${addressShortener(from)} transferred ${formatValue(value)} EML Tokens to ${addressShortener(to)}`);
        getTokenBalance(selectedAccount);

    })
    .catch(err => {
        displayMessage("01", `Transaction reverted, see console for details`);
        console.log(err);
    })
}

/**
 =====================================----------
 =====================================----------
                                    CONNECTING TO KLATYN
                                    ====================================
                                    ====================================
**/
const balDisp = document.querySelector('.balDisp');

// set userInfo (addrress and native token bal)
function setUserInfo(account, balance) {
    connectBtn.innerText = addressShortener(account);
    balDisp.style.display = 'block'; 
    balDisp.innerHTML = `${balance} <span>KLAY</span>`;
}

// connect button
const connectBtn = document.querySelector('.connect button');
connectBtn.addEventListener('click', e => {
    init();
})

// helper function for address shortener;
function addressShortener(addr) {
    return addr.slice(0, 4) + '...' + addr.slice(addr.length - 5, addr.length - 1);
}

// helper function for formatting value to KLAY
function formatValue(value) {
    return value / Math.pow(10, 18);
}

// display transaction  on success / revertion
function displayMessage(messageType, message){
    const messages = {
        "00":` <div class="card">
                <p class="successMessage">${message}</p>
            </div>`,
        "01": `
            <div class="card">
                 <p class="errorMessage">${message}</p>
            </div>
        `
    }
	const notification = document.querySelector(".projectContainerCenter");
    notification.innerHTML += messages[messageType];
}


// let provider;
let selectedAccount;
let initialized = false; 
let emlContract;
const emlContractAddress = "0x79a0a2917034afe98b7d6bac58447d4a80723c0b";

const init = async () => {
    if (window.klatyn !== 'undefined') {
        // kaikas is available;
        if (window.klaytn.networkVersion == '8217') return console.log('Change to BaoBab')
        const accounts = await klaytn.enable();
        const account =  accounts[0];
        selectedAccount = accounts[0];
        // provider = window['klatyn'];
        const balance = await cav.klay.getBalance(account);
        setUserInfo(account, Number(caver.utils.fromPeb(balance, 'KLAY')).toFixed(2));
        klaytn.on('accountsChanged',  async (accounts) => { 
            setUserInfo(accounts[0], Number(caver.utils.fromPeb(await cav.klay.getBalance(accounts[0]), 'KLAY')).toFixed(2));
            selectedAccount = accounts[0];
            getTokenBalance(selectedAccount)
        })
    }
    
     emlContract = new cav.klay.Contract(abi, emlContractAddress);
     initialized = true;
     getTokenBalance(selectedAccount)

}





/**
 =====================================----------
 =====================================----------
                                    END OF CONNECTING TO KLATYN
                                    ====================================
                                    ====================================
**/
