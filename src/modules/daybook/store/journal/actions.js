import journalApi from "@/api/journalApi"



// las acciones son asincronas que van al servidor (peticiones)


export const loadEntries = async ({ commit }) =>{

    const {data} = await journalApi.get('/entries.json')
    // const response = await journalApi.get('/entries.json')
    // const  {data}    = response
    const entries = []
    for (let id of Object.keys(data)) {
        entries.push({
            id,
            ...data[id]
        })
    }
    
    commit('setEntries', entries)
}

export const updateEntry = async ( {commit}, entry ) => {

    const {date,picture,text} =  entry
    const dataToSave = {date,picture,text}
    const response = await journalApi.put(`/entries/${ entry.id }.json`,dataToSave )
    console.log(response)
       
    commit('updateEntry', {...entry})

}

export const getEntryById =  async () => {

}

export const createEntry =  async () => {

}
