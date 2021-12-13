import { HiStatPlayer } from './hi-stat-player';
export class GameStatTeam {
    oid:string;
    oidTeam:string;
    pts:number;
    pts1:number;
    pts2:number;
    pts3:number;

    apts1:number;
    apts2:number;
    apts3:number;

    mpt:number;
    mpt1:number;
    mpt2:number;
    mpt3:number;
    or:number;
    ast:number;
    mas:number;
    dr:number;
    stl:number;
    blk:number;
    pf:number;
    oidPlayerHIPoints:HiStatPlayer;
    oidPlayerHIRebounds:HiStatPlayer;
    oidPlayerHIAssists:HiStatPlayer;

    constructor(){
        this.pts=0;
        this.pts1=0;
        this.pts2=0;
        this.pts3=0;
        this.mpt=0;
        this.mpt1=0;
        this.mpt2=0;
        this.mpt3=0;
        this.or=0;
        this.ast=0;
        this.mas=0;
        this.dr=0;
        this.stl=0;
        this.blk=0;
        this.pf=0;
    }

}