import { Request, Response } from 'express';
import { PrismaClient, Role } from '@prisma/client';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();
const JWT_SECRET = process.env.JWT_SECRET || 'fallback-secret-do-not-use-in-prod';

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password are required' });
    }

    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const isValid = await bcrypt.compare(password, user.passwordHash);
    if (!isValid) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const token = jwt.sign(
      { userId: user.id, role: user.role },
      JWT_SECRET,
      { expiresIn: '24h' }
    );

    res.json({
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to authenticate' });
  }
};

// Optional helper for bootstrapping the first admin user
export const registerAdmin = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;
    
    // Check if an admin already exists to prevent open registration
    const adminCount = await prisma.user.count({ where: { role: Role.ADMIN } });
    if (adminCount > 0) {
      return res.status(403).json({ error: 'Admin already exists. Use the internal user management to create more users.' });
    }

    const passwordHash = await bcrypt.hash(password, 10);
    const user = await prisma.user.create({
      data: {
        name,
        email,
        passwordHash,
        role: Role.ADMIN
      }
    });

    res.status(201).json({ message: 'Admin user created', userId: user.id });
  } catch (error) {
    res.status(500).json({ error: 'Failed to create user' });
  }
};
