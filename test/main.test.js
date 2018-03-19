document.body.innerHTML = '<div id="root"></div>';

test('main should not error', async () => {
    await import('../src/main.js');
    expect(document.getElementById('root').childElementCount).toBeGreaterThan(0);
});
