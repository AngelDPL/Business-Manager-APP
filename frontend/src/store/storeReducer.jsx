export const initialStore = () => {
  return {
    contactos: [],
    productos: [],
    usuarios: [],
    clientes: [],

  }
}

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    
    case 'traer_contactos':
      return {
        ...store,
        contactos: action.payload
      };
      
    case 'traer_productos':
      return {
        ...store,
        productos: action.payload
      };
      
    case 'traer_usuarios':
      return {
        ...store,
        usuarios: action.payload
      };
      
    case 'traer_clientes':
      return {
        ...store,
        clientes: action.payload
      };

    case 'limpiar_store':
      return initialStore();
      
    default:
      throw Error('Unknown action.');
  }
}