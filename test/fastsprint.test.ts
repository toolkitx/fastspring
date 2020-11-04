import {account} from './config';
import {FastSpring, FastSpringPageResponse} from '../src/index';

var assert = require('assert');
const fastSprint = new FastSpring(account.username, account.password);
const testAccountId = 'A9Vc3DdKQzyyJQtNZz3hWg';
const testProductId = 'short-cycle-test';

describe('FastSprint accounts', () => {
    it('should get list', async () => {
        const accounts: FastSpringPageResponse = await fastSprint
            .accounts()
            .get();
        assert(accounts);
    });
    it('should query by email', async () => {
        const accounts: FastSpringPageResponse = await fastSprint
            .accounts()
            .query({email: 'hwangzhiming@gmail.com'})
            .get();
        assert(accounts);
    });
    it('should get by id', async () => {
        const account = await fastSprint.accounts(testAccountId).get();
        assert.equal(testAccountId, account.id);
    });
});

describe('FastSprint product', () => {
    it('should get list', async () => {
        const paging: FastSpringPageResponse = await fastSprint
            .products()
            .get();
        assert(paging);
    });
    it('should get by id', async () => {
        const resource = await fastSprint.products(testProductId).get();
        assert(resource.products.length > 0);
        assert.equal(testProductId, resource.products[0].product);
    });
});

describe('FastSprint orders', () => {
    it('should get list', async () => {
        const paging: FastSpringPageResponse = await fastSprint.orders().get();
        assert(paging);
    });
    it('should get by id', async () => {
        const id = '9kbBdWFDRmC-CqUBQhy9Vw';
        const resource = await fastSprint.orders(id).get();
        assert.equal(id, resource.id);
    });
});

describe('FastSprint subscriptions', () => {
    it('should get list', async () => {
        const paging: FastSpringPageResponse = await fastSprint
            .subscriptions()
            .get();
        assert(paging);
    });
    it('should get by id', async () => {
        const id = 'DP5BFo_dRziKNh0xm-oA5g';
        const resource = await fastSprint.subscriptions(id).get();
        assert.equal(id, resource.id);
    });
});

describe('FastSprint sessions', () => {
    let sessionId: string;
    it('should create session', async () => {
        const created = await fastSprint.sessions().post({
            account: testAccountId,
            items: [
                {
                    product: testProductId,
                    quantity: 1,
                },
            ],
        });
        sessionId = created.id;
        console.log('sessionid: ' + sessionId);
        assert(created);
    });
    it('should get by id', async () => {
        const id = sessionId;
        const resource = await fastSprint.sessions(id).get();
        assert.equal(id, resource.id);
    });
});
