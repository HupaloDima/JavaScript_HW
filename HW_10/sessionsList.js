document.addEventListener('DOMContentLoaded', function() {
    const sessionsList = document.getElementById('sessionsList');
    const sessions = JSON.parse(localStorage.getItem('sessionsList')) || [];

    if (sessions.length === 0) {
        sessionsList.innerHTML = '<p>Історія відвідувань порожня</p>';
    } else {
        const list = document.createElement('ul');

        sessions.forEach((session, index) => {
            const item = document.createElement('li');
            item.textContent = `${index + 1}. ${session}`;
            list.appendChild(item);
        });

        sessionsList.appendChild(list);
    }
});