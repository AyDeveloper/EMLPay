# Buidlpay

Each day new protocols and technology springs up in web3 space which maybe a little unknown to newbies or beginners. The use of them for solving practical solutions is super important to drive mass adoption. Technologies ranging from Covalent,  LivePeer, Lens Protocol, Radicle, Superfluid and so on are developed to solve real life problems. Web3 is not only about smart contracts, there are other technologies that newbie developers can be familiar with to build their next unicorn. This innovation is majorly focused on beginners and intermediate developers to get into building real life projects with these technologies, get hands-on experience and get rewarded if the idea is sold or acquired on the platform.
 
Just like how hackathons are, you get into building using these technologies solo, and list it on this platform. When project is listed, you are rest assured that your project if reviewed and passes more than 2 votes would be rewarded. This is just an initiative made for Buidlers and to reward them. 

This platform tends to support building decentralized applications on the Klatyn blockchain and also using other techonologies like Covalent e.t.c. It makes use of the trust, and permissionlessness of the blockchain to reward builders and drive mass adoption for the Klatyn blockchain.


# Important Note
a. The smart contract handles the following functionality: Register project, Vote Project, RewardBuilder e.t.c. The sorce code for the smart contract lies in the asset folder of this repo.

b. The front end enable users list projects and interact with the already deployed smart contract

# How it works

1. Users are expected to list their project: this field contains the name of the project, link to the project, supposed prized they want to sell for/ get rewarded for, technologies used e.g covalent or others, and description about the project(what it intends to solve). Submitting the Project calls the register function in the contract

2. Having listed your project, it expected that you get greater than two votes before you can be rewarded. This is a way to minimally proof the validity of the project by others. Onclick of vote, it calls the vote function in the contract and increment the vote count of the buidler.
3. After getting greater than 2 votes, a random lover of your project can now reward you by clicking the reward button. This action triggers the RewardBuilder method in the smart contract. 

# Future of BuidlPay

Just like how Klaytn Foundation’s May Proof-Of-Contribution (POC) program has been announced to bring about mass adoption in the Klatyn Ecosystem, BuidlPay tends to seek partnership that would help beginners or intermediate grow their skills, get rewarded and build to expand the Klatyn Ecosystem.

We tend to ensure that only Buidlers with the Buidl tokens can be eligible for grants from any future partners to scale projects long term in the Klatyn Ecosystem.







# Others
The smart contract was deployed to BaoBab and here is the link  https://baobab.scope.klaytn.com/account/0xb44E8d6C64c51EA8CE76fE3766f3e3C19289256E?tabId=internalTx

The Site is live on https://buidlpay.netlify.app/

Here is a link to the slide https://docs.google.com/presentation/d/19DMQna_AUB55_kkEibsGLnSwZd9D0pm0zNxP1gUlxBA/edit?usp=sharing
