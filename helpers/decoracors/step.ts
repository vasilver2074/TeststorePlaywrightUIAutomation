import { test } from '@playwright/test';

// export function step(target: Function, context: ClassMethodDecoratorContext) {
//   return function replacementMethod(this: any, ...args: any) {
//     const name = `${this.constructor.name + "." +(context.name as string)}`;
//     return test.step(name, async () => {
//       return await target.call(this, ...args);
//     }, { box: true });
//   };
// } 

export function step(name?: string) {
  return function <
    T extends { constructor: { name: string } },
    A extends any[],
    R
  >(
    target: (this: T, ...args: A) => Promise<R>,
    context: ClassMethodDecoratorContext<
      T,
      (this: T, ...args: A) => Promise<R>
    >
  ) {
    return function replacementMethod(
      this: T,
      ...args: A
    ): Promise<R> {
      const stepName =
        name ??
        `${this.constructor.name}.${String(context.name)}`;

      return test.step(
        stepName,
        async () => await target.call(this, ...args),
        { box: true }
      );
    };
  };
}