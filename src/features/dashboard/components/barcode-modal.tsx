"use client"

import { ResponsiveModal } from "@/components/responsive-modal";
import { useDepositModal } from "../hooks/use-deposit-modal";
import DepositPopup from "./deposit-crpto";
import { cryptoOptions } from "@/lib/utils";


export const BarcodeModal = () => {
    const { crypto, close, } = useDepositModal();

    return (
        <ResponsiveModal open={!!crypto} onOpenChange={close} >
            {
                crypto === "Bitcoin" && (
                    <DepositPopup crypto={cryptoOptions[0]} onClose={close} />
                )
            }
            {
                crypto === "Ethereum" && (
                    <DepositPopup crypto={cryptoOptions[1]} onClose={close} />
                )
            }
            {
                crypto === "Ripple" && (
                    <DepositPopup crypto={cryptoOptions[2]} onClose={close} />
                )
            }
            {
                crypto === "Tether (ERC20)" && (
                    <DepositPopup crypto={cryptoOptions[3]} onClose={close} />
                )
            }
            {
                crypto === "BNB Smart Chain" && (
                    <DepositPopup crypto={cryptoOptions[4]} onClose={close} />
                )
            }
            {
                crypto === "Solana" && (
                    <DepositPopup crypto={cryptoOptions[5]} onClose={close} />
                )
            }
            {
                crypto === "Polygon" && (
                    <DepositPopup crypto={cryptoOptions[6]} onClose={close} />
                )
            }


        </ResponsiveModal>
    )
}
