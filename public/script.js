
const persons = [
    { firstName: 'Иван', lastName: 'Кирилов', yearOfBirth: 1980, profession: 'Московский государственный университет им. М.В. Ломоносова (Москва)', photoUrl: 'ivan.jpg' },
    { firstName: 'Петр', lastName: 'Васильев', yearOfBirth: 1975, profession: 'ФИЦ "Институт биологии южных морей им. А.О. Ковалевского РАН" (Севастополь)', photoUrl: 'petr.jpg' },
    { firstName: 'Александр', lastName: 'Поэтов', yearOfBirth: 1900, profession: 'Санкт-Петербургский государственный университет телекоммуникаций им. проф. М.А. Бонч-Бруевича (Санкт-Петербург)', photoUrl: 'alexander1.png', publications: 0, citations: 0 },
    { firstName: 'Максим', lastName: 'Сысоев', yearOfBirth: 1916, profession: 'Белорусская государственная сельскохозяйственная академия (Горки)', photoUrl: 'alexander2.png', publications: 45, citations: 3 },
    { firstName: 'Александр', lastName: 'Сысоев', yearOfBirth: 1931, profession: 'ФИЦ "Институт биологии южных морей им. А.О. Ковалевского РАН" (Севастополь)', photoUrl: 'alexander3.png', publications: 97, citations: 4 },
    { firstName: 'Максим', lastName: 'Кирилов', yearOfBirth: 1916, profession: 'Национальный исследовательский ядерный университет МИФИ (Москва)', photoUrl: 'alexander4.png', publications: 369, citations: 9 },
    { firstName: 'Павел', lastName: 'Онежкин', yearOfBirth: 1954, profession: 'Курский государственный аграрный университет им. И.И. Иванова (Курск)', photoUrl: 'alexander5.png', publications: 4, citations: 1 },
    { firstName: 'Арсений', lastName: 'Сысоев', yearOfBirth: 2000, profession: 'Московский государственный технический университет гражданской авиации (Москва)', photoUrl: 'alexander6.png', publications: 0, citations: 0 },
    { firstName: 'Александра', lastName: 'Сысоева', yearOfBirth: 2005, profession: 'Сибирский государственный университет путей сообщения (Новосибирск)', photoUrl: 'alexander7.png', publications: 1, citations: 1 },
    { firstName: 'Кристина', lastName: 'Сысоева', yearOfBirth: 2003, profession: 'Вологодский институт права и экономики ФСИН России (Вологда)', photoUrl: 'alex.png', publications: 1, citations: 1 },
    { firstName: 'Александр', lastName: 'Рожков', yearOfBirth: 1947, profession: 'Московский государственный университет им. М.В. Ломоносова (Москва)', photoUrl: 'alexander9.png', publications: 1310, citations: 11 },
    { firstName: 'Алина', lastName: 'Ушко', yearOfBirth: 1973, profession: 'Национальный исследовательский Нижегородский государственный университет им. Н.И. Лобачевского (Нижний Новгород)', photoUrl: 'alexander10.png', publications: 273, citations: 7 },
    { firstName: 'Максим', lastName: 'Ушко', yearOfBirth: 2002, profession: 'Воронежская государственная академия спорта (Воронеж)', photoUrl: 'alexander11.png', publications: 293, citations: 7 },
    { firstName: 'Александр', lastName: 'Сысоев', yearOfBirth: 1924, profession: 'Алтайский государственный университет (Барнаул)', photoUrl: 'alexander12.png', publications: 18, citations: 2 },
    { firstName: 'Василиса', lastName: 'Горшкова', yearOfBirth: 1984, profession: 'Донской государственный технический университет (Ростов-на-Дону)', photoUrl: 'alexander13.png', publications: 148, citations: 5 },
    { firstName: 'Фиона', lastName: 'Изшрековна', yearOfBirth: 1969, profession: 'Российский экономический университет им. Г.В. Плеханова (Москва)', photoUrl: 'alexander14.png', publications: 248, citations: 7 },
];

function renderPersons(persons) {
    const personListElement = document.getElementById('personList');
    personListElement.innerHTML = '';

    persons.forEach(person => {
        const personCard = document.createElement('div');
        personCard.classList.add('col-md-4', 'mb-4');

        const cardHtml = `
            <div class="card">
                ${person.photoUrl && `<img src="${person.photoUrl}" class="card-img-top" alt="${person.firstName} ${person.lastName}">`}
                <div class="card-body">
                    <h5 class="card-title">${person.firstName} ${person.lastName}</h5>
                    <p class="card-text">Год рождения: ${person.yearOfBirth}</p>
                    <p class="card-text">Вуз: ${person.profession}</p>
                </div>
            </div>
        `;

        personCard.innerHTML = cardHtml;
        personListElement.appendChild(personCard);
    });//отображает информацию о людях на веб-странице.
}

function applyFilters() {
    const sortSelect = document.getElementById('sortSelect');
    const filterInput = document.getElementById('filterInput');

    let filteredPersons = [...persons];//массива persons в filteredPersons.

    const sortBy = sortSelect.value;
    if (sortBy === 'lastName') {
        filteredPersons.sort((a, b) => a.lastName.localeCompare(b.lastName));
    } else if (sortBy === 'yearOfBirth') {
        filteredPersons.sort((a, b) => a.yearOfBirth - b.yearOfBirth);
    } else if (sortBy === 'profession') {
        filteredPersons.sort((a, b) => a.profession.localeCompare(b.profession));
    }

    const filterText = filterInput.value.toLowerCase();
    filteredPersons = filteredPersons.filter(person =>
        person.firstName.toLowerCase().includes(filterText) ||
        person.lastName.toLowerCase().includes(filterText) ||
        person.profession.toLowerCase().includes(filterText)
    );

    renderPersons(filteredPersons);
}





window.onload = function() {
    renderPersons(persons);
};
