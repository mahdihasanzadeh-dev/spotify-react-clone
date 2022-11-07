export function logger(message?: unknown, ...optionalParams: unknown[]): void {
  const { log } = console;

  if (optionalParams.length > 0) {
    log(message, optionalParams);
  } else {
    log(message);
  }
}
