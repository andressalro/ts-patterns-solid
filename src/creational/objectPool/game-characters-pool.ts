import { GameCharacter } from "../factory/game-characters";
import { GameCharactersFactory } from "../factory/game-characters-factory";

export class GameCharactersPool {
    private _warriorsPool: GameCharacter[] = [];
    private _magesPool: GameCharacter[] = [];

    static WARRIOS_POOL_SIZE = 30;
    static MAGES_POOL_SIZE=20;

    constructor(private _level: number) {
        this.loadWarriorsPool();
        this.loadMagesPool();
    }

    private loadMagesPool(): any {
        for(let i=0; i<GameCharactersPool.MAGES_POOL_SIZE; i++) {
            this._magesPool.push(GameCharactersFactory.getMage(this._level));
        }
    }

    private loadWarriorsPool(): any {
        for(let i=0; i<GameCharactersPool.WARRIOS_POOL_SIZE; i++) {
            this._warriorsPool.push(GameCharactersFactory.getWarrior(this._level));
        }
    }

    private getPoolItem<T>(pool: T[], reloadFn: () => void): T {
        let item: T = pool.pop() as T;
        if(!pool.length){
            reloadFn();
        }
        return item;
    }

    public getWarrior(): GameCharacter {
        return this.getPoolItem(this._warriorsPool, this.loadWarriorsPool());
    }

    public getMages(): GameCharacter {
        return this.getPoolItem(this._magesPool, this.loadMagesPool());
    }
}