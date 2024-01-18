import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { stringComparator } from './index.js';

describe('Test util functions', () => {
    it('should return compare string lexographically', () => {
        const a = "hello world";
        const b = "world hello";
        const c = "hello world";
        assert.strictEqual(stringComparator(a, b), -1);
        assert.strictEqual(stringComparator(b, a), 1);
        assert.strictEqual(stringComparator(a, c), 0);
    })
})