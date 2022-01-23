export interface ISocket { 
  emit: (arg1: unknown, arg2?: unknown, arg3?: unknown) => unknown, 
  off: () => unknown,
  on: (arg1: unknown, arg2?: unknown) => unknown,
}