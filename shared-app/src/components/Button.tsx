import { Button as AntdButton } from "antd";
import type { ButtonProps as AntdButtonProps } from "antd";

export type ButtonProps = AntdButtonProps;

export function Button(props: ButtonProps) {
  return <AntdButton {...props} />;
}
