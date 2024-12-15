import React from 'react';
import Featured_card from '../../../../Components/Featured_card';

const Featured = () => {
    return (
        <div className='my-12'>
            <div><h2 className='text-2xl text-red-500 font-bold my-8 text-center'>Featured Products</h2></div>
        <div className='lg:flex col-span-3 justify-center gap-6 my-4'>
            <Featured_card></Featured_card>
            <Featured_card></Featured_card>
            <Featured_card></Featured_card>
        </div>

        </div>
    );
};

export default Featured;