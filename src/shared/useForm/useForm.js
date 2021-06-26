import { useState } from "react";
const useForm = (initialState,onSubmit = () => {}) => {
  const [data, setdata] = useState(initialState)
  const handleChange = (target) => {
    const {name,value} = target
    setdata({
      [name]:value
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(data)
    setdata(initialState)
  }
  return [data,setdata,handleChange,handleSubmit]
}
 
export default useForm;