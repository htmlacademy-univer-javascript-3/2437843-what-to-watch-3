export type ValidationError = {
  errorType: string;
  message: string;
  details: Array<{
    property: string;
    value: string;
    messages: [string];
  }>;
}
