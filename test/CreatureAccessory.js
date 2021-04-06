const CreatureAccessory = artifacts.require('CreatureAccessory');

contract("CreatureAccessory", (accounts) => {
  const URI_BASE = 'https://creatures-api.opensea.io';
  const CONTRACT_URI = `${URI_BASE}/contract/opensea-erc1155`;
  let creatureAccessory;
  let proxyRegistryAddress = "0xf57b2c51ded3a29e6891aba85459d600256cf317"; //this is Rinkeby
 

  before(async () => {
    creatureAccessory = await CreatureAccessory.new(proxyRegistryAddress);
  });

  // This is all we test for now

  // This also tests contractURI()

  describe('#constructor()', () => {
    it('should set the contractURI to the supplied value', async () => {
      assert.equal(await creatureAccessory.contractURI(), CONTRACT_URI);
    });
  });
});
