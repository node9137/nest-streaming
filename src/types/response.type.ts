export type Try<T> = T extends undefined | null
  ? { status: true; message: string }
  : { status: true; message: string; data: T };
