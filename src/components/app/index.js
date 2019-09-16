import './styles.less';

const form = document.getElementById('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = {
        name: document.querySelector('[name="name"]').value,
        family: document.querySelector('[name="family"]').value,
        male: document.querySelector('[name="male"]').value,
        female: document.querySelector('[name="female"]').value
    };

    form.reset();
    console.log('-->>data', formData);
});

export default () => {}