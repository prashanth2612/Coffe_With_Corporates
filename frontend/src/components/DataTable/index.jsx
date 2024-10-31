import {ArrowRightOutlined, EllipsisOutlined, EyeOutlined, RedoOutlined} from "@ant-design/icons"
import { PageHeader } from '@ant-design/pro-layout';
import { Button, Dropdown, Input,Table} from 'antd';



const items=[{
  label:'Show',
  key:'read',
  icon:<EyeOutlined/>
}]
function AddNewItem({name}){
  return(
    <Button>{name}</Button>
  )
}

export default function DataTable({title}) {



  <Dropdown menu={{items,
    onClick:({key})=>{
      switch(key){
        case 'read':
      }
    }



  }}>

    <EllipsisOutlined/>

  </Dropdown>
  

  return(
    <>
      <PageHeader backIcon = {<ArrowRightOutlined/>}
      title={title}
      ghost={false}

      extra={[
        <Input 
        key={`searchFilterDataTable`}
        placeholder="serach"
        allowClear
          />,
          <Button key = {'button'}icon={<RedoOutlined/>}>Refresh</Button>,
          <AddNewItem key = "add" name={"Add New Entity"}/>
      ]}

      style={{
        padding: '20px 0px',
        
      }}
      
      
      >
        
      </PageHeader>

      <Table />
    </>
  )

 
}
