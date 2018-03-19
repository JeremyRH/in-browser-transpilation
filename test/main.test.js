document.body.innerHTML = '<div id="root"></div>';
require('../src/main.js');

test('main should not error', () => {
    expect(document.getElementById('root').childElementCount).toBeGreaterThan(0);
});
