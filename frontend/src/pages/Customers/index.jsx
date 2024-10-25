import fields from "./config"
import DynamicForm from './../../forms/DynamicForm/index';
import CrudModule from './../../modules/CrudModule/index';


export default function Customer(){

  const entity = 'client';
  const searchConfig = {
    displayLabels:['name'],
    searchFields:'name',
  };

  const deleteModalLabels = ['name'];

  const labels = {

    PANEL_TITLE : 'client',
    DATATABLE_TITLE:'client_list',
    ADD_NEW_ENTITY:'add_new_client',
    ENTITY_NAME:'client',
  
  }

  const configPage = {
    entity,
    ...labels,
  };

  const config = {
    ...configPage,
    fields,
    searchConfig,
    deleteModalLabels,
  };

  return(
    <CrudModule 
    createForm={<DynamicForm/>}
    updateForm={<DynamicForm/>}
    config={config}
    />
  )
}