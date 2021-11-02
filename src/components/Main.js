

const Main = ({children}) => {


    //promise:

    const promise= new Promise ((res,rej)=>{

        setTimeout(()=>{
            res(["Candelaria", "Tomas"])

        }, 2000)
     

    })

    promise.then((usuarios)=>{

        console.log(usuarios);


    })

    promise.catch(()=>{
        console.log("Im finish wrong");

    })

    return (
        <>
            <h3>Home</h3>
            {children}







        </>
    )
}

export default Main
