import { Select } from "antd";
import { currencyOptions } from "../../utils/currencyList";
import { useState } from "react";


export default function ChooseCurrency(){

    const[selectOptions,setOptions] = useState([]);

    const optionsList=()=>{
        const list =[];

        const value = 'redirectURL';
        const label = '+ Add New Currency'
        
        list.push(...currencyOptions(selectOptions))
        list.push({value,label});

        return list;

    }

    return(
       <div>
        <div>
        <Select showSearch
        defaultValue={"Select_Currency"}
        // filterOption={(input,option)=>(optionA.label ?? '').toLowerCase().startsWith((optionB?.label??'').toLowerCase())}
        options={optionsList()}

        >
          
        </Select>
        </div>
       </div>
    )
}