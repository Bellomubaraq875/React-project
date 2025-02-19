import React from 'react'
import { BsCurrencyDollar } from 'react-icons/bs';
// import { stacked, pie} from '../components'
import { earningData, SparklineAreaData,ecomPieChartData } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';
import topview from '../data/topview.jpg'
import { Button, SparkLine } from '../components';
// import { Sparkline } from '@syncfusion/ej2-react-charts';
// import { LineGraph  } from '../components/Charts/SparkGraph'
import { Line } from 'react-chartjs-2'


const Ecommerce = () => {
  return (
    <div className='mt-12'>
      <div className='flex flex-wrap lg:flex-nowrap justify-center'>
        <div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center'
         style={{ backgroundImage: `url(${topview})`, backgroundSize: "cover" }}
        > 
            <div>
              <p className='font-bold text-gray-400'>Earning</p>
              <p className='text-xl'> $63,445.45</p>
              <div className='mt-6'>
                <Button
                color="white"
                bgColor="blue" 
                text= "Download"
                borderRadius= "10px"
                size="md"
                />
              </div>
            </div>
        </div>
        <div className='flex justify-between items-center'>
            <div className='flex m-3 mt-10 flex-wrap justify-center gap-1 items-center'>
              {earningData.map((item) => (
                <div
                 key={item.title}
                 className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56 p-4 pt-9 rounded-2xl'
                >
                  <button type='button'
                  style={{color: item.iconColor, backgroundColor: item.iconBg}}
                  className='text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-xl'
                  >
                    {item.icon}
                  </button>
                  <p className='mt-3'>
                    <span className='text-lg font-semibold'>
                      {item.amount}
                    </span>
                    <span className={`text-sm text-red-600 ml-2`}>
                      {item.percentage}
                    </span>
                  </p>
                  <p className='text-sm text-gray-400 mt-1'>{item.title}</p>
                </div>
              ))}
            </div>
          </div>
      </div>
        <div className='flex gap-10 flex-wrap justify-center'>
          <div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 rounded-2xl md:w-780'>
            <div className='flex justify-between'>
              <p className='font-semibold text-xl'>Revenue Updated</p>
              <div className='flex items-center gap-4'>
                <p className='flex items-center gap-4 text-gray-600 hover:drop-shadow-xl'>
                <span className='h-4 w-4 rounded-full bg-red-600 '></span>
                <span className=''>Expenses</span>
                </p>
                <p className='flex items-center gap-4 text-gray-600 hover:drop-shadow-xl'>
                <span className='h-4 w-4 rounded-full bg-green-600 '></span>
                <span className='text-green-400'>Budget</span>
                </p>
              </div>
            </div>
            <div className='mt-10 flex gap-10 flex-wrap justify-center'>
              <div className='border-r-1 border-color m-4 pr-10'>
                <div>
                  <p>
                    <span className='text-3xl font-semibold'>$93,438</span>
                    <span className='p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full text-white bg-green-400 ml-3 text-xs'>23%</span>
                  </p>
                  <p className='text-gray-500 mt-1 '>Budget</p>
                </div>
                <div className='mt-8'>
                  <p>
                    <span className='text-3xl font-semibold'>$45,386</span>
                    <p className='text-gray-500 mt-1'>Expense</p>
                  </p>
                </div>

                <div className="mt-5">
                  {/* <LineGraph/> */}
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Ecommerce