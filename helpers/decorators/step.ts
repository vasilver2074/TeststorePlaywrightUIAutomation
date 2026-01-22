import { test } from '@playwright/test';

export function step(name?: string) {
  return function <T extends { constructor: { name: string } }, A extends any[], R>(
    target: (this: T, ...args: A) => Promise<R>,
    context: ClassMethodDecoratorContext<T, (this: T, ...args: A) => Promise<R>>
  ) {
    return function replacementMethod(this: T, ...args: A): Promise<R> {
      const stepName = name ?? `${this.constructor.name}.${String(context.name)}`;

      return test.step(stepName, async () => await target.call(this, ...args), { box: true });
    };
  };
}
