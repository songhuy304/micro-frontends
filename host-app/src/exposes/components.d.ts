declare module "shared_app/components" {
  export function Button(props: ButtonProps): JSX.Element;
}

declare module "shared_app/utils" {
  export function formatCurrencyVND(value: number): string;
}
