import React from 'react'
import OrderListItem from './OrderListItem'

const OrderList = () => {
  const list = [
    {title: "nwm", id: "1", count: 2},
    {title: "nwm", id: "1asdw", count: 2},
    {title: "nwm", id: "1wcas", count: 2},
    {title: "nwm", id: "1w", count: 2},
    {title: "nwm", id: "1dasd", count: 2},
    {title: "nwm", id: "1asd", count: 2},
    {title: "nwm", id: "1asasdd", count: 2},
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