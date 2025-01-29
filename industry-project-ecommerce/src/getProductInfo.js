import {atom,useAtom} from 'jotai';

const getProductInfo = [];

export const productAtom = atom(getProductInfo);

export const useProductInfo = () => {
    const [productInfo, setProductInfo] = useAtom(productAtom);
    

    const getProduct = () =>{
        return productInfo;
    }

    const setInfo = (item) =>{ 
        setProductInfo(item)
    }

    return{
        productInfo,
        setInfo,
        getProduct,
    }

}
