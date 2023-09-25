import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { CommonBaseEntity } from "./common/common-base.entity";
import User from "./user.entity";
import Soundtrack from "./soundtrack.entity";

@Entity({name:"playlist",synchronize:true})
export default class PlaylistEntity extends CommonBaseEntity{
    /**
     * 플레이리스트 Id
     */
     @PrimaryGeneratedColumn("increment")
     id:number

    /**
     * 플레이리스트 생성자 Email
     */
    @Column({name:"creator_email"})
    creatorId:string

    /**
     * 유저 테이블 조인
     */
    @JoinColumn({name:"creator_email",referencedColumnName:"email"})
    creator : User

    /**
     * 음원 ID 목록
     */
    @Column("simple-array",{name:"soundtracks"})
    soundtrackId:number[]

    /**
     * 음원 테이블 조인
     */
    @JoinColumn({name: "soundtracks",referencedColumnName:"id"})
    soundtracks: Soundtrack[]

    // /**
    //  *  1:N 관계
    //  *  User(1) <-> PlayList(N)
    //  */ 
    // @ManyToOne(
    //     (type) => UserEntity,
    //     (creator) => creator.playlists
    // )
    // @JoinColumn({name: "creator_email", referencedColumnName:"email"})
    // creator: UserEntity;

    //  /**
    //  *  N:M 관계
    //  *  Playlist <-> Soundtrack
    //  */
    // @ManyToOne(
    //     (type) => SoundtrackEntity,
    //     (soundtrack) => soundtrack.playlists
    // )
    // @JoinColumn({name: "soundtracks", referencedColumnName:"id"})
    // // @JoinTable({
    // //     name:'playlists_soundtracks',
    // //     joinColumn: {
    // //         name: 'playlist_id',
    // //         referencedColumnName:'id'
    // //     },
    // //     inverseJoinColumn: {
    // //         name: 'soundtrack_id',
    // //         referencedColumnName: 'id'
    // //     }
    // // })
    // soundtracks: SoundtrackEntity[];
}