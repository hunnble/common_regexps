var chai = require('chai');
var cr = require('../index.js');
var assert = chai.assert;

describe('chinese character', function () {
    it('Should return an instance of RegExp', function () {
        assert.isOk(cr.chineseChar() instanceof RegExp);
    });
    it('Should only match a Chinese character', function () {
        assert.isOk(cr.chineseChar().test('冄'));
        assert.isNotOk(cr.chineseChar().test('，。？！,.?!1234567890'));
        assert.isNotOk(cr.chineseChar().test('qwertyuiopasdfghjklzxcvbnm'));
        assert.isOk(cr.chineseChar().test('你好world'));
        assert.isNotOk(cr.chineseChar({
            exclusive: true
        }).test('你好world'));
    });
});

describe('chinese characters', function () {
    it('Should return an instance of RegExp', function () {
        assert.isOk(cr.chineseChars() instanceof RegExp);
    });
    it('Should only match Chinese characters', function () {
        assert.isOk(cr.chineseChars().test('你好世界'));
        assert.isNotOk(cr.chineseChar().test('，。？！,.?!1234567890'));
        assert.isNotOk(cr.chineseChars().test('hello world'));
        assert.isOk(cr.chineseChars().test('你好world'));
        assert.isNotOk(cr.chineseChars({
            exclusive: true
        }).test('你好world'));
    });
});

describe('email', function () {
    it('Should return an instance of RegExp', function () {
        assert.isOk(cr.email() instanceof RegExp);
    });
    it('Should only match the email format', function () {
        assert.isOk(cr.email().test('ASDASDzxczxceqweouo1234567890@163.com'));
        assert.isOk(cr.email().test('CZXCZX1234567890czxbcjkwqau@qq.com'));
        assert.isOk(cr.email().test('UYTU1234567890dsahjkdsa@sina.com'));
    });
});

describe('url', function () {
    it('Should return an instance of RegExp', function () {
        assert.isOk(cr.url() instanceof RegExp);
    });
    it('Should only match the url format', function () {
        assert.isOk(cr.url({
            exclusive: true
        }).test('http://cn.bing.com/search?q=mocha+chai&go=%E6%8F%90%E4%BA%A4&qs=n&form=QBLH&pq=mocha+chai&sc=3-10&sp=-1&sk=&cvid=1FA3C3CFF54641ABB3FC2D9EFC47A507'));
        assert.isOk(cr.url({
            exclusive: true
        }).test('http://regxlib.com/Default.aspx'));
        assert.isOk(cr.url({
            exclusive: true
        }).test('https://www.github.io'));
        assert.isOk(cr.url({
            exclusive: true
        }).test('hunnble.github.io'));
        assert.isOk(cr.url({
            exclusive: true
        }).test('v2ex.com/?tab=creative'));
    });
});

describe('phone number', function () {
    it('Should return an instance of RegExp', function () {
        assert.isOk(cr.phone() instanceof RegExp);
    });
    it('Should only match phone number', function () {
        assert.isOk(cr.phone().test('18688668866'));
        assert.isNotOk(cr.phone().test('14144441144'));
        assert.isNotOk(cr.phone({
            exclusive: true
        }).test(131111111111));
    });
});

describe('qq', function () {
    it('Should return an instance of RegExp', function () {
        assert.isOk(cr.qq() instanceof RegExp);
    });
    it('Should only match qq number(length of the number range from 5 to 10)', function () {
        assert.isOk(cr.qq({
            exclusive: true
        }).test(1111111111));
    });
    it('Cannot start with a 0', function () {
        assert.isNotOk(cr.qq({
            exclusive: true
        }).test('01111111'));
    });
});

describe('identity card number', function () {
    it('Should return an instance of RegExp', function () {
        assert.isOk(cr.idCard() instanceof RegExp);
    });
    it('Should only match idCard number', function () {
        assert.isNotOk(cr.idCard({
            exclusive: true
        }).test(1111112005010112345));
        assert.isOk(cr.idCard({
            exclusive: true
        }).test(22222220050101123 + 'X'));
    });
    it('Should filter the wrong date', function () {
        assert.isOk(cr.idCard({
            exclusive: true
        }).test(123456196012314567));
        assert.isNotOk(cr.idCard({
            exclusive: true
        }).test(234567189901018909));
        assert.isNotOk(cr.idCard({
            exclusive: true
        }).test(234567210001018976));
        assert.isNotOk(cr.idCard({
            exclusive: true
        }).test(234567201000012333));
        assert.isNotOk(cr.idCard({
            exclusive: true
        }).test(345678199013201212));
        assert.isNotOk(cr.idCard({
            exclusive: true
        }).test(909090199501000101));
        assert.isOk(cr.idCard({
            exclusive: true
        }).test(234567200002291890));
        assert.isNotOk(cr.idCard({
            exclusive: true
        }).test(34567820010229565 + 'X'));
    });
});