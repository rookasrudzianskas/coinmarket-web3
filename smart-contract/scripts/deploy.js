const main = async () => {
        // this will get contract by it is name
        const dogeFactory = await hre.ethers.getContractFactory('DogeCoin')
        // this will deploy contract
        const dogeContract = await dogeFactory.deploy()
        // this will wait until contract is deployed
        await dogeContract.deployed()
        // this will print contract address
        console.log('Dogecoin deployed to:', dogeContract.address)

        const linkFactory = await hre.ethers.getContractFactory('Link')
        const linkContract = await linkFactory.deploy()
        await linkContract.deployed()
        console.log('LinkToken deployed to:', linkContract.address)

        const daiFactory = await hre.ethers.getContractFactory('Dai')
        const daiContract = await daiFactory.deploy()
        await daiContract.deployed()
        console.log('DaiToken deployed to:', daiContract.address)

        const usdcFactory = await hre.ethers.getContractFactory('Usdc')
        const usdcContract = await usdcFactory.deploy()
        await usdcContract.deployed()
        console.log('UsdcToken deployed to:', usdcContract.address)
    }

;(async () => {
    try {
        await main()
        process.exit(0)
    } catch (error) {
        console.error(error)
        process.exit(1)
    }
})()
