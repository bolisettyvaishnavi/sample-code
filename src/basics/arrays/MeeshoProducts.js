import react, { useState, useMemo } from "react";
function MeeshoProducts() {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartArray, setCartArray] = useState([]);
  const [cartDummyArray, setCartDummyArray] = useState([]);

const[filterData,setFilterData]=useState([])

  const productsList = [
    { id: "1", name: "Product A", price: 10 },
    { id: "2", name: "Product B", price: 15 },
    { id: "3", name: "Product C", price: 20 },
  ];

  const handleAdd = (index, temp) => {
    let count=1
    let a=temp
    temp.count=count
    temp.price1=temp.price

    // let newArray = [...cartArray, temp];
    let newArray1 = [...cartDummyArray, a];

    // let output = [...new Map(newArray.map((item) => [item.id, item])).values()];
    // setCartArray(output);
     setCartDummyArray(newArray1);
    // const result = newArray1.reduce((acc, val) => {
    //   let uniqueId = val.id;
    //   let obj = acc.find((a) => a.uniqueId.id == val.id);
    //   if (!!obj) {
    //     obj.numOrders++;
    //   } else {
    //     acc.push({ numOrders: 1, uniqueId: val });
    //   }
    //   return acc;
    // }, []);
    // setCartArray(result);

   
    let abc=cartDummyArray.find((test)=>test.id==temp.id)
    if(abc){
       abc.count=abc.count+1
       abc.price1=abc.count*abc.price
       filterData.push(abc)
    setFilterData([...filterData])
    }
    else{
        temp.count=1
       temp.price1=temp.count*temp.price
        filterData.push(temp)
    setFilterData([...filterData])
    }
 let output = [...new Map(filterData.map((item) => [item.id, item])).values()];
    setCartArray(output);

    // const dum1 = output.filter((obj) =>{
    //     // if(obj.count<1){
    //     //     console.log(obj,'obj',output)

    //     //     // [obj].some(
    //     //     //     (objToRemove) =>
    //     //     //       JSON.stringify(objToRemove.id) !== JSON.stringify(obj.id)
    //     //     //   )
    //     // }
    //      if(obj.count>1){
    //         console.log(obj,'else')
    // setCartArray(obj);
    //     }
    // }
//   );

  };
  const handleCart = () => {
    setCartOpen(true);
  };
  const handleDelete = (index, temp) => {
    // let abc = [temp];
    // const dummy = cartArray.filter((obj) =>
    //   abc.some(
    //     (objToRemove) =>
    //       JSON.stringify(objToRemove.id) !== JSON.stringify(obj.id)
    //   )
    // );
    // setCartArray(dummy);


    // let newArray2 = [...cartArray];
    // const res1 = newArray2.find((test) => test.uniqueId.id == temp.id);
    // if (res1) {
    //   res1.numOrders--;
    //   if (res1.numOrders < 1) {
    //     const dummy = newArray2.filter((obj) =>
    //       [res1].some(
    //         (objToRemove) =>
    //           JSON.stringify(objToRemove.uniqueId.id) !== JSON.stringify(obj.uniqueId.id)
    //       )
    //     );
    //     setCartArray(dummy);
    //   }else{
    //     setCartArray(newArray2);
    //   }
    // }

     let newArray2 = [...cartArray];
    const res1 = newArray2.find((test) => test.id == temp.id);
    if (res1) {
      res1.count--;
      res1.price1=res1.count*res1.price
      if (res1.count < 1) {
        const dummy = newArray2.filter((obj) =>
          [res1].some(
            (objToRemove) =>
              JSON.stringify(objToRemove.id) !== JSON.stringify(obj.id)
          )
        );
        setCartArray([...dummy]);
      }else{
        setCartArray(newArray2);

      }
    }
    
  };

  return (
    <>
      <div>
        {productsList.map((temp, index) => (
          <div>
            Name-{temp.name} Price-{temp.price}{" "}
            <button onClick={() => handleAdd(index, temp)}>+</button>{" "}
            <button onClick={() => handleDelete(index, temp)}>-</button>
            <br />
          </div>
        ))}
        <div>
          <button onClick={handleCart}>Cart</button>
          {/* {cartOpen ? { cartArray } : ""} */}
          {cartArray &&
            cartArray.length > 0 &&
            cartArray.map((test, index) => (
              <div>
                {test.name}
                {test.price}
                Count-{test.count} Price - {test.price1}
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

export default MeeshoProducts;
