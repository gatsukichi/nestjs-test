import { IsNotEmpty } from 'class-validator';

export class createBoardDto {
  _id;

  @IsNotEmpty()
  title;

  @IsNotEmpty()
  description;
}
