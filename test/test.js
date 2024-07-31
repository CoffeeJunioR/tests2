import sortHealth from "../src";
const heroes = [
    {name: 'мечник', health: 10},
    {name: 'маг', health: 100},
    {name: 'лучник', health: 80}
]

test('проверка сортировки здоровья: от большего к меньшему', () => {
    const expectedSort = [
        {name: 'маг', health: 100},
        {name: 'лучник', health: 80},
        {name: 'мечник', health: 10}
    ]
    expect(sortHealth(heroes)).toEqual(expectedSort)
})
