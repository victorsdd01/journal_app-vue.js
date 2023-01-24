// getters es una forma rapida de leer el state y traer la info como la necesito


export const getEntryByTerms    =  ( state ) => ( term = '' ) => {

    if( term.length === 0 ){
        return state.entries
    }

    return state.entries.filter(entry => entry.text.toLowerCase().includes(term.toLocaleLowerCase()))
}
export const getEntryById    =  ( state ) => ( id = '' )=>{
   const entry = state.entries.find( item => item.id === id)
   if( !entry) return 
   return {...entry}
}

