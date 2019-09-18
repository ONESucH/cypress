const form = document.getElementById('form');

form.addEventListener('submit', event => {
    event.preventDefault();
    const formData = {
        name: document.querySelector('[name="name"]').value,
        family: document.querySelector('[name="family"]').value,
        floor: document.querySelector('[name="floor"]').value
    };

    form.reset();
    console.log('-->>data', formData);
});

export default () => {}