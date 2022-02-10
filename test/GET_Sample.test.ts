import { expect } from 'chai';
import { getRequest } from '../util/api-methods';
import { solar_fintech, end } from '../testdata/api-endpoint';
// import { getEmails } from '../util/EmailUtility';

describe('Smaple Test API', function () {
    before(async function () {
        // Arrange
    });

    describe('GET - /resreq', function () {
        it('should be successful (200) [smoke]', async function () {
            // Arrange
            const headers = { authorization: `Bearer 1234` };

            // Act
            const response = await getRequest(solar_fintech, end, headers);

            // Assert
            expect(response.status).to.equal(200);
            expect(response.body).not.to.be.empty;
        });
    });

});
