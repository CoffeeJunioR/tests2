export default function sortHealth(heroes) {
    const comparer = (a, b) => {
        return b.health - a.health
    }
    heroes.sort(comparer);
    return heroes;
}