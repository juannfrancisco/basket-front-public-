import { TypeTeam } from './type-team';
import { TypeStat } from './type-stat';
import { Player } from './player';
export class GameStat {
    oid:string;
    oidPlayer:string;
    quarter:number;
    quarterTimeText:string;
    type:TypeStat;
    value:number;
    typeTeam:TypeTeam;
    teamOid:string;

    scoreText?:string;

    player?:Player;
    saved?:boolean;

}
