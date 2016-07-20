var cr = {

    chineseChar: function () {
        var options = arguments[0] || {};
        var attr = options.attr;
        var exclusive = options.exclusive;
        return exclusive ? 
            new RegExp('^[\u4E00-\u9FA5]$', attr):
            new RegExp('[\u4E00-\u9FA5]');
    },

    chineseChars: function () {
        var options = arguments[0] || {};
        var attr = options.attr;
        var exclusive = options.exclusive;
        return exclusive ? 
            new RegExp('^[\u4E00-\u9FA5]+$', attr):
            new RegExp('[\u4E00-\u9FA5]+');
    },

    email: function () {
        var options = arguments[0] || {};
        var attr = options.attr;
        var exclusive = options.exclusive;
        return exclusive ? 
            new RegExp('^([_\\-\\.0-9a-zA-Z])+\\@([_\\-0-9a-zA-Z])+\\.([0-9a-zA-Z]){2,4}$', attr):
            new RegExp('([_\\-\\.0-9a-zA-Z])+\\@([_\\-0-9a-zA-Z])+\\.([0-9a-zA-Z]){2,4}', attr);
    },

    url: function () {
        var options = arguments[0] || {};
        var attr = options.attr;
        var exclusive = options.exclusive;
        return exclusive ? 
            new RegExp('^((http|ftp|https):\\/\\/)?[\\w\\-_]+(\\.[\\w\\-_]+)+([\\w\-\\.,@?^=%&amp;:/~\\+#]*[\\w\\-\\@?^=%&amp;/~\\+#])?$', attr):
            new RegExp('((http|ftp|https):\\/\\/)?[\\w\\-_]+(\\.[\\w\\-_]+)+([\\w\-\\.,@?^=%&amp;:/~\\+#]*[\\w\\-\\@?^=%&amp;/~\\+#])?', attr);
    },

    phone: function () {
        var options = arguments[0] || {};
        var attr = options.attr;
        var exclusive = options.exclusive;
        return exclusive ? 
            new RegExp('^(13[0-9]|14[57]|15[012356789]|17[678]|18[0-9])\\d{8}$', attr):
            new RegExp('(13[0-9]|14[57]|15[012356789]|17[678]|18[0-9])\\d{8}');
    },

    qq: function () {
        var options = arguments[0] || {};
        var attr = options.attr;
        var exclusive = options.exclusive;
        return exclusive ? 
            new RegExp('^[1-9]\\d{4,9}$', attr):
            new RegExp('[1-9]\\d{4,9}');
    },

    idCard: function () {
        var options = arguments[0] || {};
        var attr = options.attr;
        var exclusive = options.exclusive;
        var str = '(\\d{6})'
            + '((?:(19[0-9]{2}|200[0-9]|201[0-6])(?:(?:(?:0[1-9]|1[0-2])(?:0[1-9]|1[0-9]|2[0-8]))|(?:(?:0[13-9]|1[0-2])(?:29|30))|(?:0[13578]|1[02])31))|(?:(?:(19|20)(?:0[48]|[2468][048]|[13579][26]))|2000)0229)'
            + '([0-9]{3}[0-9X])';

        return exclusive ? 
            new RegExp('^' + str + '$', attr):
            new RegExp(str);
    },

};

module.exports = cr;
