import React from 'react'
const initState = {
  name:"",
  ownerName:"",
  address:"",
  areaCode:"",
  rent:"",
  bachelor:"",
  married:"",
  image:"",
}
export const AddHouse = () => {
  const [data,setData] = React.useState(initState);

  const handleChage = (e) =>{
    const {name,value} = e.target;
    setData({...data,[name]:value})
  }
  const handleClick = () =>{
    console.log(data)
  }
  const {name,ownerName,address,areaCode,rent,bachelor,married,image} = data
  return (
    <div className="addHouseContainer">
      <form>
        <label>name</label>
        <input type="text" className="name" value={name} name="name" onChange={handleChage} required />
        <br />
        <label>ownerName</label>
        <input value={ownerName} name="ownerName" type="text" className="ownerName" onChange={handleChage} required />
        <br />
        <label>address</label>
        <input value={address} name="address"type="text" className="address" onChange={handleChage} required />
        <br />
        <label>areaCode</label>
        <input value={areaCode} name="areaCode"type="text" className="areaCode" onChange={handleChage} required />
        <br />
        <label>rent</label>
        <input value={rent} name="rent"type="text" className="rent" onChange={handleChage} required />
        <br />
        <label>preferredTenant</label>
        <br />
        <label>bachelor</label>
        <input checked={bachelor} name="bachelor"type="checkbox" onChange={handleChage} className="bachelor" />
        <br />
        <label>married</label>
        <input checked={married} name="married"type="checkbox" onChange={handleChage} className="married" />
        <br />
        <label>image</label>
        <input value={image} name="image"type="text" className="image" onChange={handleChage} required />
        <br />
        <input onClick={handleClick} className="submitBtn" type="submit" />
      </form>
    </div>
  );
};
