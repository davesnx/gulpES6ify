import { square, diag } from '../lib'

describe('lib.js', () => {

	describe('lib.square', () => {
		it('should create a empty square', () => {
	    square().should.equal(25);
	  });

		it('should create a square', () => {
			square(10).should.equal(100);
		});
	});

	describe('lib.diag', () => {
		it('should calculate the diag', () => {
	    diag(3, 4).should.equal(5);
	  });
	});

});
