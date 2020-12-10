import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger/dist/decorators/api-property.decorator';
import { Length, IsOptional, Min, IsNumber, maxLength, minLength } from 'class-validator';


export class PersonDto {
    @Length(3, 10)
    @ApiProperty({
        description: 'Enter your name -> ',
        minLength: 3,
        maxLength: 10,
        default: 'Ali',
    })
    name: string;

    @IsNumber()
    @IsOptional()
    @Min(1960)
    @ApiPropertyOptional({
        description: 'Optional',
        default: 1998,
        minimum: 1960
    })
    year: number;
}
