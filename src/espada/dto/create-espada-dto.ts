import { IsInt, IsNotEmpty, IsString, Max, Min } from 'class-validator';

export class CreateEspadaDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsInt()
  @Min(0)
  @Max(10)
  @IsNotEmpty()
  rank: string;
}
