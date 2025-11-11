'use client';

import { useState, useEffect } from 'react';
import { AuthState } from './types';

// Простая реализация для начала
// В будущем можно использовать Context или state management (Zustand, Redux)
export function useAuth(): AuthState {
  const [state, setState] = useState<AuthState>({
    user: null,
    isAuthenticated: false,
    isLoading: true,
    error: null,
  });

  useEffect(() => {
    // Проверяем токен в localStorage
    const checkAuth = async () => {
      try {
        const token = localStorage.getItem('auth_token');
        if (token) {
          // TODO: Валидация токена через API
          // Пока просто проверяем наличие
          setState({
            user: {
              id: '1',
              email: 'user@example.com',
              name: 'Test User',
              role: 'client',
              createdAt: new Date().toISOString(),
            },
            isAuthenticated: true,
            isLoading: false,
            error: null,
          });
        } else {
          setState({
            user: null,
            isAuthenticated: false,
            isLoading: false,
            error: null,
          });
        }
      } catch (error) {
        setState({
          user: null,
          isAuthenticated: false,
          isLoading: false,
          error: 'Ошибка проверки авторизации',
        });
      }
    };

    checkAuth();
  }, []);

  return state;
}
