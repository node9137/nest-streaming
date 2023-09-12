import Soundtrack from "../../models/soundtrack.entity"

export type UpdateSoundtrackRequestDto = Partial<Pick<Soundtrack,|"albumName"|"category"|"name"|"singer"|"maxFormat">>

