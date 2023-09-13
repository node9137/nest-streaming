import Soundtrack from "../../models/soundtrack.entity"

export type GetSoundtracksResponseDto = Pick<Soundtrack,|"id"|"name"|"category">
