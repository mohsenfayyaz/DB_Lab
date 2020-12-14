import { ApiProperty } from "@nestjs/swagger";

export default class CreateSubTaskDto {
    @ApiProperty({ type: String })
    readonly text: string;

    @ApiProperty({ type: Number })
    readonly taskID: number;
}
