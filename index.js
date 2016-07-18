var cr = {
    chineseChars: function () {
        var options = arguments[0] || {};
        var attr = options.attr;
        var exclusive = options.exclusive;
        return exclusive ? 
            new RegExp('^[\u4E00-\u9FA5]+$', attr):
            new RegExp('[\u4E00-\u9FA5]+')
            ;
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
    }
};

module.exports = cr;
