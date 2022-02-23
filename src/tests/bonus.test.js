import { Cherry } from '../models/map-objects/bonuses/cherry';
import { Apple } from '../models/map-objects/bonuses/apple';
import { Bonus } from '../models/map-objects/bonuses/bonus';

describe('Bonus functionality', () => {
    test('bonus interaction', () => {
        const bonus = new Bonus(5, 5, 3);

        // pass object when bonus will have skill
        bonus.interact({});

        expect(bonus.wasRemoved).toBeTruthy();
        expect(bonus).not.toBeNull();
    });

    test('create cherry without new key', () => {
        const cherry = Cherry(5, 5, 3);

        expect(cherry).not.toBeNull();
    });

    test('create apple without new key', () => {
        const apple = Apple(5, 5, 3);

        expect(apple).not.toBeNull();
    });
});
