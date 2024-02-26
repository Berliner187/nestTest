export class CreateUserDto {
  email: string;
  full_name: string;
  password: string;
}

export class UpdateUserDto {
  email?: string;
  full_name?: string;
  password?: string;
  is_active?: boolean;
}
