"use client"
import React, { useEffect, useState } from 'react';
import { cryptoOptions, fetchCryptoPrices } from '@/lib/utils';
import { CryptoPrices } from '@/app/api/coinGecko';
import { useDepositModal } from '@/features/dashboard/hooks/use-deposit-modal';
import Image from 'next/image';


// Define your crypto options


const CryptoList: React.FC = () => {
    const [prices, setPrices] = useState<CryptoPrices>({});
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>('');

    const { open } = useDepositModal();


    useEffect(() => {
        const loadPrices = async () => {
            try {
                const symbols = cryptoOptions.map(crypto => crypto.symbol);
                const fetchedPrices = await fetchCryptoPrices(symbols);
                setPrices(fetchedPrices);
                setLoading(false);
            } catch (err) {
                setError('Failed to fetch prices');
                console.log({ err })
                setLoading(false);
            }
        };

        loadPrices();
    }, []);

    if (loading) {
        return <p className="text-center text-gray-500">Loading prices...</p>;
    }

    if (error) {
        return <p className="text-center text-red-500">{error}</p>;
    }

    return (
        <div className="w-full mx-auto p-4  text-white shadow rounded-lg cursor-pointer">
            <h2 className="text-2xl font-bold mb-4 text-center">Available Cryptocurrencies</h2>
            <div className="space-y-4">
                {cryptoOptions.map(crypto => (
                    <div
                        onClick={() => open(crypto.name)}
                        key={crypto.symbol} className="flex  items-start justify-between p-4 border rounded-lg transition">
                        <div className="flex items-center">
                            <Image src={crypto.icon} alt={`${crypto.symbol} icon`} width={32} height={32} className="w-8 h-8 mr-3" />
                            <div>
                                <h3 className="text-lg font-semibold">{crypto.symbol}</h3>
                                <p className="text-xs md:text-sm text-gray-500 truncate">{crypto.name}</p>
                            </div>
                        </div>
                        <div className="text-right">
                            <p className="text-lg font-semibold">${prices[crypto.symbol]?.toFixed(2) || 'N/A'}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CryptoList;
