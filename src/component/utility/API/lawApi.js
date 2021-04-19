

export const fetchData = async (param)=>{
    try{
        const data = await fetch('http://127.0.0.1:3001/dev/api/v1/law/getVerdictList/八十五年度再審字第六一八號',{
            method:"get",
            body: param // encode 
        })
        const res = await data.json()
        return res
    }catch(e){
        console.error(e)
    }
}