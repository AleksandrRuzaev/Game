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

export function findPath(startNode, endNode, nodes) {
    const reachable = [startNode];
    const explored = [];

    while (reachable.length > 0) {
        const node = reachable.pop();

        if (node.x === endNode.x && node.y === endNode.y) {
            return true;
        }

        explored.push(node);

        const newReachable = getAdjacentNodes(node, nodes, explored);

        for (const adjacent of newReachable) {
            if (!reachable.find((node) => node.x === adjacent.x && node.y === adjacent.y)) {
                reachable.push(adjacent);
            }
        }
    }

    return false;
}

export function generateNodes(map) {
    const nodes = [];
    const obstacles = map.getObstacles();

    for (let i = 0; i < map._dimensions.width; i++) {
        for (let j = 0; j < map._dimensions.height; j++) {
            nodes.push({ x: i, y: j, isEmpty: true });
        }
    }

    for (const node of nodes) {
        if (obstacles.find((o) => o.position.x === node.x && o.position.y === node.y)) {
            node.isEmpty = false;
        }
    }

    return nodes;
}

function getAdjacentNodes(node, nodes, explored) {
    const withoutExplored = nodes.filter((n) => !explored.find((e) => e.x === n.x && e.y === n.y));
    const withoutObstacles = withoutExplored.filter((we) => we.isEmpty);

    const top = getAdjacentNodeByDirection('top', withoutObstacles, node);
    const right = getAdjacentNodeByDirection('right', withoutObstacles, node);
    const bottom = getAdjacentNodeByDirection('bottom', withoutObstacles, node);
    const left = getAdjacentNodeByDirection('left', withoutObstacles, node);

    return [top, right, bottom, left].filter(Boolean);
}

function getAdjacentNodeByDirection(direction, nodes, node) {
    switch (direction) {
        case 'top':
            return nodes.find((n) => n.x === node.x && n.y === node.y + 1);
        case 'right':
            return nodes.find((n) => n.x === node.x + 1 && n.y === node.y);
        case 'bottom':
            return nodes.find((n) => n.x === node.x && n.y === node.y - 1);
        case 'left':
            return nodes.find((n) => n.x === node.x - 1 && n.y === node.y);
        default:
            break;
    }
}
