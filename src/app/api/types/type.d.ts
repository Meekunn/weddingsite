
interface TZodResponse<T=any> {
    success: boolean;
    data: T;
    error: { errors: Array<{ code: string; expected: string; received: string; path: Array<string>; message: string }> };
}