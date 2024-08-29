import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Voucher from '../components/Voucher';
import { fetchDiscounts } from '../api/discount.api';
import { VoucherProps } from '../interfaces/Voucher.type';
import '../i18n';

function Discount() {
  const [discounts, setDiscounts] = useState<VoucherProps['voucher'][]>([]);

  useEffect(() => {
    const getDiscounts = async () => {
      try {
        const data = await fetchDiscounts();
        setDiscounts(data);
      } catch (error) {
        console.error('Error setting discounts:', error);
      }
    };

    getDiscounts();
  }, []);

  return (
    <div className="App bg-[#0f172a]">
      <Header />
      <div className="mt-40 bg-[#0f172a] pt-10">
        <div className="container mx-auto">
          {discounts.map((discount, index) => (
            <div key={index} className="mb-16">
              <Voucher
                voucher={{
                  ...discount,
                  reverse: index % 2 === 0,
                }}
              />
            </div> 
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Discount;
