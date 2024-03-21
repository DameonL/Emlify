import { EmailOptions } from './types/EmailOptions';
import { Emlifier } from './types/Emlifier';

export namespace emlify {
  export function create(options: EmailOptions): Emlifier {
    const emlifier: Partial<Emlifier> = {
      get options() { return { ...options } }
    }

    emlifier.toString = () => {
      let output = "";

      

      return output;
    }

    return emlifier as Emlifier;
  }
}
