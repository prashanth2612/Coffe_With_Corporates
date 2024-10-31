/* eslint-disable no-unused-vars */
import { fields } from './config';
import CrudModule from '@/modules/CrudModule';
import DynamicForm from '@/forms/DynamicForm';
import DataTable from './../../components/DataTable/index';





export default function Customer(){


  const entity = 'client';
  
  const searchConfig = {
    displayLabels:['name'],
    searchFields:'name',
  };

  const deleteModalLabels = ['name'];

  const Labels={
    PANEL_TITLE:'client',
    DATATABLE_TITLE:'client_list',
    ADD_NEW_ENTITY:'add_new_client',
    ENTITY_NAME:'client',
  };

  const configPage = {
    entity,
    ...Labels,
  }

  const config = {
    ...configPage,
    fields,
    searchConfig,
    deleteModalLabels,
  }







  return (
   <>

<CrudModule 
   CreateForm={<DynamicForm/>}
  UpdateForm={<DynamicForm/>}
  config={config}
   />

   <DataTable/>
   </>
   
  )
}