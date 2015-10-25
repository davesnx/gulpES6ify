import * as lib from '../lib'
import { should, expect } from 'chai'

describe('lib.js', () => {

	describe('square', () => {
		it('should create a empty square', () => {
	    expect(lib.square().to.equal(25));
	  });

		it('should create a square', () => {
			expect(lib.square(10).to.equal(100));
		});
	});

	describe('diag', () => {
		it('should calculate the diag', () => {
	    expect(lib.diag(3, 4).to.equal(5));
	  });
	});

});
