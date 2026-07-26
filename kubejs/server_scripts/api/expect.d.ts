namespace assert {
  function param(paramName: string, value: unknown, type: 'string'): value is string;
  function param(paramName: string, value: unknown, type: 'string[]'): value is string[];
  function param(paramName: string, value: unknown, type: 'string?'): value is string | null | undefined;
  function param(paramName: string, value: unknown, type: 'string[]?'): value is string[] | null | undefined;

  function param(paramName: string, value: unknown, type: 'number'): value is number;
  function param(paramName: string, value: unknown, type: 'number[]'): value is number[];
  function param(paramName: string, value: unknown, type: 'number?'): value is number | null | undefined;
  function param(paramName: string, value: unknown, type: 'number[]?'): value is number[] | null | undefined;

  function param(paramName: string, value: unknown, type: 'boolean'): value is boolean;
  function param(paramName: string, value: unknown, type: 'boolean[]'): value is boolean[];
  function param(paramName: string, value: unknown, type: 'boolean?'): value is boolean | null | undefined;
  function param(paramName: string, value: unknown, type: 'boolean[]?'): value is boolean[] | null | undefined;

  function param(paramName: string, value: unknown, type: 'object'): value is Record<string, unknown>;
  function param(paramName: string, value: unknown, type: 'object[]'): value is Record<string, unknown>[];
  function param(
    paramName: string,
    value: unknown,
    type: 'object?',
  ): value is Record<string, unknown> | null | undefined;
  function param(
    paramName: string,
    value: unknown,
    type: 'object[]?',
  ): value is Record<string, unknown>[] | null | undefined;

  // function param(paramName: string, value: unknown, type: string);
}
