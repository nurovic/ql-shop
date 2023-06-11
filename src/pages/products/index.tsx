import React, {useState} from 'react'
import ListItem from '../../components/product/ListIem'

const index = () => {
  const [list, useList] = useState([
    {name:"f"}, {name:"asd"},
    {name:"f"}, {name:"asd"},
    {name:"f"}, {name:"asd"},
    {name:"f"}, {name:"asd"},
    {name:"f"}, {name:"asd"},
    {name:"f"}, {name:"asd"},
    {name:"f"}, {name:"asd"},
    {name:"f"}, {name:"asd"},
    {name:"f"}, {name:"asd"},
    
  ])
  return (
    <div className="container mx-auto mt-4 ">
      <div className="flex flex-wrap">
        {list?.map((d) => {
          return <ListItem />;
        })}
      </div>
    </div>
  );
}

export default index  