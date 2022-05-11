import { PipeTransform } from '@nestjs/common';
import { BoardStatus } from '../board.model';

// ts 쓸때는 Implements 기능쓰면됨
export class BoardStatusValidationPipe {
  // readonly 와 이것도 ts문법이였네 ;
  StatusOptions = [BoardStatus.PRIVATE, BoardStatus.PUBLIC];
  transform(value, metadata) {
    value = value.toUpperCase();

    if (!this.isStatusValid(value)) {
      throw new BadRequestException(`${value} isn't in the status options`);
    }
    return value;
  }

  isStatusValid(status) {
    const index = this.StatusOptions.indexOf(status);
    return index !== -1;
  }
}
