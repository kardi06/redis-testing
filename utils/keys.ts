//contoh keys=>  bitees:restaurants:sdfjfj 
//keys itu sperti alamat di redis

export function getKeysName(...args: string[]){
    return `bitees:${args.join(":")}`;
}

export const restaurantKeyById = (id:string) => getKeysName("restaurants",id);

export const reviewKeyById = (id:string) => getKeysName("reviews",id);
export const reviewDetailsKeyById = (id:string) => getKeysName("review_details",id);

export const cuisinesKey = getKeyName("cuisines");
export const cuisineKey = (name: string) => getKeyName("cuisine", name);