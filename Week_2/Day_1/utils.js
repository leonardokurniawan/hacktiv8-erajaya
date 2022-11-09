const compare = (curr,next)=>{
    return next > curr ? -1 : 1;
}

export const makeAllCaps = async (arr)=>{
    console.log("Stretching the char...")
    return new Promise((resolve)=>{
       setTimeout(()=>{
           const res = arr.map((item)=>{
               return typeof item ==="string" ? item.toUpperCase() :item
           })
           resolve(res)
       },5000)
   })
}

export const sortWords = async (word) => {
    console.log("Preparing the line..")
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(word.sort(compare))
        },5000)
    });
}