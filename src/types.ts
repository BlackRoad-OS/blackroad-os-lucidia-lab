export interface LucidiaLabConfig {
  endpoint: string;
  apiKey?: string;
  options?: Record<string, unknown>;
}

export interface LucidiaLabEvent {
  type: string;
  timestamp: string;
  payload: unknown;
}

export type LucidiaLabStatus = 'idle' | 'running' | 'error' | 'stopped';
