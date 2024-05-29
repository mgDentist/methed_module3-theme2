const inputCreater = () => {
    const input = document.createElement('input');
    document.body.appendChild(input);

    const p = document.createElement('p');
    document.body.appendChild(p);

    input.addEventListener('change', () => {
        setTimeout(() => {
            p.textContent = input.value;
            input.value = '';
        }, 300);
    });
}

inputCreater();


