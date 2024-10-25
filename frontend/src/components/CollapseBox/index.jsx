import {Col, Row} from "antd"
import { IconMenu } from "../IconMenu"

const CollapseBoxButton = ()=>{
    return(
        <div>
            title
        </div>
    )
}




const TopCollapseBox=()=>{
    return(
        <div>
            <div>
                <Row>

                   <Col span={24}> TopCollapseBox
                   </Col>
                </Row>
            </div>
        </div>
    )
}

const BottomCollapaseBox=()=>{
    return(
        <div>
           <Row>
          <Col span={24}>BottomCollapaseBox </Col>
        </Row>
        </div>
    )
}




export default function CollapseBox(){
    return(
       <>
       <TopCollapseBox/>
       <CollapseBoxButton/>
       <BottomCollapaseBox/>
       <IconMenu name={"CustomerServiceOutlined"}/>
       </>
    )
}