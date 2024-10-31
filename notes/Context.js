/**
 * ============================
 * ! CONTEXT
 * ============================
 * ?    - APP CONTEXT
 * ?    - CRUD CONTEXT
 * ?    - ADVANCED CRUD CONTEXT
 * ?    - ERP CONTEXT
 * ?    - PROFILE CONTEXT
 * 
 * =============================
 * 
 * ! APP CONTEXT
 * 
 * CONTEXT ACTIONS
 * ---------------
 * ? OPEN_NAV_MENU , 
 * ? CLOSE_NAV_MENU ,  
 * ? COLLAPSE_NAV_MENU , 
 * ? CHANGE_APP , 
 * ? DEFAULT_APP ,
 * 
 * REDUCER REACTION
 * -----------------
 * ! MY WHOLE STATE IS STOTRED AS A SINGLE OBJECT 
 *  TODO --> INITIALSTATE_==> ISNAVMENUCLOSE: FALSE --> CURRENTAPP -->DEFAULT
 * ? OPEN_NAV_MENU --> ISNAVMENUCLOSE: false
 * ? CLOSE_NAV_MENU --> ISNAVMENUCLOSE: TRUE
 * ? COLLAPSE_NAV_MENU--> !state.ISNAVMENUCLOSE: false
 * ? CHANGE_APP -->  currentapp : action.payload
 * ? DEFAULT_APP --> currentApp: default
 * ------------------------------------------------
 * ! APPCONTEXT PROVIDER
 * 
 *  ? const AppContext = createContext()
 * 
 * 
 * TODO: APPCONTEXTPROVIDER
 * 
 * !!!!!!
 * ? const[state,dispatch] = useReducer(contextReducer,initialState);
 * ? const value = useMemo(()=>[state,dipatch],[state])
 *  return <AppContext.Provider> </AppContext.Provider>
 * 
 * TODO: USEAPPCONTEXT
 * 
 * !!!!!!!
 *  ? const context = useContext(AppContext)
 *   if context == undefined then throw an error musyt be defined
 *   const [state,dispatch] = context
 *   const appContextAction = contextActions(dispatch);
 *  !retrun {state,appcontextctions}
 * 
 */