import { IsNotEmpty } from 'class-validator';

export class AuthCredentialsDto {
  @IsNotEmpty()
  username;

  @IsNotEmpty()
  password;
  // 원래는 dto에서 password가 들어올때 숫자가 들어오더라도 string으로 변환되게끔 해야함
  // fastify기준으로는 request-schema가 그역할을 해줬었지만, 현재로써는 js로 구현한 nest라서
  // 클래스 벨리데이션을 사용할수 없어서 숫자를 넣는것을 지양해서 테스트합니다.
}
