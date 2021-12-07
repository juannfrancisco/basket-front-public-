import { TypeTeam } from './type-team';
import { GameState } from './game-state';

export class GameTeam {

    oid:string;
    date:Date;
    type:TypeTeam;
    nameTeam:string;
    state:GameState;
    game:string;
    localScore:number;
    visitorScore:number;
}
