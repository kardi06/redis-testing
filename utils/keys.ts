//contoh keys=>  bitees:restaurants:sdfjfj 
//keys itu sperti alamat di redis

export function getKeysName(...args: string[]){
    return `bitees:${args.join(":")}`;
}
