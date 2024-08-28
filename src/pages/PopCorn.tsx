import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import QuantitySelector from '../components/QuantitySelector';
import Image from '../components/Image';
import '../i18n';
import { fetchProducts } from '../api/product.api';
import { Category } from '../interfaces/Product.type';

function PopCorn() {
  const [products, setProducts] = useState<Category[]>([]);

  let initData:any = localStorage.getItem('items');      
  if (initData) {
    initData = JSON.parse(initData);
  }
  else {
    initData = {}
  }
  console.log('init', initData)

  const [savedData, setSavedData] = useState<{[key: string]: any;}>(initData)

  useEffect(() => {
    const getProducts = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    getProducts();
  }, []);

  const setDataQuantity = ( nameProduct: string, newQuantity: number) => {
    setSavedData(prevSavedData => {
      prevSavedData[nameProduct] = newQuantity
      localStorage.setItem('items', JSON.stringify(prevSavedData));
      return prevSavedData;
    });
  }

  return (
    <div className="App bg-[#0f172a]">
      <Header />
      <div className="mt-40 bg-[#0f172a]">
        <div className="container mx-auto text-default-color flex flex-col items-center justify-center">
          {products.map((category, index) => (
            <div key={index} className="mb-8 w-full">
              <h2 className="text-4xl font-bold mb-4 uppercase tracking-tighter text-center">{category.categoty}</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {category.item.map((product, idx) => (
                  <div 
                    key={idx} 
                    className="flex p-4 gap-2 w-full"
                  >
                    <Image src={`${process.env.PUBLIC_URL}${product.image}`} className="w-40 rounded-lg"/>
                    <div className="flex flex-col w-full">
                        <h3 className="text-xl font-bold uppercase tracking-tighter">{product.name}</h3>
                        <p className="text-[16px] mt-2">{product.detail}</p>
                        <p className="text-[16px] font-semibold mt-2 mb-10">{product.price}</p>
                        <QuantitySelector nameProduct={product.name} setDataQuantity={setDataQuantity} savedData={savedData}/>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default PopCorn;
