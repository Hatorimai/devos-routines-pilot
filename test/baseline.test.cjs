const test = require('node:test');
const assert = require('node:assert/strict');
const { clamp } = require('../app.cjs');
test('lower', () => assert.equal(clamp(-1, 0, 10), 0));
test('inside', () => assert.equal(clamp(4, 0, 10), 4));
test('edge', () => assert.equal(clamp(10, 0, 10), 10));
test('upper', () => assert.equal(clamp(11, 0, 10), 10));
