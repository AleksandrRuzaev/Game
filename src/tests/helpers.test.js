import { getAdjacentNodes, getAdjacentNodeByDirection, generateNodes, findPath } from './utils/helpers';
import { Map } from '../models/map';
import { Tree } from '../models/map-objects/obstacles/tree';
import { Stone } from '../models/map-objects/obstacles/stone';
import { Player } from '../models/map-objects/movable-objects/player';

const nodes = [
    { x: 0, y: 0, isEmpty: true },
    { x: 0, y: 1, isEmpty: true },
    { x: 0, y: 2, isEmpty: false },
    { x: 1, y: 0, isEmpty: false },
    { x: 1, y: 1, isEmpty: true },
    { x: 1, y: 2, isEmpty: true },
    { x: 2, y: 0, isEmpty: true },
    { x: 2, y: 1, isEmpty: false },
    { x: 2, y: 2, isEmpty: true },
];

const tree = new Tree(0, 1);
const stone = new Stone(2, 0);
const map = new Map(new Player(), [], [], [tree, stone], { width: 3, height: 3 });

describe('helpers', () => {
    describe('getAdjacentNodeByDirection', () => {
        test('get valid nodes', () => {
            expect(getAdjacentNodeByDirection('top', nodes, nodes[0])).toEqual(nodes[1]);
            expect(getAdjacentNodeByDirection('right', nodes, nodes[0])).toEqual(nodes[3]);
            expect(getAdjacentNodeByDirection('bottom', nodes, nodes[4])).toEqual(nodes[3]);
            expect(getAdjacentNodeByDirection('left', nodes, nodes[4])).toEqual(nodes[1]);
        });

        test('get invalid nodes', () => {
            expect(getAdjacentNodeByDirection('top', nodes, nodes[8])).toBeUndefined();
            expect(getAdjacentNodeByDirection('right', nodes, nodes[8])).toBeUndefined();
            expect(getAdjacentNodeByDirection('bottom', nodes, nodes[0])).toBeUndefined();
            expect(getAdjacentNodeByDirection('left', nodes, nodes[0])).toBeUndefined();
        });
    });

    describe('getAdjacentNodes', () => {
        test('get nodes without explored', () => {
            expect(getAdjacentNodes(nodes[4], nodes, [])).toHaveLength(2);
        });

        test('get nodes with explored', () => {
            expect(getAdjacentNodes(nodes[4], nodes, [nodes[5]])).toHaveLength(1);
        });

        test('get nodes without explored in the corner', () => {
            expect(getAdjacentNodes(nodes[0], nodes, [nodes[2]])).toHaveLength(1);
        });

        test('get nodes with explored in the corner', () => {
            expect(getAdjacentNodes(nodes[8], nodes, [nodes[5]])).toHaveLength(0);
        });
    });

    describe('generateNodes', () => {
        test('get with obstacles', () => {
            expect(generateNodes(map)).toHaveLength(9);
            expect(generateNodes(map).filter((n) => n.isEmpty)).toHaveLength(7);
        });
    });

    describe('findPath', () => {
        test('get with obstacles', () => {
            expect(findPath(nodes[0], nodes[7], nodes)).toBeFalsy();
            expect(findPath(nodes[0], nodes[6], nodes)).toBeFalsy();
            expect(findPath(nodes[0], nodes[8], nodes)).toBeTruthy();
        });
    });
});
