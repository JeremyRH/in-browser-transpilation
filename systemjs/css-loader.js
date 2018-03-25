const injected = {};

exports.fetch = function({ address }) {
    if (address in injected) {
        return Promise.resolve('');
    }
    injected[address] = true;
    return new Promise((resolve, reject) => {
        var link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = address;
        link.onload = resolve;
        link.onerror = reject;
        document.head.appendChild(link);
    }).then(() => '');
};
