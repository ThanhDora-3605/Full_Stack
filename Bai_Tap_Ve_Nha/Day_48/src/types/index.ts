export interface CreateUserDto {
  fullName: string;
  username: string;
  bio: string;
  phone: string;
}

export interface UpdateUserDto {
  fullName?: string;
  bio?: string;
  phone?: string;
}