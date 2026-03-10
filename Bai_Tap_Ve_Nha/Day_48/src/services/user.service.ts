import prisma from '../prisma';
import { CreateUserDto, UpdateUserDto } from '../types';

export class UserService {
  /** Lấy danh sách tất cả user, sắp xếp theo createdAt giảm dần */
  async getAll() {
    return prisma.user.findMany({ orderBy: { createdAt: "desc" } });
  }

  /** Tạo user mới; kiểm tra username/phone trùng, chuẩn hóa fullName/fullname */
  async createUser(data: CreateUserDto) {
    const existingByUsername = await prisma.user.findUnique({
      where: { username: data.username },
    });
    if (existingByUsername) throw new Error("Username already exists");

    const existingByPhone = await prisma.user.findUnique({
      where: { phone: data.phone },
    });
    if (existingByPhone) throw new Error("Phone already exists");

    const fullName = data.fullName ?? (data as { fullname?: string }).fullname;
    if (!fullName) throw new Error("fullName is required");
    const payload = {
      fullName,
      username: data.username,
      bio: data.bio,
      phone: data.phone,
    };
    return prisma.user.create({ data: payload });
  }

  /** Tìm user theo username (contains), sắp xếp theo createdAt giảm dần */
  async searchUsers(username: string) {
    return prisma.user.findMany({
      where: {
        username: { contains: username },
      },
      orderBy: { createdAt: 'desc' },
    });
  }

  /** Cập nhật user theo id; validate id, chỉ gửi field có giá trị vào Prisma */
  async updateUser(id: number, data: UpdateUserDto) {
    const idInt = Math.floor(Number(id));
    if (!Number.isInteger(idInt) || idInt < 1) throw new Error("Invalid id");
    const user = await prisma.user.findUnique({ where: { id: idInt } });
    if (!user) throw new Error("User not found");
    const payload: { fullName?: string; bio?: string; phone?: string } = {};
    if (data.fullName != null) payload.fullName = data.fullName;
    if (data.bio != null) payload.bio = data.bio;
    if (data.phone != null) payload.phone = data.phone;
    return prisma.user.update({
      where: { id: idInt },
      data: payload,
    });
  }

  /** Xóa user theo id; validate id và kiểm tra tồn tại trước khi xóa */
  async deleteUser(id: number) {
    const idInt = Math.floor(Number(id));
    if (!Number.isInteger(idInt) || idInt < 1) throw new Error("Invalid id");
    const user = await prisma.user.findUnique({ where: { id: idInt } });
    if (!user) throw new Error("User not found");
    await prisma.user.delete({ where: { id: idInt } });
    return { message: "User deleted successfully" };
  }
}