//contoh keys=>  bitees:restaurants:sdfjfj 
//keys itu sperti alamat di redis

export function getKeysName(...args: string[]){
    return `bitees:${args.join(":")}`;
}

export const restaurantKeyById = (id:string) => getKeysName("restaurants",id);
