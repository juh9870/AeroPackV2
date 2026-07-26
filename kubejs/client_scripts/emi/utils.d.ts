type ValueOrArray<T> = T | Array<ValueOrArray<T>>;

declare module '@package/net/minecraft/network/chat' {
  import type { $KubeColor_ } from '@package/dev/latvian/mods/kubejs/color';

  export type $Component_ =
    | string
    | {
        text?: string;
        translate?: SpecialTypes.TranslationKey | string;
        with?: any[];
        color?: $KubeColor_;
        bold?: boolean;
        italic?: boolean;
        underlined?: boolean;
        strikethrough?: boolean;
        obfuscated?: boolean;
        insertion?: string;
        font?: string;
        click?: $ClickEvent_;
        hover?: $Component_;
        extra?: $Component_[];
      }
    | $Component_[];

  export type $MutableComponent_ =
    | string
    | {
        text?: string;
        translate?: SpecialTypes.TranslationKey | string;
        with?: any[];
        color?: $KubeColor_;
        bold?: boolean;
        italic?: boolean;
        underlined?: boolean;
        strikethrough?: boolean;
        obfuscated?: boolean;
        insertion?: string;
        font?: string;
        click?: $ClickEvent_;
        hover?: $MutableComponent_;
        extra?: $MutableComponent_[];
      }
    | $MutableComponent_[];
}

declare module '@package/dev/latvian/mods/kubejs/script' {
  declare interface $ConsoleJS {
    log(...message: unknown[]): void;
  }
}

declare interface String {
  charAt(pos: number): number;
}
