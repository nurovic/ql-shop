import React, {ReactNode} from 'react'

interface LayoutProps {
  children: ReactNode;
}
const Dashboard = ({children}: LayoutProps) => {

  return (
    <div>
        <main>{children}</main>
    </div>
  )
}

export default Dashboard