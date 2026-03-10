import { Request, Response } from 'express';
import { UserService } from '../services/user.service';
import { CreateUserDto, UpdateUserDto } from '../types';

const userService = new UserService();

export class UserController {
  /** GET /users - Trả về danh sách tất cả user */
  async list(_req: Request, res: Response) {
    try {
      const users = await userService.getAll();
      res.json(users);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }

  /** POST /users - Tạo user mới; 409 nếu username/phone trùng */
  async create(req: Request, res: Response) {
    try {
      const body = req.body as CreateUserDto & { fullname?: string };
      const data: CreateUserDto = {
        fullName: body.fullName ?? body.fullname ?? "",
        username: body.username,
        bio: body.bio,
        phone: body.phone,
      };
      const user = await userService.createUser(data);
      res.status(201).json(user);
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : "";
      if (message === "Username already exists" || message === "Phone already exists")
        return res.status(409).json({ error: message });
      res.status(400).json({ error: message });
    }
  }

  /** GET /users/search?username=... - Tìm user theo username */
  async search(req: Request, res: Response) {
    try {
      const { username } = req.query;
      if (!username || typeof username !== 'string')
        return res.status(400).json({ error: 'Username query is required' });

      const users = await userService.searchUsers(username);
      res.json(users);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }

  /** PUT /users/:id - Cập nhật user theo id; 404 nếu không tìm thấy */
  async update(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id as string);
      const data: UpdateUserDto = req.body;

      const user = await userService.updateUser(id, data);
      res.json(user);
    } catch (error: any) {
      if (error.message === 'User not found')
        return res.status(404).json({ error: error.message });
      res.status(400).json({ error: error.message });
    }
  }

  /** DELETE /users/:id - Xóa user theo id; 404 nếu không tìm thấy */
  async delete(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id as string);
      const result = await userService.deleteUser(id);
      res.json(result);
    } catch (error: any) {
      if (error.message === 'User not found')
        return res.status(404).json({ error: error.message });
      res.status(500).json({ error: error.message });
    }
  }
}