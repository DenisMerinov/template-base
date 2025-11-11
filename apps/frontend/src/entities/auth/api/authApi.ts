import { LoginCredentials, RegisterData, AuthResponse } from '../model/types';

// API endpoints для авторизации
export const authApi = {
  login: async (credentials: LoginCredentials): Promise<AuthResponse> => {
    // TODO: Реальный API запрос
    // Пока возвращаем mock данные
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          user: {
            id: '1',
            email: credentials.email,
            name: 'Test User',
            role: 'client',
            createdAt: new Date().toISOString(),
          },
          token: 'mock_token_' + Date.now(),
        });
      }, 1000);
    });
  },

  register: async (data: RegisterData): Promise<AuthResponse> => {
    // TODO: Реальный API запрос
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          user: {
            id: '1',
            email: data.email,
            name: data.name,
            role: 'client',
            createdAt: new Date().toISOString(),
          },
          token: 'mock_token_' + Date.now(),
        });
      }, 1000);
    });
  },

  logout: async (): Promise<void> => {
    // TODO: Реальный API запрос
    localStorage.removeItem('auth_token');
  },

  verifyToken: async (token: string): Promise<boolean> => {
    // TODO: Реальный API запрос
    return true;
  },
};

