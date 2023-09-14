import Soundtrack from "@models/soundtrack.entity";

export type GetSoundtrackResponseDto = Pick<Soundtrack,|"id"|"category"|"creatorId"|"singer"|"maxFormat"|"albumName"|"name">
