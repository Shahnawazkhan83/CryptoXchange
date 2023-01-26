require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/CnFzWkNCD-uvYbyknIosrOUc1USOCOMW',
      accounts: ['52e846627400b100382fd2843f09489f22611883c1038946191c7f9be00bcbf6'],
    },
  },
};