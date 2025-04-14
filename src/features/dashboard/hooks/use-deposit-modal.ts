import { useQueryState, parseAsString } from "nuqs";

export const useDepositModal = () => {
  const [crypto, setCrypto] = useQueryState("crypto-type", parseAsString);

  const open = (id: string) => setCrypto(id);
  const close = () => setCrypto(null);

  return {
    crypto,
    open,
    close,
    setCrypto,
  };
};
