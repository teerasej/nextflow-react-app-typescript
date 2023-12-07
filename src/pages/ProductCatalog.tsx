
import React from 'react';
// แสดง product catalog โดยใช้ Tailwind CSS
const ProductCatalog = () => {
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">Customers also purchased</h2>

                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">

                    <div key={'0'} className="group relative">
                        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                        </div>
                        <div className="mt-4 flex justify-between">
                            <div>
                                <h3 className="text-sm text-gray-700">
                                    <a>
                                        <span aria-hidden="true" className="absolute inset-0" />
                                        Name
                                    </a>
                                </h3>
                            </div>
                            <p className="text-sm font-medium text-gray-900">9.00</p>
                        </div>
                        {/* แสดงปุ่ม button "ดูรายละเอียดเพิ่มเติม" */}
                        <button className="bg-red-700 text-white w-full py-2 px-4 mt-1 rounded">
                            ดูรายละเอียดเพิ่มเติม
                        </button>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCatalog;
