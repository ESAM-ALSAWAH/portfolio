interface Props {
  message: string;
}

const ErrorMessage = ({ message }: Props) => {
  return <p className="text-red-500 mt-1 text-sm px-1 font-light">{message}</p>;
};

export { ErrorMessage };
