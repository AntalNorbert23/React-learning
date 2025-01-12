
import supabase from "./supabase"

export async function getCabins(){
    
const { data, error } = await supabase
    .from('cabins')
    .select('*');

    if(error){
        console.error(error);
        throw new Error('Cabins could not be loaded')
    }

    return data;
}


export async function createCabin(newCabin) {
    const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll('/','')

    const imagePath = `https://pcovmtxlyxpialltgqdq.supabase.co/storage/v1/object/public/cabins-images/${imageName}`

    const { data, error } = await supabase
        .from('cabins')
        .insert([ {...newCabin, image: imagePath} ])
        .select()

    if(error){
        console.error(error);
        throw new Error('Cabin could not be created')
    }

    const { error:storageError } = await supabase
    .storage
    .from('cabins-images')
    .upload(imageName, newCabin.image);

    if(storageError) {
        await supabase.from('cabins').delete().eq('id', data.id);
        console.error(storageError);
        throw new Error('Cabin image could not be uploaded and the cabin was not created')
    }

    return data;

}

export async function deleteCabin(id) {

    const { data, error } = await supabase
        .from('cabins')
        .delete()
        .eq('id', id)

    if(error){
        console.error(error);
        throw new Error('Cabin could not be deleted')
    }

    return data;
}