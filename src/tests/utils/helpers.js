export function areAllObjectOnTheirOwnCells(map) {
    let result = true;
    const objects = map._mapObjects;

    for (let i = 0; i < objects.length - 1; i++) {
        const isAny = objects.slice(i + 1).some((obj) => obj.position.x === objects[i].position.x && obj.position.y === objects[i].position.y);

        if (isAny) {
            result = false;
            break;
        }
    }

    return result;
}
