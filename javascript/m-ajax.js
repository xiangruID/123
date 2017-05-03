
function ajaxRequest(type, url, data, callback, loading, cache) {
    var ajaxConfig = {
        url: '',
        data: {},
        callback: null,
        loading: true,
        cache: true,
        async: true
    };
    // 判断每一个参数url的类型
    // 如果是对象则是请求参数对象
    // 如果是字符串则是请求URL，参数和回调要继续检测后面的参数
    if (typeof url === 'string') {
        ajaxConfig.url = url;
        ajaxConfig.data = data;
        ajaxConfig.callback = callback;
        ajaxConfig.loading = typeof(loading) === 'undefined' ? true : loading;
        ajaxConfig.cache = cache;
    } else {
        ajaxConfig = $.extend({}, ajaxConfig, url);
    }
    $.ajax({
        type: type,
        url: ajaxConfig.url,
        data: ajaxConfig.data,
        beforeSend: function() {
            if (ajaxConfig.loading) { $.showLoading(); }
        },
        dataType: 'json',
        cache: ajaxConfig.cache,
        async: ajaxConfig.async,
        success: function(re) {
            if (ajaxConfig.loading) { $.hideLoading() };
            if (re.result == 1) {
                if (re.msg != '') {
                    $.toast(re.msg, function() {
                        if (re.redirect) {
                            window.location.href = re.redirect;
                        } else {
                            ajaxConfig.callback(re.data);
                        }
                    });
                } else {
                    ajaxConfig.callback(re.data);
                }
            } else {
                $.toast(re.msg, 'forbidden');
            }
        },
        error: function(re) {
            ajaxConfig.loading && $.hideLoading();
            $.toast("Error", "forbidden");
            console.error(re.responseText);
        }
    })
}



function ajaxGet(url, data, callback, loading) {
    ajaxRequest('get', url, data, callback, loading, true);
}
function ajaxPost(url, data, callback, loading) {
    ajaxRequest('post', url, data, callback, loading, false);
}

