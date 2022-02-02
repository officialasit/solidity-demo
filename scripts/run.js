const main = async () => {

    // Get Owner & Random Address
    const [owner, randomPerson] = await hre.ethers.getSigners();

    // Compile & get Factory
    const waveContractFactory = await hre.ethers.getContractFactory("WavePortal");

    //Deploy Contract
    const waveContract = await waveContractFactory.deploy();
    

    // Wait Until Contract Deployed
    await waveContract.deployed();

    console.log("Contract deployed to:", waveContract.address);
    console.log("Contract deployed by:", owner.address);
  
    let waveCount;
    //waveCount = await waveContract.getTotalWaves();
  
    let waveTxn = await waveContract.wave();
    await waveTxn.wait();
  
    //waveCount = await waveContract.getTotalWaves();

    waveTxn = await waveContract.connect(randomPerson).wave();
    await waveTxn.wait();

    waveTxn = await waveContract.connect(randomPerson).wave();
    await waveTxn.wait();

    waveTxn = await waveContract.connect(randomPerson).wave();
    await waveTxn.wait();

   // waveCount = await waveContract.getTotalWaves();

    getAddressesTrx = await waveContract.getAllWaivers();
    await getAddressesTrx.wait();
  };
  
  const runMain = async () => {
    try {
      await main();
      process.exit(0);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  };
  
  runMain();