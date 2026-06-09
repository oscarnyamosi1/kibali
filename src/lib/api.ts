// Django-ready API layer
import { MOCK_USERS } from './mockData';

export const MOCK_MODE = true;
export const API_BASE = "/api";  // Django API base

// Django CSRF token handling (ready for real backend)
export function getCsrfToken(): string {
  return document.cookie.split('; ')
    .find(row => row.startsWith('csrftoken='))
    ?.split('=')[1] || '';
}

export async function apiRequest(method: string, endpoint: string, data?: any) {
  if (MOCK_MODE) {
    return mockApiHandler(method, endpoint, data);
  }
  
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
  };
  
  const csrf = getCsrfToken();
  if (csrf) {
    headers['X-CSRFToken'] = csrf;
  }

  const response = await fetch(`${API_BASE}${endpoint}`, {
    method,
    headers,
    credentials: 'include', // sends session cookies
    body: data ? JSON.stringify(data) : undefined,
  });

  if (!response.ok) {
    throw new Error(`API Error: ${response.statusText}`);
  }

  return response.json();
}

async function mockApiHandler(method: string, endpoint: string, data: any) {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  if (endpoint === '/auth/login' && method === 'POST') {
    const user = MOCK_USERS.find(u => u.email === data.email && u.password === data.password);
    if (!user) throw new Error('Invalid credentials');
    
    // Simulate secure cookie by storing in sessionStorage with a flag
    const sessionData = {
      userId: user.id,
      __httpOnly: true,
      __secure: true,
      __sameSite: 'Strict'
    };
    sessionStorage.setItem('kibali-session', JSON.stringify(sessionData));
    
    const { password, ...safeUser } = user;
    return safeUser;
  }
  
  if (endpoint === '/auth/me' && method === 'GET') {
    const session = sessionStorage.getItem('kibali-session');
    if (!session) throw new Error('Not authenticated');
    
    const { userId } = JSON.parse(session);
    const user = MOCK_USERS.find(u => u.id === userId);
    if (!user) throw new Error('User not found');
    
    const { password, ...safeUser } = user;
    return safeUser;
  }
  
  if (endpoint === '/auth/logout' && method === 'POST') {
    sessionStorage.removeItem('kibali-session');
    return { success: true };
  }
  
  throw new Error('Not implemented in mock API');
}
