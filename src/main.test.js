document.body.innerHTML = '<div id="root"></div>';

test('main should render elements', async () => {
    await import('./main.js');
    expect(document.getElementById('root').childElementCount).toBeGreaterThan(0);
});
