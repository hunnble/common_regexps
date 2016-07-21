var CR = function () {};

CR.prototype = {

    chineseChar: function () {
        var options = arguments[0] || {};
        var str = '(?:[\u4E00-\u9FA5])';

        str += options.multiple ? '+' : '{' + (options.minLen > 0 ? options.minLen + ',' + (options.maxLen > options.minLen ? options.maxLen : '') : '1') + '}';
        
        if (options.exclusive) {
            str  = '^' + str + '$';
        }

        return RegExp(str, options.attr);
    },

    englishChar: function () {
        var options = arguments[0] || {};

        options.uppercase = (options.uppercase === undefined ? true : options.uppercase);
        options.lowercase = (options.lowercase === undefined ? true : options.lowercase);

        var str = '(?:[' + (options.uppercase ? 'A-Z' : '') + (options.lowercase ? 'a-z' : '') + '])'

        str += options.multiple ? '+' : '{' + (options.minLen > 0 ? options.minLen + ',' + (options.maxLen > options.minLen ? options.maxLen : '') : '1') + '}';
        
        if (options.exclusive) {
            str  = '^' + str + '$';
        }

        return RegExp(str, options.attr);
    },

    number: function () {
        var options = arguments[0] || {};
        var str = '(?:\\d)';

        str += options.multiple ? '+' : '{' + (options.minLen > 0 ? options.minLen + ',' + (options.maxLen > options.minLen ? options.maxLen : '') : '1') + '}';
        
        if (options.exclusive) {
            str  = '^' + str + '$';
        }

        return RegExp(str, options.attr);
    },

    email: function () {
        var options = arguments[0] || {};
        var str = '(?:([_\\-\\.0-9a-zA-Z])+\\@([_\\-0-9a-zA-Z])+\\.([0-9a-zA-Z]){2,4})';

        str += options.multiple ? '+' : '{' + (options.minLen > 0 ? options.minLen + ',' + (options.maxLen > options.minLen ? options.maxLen : '') : '1') + '}';
        
        if (options.exclusive) {
            str  = '^' + str + '$';
        }

        return RegExp(str, options.attr);
    },

    url: function () {
        var options = arguments[0] || {};
        var str = '(?:((http|ftp|https):\\/\\/)?[\\w\\-_]+(\\.[\\w\\-_]+)+([\\w\-\\.,@?^=%&amp;:/~\\+#]*[\\w\\-\\@?^=%&amp;/~\\+#])?)';

        str += options.multiple ? '+' : '{' + (options.minLen > 0 ? options.minLen + ',' + (options.maxLen > options.minLen ? options.maxLen : '') : '1') + '}';

        if (options.exclusive) {
            str  = '^' + str + '$';
        }

        return RegExp(str, options.attr);
    },

    phone: function () {
        var options = arguments[0] || {};
        var str = '(?:(13[0-9]|14[57]|15[012356789]|17[678]|18[0-9])\\d{8})';
        
        str += options.multiple ? '+' : '{' + (options.minLen > 0 ? options.minLen + ',' + (options.maxLen > options.minLen ? options.maxLen : '') : '1') + '}';
        
        if (options.exclusive) {
            str  = '^' + str + '$';
        }

        return RegExp(str, options.attr);
    },

    qq: function () {
        var options = arguments[0] || {};
        var str = '(?:[1-9]\\d{4,9})';
        
        str += options.multiple ? '+' : '{' + (options.minLen > 0 ? options.minLen + ',' + (options.maxLen > options.minLen ? options.maxLen : '') : '1') + '}';
        
        if (options.exclusive) {
            str  = '^' + str + '$';
        }

        return RegExp(str, options.attr);
    },

    idCard: function () {
        var options = arguments[0] || {};
        var str = '(?:'
                + '(\\d{6})'
                + '((?:(19[0-9]{2}|200[0-9]|201[0-6])(?:(?:(?:0[1-9]|1[0-2])(?:0[1-9]|1[0-9]|2[0-8]))|(?:(?:0[13-9]|1[0-2])(?:29|30))|(?:0[13578]|1[02])31))|(?:(?:(19|20)(?:0[48]|[2468][048]|[13579][26]))|2000)0229)'
                + '([0-9]{3}[0-9X])'
                + ')'
                ;

        str += options.multiple ? '+' : '{' + (options.minLen > 0 ? options.minLen + ',' + (options.maxLen > options.minLen ? options.maxLen : '') : '1') + '}';
        
        if (options.exclusive) {
            str  = '^' + str + '$';
        }

        return RegExp(str, options.attr);
    },

    // util
    
    includes: function (basicStr, search, position) {
        position = position >= 0 ? position : 0;

        if (typeof search == 'string') {
            if (position + search.length > this.length) {
                return false;
            } else {
                return basicStr.indexOf(search, position) !== -1;
            }
        } else {
            return search.test(basicStr.substring(position));
        }
    },

    startsWith: function (basicStr, search, position) {
        position = position || 0;

        if (typeof search == 'string') {
            return basicStr.substr(position, search.length) === search;
        } else {
            var flags = '';
            var src = '^' + search.source;

            if (search.ignoreCase) { flags += 'i'; }
            if (search.global) { flags += 'g'; }
            if (search.multiline) { flags += 'm'; }
            search = new RegExp(src, flags);

            return search.test(basicStr.substr(position));
        }

    },

    endsWith: function (basicStr, search, position) {
        if (typeof position !== 'number' || !isFinite(position) || Math.floor(position) !== position || position > basicStr.length) {
            position = basicStr.length;
        }

        if (typeof search == 'string') {
            var lastIndex = basicStr.indexOf(search, position - search.length);

            return lastIndex !== -1 && lastIndex === position - search.length;
        } else {
            var flags = '';
            var src = search.source + '$';

            if (search.ignoreCase) { flags += 'i'; }
            if (search.global) { flags += 'g'; }
            if (search.multiline) { flags += 'm'; }
            search = new RegExp(src, flags);

            return search.test(basicStr.substr(0, position));
        }

    }

};

module.exports = CR;
