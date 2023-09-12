import Soundtrack from "../../models/soundtrack.entity"

export type CreateSoundtrackRequestDto = Pick<Soundtrack,|"albumName"|"category"|"name"|"singer"|"maxFormat">
