import React from 'react'
import OrderListItem from './OrderListItem'

const OrderList = () => {
  const list = [
    {title: "nwm", id: "1"},
    {title: "nwm", id: "1w"},
    {title: "nwm", id: "1d"},
    {title: "nwm", id: "1asd"},
    {title: "nwm", id: "1asasdd"},
  ] as any
  return (
    <div 
    className="w-[950px] overflow-auto h-[80%] border-[2px] rounded-[15px] px-4 pt-4"
    >
      {
        list?.map((l: any) => {
          return (
            <OrderListItem item={l} key={l.id} />
            )
        })
      }
    </div>
  )
}

export default OrderList