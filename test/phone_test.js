var chai = require('chai');
var cr = require('../index.js');
var assert = chai.assert;

describe('chinese characters', function () {
    it('Should only match Chinese characters', function () {
        assert.equal(cr.chineseChars().test('你好世界'), true);
        assert.equal(cr.chineseChars().test('hello world'), false);
        assert.equal(cr.chineseChars().test('你好world'), true);
        assert.equal(cr.chineseChars({
            exclusive: true
        }).test('你好world'), false);
    });
});

describe('email', function () {
    it('Should only match the email format', function () {
        assert.equal(cr.email().test('ASDASDzxczxceqweouo1234567890@163.com'), true);
        assert.equal(cr.email().test('CZXCZX1234567890czxbcjkwqau@qq.com'), true);
        assert.equal(cr.email().test('UYTU1234567890dsahjkdsa@sina.com'), true);
    });
});

describe('url', function () {
    it('Should only match the url format', function () {
        assert.equal(cr.url({
            exclusive:true
        }).test('http://cn.bing.com/search?q=mocha+chai&go=%E6%8F%90%E4%BA%A4&qs=n&form=QBLH&pq=mocha+chai&sc=3-10&sp=-1&sk=&cvid=1FA3C3CFF54641ABB3FC2D9EFC47A507'), true);
        assert.equal(cr.url({
            exclusive:true
        }).test('http://regxlib.com/Default.aspx'), true);
        assert.equal(cr.url({
            exclusive:true
        }).test('https://www.github.io'), true);
        assert.equal(cr.url({
            exclusive:true
        }).test('hunnble.github.io'), true);
        assert.equal(cr.url({
            exclusive:true
        }).test('v2ex.com/?tab=creative'), true);
    });
});